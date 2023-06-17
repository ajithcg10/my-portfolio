import React from "react";
import styled from "styled-components";
import banner from "../assets/image/ajith.png";

export default function SpotLight() {
  return (
    <div>
      <Contianer id="home">
        <Wrapper className="Wrapper">
          <LeftSide>
            <Content>Front-End Developer</Content>
            <About>
              Hi,i'm <Color>Ajith Sree Gopakumar </Color> From India
            </About>
          </LeftSide>
        </Wrapper>
      </Contianer>
    </div>
  );
}
const Contianer = styled.div`
  background: url(${banner});
  height: 80vh;
  z-index: 1;
  background-repeat: no-repeat;

  100px: -27px;
  background-size: 1022px;
  background-position: 500px -31px;
  @media (max-width: 980px) {
    background-position: 300px -31px;
  }
  @media (max-width: 768px) {
    background-position: 100px -31px;
  }
  @media (max-width: 640px) {
    background-position: 0px -31px;
  }
  @media (max-width: 480px) {
    background-position: -200px -31px;
  }
`;
const Wrapper = styled.div``;
const LeftSide = styled.div`
  width: 40%;

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (max-width: 1280px) {
    width: 47%;
  }
  @media (max-width: 1080px) {
    width: 55%;
  }
  @media (max-width: 980px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  @media (max-width: 480px) {
    margin: 0 auto;
    text-align: center;
    width: unset;
  }
`;
const Content = styled.h4`
  font-size: 25px;
  margin-bottom: 19px;
  font-weight: 200;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;
const About = styled.h3`
  font-size: 30px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;
const Color = styled.span`
  color: #7dc3ad;
`;
