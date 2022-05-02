import React from 'react';
import cn from 'classnames';

import styles from './Project.module.scss';
import image from '@img/empty-project.png';

const EmptyProject = () => {
  return (
    <div className={styles.project}>
      <div className={cn(styles.content, styles.top)}>
        <h5 className={styles.title}>Soon</h5>

        <p className={styles.text}>
          I am learn something new every day. A new and interesting project will appear here soon.
        </p>
      </div>
      <img src={image.src} alt="Coming soon" className={styles.img} />
    </div>
  );
};

export default EmptyProject;
