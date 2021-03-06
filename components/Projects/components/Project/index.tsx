import React, { FC, Fragment, useRef, useEffect } from 'react';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './Project.module.scss';
import Button from '@components/ui/Button';
import { useIsTablet } from '@hooks/useBreakpoint';
import SVGArrow from '@svg/arrow-link.svg';
import GitIcon from '@svg/github.svg';
import { IProject } from 'types/contentful';

gsap.registerPlugin(scrollTrigger);

interface Props {
  data: IProject;
}

const Project: FC<Props> = ({ data }) => {
  const isMobile = useIsTablet();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const toolsRef = useRef<HTMLUListElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tools = toolsRef.current?.children;

    const tl = gsap.timeline({
      defaults: { ease: Power1.easeOut },
      scrollTrigger: wrapperRef.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0.2,
    ).fromTo(titleRef.current, { yPercent: -100 }, { yPercent: 0, duration: 0.8 }, 0.2);

    if (tools) {
      tl.fromTo(tools, { opacity: 0 }, { opacity: 1, stagger: 0.15 }, '-=0.4');
    }

    tl.fromTo(
      btnsRef.current,
      { opacity: 0 },
      { opacity: 1, stagger: 0.2, duration: 0.8 },
      '-=0.2',
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.project} ref={wrapperRef}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h5 className={styles.title} ref={titleRef}>
            {data.fields.name}
          </h5>
        </div>

        <ul className={styles.list} ref={toolsRef}>
          {data.fields.tools.map((item, idx) => {
            return isMobile ? (
              <Fragment key={item}>
                {idx !== 0 && <div className={styles.square} />}
                <li className={styles.tool} key={item}>
                  {item}
                </li>
              </Fragment>
            ) : (
              <li className={styles.tool} key={item}>
                {item}
              </li>
            );
          })}
        </ul>

        <div className={styles.links} ref={btnsRef}>
          {data.fields?.link && (
            <Button link={data.fields.link} external className={styles.btn}>
              <span>visit</span>
              <SVGArrow />
            </Button>
          )}
          <Button link={data.fields.gitLink} external className={styles.btn}>
            <span>source</span>
            <GitIcon />
          </Button>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <picture>
          <source srcSet={`${data.fields.image.fields.file.url}?fm=webp`} type="image/webp" />
          <img
            src={data.fields.image.fields.file.url}
            alt={data.fields.name}
            className={styles.img}
            ref={imgRef}
          />
        </picture>
      </div>
    </div>
  );
};

export default Project;
