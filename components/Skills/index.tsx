import React, { useState, FC } from 'react';
import cn from 'classnames';

import styles from './Skills.module.scss';

import SkillsGrid from './components/SkillsGrid';
import SkillsList from './components/SkillsList';
import SectionTitle from '@components/ui/SectionTitle';
import { ISkills } from 'types/contentful';

import { skills } from '@constants/skills';

interface Props {
  skills: ISkills[];
}

const Skills: FC<Props> = ({ skills }) => {
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
          {skills.map((skill) => (
            <SkillsList title={skill.fields.title} skills={skill.fields.skill} key={skill.sys.id} />
          ))}
        </div>
      </div>
      <SkillsGrid move={move} />
    </section>
  );
};

export default Skills;
