import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import { gsap, Power1 } from 'gsap';
import scrollTrigger from 'gsap/dist/ScrollTrigger';

import SectionTitle from '@components/ui/SectionTitle';
import styles from './Contacts.module.scss';
import { contacts } from '@constants/contacts';

gsap.registerPlugin(scrollTrigger);

const Contacts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <SectionTitle>Contacts</SectionTitle>

        <p className={styles.text}>You can find me here:</p>
        <a href={`mailto:${contacts.email}`} className={cn(styles.text, styles.link)}>
          {contacts.email}
        </a>
        <a
          href={contacts.cv}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(styles.text, styles.link)}
        >
          CV
        </a>
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
    </section>
  );
};

export default Contacts;
