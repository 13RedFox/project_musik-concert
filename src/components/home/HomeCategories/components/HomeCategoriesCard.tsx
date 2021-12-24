import classNames from 'classnames';
import { FC } from 'react';
import { Icon } from '../../../common';
import styles from './HomeCategoriesCard.module.scss';

export interface HomeCategoriesCardProps {
  categories: any;
}

export const HomeCategoriesCard: FC<HomeCategoriesCardProps> = ({ categories }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: categories.bg }}>
      <Icon
        name={categories.icon}
        className={classNames(styles.card__icon, styles[categories.fill])}
      />
      <h3 className={styles.card__title}>{categories.title}</h3>
      <p className={styles.card__description}>{categories.description}</p>
    </div>
  );
};

export default HomeCategoriesCard;
