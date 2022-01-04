import Image from 'next/image';
import { FC } from 'react';
import { Button, Container } from '../../common';
import singerOne from '../../../../public/signer-1.jpg';
import singerTwo from '../../../../public/signer-2.jpg';
import singerThree from '../../../../public/signer-3.jpg';
import singerFour from '../../../../public/signer-4.jpg';
import styles from './HomeSingers.module.scss';
import classNames from 'classnames';

export const HomeSingers: FC = () => {
  return (
    <section className={styles.singer}>
      <Container className={styles.container}>
        <div className={styles.singer__content}>
          <h2 className={styles.singer__content_title}>singers</h2>
          <p className={styles.singer__content_description}>
            Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales,
            tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id
            mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum
            cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
          </p>
          <Button rightIcon className={styles.singer__content_button}>
            view all singers
          </Button>
        </div>
        <div className={styles.singer__images}>
          <div className={styles.singer__images_top}>
            <div className={classNames(styles.singer__images_top_img, styles.large)}>
              <Image className={styles.singer__images_pic} src={singerOne} alt="SingerOne" />
            </div>
            <div className={classNames(styles.singer__images_top_img, styles.small)}>
              <Image className={styles.singer__images_pic} src={singerTwo} alt="SingerTwo" />
            </div>
          </div>
          <div className={styles.singer__images_bottom}>
            <div className={classNames(styles.singer__images_top_img, styles.small)}>
              <Image className={styles.singer__images_pic} src={singerThree} alt="SingerOne" />
            </div>
            <div className={classNames(styles.singer__images_top_img, styles.large)}>
              <Image className={styles.singer__images_pic} src={singerFour} alt="SingerTwo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSingers;
