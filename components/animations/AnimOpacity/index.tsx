import { FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './AnimOpacity.module.scss';

gsap.registerPlugin(scrollTrigger);

interface Props {
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  className?: string;
  children: JSX.Element;
}

export const AnimOpacity: FC<Props> = ({
  children,
  direction,
  duration = 1,
  delay = 0,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animDirection = direction ? (direction === 'down' ? 100 : -100) : 0;
    const childrenNodes = ref?.current ? ref.current.children : [];

    const tl = gsap.timeline({
      scrollTrigger: ref.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      childrenNodes,
      {
        yPercent: animDirection,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: duration,
        ease: Power1.easeOut,
        delay: delay,
      },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={classNames(styles.wrapper, className)} ref={ref}>
      {children}
    </div>
  );
};
