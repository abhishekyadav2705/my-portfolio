import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.color};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const JobContainer = styled.div`
  background: ${(props) => props.theme.background};
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
  font-size: 2rem;
  color: #007bff;
  margin-right: 0.5rem;
`;

const CompanyIcon = styled(FaBuilding)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Company = styled.h4`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
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
  font-size: 1.2rem;
  color: ${(props) => props.theme.color};
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Location = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color};
`;

const DescriptionList = styled.ul`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color};
  line-height: 1.6;
  margin-bottom: 1rem;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CheckIcon = styled(FaCheckCircle)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #4a90e2; /* soft blue */
  background-color: rgba(74, 144, 226, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 6px;
`;

const Metric = styled.span`
  font-weight: 600;
  color: #2e7d32; /* soft green */
  background-color: rgba(46, 125, 50, 0.08);
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  line-height: 1.7;
  font-size: 1rem;
  transition: background 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: rgba(0, 123, 255, 0.05);
  }

  span {
    display: inline-block;
  }
`;

const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section id="experience" theme={theme}>
      <Container>
        <Title theme={theme}>Work Experience</Title>

        <JobContainer theme={theme}>
          <JobHeader>
            <CompanyIcon />
            <JobTitle>Software Developer</JobTitle>
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
              <span>
                Developed and integrated an{" "}
                <Highlight>AI-driven predictive model</Highlight> into a
                ticketing system, resulting in a <Metric>70% reduction</Metric>{" "}
                in resolution time, boosting
                <Highlight>client satisfaction</Highlight> and{" "}
                <Highlight>operational efficiency</Highlight>.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Optimized <Highlight>backend throughput</Highlight> via{" "}
                <Highlight>multithreading</Highlight> in Java, allowing{" "}
                <Metric>3x more requests</Metric> per second under peak load.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Automated <Metric>90% of routine backend tasks</Metric> using{" "}
                <Highlight>Spring Scheduler</Highlight>, reducing manual effort
                and <Highlight>downtime</Highlight>.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Built and deployed <Metric>20+ RESTful APIs</Metric>, supporting{" "}
                <Metric>10K+ daily requests</Metric>
                with <Metric>&lt;300ms</Metric> response time and{" "}
                <Metric>99.9% uptime</Metric>.
              </span>
            </DescriptionItem>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Collaborated with <Highlight>frontend developers</Highlight> to
                integrate
                <Highlight>user-facing elements</Highlight> with{" "}
                <Highlight>server-side logic</Highlight>.
              </span>
            </DescriptionItem>
          </DescriptionList>
        </JobContainer>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
