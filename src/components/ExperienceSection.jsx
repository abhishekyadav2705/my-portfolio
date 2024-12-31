import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) =>
    props.theme.background}; // Apply theme background
  color: ${(props) => props.theme.color}; // Apply theme color
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
  text-align: center;
`;

const JobContainer = styled.div`
  background: ${(props) => props.theme.background}; // Apply theme background
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-right: 0.5rem;
`;

const CompanyIcon = styled(FaBuilding)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color}; // Apply theme color
  margin-bottom: 0.25rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const DatesIcon = styled(FaCalendarAlt)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Dates = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Location = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const DescriptionList = styled.ul`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
  line-height: 1.6;
  margin-bottom: 1rem;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background}; // Apply theme background
  border-radius: 5px;
  padding: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #e7e7e7;
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <Section id="experience" theme={theme}>
      <Container>
        <Title theme={theme}>Work Experience</Title>

        <JobContainer theme={theme}>
          <JobHeader>
            <CompanyIcon />
            <JobTitle>Systems Engineer</JobTitle>
          </JobHeader>
          <Company theme={theme}>Infosys Ltd.</Company>
          <Info>
            <DatesIcon />
            <Dates theme={theme}>10/2022 - Present</Dates>
          </Info>
          <Info>
            <LocationIcon />
            <Location theme={theme}>Nagpur, Maharashtra</Location>
          </Info>
          <DescriptionList theme={theme}>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Developed and maintained web applications using Java and Spring
              Boot.
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Designed and implemented RESTful APIs for various models.
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Collaborated with front-end developers to integrate user-facing
              elements with server-side logic.
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Worked on various Java-based projects, enhancing features and bug
              fixing.
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Worked closely with clients to gather requirements and translate
              them into technical specifications for implementation.
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              Continuously updated skills through training courses, workshops,
              and self-study—staying current on industry trends and emerging
              technologies.
            </DescriptionItem>
          </DescriptionList>
        </JobContainer>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
