import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import styles from './HeroSection.module.scss';

import Avatar from '@img/avatar.png';
import SVGArrow from '@svg/arrow-bottom.svg';

const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <div className={styles.avatar}>
          <Image src={Avatar} alt="avatar" layout="fill" />
        </div>
        <h1 className={styles.title}>Hi, I'm Danylo Bilyi 👋</h1>
        <h2 className={styles.subtitle}>
          Front-end developer passionate about creating beautiful user-friendly apps
        </h2>
      </div>
      <div className={styles.circle}>
        <SVGArrow className={styles.arrow} />
      </div>
    </section>
  );
};

export default HeroSection;
