import React, { FC, Fragment } from 'react';

import styles from './Project.module.scss';
import Button from '@components/ui/Button';
import { useIsTablet } from '@hooks/useBreakpoint';
import SVGArrow from '@svg/arrow-link.svg';
import GitIcon from '@svg/github.svg';

interface Props {
  title: string;
  tools: string[];
  img: string;
  link: string;
  gitLink: string;
}

const Project: FC<Props> = ({ title, tools, img, link, gitLink }) => {
  const isMobile = useIsTablet();

  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>

        <ul className={styles.list}>
          {tools.map((item, idx) => {
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

        <div className={styles.links}>
          <Button link={link} external className={styles.btn}>
            <span>visit</span>
            <SVGArrow />
          </Button>
          <Button link={gitLink} external className={styles.btn}>
            <span>source</span>
            <GitIcon />
          </Button>
        </div>
      </div>
      <img src={img} alt={title} className={styles.img} />
    </div>
  );
};

export default Project;
