import React from "react";
import styled from "styled-components";
import { FaHeart, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  position: relative;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 0.5rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Made with <FaHeart style={{ color: "red" }} /> by Abhishek Yadav. All
        Rights Reserved. © 2024
      </FooterText>
      <IconContainer>
        <IconLink
          href="https://www.linkedin.com/in/abhishek-yadav-556228168/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://github.com/abhishekyadav2705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
