import Image from 'next/image';
import { FC } from 'react';
import { Button, Container } from '../../common';
import aboutImage from '../../../../public/about.jpg';
import styles from './HomeAboutUs.module.scss';

export const HomeAboutUs: FC = () => {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__wrapper}>
          <div className={styles.wrapper__images}>
            <Image src={aboutImage} alt="About Image" className={styles.about__wrapper_image} />
          </div>

          <div className={styles.about__wrapper_content}>
            <h2 className={styles.about__wrapper_content__title}>about musik</h2>
            <p className={styles.about__wrapper_content__description}>
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales,
              tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id
              mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum
              condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
            </p>
            <Button className={styles.about__wrapper_content__btn}>learn more</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
