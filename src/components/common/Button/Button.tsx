import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={classNames(styles.button, className)}>{children}</button>;
};

export default Button;
