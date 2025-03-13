import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", sans-serif;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  margin-left: auto;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.color};
    transition: width 0.3s;
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

const Head = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Header theme={theme}>
      <LogoContainer>
        <LogoImage src="/images/logo.jpg" alt="Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <ThemeSwitcher onClick={toggleTheme}>
        {theme.background === "#fff" ? <FaMoon /> : <FaSun />}
      </ThemeSwitcher>
    </Header>
  );
};

export default Head;
