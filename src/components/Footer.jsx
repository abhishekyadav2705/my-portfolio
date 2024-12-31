import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Abhishek Yadav. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
