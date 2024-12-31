import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #d32f2f; /* Red color for visibility */
  font-weight: bold;
`;

const CountdownTimer = ({ openingTime }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
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
  }, [openingTime]);

  return (
    <TimerContainer>
      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s until the
      developer wakes up! 🌞💤
    </TimerContainer>
  );
};

export default CountdownTimer;
