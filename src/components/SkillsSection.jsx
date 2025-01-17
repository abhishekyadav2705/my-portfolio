import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

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
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme.background}; // Apply theme background
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SkillLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;

  ${SkillCard}:hover & {
    transform: scale(1.2);
  }
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color}; // Apply theme color
`;

const skills = [
  {
    name: "Java",
    logo: "https://static.vecteezy.com/system/resources/previews/022/100/686/original/java-logo-transparent-free-png.png",
  },
  {
    name: "Spring Boot",
    logo: "https://th.bing.com/th/id/OIP.HSAFVJEOtDoLnIRHIWra1gHaGN?rs=1&pid=ImgDetMain",
  },
  {
    name: "React",
    logo: "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "PostgreSQL",
    logo: "https://th.bing.com/th/id/OIP.OLVs3hIrsatz5RPKbYdYyQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "JavaScript",
    logo: "https://assets.website-files.com/5fd6b43c52d14e3344a5e396/607f9bc7850d480860d1b0ce_javascript_icon_130900-p-500.png",
  },
  {
    name: "Microservices",
    logo: "https://th.bing.com/th/id/OIP.v7j63Ea5jaSxHPgd2EV-aQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    name: "Docker",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2015-2017.png",
  },
  {
    name: "Kubernetes",
    logo: "https://th.bing.com/th/id/OIP.wOMtZQ4cb_gxIZ1HkiKOfwHaDw?rs=1&pid=ImgDetMain",
  },
  {
    name: "Python",
    logo: "https://logohistory.net/wp-content/uploads/2023/06/Python-Emblem.png",
  },
  {
    name: "Postman",
    logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/postman_xPdRyfy.jpg",
  },
  {
    name: "Swagger",
    logo: "https://static-00.iconduck.com/assets.00/swagger-icon-2048x2048-563qbzey.png",
  },
  {
    name: "Kafka",
    logo: "https://th.bing.com/th/id/OIP.zHIfKvuVJg-dXJDUPI_foQHaMB?rs=1&pid=ImgDetMain",
  },
];

const SkillsSection = () => {
  const { theme } = useContext(ThemeContext); // Use theme context

  return (
    <Section theme={theme}>
      <Container>
        <Title theme={theme}>Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index} theme={theme}>
              <SkillLogo src={skill.logo} alt={skill.name} />
              <SkillName theme={theme}>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  );
};

export default SkillsSection;
