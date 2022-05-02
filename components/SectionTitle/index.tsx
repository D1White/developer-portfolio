import { FC, memo } from 'react';
import cn from 'classnames';

import styles from './SectionTitle.module.scss';

interface Props {
  className?: string;
  children: string;
}

const SectionTitle: FC<Props> = ({ className, children }) => {
  return <h2 className={cn(styles.title, { className: !!className })}>{children}</h2>;
};

export default memo(SectionTitle);
