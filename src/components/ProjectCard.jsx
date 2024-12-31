import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 1rem;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  display: inline;
`;

const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
  padding: 0;
  margin-left: 0.5rem;

  &:hover {
    color: #0056b3;
  }
`;

const TechStack = styled.p`
  font-size: 0.9rem;
  color: #007bff;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.5);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const GithubButton = styled(Button)`
  background-color: #333;
  margin-right: 0.5rem;

  &:hover {
    background-color: #111;
  }
`;

const LiveButton = styled(Button)`
  margin-left: 0.5rem;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const ProjectCard = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  liveLink,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription =
    description.length > 40 ? description.slice(0, 40) + "..." : description;

  return (
    <Card>
      <Image src={image} alt={name} />
      <ProjectName>{name}</ProjectName>
      <Description>
        {showFullDescription ? description : shortDescription}
        {description.length > 40 && (
          <SeeMoreButton onClick={handleToggleDescription}>
            {showFullDescription ? "See Less" : "See More"}
          </SeeMoreButton>
        )}
      </Description>
      <TechStack>Tech Stack: {techStack}</TechStack>
      <Links>
        <GithubButton
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </GithubButton>
        <LiveButton href={liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </LiveButton>
      </Links>
    </Card>
  );
};

export default ProjectCard;
