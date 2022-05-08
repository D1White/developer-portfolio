import React, { FC, memo, useRef } from 'react';

import styles from './SkillsList.module.scss';
import { AnimOpacity } from '@components/animations';
import useAnimVisible from '@hooks/useAnimVisible';

interface Props {
  title: string;
  skills: string[];
}

const SkillsList: FC<Props> = ({ title, skills }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useAnimVisible(
    listRef,
    { opacity: 0 },
    { opacity: 1, delay: 0.8, duration: 0.8, stagger: 0.2 },
    { children: true },
  );

  return (
    <div className={styles.wrapper}>
      <AnimOpacity duration={0.8} delay={0.2} direction="up">
        <h5 className={styles.title}>{title}:</h5>
      </AnimOpacity>

      <ul className={styles.list} ref={listRef}>
        {skills.map((skill, idx) => (
          <li className={styles.skill} key={`${skill}_${idx}`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SkillsList);
