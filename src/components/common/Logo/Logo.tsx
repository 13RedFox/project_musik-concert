import Link from 'next/link';
import { FC } from 'react';
import { Routes } from '../../../constants';
import { Icon } from '../Icon';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <Link href={Routes.HOME}>
      <a className={styles.logo}>
        <Icon name="logo" className={styles.logo__img} />
      </a>
    </Link>
  );
};
export default Logo;
