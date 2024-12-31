import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import { FaLinkedin } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) =>
    props.theme.background}; // Apply theme background
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const Title = styled.h1`
  font-size: 3rem;
  animation: ${fadeIn} 2.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #007bff;
  animation: ${fadeIn} 2.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  max-width: 600px;
  animation: ${fadeIn} 3s ease-in-out;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const buttonPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 10px 20px rgba(0, 123, 255, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  color: white;
  background-color: #007bff;
  border: 2px solid #0056b3;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.5);
  transition: background-color 0.3s, transform 0.3s;
  animation: ${buttonPulse} 2s infinite;
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const LinkedInIcon = styled(FaLinkedin)`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const GifContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 1rem;
`;

const AnimatedIntroSection = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <Section theme={theme}>
      <Title theme={theme}>
        Hello, I'm Abhishek Yadav
        <GifContainer>
          <iframe
            src="https://giphy.com/embed/uKM4c3IujlUmWkMVhd"
            width="100%"
            height="100%"
            style={{ position: "relative" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Postman Gif"
          ></iframe>
        </GifContainer>
      </Title>
      <Subtitle>Passionate Software Developer 💻✨</Subtitle>
      <Description theme={theme}>
        Crafting clean and functional web applications with React, Spring Boot,
        and JavaScript. Let's build something amazing together! 🚀😍
      </Description>
      <Button
        href="https://www.linkedin.com/in/abhishek-yadav-556228168/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
        <LinkedInIcon />
      </Button>
    </Section>
  );
};

export default AnimatedIntroSection;
