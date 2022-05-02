import React, { FC, memo } from 'react';

import styles from './SkillsList.module.scss';

interface Props {
  title: string;
  skills: string[];
}

const SkillsList: FC<Props> = ({ title, skills }) => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}:</h5>

      <ul className={styles.list}>
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
