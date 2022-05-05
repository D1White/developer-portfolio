import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';
import ThemeSwitcher from './components/ThemeSwitcher';
import MobileMenu from '@components/MobileMenu';
import useSrolled from '@hooks/useSrolled';
import { useIsTablet } from '@hooks/useBreakpoint';
import SVGLogo from '@svg/white-logo.svg';

import { links } from '@constants/links';

const Header = () => {
  const scrolled = useSrolled();
  const isMobile = useIsTablet();
  const [menuVisible, setMenuVisible] = useState(false);

  const menuToggle = () => {
    setMenuVisible((val) => !val);
  };

  return (
    <>
      <header className={cn(styles.header, { [styles.scroll]: scrolled })}>
        <div className={cn('container', styles.container)}>
          <SVGLogo className={styles.logo} />

          <div className={styles.content}>
            <nav className={styles.nav}>
              {links.map((link) => (
                <a href={link.href} key={link.name} className={styles.link}>
                  {link.name}
                </a>
              ))}
            </nav>

            <ThemeSwitcher />
          </div>

          {isMobile && menuVisible && <ThemeSwitcher />}

          <button
            className={cn(styles.burgerMenu, { [styles.close]: menuVisible })}
            onClick={menuToggle}
            aria-label="burger menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {isMobile && <MobileMenu visible={menuVisible} />}
    </>
  );
};

export default Header;
