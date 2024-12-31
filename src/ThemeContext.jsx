import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext();

const lightTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme = {
  background: "#000",
  color: "#fff",
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
