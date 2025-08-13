import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Section = styled.section`
  padding: 3rem 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 4px;
    background-color: #61dafb; /* Soft blue underline */
    margin: 8px auto 0;
    border-radius: 2px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 6 items per row */
  gap: 2rem;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  width: 120px;
  height: 160px;
  background: ${(props) => props.bg || props.theme.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 12px
    ${(props) =>
      props.theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.1)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.05) translateY(-8px);
    box-shadow: 0 10px 24px
      ${(props) =>
        props.theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.15)"};
    border-color: ${(props) => props.hoverColor || "#61DAFB"};
  }
`;

const SkillLogo = styled.img`
  width: 50px; /* smaller than before */
  height: 50px;
  margin-bottom: 0.8rem;
  transition: transform 0.3s;
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.theme.mode === "dark" ? "#ffffff" : props.theme.color};
  text-align: center;
`;

export const lightTheme = {
  background: "#fff",
  color: "#000",
  cardBackground: "#f9f9f9",
};

export const darkTheme = {
  background: "#121212", // main background
  color: "#ffffff", // general text
  cardBackground: "#1f1f2e", // skill card background (slightly lighter)
};

const skills = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    hoverColor: "#f89820", // Orange for Java
    category: "Backend",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    hoverColor: "#6DB33F", // Green for Spring Boot
    category: "Backend",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    hoverColor: "#61DAFB", // Blue for React
    category: "Frontend",
  },
  {
    name: "Microservices",
    logo: "https://img.icons8.com/?size=100&id=11678&format=png&color=000000",
    hoverColor: "#28B463", // Fresh Green (symbolic of modular & scalability)
    category: "Backend",
  },
  {
    name: "Redis",
    logo: "https://img.icons8.com/color/96/redis.png",
    hoverColor: "#D82C20", // Official Redis red
    category: "Backend",
  },
  {
    name: "Kafka",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    hoverColor: "#000000", // Black for Kafka
    category: "Backend",
  },

  // --- Database ---
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    hoverColor: "#336791", // Dark Blue for PostgreSQL
    category: "Database",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    hoverColor: "#F0DB4F", // Yellow for JavaScript
    category: "Frontend",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    hoverColor: "#E34F26", // Red-Orange for HTML5
    category: "Frontend",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    hoverColor: "#1572B6", // Blue for CSS3
    category: "Frontend",
  },

  // --- Backend ---
  {
    name: "REST API",
    logo: "https://img.icons8.com/?size=100&id=21888&format=png&color=000000",
    hoverColor: "#FF5733", // Vibrant Orange-Red for APIs
    category: "Backend",
  },

  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    hoverColor: "#00758F", // Blue for MySQL
    category: "Database",
  },

  // --- DevOps ---
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    hoverColor: "#0db7ed", // Light Blue for Docker
    category: "DevOps",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    hoverColor: "#326CE5", // Blue for Kubernetes
    category: "DevOps",
  },

  // --- Tools ---
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    hoverColor: "#F05032", // Red for Git
    category: "Tools",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    hoverColor: "#FF6C37", // Orange for Postman
    category: "Tools",
  },
  {
    name: "Swagger",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/swagger.svg",
    hoverColor: "#85EA2D", // Green for Swagger
    category: "Tools",
  },

  {
    name: "Maven",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    hoverColor: "#C71A36", // Red hue to match Apache Maven branding
    category: "Tools",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    hoverColor: "#3776AB", // Blue for Python
    category: "Backend",
  },
];

const SkillsSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Container>
        <Title>Skills</Title>
        <SkillGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index} hoverColor={skill.hoverColor}>
              <SkillLogo src={skill.logo} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillGrid>
      </Container>
    </Section>
  );
};

export default SkillsSection;
