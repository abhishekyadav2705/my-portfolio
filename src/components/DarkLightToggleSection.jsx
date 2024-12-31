import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const lightTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme = {
  background: "#000",
  color: "#fff",
};

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.3s, color 0.3s;
`;

const ToggleButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  transition: color 0.3s;

  &:focus {
    outline: none;
  }
`;

const DarkLightToggleSection = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <h2>Dark/Light Mode Toggle</h2>
        <ToggleButton onClick={toggleTheme}>
          {theme === lightTheme ? <FaMoon /> : <FaSun />}
        </ToggleButton>
      </Section>
    </ThemeProvider>
  );
};

export default DarkLightToggleSection;
