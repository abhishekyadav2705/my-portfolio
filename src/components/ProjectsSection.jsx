import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import ProjectCard from "./ProjectCard";

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) =>
    props.theme.background}; // Apply theme background
  color: ${(props) => props.theme.color}; // Apply theme color
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const Dropdown = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #fff;
  color: #007bff;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const projects = [
  {
    image: "/images/usePopcornTheme.jpg",
    name: "usePopcorn",
    description:
      "usePopcorn is a dynamic movie rating application built with React, leveraging the OMDB API to fetch and display information about movies. The app caters to fans of both Bollywood and Hollywood, providing a comprehensive database of movies along with their ratings and other essential details.",
    techStack: "React",
    githubLink: "https://github.com/abhishekyadav2705/usePopcorn",
    liveLink: "https://project1.live",
    type: "frontend",
  },
  {
    image: "/images/uber.jpg",
    name: "Uber-Backend",
    description:
      "Uber-App is a robust ride-sharing service application developed using Spring Boot. The app utilizes the PostGIS extension to efficiently fetch and process the locations of riders and drivers. It features production-ready APIs and incorporates advanced strategies like Surge Pricing and Driver Matching to enhance user experience.",
    techStack: "Spring Boot, PostgreSQL, RESTful APIs",
    githubLink: "https://github.com/abhishekyadav2705/Uber-Backend",
    liveLink: "https://project2.live",
    type: "backend",
  },
  {
    image: "/images/portfolio.jpg",
    name: "My Portfolio",
    description:
      "Developed a portfolio in React.js🚀, showcasing my work and skills. Integrated smooth animations, a responsive design, and dynamic content. Deployed on Netlify for seamless access and performance.",
    techStack: "React.js",
    githubLink: "https://github.com/abhishekyadav2705/Uber-Backend",
    liveLink: "https://project2.live",
    type: "frontend",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext); // Use theme context
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <Section id="projects" theme={theme}>
      <Container>
        <Header>
          <Title theme={theme}>Projects</Title>
          <Dropdown value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </Dropdown>
        </Header>
        <ProjectContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
