import React from "react";
import styled from "styled-components";

export default function Header() {
  const nav = ["Home", "About", "Services", "Portfolio", "Contact"];
  return (
    <div>
      <Container>
        <Wrapper className="Wrapper">
          <LeftSide>
            <Logo>Ajith.</Logo>
          </LeftSide>
          <RightSide>
            <Box>
              {nav.map((data) => {
                return <Item>{data}</Item>;
              })}
            </Box>
          </RightSide>
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
const LeftSide = styled.div``;
const Logo = styled.h1`
  &::first-letter {
    color: #ff004f;
  }
`;
const RightSide = styled.div`
  width: 40%;
`;
const Box = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
`;
const Item = styled.li`
  font-size: 18px;
  position: relative;
  cursor: pointer;
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
