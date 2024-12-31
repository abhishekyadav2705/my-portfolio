import React from "react";
import styled, { keyframes } from "styled-components";
import CountdownTimer from "./CountdownTimer";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
    to bottom,
    #000428,
    #004e92
  ); /* Night sky background gradient */
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffeb3b; /* Yellow color for Title */
  margin-top: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #ffffff; /* White color for Subtitle */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const GifContainer = styled.div`
  width: 60%;
  margin-top: 1rem;
  iframe {
    width: 100%;
    height: auto;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ffeb3b; /* Bright yellow background */
  color: #333;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 235, 59, 0.5); /* Yellow shadow */
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 1.5s infinite;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ffc107; /* Slightly darker yellow on hover */
    transform: scale(1.05);
  }
`;

const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const ClosedMessage = ({ onToggle }) => {
  const openingHour = 11; // Easily adjustable opening hour (24-hour format)
  const closingHour = 19; // Easily adjustable closing hour (24-hour format)

  return (
    <MessageContainer>
      <ToggleButton onClick={onToggle}>
        Wake up the Developer <Emoji>🌞</Emoji>
      </ToggleButton>
      <Title>We're Closed!</Title>
      <CountdownTimer openingHour={openingHour} />
      <Subtitle>Currently, the developer is on power saving mode 😴⚡</Subtitle>
      <GifContainer>
        <iframe
          src="https://giphy.com/embed/3o7abxtmPxanzaESGY"
          width="100%"
          height="100%"
          style={{ position: "relative" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Sleeping GIF"
        ></iframe>
      </GifContainer>
      <Subtitle>
        Come back between {openingHour}:00 AM - {closingHour}:00 PM for more
        awesomeness!
      </Subtitle>
    </MessageContainer>
  );
};

export default ClosedMessage;
