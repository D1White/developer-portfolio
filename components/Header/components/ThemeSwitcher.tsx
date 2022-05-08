import { useState, useEffect, memo, FC, useMemo } from 'react';
import cn from 'classnames';

import styles from '../Header.module.scss';

import { useIsTablet } from '@hooks/useBreakpoint';
import SVGLightTheme from '@svg/light-theme.svg';
import SVGDarkTheme from '@svg/dark-theme.svg';

interface Props {
  visible?: boolean;
}

const ThemeSwitcher: FC<Props> = ({ visible }) => {
  const isMobile = useIsTablet();
  const [light, setLight] = useState(true);

  const componentVisible = useMemo(() => {
    if (typeof visible === 'undefined') return true;

    if (isMobile) {
      return visible;
    }

    return false;
  }, [isMobile, visible]);

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');

    if (storageTheme) {
      if (storageTheme === 'light') {
        setLight(true);
      } else if (storageTheme === 'dark') {
        setLight(false);
      }
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setLight(false);
      }
    }
  }, []);

  useEffect(() => {
    if (light) {
      document.body.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }, [light]);

  const switcher = () => {
    setLight((val) => !val);
  };

  return (
    <button
      className={cn(styles.themeSwitcher, { [styles.hide]: !componentVisible })}
      onClick={switcher}
      aria-label="theme switcher"
    >
      {light ? <SVGDarkTheme /> : <SVGLightTheme />}
    </button>
  );
};

export default memo(ThemeSwitcher);
