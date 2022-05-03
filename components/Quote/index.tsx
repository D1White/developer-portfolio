import React from 'react';
import cn from 'classnames';

import styles from './Quote.module.scss';
import SVGLogo from '@svg/white-logo.svg';

const Quote = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <SVGLogo className={styles.logo} />

        <div className={styles.quote}>
          <p className={styles.text}>
            “Any fool can write code that a computer can understand. Good programmers write code
            that humans can understand.”
          </p>
          <span className={cn(styles.text, styles.author)}>Martin Fowler</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
