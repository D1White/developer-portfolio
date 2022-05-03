import React from 'react';

import styles from './Footer.module.scss';

import { github } from '@constants/contacts';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Copyright © {year}{' '}
        <a href={github.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Danylo Bilyi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
