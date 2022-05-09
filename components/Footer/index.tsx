import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Copyright © {year} <span className={styles.link}>Danylo Bilyi</span>
      </p>
    </footer>
  );
};

export default Footer;
