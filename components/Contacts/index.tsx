import React from 'react';
import cn from 'classnames';

import SectionTitle from '@components/SectionTitle';
import styles from './Contacts.module.scss';
import { contacts } from '@constants/contacts';

const Contacts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <SectionTitle>Contacts</SectionTitle>

        <p className={styles.text}>You can find me here:</p>
        <a href="mailto:danilo.bilyi@gmail.com" className={cn(styles.text, styles.link)}>
          danilo.bilyi@gmail.com
        </a>
        <a
          href="https://drive.google.com/file/d/1H_BzelXrWhHYTq7NHNPPryMIBPFeT9xA/view?usp=sharing"
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