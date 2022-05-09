import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Projects.module.scss';

import SectionTitle from '@components/ui/SectionTitle';
import Project from './components/Project';
import EmptyProject from './components/Project/EmptyProject';
import { IProject } from 'types/contentful';

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <section className={styles.wrapper} id="projects">
      <div className={cn('container', styles.container)}>
        <SectionTitle>Projects</SectionTitle>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Project data={project} key={project.sys.id} />
          ))}
          <EmptyProject />
        </div>
      </div>
    </section>
  );
};

export default Projects;
