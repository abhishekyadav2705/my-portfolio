import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #d32f2f; /* Red color for visibility */
  font-weight: bold;
`;

const CountdownTimer = ({ openingHour }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    let openingTime = new Date();
    openingTime.setHours(openingHour, 0, 0, 0);

    if (currentTime >= openingTime) {
      // If the current time is past today's opening time, set the next opening time to tomorrow
      openingTime.setDate(openingTime.getDate() + 1);
    }

    const timeDiff = openingTime - currentTime;

    let hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [openingHour]);

  return (
    <TimerContainer>
      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s until the
      developer wakes up! 🌞💤
    </TimerContainer>
  );
};

export default CountdownTimer;
