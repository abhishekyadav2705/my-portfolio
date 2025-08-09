import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Card = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 1.25rem;
  max-width: 320px;
  margin: 1rem;
  background-color: #fff;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease;
  position: relative;
  animation: ${fadeInUp} 0.5s ease forwards;
  opacity: 0;

  ${(props) =>
    props.inProgress &&
    css`
      filter: grayscale(80%);
      opacity: 0.85;
    `}

  &:hover {
    transform: translateY(-6px);
    border-color: #0d6efd;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 0.9rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.4rem 0 0.6rem;
  color: #212529;
`;

const DescriptionWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #495057;
  line-height: 1.45;
`;

const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: #0d6efd;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  margin-top: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const TechStack = styled.p`
  font-size: 0.85rem;
  color: #0d6efd;
  margin-top: 0.6rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  gap: 0.5rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: #ccc !important;
      color: #666 !important;
    `}
`;

const GithubButton = styled(Button)`
  background-color: #24292e;
  &:hover {
    background-color: #1b1f23;
  }
`;

const LiveButton = styled(Button)`
  background-color: #0d6efd;
  &:hover {
    background-color: #084298;
  }
`;

const SwaggerButton = styled(Button)`
  background-color: #6f42c1;
  &:hover {
    background-color: #55309c;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 8px;
  background-color: ${(props) => (props.inProgress ? "#d97706" : "#198754")};
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

const ProjectCard = ({
  image,
  name,
  description,
  techStack,
  githubLink,
  liveLink,
  swaggerLink,
  inProgress,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [maxHeight, setMaxHeight] = useState("60px");
  const descRef = useRef(null);

  const toggleDescription = () => {
    if (!showFullDescription) {
      setMaxHeight(`${descRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("60px");
    }
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        el.style.opacity = 1;
      });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card inProgress={inProgress} data-animate>
      <Label inProgress={inProgress}>
        {inProgress ? "In Development" : "Deployed"}
      </Label>
      <Image src={image} alt={name} />
      <ProjectName>{name}</ProjectName>
      <DescriptionWrapper style={{ maxHeight }} ref={descRef}>
        <Description>{description}</Description>
      </DescriptionWrapper>
      {description.length > 120 && (
        <SeeMoreButton onClick={toggleDescription}>
          {showFullDescription ? "See Less" : "See More"}
        </SeeMoreButton>
      )}
      <TechStack>Tech Stack: {techStack}</TechStack>
      <Links>
        <GithubButton
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          disabled={inProgress}
        >
          <FaGithub /> GitHub
        </GithubButton>
        <LiveButton
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          disabled={inProgress}
        >
          <FaExternalLinkAlt /> Live
        </LiveButton>
        {swaggerLink && (
          <SwaggerButton
            href={swaggerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiBookBookmark /> Swagger
          </SwaggerButton>
        )}
      </Links>
    </Card>
  );
};

export default ProjectCard;
