import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) =>
    props.theme.background}; // Apply theme background
  color: ${(props) => props.theme.color}; // Apply theme color
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  padding: 1rem 0;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #007bff;
  }
`;

const Event = styled.div`
  position: relative;
  margin: 2rem 0;
  width: 45%;
  left: ${(props) => (props.left ? "55%" : "0")};
  transform: translateX(${(props) => (props.left ? "-50%" : "50%")});
  text-align: ${(props) => (props.left ? "left" : "right")};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: ${(props) => (props.left ? "-10px" : "auto")};
    left: ${(props) => (props.left ? "auto" : "-10px")};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${(props) =>
      props.left ? "0 10px 10px 0" : "10px 10px 0 0"};
    border-color: ${(props) =>
      props.left
        ? "#007bff transparent transparent transparent"
        : "transparent #007bff transparent transparent"};
  }
`;

const EventContent = styled.div`
  background: #007bff;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
  }
`;

const InteractiveTimeline = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  const events = [
    {
      year: "2025",
      description: "Anticipating all the amazing things the future holds 🚀✨",
      left: false,
    },
    {
      year: "2024",
      description:
        "Dove into a multitude of exciting projects and innovations 💻🌟",
      left: true,
    },
    {
      year: "2022",
      description: "Joined Infosys as a Software Engineer 🚀",
      left: false,
    },
    // Add more events here
  ];

  return (
    <Section theme={theme}>
      <Container>
        <h2>Timeline</h2>
        <Timeline>
          {events.map((event, index) => (
            <Event key={index} left={event.left}>
              <EventContent>
                {event.year} - {event.description}
              </EventContent>
            </Event>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default InteractiveTimeline;
