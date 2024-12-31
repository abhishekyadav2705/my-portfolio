import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  margin: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
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
  color: #555;
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
];

const SkillCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillLogo src={skill.logo} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default SkillCarousel;
