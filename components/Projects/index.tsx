import React from 'react';
import cn from 'classnames';

import styles from './Projects.module.scss';

import SectionTitle from '@components/ui/SectionTitle';
import Project from './components/Project';
import EmptyProject from './components/Project/EmptyProject';

import { works } from '@constants/works';

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <SectionTitle>Projects</SectionTitle>
        <div className={styles.projects}>
          {works.map((project) => (
            <Project
              title={project.title}
              tools={project.tools}
              img={project.img}
              link={project.link}
              gitLink={project.gitLink}
              key={project.title}
            />
          ))}
          <EmptyProject />
        </div>
      </div>
    </section>
  );
};

export default Projects;
