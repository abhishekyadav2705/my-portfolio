import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 50%;
    height: 4px;
    background-color: #007bff;
    border-radius: 2px;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.color}; // Apply theme color
  line-height: 1.8;
  margin-top: 1rem;
`;

const Highlight = styled.span`
  background-color: #ffeb3b;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;

const AboutSection = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <Section id="about" theme={theme}>
      <Container>
        <Title theme={theme}>About Me</Title>
        <Text theme={theme}>
          Hello! 👋 I'm <Highlight>Abhishek Yadav</Highlight>, a passionate
          software developer with a knack for creating elegant solutions to
          complex problems. With a strong foundation in{" "}
          <Highlight>Java ☕</Highlight>, <Highlight>Spring Boot 🌱</Highlight>,{" "}
          <Highlight>JavaScript 🟨</Highlight>, and{" "}
          <Highlight>React ⚛️</Highlight>, I strive to build high-quality,
          scalable applications. 🚀
          {/* My journey in software development has been
          driven by my curiosity and desire to constantly learn and grow. 🌟
          Whether it's exploring new technologies or improving existing skills,
          I am committed to pushing the boundaries and delivering excellence.
          ✨💻 */}
        </Text>
      </Container>
    </Section>
  );
};

export default AboutSection;
