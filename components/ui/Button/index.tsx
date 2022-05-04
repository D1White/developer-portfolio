import React, { FC, memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './Button.module.scss';
import { RequireOnlyOne } from 'types';

interface Props {
  external?: boolean;
  onClick?: () => void;
  link?: string;
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

type ButtonProps = RequireOnlyOne<Props, 'onClick' | 'link'>;

const Button: FC<ButtonProps> = ({ external, onClick, link, children, className }) => {
  const content = (
    <>
      <div className={cn(styles.content, className)}>{children}</div>
      <div className={styles.bg}>
        <div className={styles.round}></div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button className={styles.wrapper} onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <>
      {external ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.wrapper}>
          {content}
        </a>
      ) : (
        <Link href={link}>
          <a className={styles.wrapper}>{content}</a>
        </Link>
      )}
    </>
  );
};

export default memo(Button);
