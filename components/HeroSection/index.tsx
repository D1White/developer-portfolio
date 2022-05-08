import React, { useRef } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import styles from './HeroSection.module.scss';
import { AnimOpacity, AnimScale } from '@components/animations';
import useAnimVisible from '@hooks/useAnimVisible';
import Avatar from '@img/avatar.png';
import SVGArrow from '@svg/arrow-bottom.svg';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useAnimVisible(
    titleRef,
    {
      opacity: 0,
      letterSpacing: '0.5em',
    },
    {
      opacity: 1,
      letterSpacing: '-0.07em',
      delay: 1.3,
      duration: 0.8,
      ease: 'power1.inOut',
    },
  );

  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <div className={styles.avatarWrapper}>
          <AnimScale opacity duration={1} delay={1} power={2}>
            <div className={styles.avatar}>
              <Image src={Avatar} alt="avatar" layout="fill" />
            </div>
          </AnimScale>
        </div>
        <h1 className={styles.title} ref={titleRef}>
          Hi, I'm Danylo Bilyi 👋
        </h1>
        <AnimOpacity delay={2} duration={1} direction="down">
          <h3 className={styles.subtitle}>
            Front-end developer passionate about creating beautiful user-friendly apps
          </h3>
        </AnimOpacity>
      </div>

      <AnimOpacity delay={2.8}>
        <div className={styles.circle}>
          <SVGArrow className={styles.arrow} />
        </div>
      </AnimOpacity>
    </section>
  );
};

export default HeroSection;
