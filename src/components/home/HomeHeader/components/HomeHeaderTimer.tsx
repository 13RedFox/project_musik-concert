import React, { FC, useEffect, useState } from 'react';
import { Container } from '../../../common';
import styles from './HomeHeaderTimer.module.scss';

export const HomeHeaderTimer: FC = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval: NodeJS.Timer;

  const startTimer = () => {
    const countdownDate = new Date('January 1 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

      if (distance < 0) {
        // # stop our timer
        clearInterval(interval);
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
      clearInterval(interval);
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
