import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './Project.module.scss';
import image from '@img/empty-project.png';

gsap.registerPlugin(scrollTrigger);

const EmptyProject = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: Power1.easeOut },
      scrollTrigger: wrapperRef.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0,
    )
      .fromTo(titleRef.current, { yPercent: -100 }, { yPercent: 0, duration: 0.8 }, 0)
      .fromTo(textRef.current, { opacity: 0 }, { opacity: 1 }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.project} ref={wrapperRef}>
      <div className={cn(styles.content, styles.top)}>
        <div className={styles.titleWrapper}>
          <h5 className={styles.title} ref={titleRef}>
            Soon
          </h5>
        </div>

        <p className={styles.text} ref={textRef}>
          I am learn something new every day. A new and interesting project will appear here soon.
        </p>
      </div>

      <div className={styles.imgWrapper}>
        <img src={image.src} alt="Coming soon" className={styles.img} ref={imgRef} />
      </div>
    </div>
  );
};

export default EmptyProject;
