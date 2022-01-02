import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button, Container } from '../common';
import { Logo } from '../common/Logo';
import styles from './TheNavigation.module.scss';

const nav = [
  { id: 0, title: 'home' },
  { id: 1, title: 'speakers' },
  { id: 2, title: 'schedule' },
  { id: 3, title: 'contact us' },
];

export const TheNavigation: FC = () => {
  const navBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(navBox.current, { y: -100 });
  });
  return (
    <nav className={styles.nav} ref={navBox}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.nav__wrapper}>
          <ul className={styles.nav__list}>
            {[] &&
              nav.map((item) => (
                <li key={item.id} className={styles.nav__item}>
                  <a href="#" className={styles.nav__link}>
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
          <Button className={styles.nav__button}>get tickets</Button>
        </div>
      </Container>
    </nav>
  );
};

export default TheNavigation;
