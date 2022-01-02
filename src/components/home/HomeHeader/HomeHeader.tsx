import gsap from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { Button, Container, Icon } from '../../common';
import { HomeHeaderTimer } from './components';
import styles from './HomeHeader.module.scss';

export const HomeHeader: FC = () => {
  const headerTitle = useRef<HTMLDivElement>(null);
  const headerDescr = useRef<HTMLDivElement>(null);
  const headerBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(headerTitle.current, { opacity: 0, y: 40 }, 0.5)
      .from(
        headerDescr.current,
        {
          opacity: 0,
          y: 40,
        },
        0.8,
      )
      .from(headerBtn.current, { opacity: 0, y: 20 }, 1);
  });
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.header__wrapper_content}>
          <h1 className={styles.header__title} ref={headerTitle}>
            The Best experience of <span className={styles.header__colored}>music</span> in 2021
          </h1>
          <p className={styles.header__description} ref={headerDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula
            placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
          </p>
        </div>

        <div className={styles.wrapper} ref={headerBtn}>
          <Button className={styles.wrapper__started}>get started</Button>
          <button className={styles.wrapper__video}>
            <Icon name="play" className={styles.wrapper__video_icon} />
            watch video
          </button>
        </div>
        <HomeHeaderTimer />
      </Container>
    </header>
  );
};

export default HomeHeader;
