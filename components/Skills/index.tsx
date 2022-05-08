import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Skills.module.scss';

import SkillsGrid from './components/SkillsGrid';
import SkillsList from './components/SkillsList';
import SectionTitle from '@components/ui/SectionTitle';
import { AnimOpacity } from '@components/animations';

import { skills } from '@constants/skills';

const animDuration = 0.8;

const Skills = () => {
  const [move, setMove] = useState(false);

  const onMouseEnter = () => {
    setMove(true);
  };
  const onMouseLeave = () => {
    setMove(false);
  };

  return (
    <section
      className={styles.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id="skills"
    >
      <div className={cn('container', styles.container)}>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.skills}>
          {/* <AnimOpacity duration={animDuration} delay={0.4}> */}
          <SkillsList title={skills.frontend.name} skills={skills.frontend.skills} />
          {/* </AnimOpacity> */}

          {/* <AnimOpacity duration={animDuration} delay={0.8}> */}
          <SkillsList title={skills.backend.name} skills={skills.backend.skills} />
          {/* </AnimOpacity> */}

          {/* <AnimOpacity duration={animDuration} delay={1.2}> */}
          <SkillsList title={skills.other.name} skills={skills.other.skills} />
          {/* </AnimOpacity> */}
        </div>
      </div>
      <SkillsGrid move={move} />
    </section>
  );
};

export default Skills;
