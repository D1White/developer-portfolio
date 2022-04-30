import { useState, useEffect, memo } from 'react';

import styles from '../Header.module.scss';

import SVGLightTheme from '@svg/light-theme.svg';
import SVGDarkTheme from '@svg/dark-theme.svg';

const ThemeSwitcher = () => {
  const [light, setLight] = useState(true);

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
    <button className={styles.themeSwitcher} onClick={switcher} aria-label="theme switcher">
      {light ? <SVGDarkTheme /> : <SVGLightTheme />}
    </button>
  );
};

export default memo(ThemeSwitcher);
