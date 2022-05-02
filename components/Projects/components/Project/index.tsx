import React, { FC } from 'react';

import styles from './Project.module.scss';

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
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>

        <ul className={styles.list}>
          {tools.map((item) => (
            <li className={styles.tool} key={item}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span>visit</span>
            <SVGArrow />
          </a>
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span>source</span>
            <GitIcon />
          </a>
        </div>
      </div>
      <img src={img} alt={title} className={styles.img} />
    </div>
  );
};

export default Project;
