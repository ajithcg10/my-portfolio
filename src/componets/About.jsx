import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function About() {
  const list = ["Skill", "Experience", "Education"];
  const [value, setValue] = useState();
  const details = [
    {
      id: "Skill",
      content: "Web Development",
      feature: "Web app Development",
    },
    {
      id: "Education",
      content: "Software Engineer",
      feature: "Talrop Private Limted(1year)",
    },
    {
      id: "Education",
      content: "Software Engineer Intern",
      feature: "Steyp Private Limted(6 month)",
    },
    {
      id: "Education",
      content: "Web Development",
      feature: "Brotoype(c&java)",
    },
    {
      id: "Experience",
      content: "Higher Secondary School",
      feature: "National Institute Of Open Schooling(2017)",
    },
    {
      id: "Experience",
      content: "High School",
      feature: "Govt THS Shoranur(2015)",
    },
  ];

  return (
    <div>
      <Container>
        <Wrapper className="Wrapper">
          <ImageConatiner>
            <Image src={require("../assets/image/ajith5.jpeg")} />
          </ImageConatiner>
          <AboutConatiner>
            <TopContainer>
              <Title>About</Title>
              <Discription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a leo metus. Sed et diam varius, sagittis neque at, eleifend
                neque. Curabitur ornare leo in ligula tincidunt dictum.
                Vestibulum tristique quam ut nibh ullamcorper, sed vulputate est
                convallis. Quisque enim risus, ultricies id augue vitae,
                bibendum placerat felis. Aliquam ut scelerisque urna. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                metus neque, dignissim aliquam ante sit amet, porta aliquet
                tellus. Cras tortor risus, venenatis sit amet eleifend quis,
                auctor sit amet leo. Morbi tempor lectus non aliquet efficitur.
                Vestibulum et sapien egestas, imperdiet erat in, finibus nibh.
                Donec pretium eros at elit iaculis, sed gravida magna congue.
                Etiam pulvinar enim felis, sed congue quam ullamcorper vitae.
                Vivamus malesuada iaculis velit a semper. Phasellus ipsum neque,
                venenatis vel consequat a, feugiat tincidunt felis. Donec
                hendrerit et risus vel bibendum.
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
                  {value == item.id ? (
                    <SkillContent>{item.content}</SkillContent>
                  ) : (
                    <SkillContent>
                      {item.id == "Skill" && value == "Skill" && item.content}
                    </SkillContent>
                  )}
                  {value == item.id ? (
                    <Feature>{item.feature}</Feature>
                  ) : (
                    <Feature>
                      {item.id == "Skill" && value == "Skill" && item.feature}
                    </Feature>
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
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImageConatiner = styled.div`
  width: 40%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 22px;
`;
const AboutConatiner = styled.div`
  width: 50%;
`;
const TopContainer = styled.div``;
const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 20px;
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
`;
const Item = styled.li`
  font-size: 18px;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background: #ff004f;
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
  color: #ff004f;
`;
const Feature = styled.h5``;
