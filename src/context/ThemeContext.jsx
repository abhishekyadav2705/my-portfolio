// src/context/ThemeContext.js
import React, { createContext, useState } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const lightTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme = {
  background: "#000",
  color: "#fff",
};

const ThemeContext = createContext();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.7s ease, color 0.7s ease; /* Enhanced smooth transition */
  }

  #root, .App, header, section {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.7s ease, color 0.7s ease; /* Apply transition to more elements */
  }
`;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, lightTheme, darkTheme };
