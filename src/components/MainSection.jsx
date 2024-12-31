import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #555;
`;

const Skills = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  position: relative;
`;

const ConnectButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ClickMeText = styled.span`
  font-size: 0.8rem;
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #007bff;
  cursor: pointer;
`;

const MainSection = () => {
  return (
    <Section>
      <Title>Hi, I'm Abhishek Yadav</Title>
      <Subtitle>I am a Software Developer</Subtitle>
      <Skills>Java | Spring Boot | React</Skills>
      <ButtonContainer>
        <ClickMeText>Click me</ClickMeText>
        <ConnectButton>Let's Connect</ConnectButton>
      </ButtonContainer>
    </Section>
  );
};

export default MainSection;
