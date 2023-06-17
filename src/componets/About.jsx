import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function About() {
  const list = ["Skill", "Experience", "Education"];
  const [value, setValue] = useState(list[0]);
  const [isopen, setOpen] = useState(false);

  const details = [
    {
      id: "Skill",
      content: "Web Development",
      feature: "Web app Development",
    },
    {
      id: "Experience",
      content: "Software Engineer",
      feature: "Talrop Private Limted(1year)",
    },
    {
      id: "Experience",
      content: "Software Engineer Intern",
      feature: "Steyp Private Limted(6 month)",
    },
    {
      id: "Experience",
      content: "Web Development",
      feature: "Brotoype(c&java)",
    },
    {
      id: "Education",
      content: "Higher Secondary School",
      feature: "National Institute Of Open Schooling(2017)",
    },
    {
      id: "Education",
      content: "High School",
      feature: "Govt THS Shoranur(2015)",
    },
  ];

  return (
    <div>
      <Container id="about">
        <Wrapper className="Wrapper">
          <ImageConatiner
            onMouseOver={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <Image src={require("../assets/image/ajith5.jpeg")} />
            <Details className={isopen && "hover"}>
              <AboutMe>
                Hi,i'm <Color>Ajith Sree Gopakumar </Color> From India
              </AboutMe>
            </Details>
          </ImageConatiner>
          <AboutConatiner>
            <TopContainer>
              <Title>About</Title>
              <Discription>
                Hello! , My name is Ajith C G , Iam a Frontend developer . Iam a
                highly motivated and self-taught Front End Developer expertise
                in Javascrpt and React JS seeking to use my abilites in building
                web applications and services. Being in web development industry
                for over 1 year iam confident that, i am Skilled in writing
                clean and maintainable code, with a focus on delivering
                efficient solutions that meet business requirements.
              </Discription>
            </TopContainer>
            <BottomContainer>
              <Box>
                {list.map((data) => {
                  return (
                    <Item
                      onClick={() => {
                        setValue(data);
                      }}
                    >
                      {data}
                    </Item>
                  );
                })}
              </Box>

              {details.map((item) => (
                <Subconatiner>
                  {value === item.id ? (
                    <SkillContent>{item.content}</SkillContent>
                  ) : (
                    <SkillContent>
                      {value === item.id && item.content}
                    </SkillContent>
                  )}
                  {value === item.id ? (
                    <Feature>{item.feature}</Feature>
                  ) : (
                    <Feature>{value === item.id && item.feature}</Feature>
                  )}
                </Subconatiner>
              ))}
            </BottomContainer>
          </AboutConatiner>
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding-top: 80px;
  height: 50vh;
  @media (max-width: 1280px) {
    height: 50vh;
  }
  @media (max-width: 980px) {
    height: 70vh;
  }
  @media (max-width: 768px) {
    height: 90vh;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ImageConatiner = styled.div`
  width: 40%;
  height: fit-content;
  position: relative;
  @media (max-width: 768px) {
    width: unset;
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 22px;
`;
const Details = styled.div`
  width: 100%;
  height: 0;
  text-align: center;
  border-radius: 22px;
  font-size: 14px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgb(125, 195, 173));
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.9s;
  align-items: center;
  &.hover {
    height: 100%;
    transition: 0.9s;
  }
`;
const AboutMe = styled.h3`
  font-size: 40px;
  @media (max-width: 1080px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const Color = styled.span`
  color: #7dc3ad;
`;
const AboutConatiner = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: unset;
  }
`;
const TopContainer = styled.div``;
const Title = styled.h3`
  font-weight: 700;

  font-size: 40px;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
  &::first-letter {
    color: rgb(125, 195, 173);
  }
`;
const Discription = styled.p`
  font-size: 16px;
  color: #dddddd;

  margin-bottom: 15px;
`;
const BottomContainer = styled.div``;
const Box = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-between;
  @media (max-width: 1080px) {
    width: 55%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;
const Item = styled.li`
  font-size: 18px;
  font-weight: 700;

  position: relative;
  cursor: pointer;
  margin-bottom: 20px;

  &::first-letter {
    color: rgb(125, 195, 173);
  }
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background: rgb(125, 195, 173);
    position: absolute;
    left: 0;

    bottom: -6px;

    transition: 0.5s;
  }
  &:hover::after {
    width: 100%;

    transition: 0.5s;
  }
`;
const Subconatiner = styled.div`
  margin-bottom: 10px;
`;
const SkillContent = styled.h6`
  color: #7dc3ad;
`;
const Feature = styled.h5``;
