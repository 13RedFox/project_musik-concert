import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Routes } from '../../../constants';
import { Icon } from '../Icon';
import styles from './Logo.module.scss';

export interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href={Routes.HOME}>
      <a className={classNames(styles.logo, className)}>
        <Icon name="logo" className={styles.logo__img} />
      </a>
    </Link>
  );
};
export default Logo;
