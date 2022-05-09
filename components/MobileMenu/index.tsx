import React, { FC, memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

import styles from './MobileMenu.module.scss';
import { links } from '@constants/links';
import getContactIcon from '@utils/getContactIcon';
import { IContacts } from 'types/contentful';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<boolean>;
  contacts: IContacts;
}

const MobileMenu: FC<Props> = ({ visible, setVisible, contacts }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline({ defaults: { ease: 'power1.inOut' } }).reverse());

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a');
    const buttons = btnsRef.current?.children;

    tl.current.fromTo(
      menuRef.current,
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
      },
    );

    if (links) {
      tl.current.fromTo(
        links,
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          stagger: 0.2,
        },
        '>',
      );
    }

    if (buttons) {
      tl.current.fromTo(
        buttons,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
        '-=0.3',
      );
    }
  }, []);

  useEffect(() => {
    tl.current.timeScale(visible ? 1 : 2).reversed(!visible);
    if (visible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [visible]);

  const linkClick = () => {
    setVisible(false);
  };

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <nav className={styles.nav} ref={navRef}>
        {links.map((link) => (
          <div className={styles.linkWrapper} key={link.name} onClick={linkClick}>
            <Link href={link.href}>
              <a className={styles.link}>{link.name}</a>
            </Link>
          </div>
        ))}
      </nav>

      <div className={styles.buttons} ref={btnsRef}>
        {contacts.fields?.links?.map((link) => (
          <a
            href={link.fields.link}
            target="_blank"
            rel="noopener noreferrer"
            key={link.sys.id}
            className={styles.btn}
            aria-label={link.fields.name}
          >
            {getContactIcon(link.fields.name)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(MobileMenu);
