import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const nav = ["Home", "About", "Portfolio", "Contact"];
  const navbar = [
    {
      menu: "Home",
      link: "home",
    },
    {
      menu: "About",
      link: "about",
    },
    {
      menu: "Portfolio",
      link: "portfolio",
    },
    {
      menu: "Contact",
      link: "contact",
    },
  ];

  const [isopen, setOpen] = useState(false);
  return (
    <div>
      <Container>
        <Wrapper className="Wrapper">
          <LeftSide>
            <Logo> Ajith.</Logo>
          </LeftSide>
          <RightSide>
            <Box>
              {navbar.map((data) => {
                return (
                  <Item>
                    <Link
                      to={data.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      delay={1000}
                    >
                      {data.menu}
                    </Link>
                  </Item>
                );
              })}
              <MenuIcon
                onClick={() => {
                  setOpen(true);
                }}
              >
                <AiOutlineMenu />
              </MenuIcon>
            </Box>
            <MobileNav className={isopen && "active"}>
              <IconConatiner
                onClick={() => {
                  setOpen(false);
                }}
              >
                <AiOutlineClose />
              </IconConatiner>

              {navbar.map((item) => {
                return (
                  <Li>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      delay={1000}
                    >
                      {item.menu}
                    </Link>
                  </Li>
                );
              })}
            </MobileNav>
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
  font-weight: 700;

  &::first-letter {
    color: #7dc3ad;
  }
`;
const RightSide = styled.div`
  width: 40%;
  @media (max-width: 980px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 640px) {
    width: 75%;
  }
`;
const Box = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    justify-content: end;
  }
`;
const MenuIcon = styled.div`
  display: none;
  font-size: 25px;

  @media (max-width: 480px) {
    display: block;
  }
`;
const Item = styled.li`
  font-size: 18px;
  font-weight: 700;

  position: relative;
  cursor: pointer;
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
  &::first-letter {
    color: rgb(125, 195, 173);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
const MobileNav = styled.div`
  width: 200px;
  padding: 20px;
  z-index: 3;
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgb(125, 195, 173));
  top: 0;
  overflow: hidden;
  right: -250px;
  height: 100vh;
  display: flex;
  transition: all ease-in 0.5s;
  flex-direction: column;
  // justify-content: space-around;
  &.active {
    right: 0px;
    transition: all ease-in 0.5s;
  }
`;
const IconConatiner = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
`;
const Li = styled.li`
  margin-bottom: 40px;
`;
