import { FC } from 'react';
import { Container, Icon } from '../common';
import { Logo } from '../common/Logo';
import styles from './TheFooter.module.scss';

export const TheFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Logo className={styles.footer__logo} />
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__nav_list}>
            <li className={styles.footer__nav_list__item}>
              <a href="#" className={styles.footer__nav_list__link}>
                home
              </a>
            </li>
            <li className={styles.footer__nav_list__item}>
              <a href="#" className={styles.footer__nav_list__link}>
                company
              </a>
            </li>
            <li className={styles.footer__nav_list__item}>
              <a href="#" className={styles.footer__nav_list__link}>
                blog
              </a>
            </li>
            <li className={styles.footer__nav_list__item}>
              <a href="#" className={styles.footer__nav_list__link}>
                contact us
              </a>
            </li>
            <li className={styles.footer__nav_list__item}>
              <a href="#" className={styles.footer__nav_list__link}>
                sitemap
              </a>
            </li>
          </ul>
          <ul className={styles.footer__nav_social}>
            <li className={styles.footer__nav_social__item}>
              <a
                target="_blank"
                href="https://www.facebook.com/"
                className={styles.footer__nav_social__link}
                rel="noreferrer">
                <Icon name="facebook" className={styles.footer__nav_social__icon} />
              </a>
            </li>
            <li className={styles.footer__nav_social__item}>
              <a
                target="_blank"
                href="https://www.instagram.com/"
                className={styles.footer__nav_social__link}
                rel="noreferrer">
                <Icon name="instagram" className={styles.footer__nav_social__icon} />
              </a>
            </li>
            <li className={styles.footer__nav_social__item}>
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className={styles.footer__nav_social__link}
                rel="noreferrer">
                <Icon name="linkedin" className={styles.footer__nav_social__icon} />
              </a>
            </li>
            <li className={styles.footer__nav_social__item}>
              <a
                target="_blank"
                href="https://twitter.com/"
                className={styles.footer__nav_social__link}
                rel="noreferrer">
                <Icon name="twitter" className={styles.footer__nav_social__icon} />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default TheFooter;
