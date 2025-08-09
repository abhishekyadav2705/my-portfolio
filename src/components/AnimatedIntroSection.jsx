import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FaLinkedin, FaFileAlt, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive */
  font-weight: 700;
  letter-spacing: 0.5px;
  animation: ${fadeIn} 1s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin-top: 0.5rem;
  animation: ${fadeIn} 1.2s ease forwards;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  max-width: 600px;
  animation: ${fadeIn} 1.4s ease forwards;
  color: ${(props) => props.theme.color};
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${fadeIn} 1.6s ease forwards;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.bg || "#007bff"};
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: ${(props) => props.hover || "#0056b3"};
  }
`;

const GifContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 1rem;
`;

const AnimatedIntroSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Title theme={theme}>
        Hello, I'm Abhishek Yadav
        {/* <GifContainer>
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
        </GifContainer> */}
      </Title>
      <Subtitle>Passionate Software Developer 💻✨</Subtitle>
      <Description theme={theme}>
        Crafting clean and functional web applications with React, Spring Boot,
        and JavaScript. Let's build something amazing together! 🚀😍
      </Description>

      <Actions>
        <ActionButton
          href="https://www.linkedin.com/in/abhishek-yadav-556228168/"
          target="_blank"
          rel="noopener noreferrer"
          bg="#007bff"
          hover="#0056b3"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </ActionButton>

        <ActionButton
          href="https://drive.google.com/file/d/1Iu6YO2cSpH78bxHlQY3XAkvfQi75AKCr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          bg="#ff9800"
          hover="#e68900"
        >
          <FaFileAlt size={20} />
          Resume
        </ActionButton>

        <ActionButton
          href="https://github.com/abhishekyadav2705"
          target="_blank"
          rel="noopener noreferrer"
          bg="#24292f"
          hover="#000000"
        >
          <FaGithub size={20} />
          GitHub
        </ActionButton>

        <ActionButton
          href="https://leetcode.com/abhishek_yadav/"
          target="_blank"
          rel="noopener noreferrer"
          bg="#ffa116"
          hover="#cc840e"
        >
          <SiLeetcode size={20} />
          LeetCode
        </ActionButton>
      </Actions>
    </Section>
  );
};

export default AnimatedIntroSection;
