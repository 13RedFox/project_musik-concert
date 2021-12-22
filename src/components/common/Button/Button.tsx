import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  leftIcon?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, className, leftIcon = false }) => {
  return (
    <button className={classNames(styles.button, className)}>
      {leftIcon && <Icon name="add" className={styles.add} />}
      {children}
    </button>
  );
};

export default Button;
