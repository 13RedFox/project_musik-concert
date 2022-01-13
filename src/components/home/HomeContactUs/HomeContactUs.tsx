import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Icon } from '../../common';
import styles from './HomeContactUs.module.scss';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const HomeContactUs: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

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
          <form className={styles.contact_us__right__form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__wrapper}>
              <label className={styles.form__wrapper_label} htmlFor="">
                Name
              </label>
              <input
                className={styles.form__wrapper_input}
                type="text"
                {...register('name', { required: true, minLength: 3, maxLength: 20 })}
              />
              {errors.name && <span className={styles.errors}>Name is required</span>}
            </div>
            <div className={styles.form__wrapper}>
              <label className={styles.form__wrapper_label} htmlFor="">
                Email
              </label>
              <input
                className={styles.form__wrapper_input}
                type="text"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <span className={styles.errors}>Email is required</span>}
            </div>
            <div className={styles.form__wrapper}>
              <label className={styles.form__wrapper_label} htmlFor="">
                Message
              </label>
              <textarea
                className={styles.form__wrapper_input}
                rows={4}
                {...register('message', {
                  required: true,
                  minLength: 3,
                  maxLength: 80,
                })}></textarea>
              {errors.message && <span className={styles.errors}>Message is required</span>}
            </div>

            <input className={styles.contact_us__right__form_submit} type="submit" value="Submit" />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HomeContactUs;
