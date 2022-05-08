import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { gsap, Power1 } from 'gsap';

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

  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const themeSwitcherRef = useRef<HTMLDivElement>(null);

  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: Power1.easeOut } });
    const links = navRef.current?.children;

    tl.fromTo(logoRef.current, { xPercent: -300 }, { xPercent: 0, duration: 0.8 });

    if (!isMobile && links) {
      tl.fromTo(
        links,
        {
          y: -60,
        },
        {
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        '-=0.4',
      ).fromTo(themeSwitcherRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3');
    }

    return () => {
      tl.kill();
    };
  }, []);

  const menuToggle = () => {
    setMenuVisible((val) => !val);
  };

  return (
    <>
      <header className={cn(styles.header, { [styles.scroll]: scrolled })}>
        <div className={cn('container', styles.container)}>
          <div ref={logoRef}>
            <SVGLogo className={styles.logo} />
          </div>

          {!isMobile && (
            <div className={styles.content}>
              <nav className={styles.nav} ref={navRef}>
                {links.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <a className={styles.link}>{link.name}</a>
                  </Link>
                ))}
              </nav>

              <div ref={themeSwitcherRef}>
                <ThemeSwitcher />
              </div>
            </div>
          )}

          {isMobile && (
            <>
              <ThemeSwitcher visible={menuVisible} />

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
            </>
          )}
        </div>
      </header>
      {isMobile && <MobileMenu visible={menuVisible} setVisible={setMenuVisible} />}
    </>
  );
};

export default Header;
