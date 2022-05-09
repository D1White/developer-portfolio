import { useRef, useEffect, useState, FC, useCallback } from 'react';
import cn from 'classnames';

import styles from './SkillsGrid.module.scss';

import { skillsIcon } from '@constants/skillsIcon';

interface Props {
  move: boolean;
}

const SkillsGrid: FC<Props> = ({ move }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.offsetX, y: e.offsetY });
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      if (move) {
        document.addEventListener('mousemove', mouseMove);
      } else {
        document.removeEventListener('mousemove', mouseMove);
      }
    }
  }, [move]);

  useEffect(() => {
    const items = gridRef.current?.children;

    if (items && window) {
      Array.from(items).forEach((item) => {
        const speed = item.getAttribute('data-speed') || 0;
        const x = (window.innerWidth - mousePos.x * +speed) / 100;
        const y = (window.innerHeight - mousePos.y * +speed) / 100;
        const rot = (window.innerWidth - mousePos.x * +speed) / 300;
        // @ts-ignore
        item.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`;
      });
    }
  }, [mousePos]);

  return (
    <div className={styles.grid} ref={gridRef}>
      {skillsIcon.map((item, idx) => (
        <div
          className={cn(styles.item)}
          data-speed={item.speed}
          data-index={idx + 1}
          key={`${idx}_${item.speed}`}
        >
          <div className={cn(styles.img)} style={{ backgroundImage: `url(${item.icon})` }} />
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
