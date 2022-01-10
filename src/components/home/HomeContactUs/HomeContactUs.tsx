import { FC } from 'react';
import { Container, Icon } from '../../common';
import styles from './HomeContactUs.module.scss';

export const HomeContactUs: FC = () => {
  return (
    <section className={styles.contact_us}>
      <Container className={styles.container}>
        <div className={styles.contact_us__left}>
          <h2 className={styles.contact_us__left_title}>Contact us</h2>
          <p className={styles.contact_us__left_description}>
            Have an inquiry? We’ll be happy to assist you
          </p>
          <div className={styles.contact_us__left_info}>
            <a href="tel:+923336527366" className={styles.contact_us__left_info__link}>
              <Icon className={styles.icon} name="phone" />
              +92 333 6527366
            </a>
            <a href="mailto:abuzer@greelogix.com" className={styles.contact_us__left_info__link}>
              <Icon className={styles.icon} name="email" />
              abuzer@greelogix.com
            </a>
            <a href="#" className={styles.contact_us__left_info__link}>
              <Icon className={styles.icon} name="pin" />
              Plot 252, Block L Phase 2 Johar Town, Lahore, PK
            </a>
          </div>
        </div>
        <div className={styles.contact_us__right}>
          <h2 className={styles.contact_us__right__title}>Fill in your details</h2>
          <form className={styles.contact_us__right__form}>
            <label className={styles.label} htmlFor="">
              Name:
              <input className={styles.input} type="text" />
            </label>
            <label className={styles.label} htmlFor="">
              Email:
              <input className={styles.input} type="text" />
            </label>
            <label className={styles.label} htmlFor="">
              Message
              <input className={styles.input} type="text" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HomeContactUs;
