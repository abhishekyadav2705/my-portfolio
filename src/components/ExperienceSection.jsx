import React, { useContext } from "react";
import styled from "styled-components";
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
  max-width: 850px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
`;

const JobContainer = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.5rem;
  padding: 1.8rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #004080; /* muted corporate blue */
  margin-right: 0.5rem;
`;

const CompanyIcon = styled(FaBuilding)`
  margin-right: 0.5rem;
  color: #004080;
  font-size: 1.3rem;
`;

const Company = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  font-size: 1rem;
  opacity: 0.9;
`;

const DatesIcon = styled(FaCalendarAlt)`
  margin-right: 0.5rem;
  color: #004080;
`;

const Dates = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
  color: #004080;
`;

const Location = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

const DescriptionList = styled.ul`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
  line-height: 1.6;
  margin-top: 1rem;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CheckIcon = styled(FaCheckCircle)`
  margin-right: 0.6rem;
  color: #004080;
  font-size: 1rem;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #003366; /* darker blue for formality */
  background-color: rgba(0, 51, 102, 0.06);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
`;

const Metric = styled.span`
  font-weight: 600;
  color: #2e5d32; /* deep green */
  background-color: rgba(46, 93, 50, 0.08);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  border-radius: 6px;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  font-size: 0.95rem;
  transition: background 0.3s ease;
  background: ${(props) => props.theme.background};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  &:hover {
    background: rgba(0, 64, 128, 0.04);
  }
`;

const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section id="experience" theme={theme}>
      <Container>
        <Title theme={theme}>Professional Experience</Title>

        <JobContainer theme={theme}>
          <JobHeader>
            <CompanyIcon />
            <JobTitle>Software Developer</JobTitle>
          </JobHeader>
          <Company theme={theme}>Infosys Ltd.</Company>
          <Info>
            <DatesIcon />
            <Dates theme={theme}>October 2022 – Present</Dates>
          </Info>
          <Info>
            <LocationIcon />
            <Location theme={theme}>Nagpur, Maharashtra</Location>
          </Info>
          <DescriptionList theme={theme}>
            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Designed and deployed an{" "}
                <Highlight>AI-powered predictive model</Highlight> within a
                ticketing platform, achieving a <Metric>70% reduction</Metric>{" "}
                in resolution time and significantly enhancing{" "}
                <Highlight>client satisfaction</Highlight> and{" "}
                <Highlight>operational efficiency</Highlight>.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Enhanced <Highlight>backend throughput</Highlight> through{" "}
                <Highlight>Java multithreading</Highlight>, enabling the system
                to process <Metric>3× more concurrent requests</Metric> under
                peak load.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Automated <Metric>90% of recurring backend operations</Metric>{" "}
                using <Highlight>Spring Scheduler</Highlight>, reducing manual
                intervention and minimizing{" "}
                <Highlight>system downtime</Highlight>.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Delivered <Metric>20+ RESTful APIs</Metric> handling{" "}
                <Metric>10K+ daily requests</Metric> with{" "}
                <Metric>&lt;300ms</Metric> average response time and{" "}
                <Metric>99.9% uptime</Metric>.
              </span>
            </DescriptionItem>

            <DescriptionItem theme={theme}>
              <CheckIcon />
              <span>
                Partnered with <Highlight>frontend engineers</Highlight> to
                seamlessly integrate{" "}
                <Highlight>user interface components</Highlight> with{" "}
                <Highlight>server-side functionality</Highlight>.
              </span>
            </DescriptionItem>
          </DescriptionList>
        </JobContainer>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
