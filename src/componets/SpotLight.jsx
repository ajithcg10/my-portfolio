import React from "react";
import styled from "styled-components";
import banner from "../assets/image/ajith.png";

export default function SpotLight() {
  return (
    <div>
      <Contianer>
        <Wrapper className="Wrapper">
          <LeftSide>
            <Content>Front-End Developer</Content>
            <About>
              Hi,i'm <Color>Ajith Sree</Color> Gopakumar From India
            </About>
          </LeftSide>
        </Wrapper>
      </Contianer>
    </div>
  );
}
const Contianer = styled.div`
  background: url(${banner});
  height: 90vh;
  background-repeat: no-repeat;

  100px: -27px;
  background-size: 1022px;
  background-position: 500px -31px;
`;
const Wrapper = styled.div``;
const LeftSide = styled.div`
  margin: 0;
  width: 40%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;
const Content = styled.h4`
  font-size: 25px;
  margin-bottom: 19px;
  font-weight: 200;
`;
const About = styled.h3`
  font-size: 45px;
`;
const Color = styled.span`
  color: #ff004f;
`;
