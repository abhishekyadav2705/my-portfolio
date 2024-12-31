import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color};
  text-align: center;
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
  position: relative;
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

const BlurredText = styled.span`
  filter: blur(${(props) => (props.visible ? "0px" : "5px")});
  transition: filter 0.3s;
`;

const Company = styled.h4`
  font-size: 1.2rem;
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
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
  color: #007bff;
`;

const Location = styled.p`
  font-size: 1rem;
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

const DescriptionItem = styled.li`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
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

const PasswordInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const HintButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.color};
  font-size: 0.9rem;
  text-align: right;
`;

const PasswordContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ExperienceSection = () => {
  const { theme } = useContext(ThemeContext);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "27-05-2000") {
      setIsAuthorized(true);
      toast.success("Password correct! Details revealed.");
    } else {
      toast.error("Incorrect password! use hint button for help 😒.");
    }
  };

  const handleHintClick = () => {
    toast.info("It's my DOB in DD-MM-YYYY format😑😑");
  };

  return (
    <Section id="experience" theme={theme}>
      <Container>
        <Title theme={theme}>Work Experience</Title>

        <JobContainer theme={theme}>
          <JobHeader>
            <CompanyIcon />
            <JobTitle>Software Developer</JobTitle>
            {!isAuthorized && (
              <PasswordContainer>
                <form onSubmit={handlePasswordSubmit}>
                  <PasswordInput
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                  />
                  <SubmitButton type="submit">Submit</SubmitButton>
                </form>
                <Message theme={theme}>
                  Enter the correct password to reveal the hidden details!
                </Message>
                <HintButton onClick={handleHintClick}>Password Hint</HintButton>
              </PasswordContainer>
            )}
          </JobHeader>
          <Company theme={theme}>
            <BlurredText visible={isAuthorized}>Infosys Ltd.</BlurredText>
          </Company>
          <Info>
            <DatesIcon />
            <Dates theme={theme}>
              <BlurredText visible={isAuthorized}>
                10/2022 - Present
              </BlurredText>
            </Dates>
          </Info>
          <Info>
            <LocationIcon />
            <Location theme={theme}>
              <BlurredText visible={isAuthorized}>
                Nagpur, Maharashtra
              </BlurredText>
            </Location>
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
