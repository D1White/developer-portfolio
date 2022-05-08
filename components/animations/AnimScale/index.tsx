import { useRef, useEffect, FC } from 'react';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './AnimScale.module.scss';

gsap.registerPlugin(scrollTrigger);

interface AnimScaleProps {
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  power?: 1 | 2 | 3;
  opacity?: boolean;
  children: JSX.Element;
}

export const AnimScale: FC<AnimScaleProps> = ({
  children,
  direction = 'down',
  duration,
  delay = 0,
  power = 1,
  opacity,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: ref.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      ref.current,
      {
        opacity: opacity ? 0 : 1,
        scale: direction === 'down' ? 1 + 0.2 * power : 1 - 0.2 * power,
      },
      {
        scale: 1,
        opacity: 1,
        duration: duration || 1,
        ease: Power1.easeOut,
        delay: delay,
      },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      {children}
    </div>
  );
};
