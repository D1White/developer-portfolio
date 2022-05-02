import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Skills.module.scss';

import SkillsGrid from './components/SkillsGrid';
import SkillsList from './components/SkillsList';
import SectionTitle from '@components/SectionTitle';

import { skills } from '@constants/skills';

const Skills = () => {
  const [move, setMove] = useState(false);

  const onMouseEnter = () => {
    setMove(true);
  };
  const onMouseLeave = () => {
    setMove(false);
  };

  return (
    <section className={styles.wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={cn('container', styles.container)}>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.skills}>
          <SkillsList title={skills.frontend.name} skills={skills.frontend.skills} />
          <SkillsList title={skills.backend.name} skills={skills.backend.skills} />
          <SkillsList title={skills.other.name} skills={skills.other.skills} />
        </div>
      </div>
      <SkillsGrid move={move} />
    </section>
  );
};

export default Skills;
