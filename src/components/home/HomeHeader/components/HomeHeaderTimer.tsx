import { FC, useEffect, useRef, useState } from 'react';
import { Container } from '../../../common';
import styles from './HomeHeaderTimer.module.scss';

export const HomeHeaderTimer: FC = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('December 30 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // # stop our timer
        clearInterval(interval.current);
      } else {
        // # update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={styles.timer}>
      <Container className={styles.container}>
        <span>{timerDays}d</span>
        <span>{timerHours}h</span>
        <span>{timerMinutes}m</span>
        <span>{timerSeconds}s</span>
      </Container>
    </div>
  );
};

export default HomeHeaderTimer;
