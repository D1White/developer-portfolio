import { FC, memo, useRef, useEffect } from 'react';
import cn from 'classnames';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './SectionTitle.module.scss';

gsap.registerPlugin(scrollTrigger);

interface Props {
  className?: string;
  children: string;
}

const SectionTitle: FC<Props> = ({ className, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: Power1.easeOut },
      scrollTrigger: wrapperRef.current,
      toggleActions: 'play none none none',
    });

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
      },
    ).fromTo(lineRef.current, { width: 0 }, { width: '100%' }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <h2 className={cn(styles.title, { className: !!className })} ref={textRef}>
        {children}
      </h2>
      <hr className={styles.line} ref={lineRef} />
    </div>
  );
};

export default memo(SectionTitle);
