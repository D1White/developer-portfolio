import React from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';
import ThemeSwitcher from './components/ThemeSwitcher';
import useSrolled from '@hooks/useSrolled';
import SVGLogo from '@svg/white-logo.svg';

const links = [
  {
    name: 'Main',
    href: '/',
  },
  {
    name: 'Skills',
    href: '/#skills',
  },
  {
    name: 'Works',
    href: '/#works',
  },
  {
    name: 'Contacts',
    href: '/#contacts',
  },
];

const Header = () => {
  const scrolled = useSrolled();

  return (
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
      </div>
    </header>
  );
};

export default Header;
