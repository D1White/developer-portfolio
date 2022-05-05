import React, { FC, memo, useEffect } from 'react';

import styles from './MobileMenu.module.scss';
import { links } from '@constants/links';
import { contacts } from '@constants/contacts';

interface Props {
  visible: boolean;
}

const MobileMenu: FC<Props> = ({ visible }) => {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [visible]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {links.map((link) => (
          <a href={link.href} key={link.name} className={styles.link}>
            {link.name}
          </a>
        ))}
      </nav>

      <div className={styles.buttons}>
        {contacts.links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            className={styles.btn}
            aria-label={link.name}
          >
            {link.icon()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(MobileMenu);
