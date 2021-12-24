import { FC } from 'react';
import { Container } from '../../common';
import { HomeCategoriesCard } from './components';
import styles from './HomeCategories.module.scss';

const category = [
  {
    icon: 'dj-mixer',
    title: 'pop',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    bg: '#fbf3e8',
    fill: 'orange',
  },
  {
    icon: 'bagpipes',
    title: 'folk',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    bg: '#ffeeee',
    fill: 'red',
  },
  {
    icon: 'saxophone',
    title: 'instrumental',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    bg: '#c9f5e9',
    fill: 'green',
  },
  {
    icon: 'guitar',
    title: 'rock',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    bg: '#f9e5f5',
    fill: 'pink',
  },
  {
    icon: 'trumpet',
    title: 'jazz',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    bg: '#f3f9ff',
    fill: 'blue',
  },
];

export const HomeCategories: FC = () => {
  return (
    <section className={styles.category}>
      <Container className={styles.container}>
        <h2 className={styles.category__title}>
          <span className={styles.category__title_colored}>Explore</span> By Category
        </h2>
      </Container>
      <div className={styles.category__wrapper}>
        {[] && category.map((item) => <HomeCategoriesCard key={item.icon} categories={item} />)}
      </div>
    </section>
  );
};

export default HomeCategories;
