import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

export default function Portfolio() {
  const [isopen, setOpen] = useState();
  const works = [
    {
      id: 1,
      image: require("../assets/image/work-3.png"),
      work_name: "Shopping Cart Web App",
      link: "https://j-store-a5ec8.web.app/",
      description:
        "Shopping Cart Project in React JS using Context API with useReducer Hook for State Management. This project include add to cart functionality along with sorting and filtering products by search also.",
    },
    {
      id: 2,
      image: require("../assets/image/work-1.png"),
      work_name: "Angel Investing Web App",
      link: "https://taid-clone.firebaseapp.com/",
      description:
        " TAID is a platform for potential Angel Investors to learn and understand different aspects of Angel Investing including its risks and benefits and invest in various startups",
    },
    {
      id: 3,
      image: require("../assets/image/evnent_work.jpg"),
      work_name: "Evently Web App",
      link: "https://eventbliss-3iyg.vercel.app/",
      description:
        " Build an event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk, and Stripe.",
    },
    {
      id: 4,
      image: require("../assets/image/SkyEurope_logo.jpg"),
      work_name: "skyeuro Web App",
      link: "https://skyeuro.vercel.app/index.html",
      description:
        " By implementing these elements into the HTML template, the Skeyeuro International website effectively showcases its services, facilitates communication through WhatsApp integration, and provides valuable country-specific information to visitors.",
    },
  ];

  return (
    <div>
      <Container id="portfolio">
        <Wrapper className="Wrapper">
          <TopConatiner>
            <Title>
              <Color>My</Color> Work
            </Title>
          </TopConatiner>
          <BottomConatiner>
            {works.map((data) => {
              return (
                <Works>
                  <Item
                    href={data.link}
                    onMouseOver={() => {
                      setOpen(data.id);
                    }}
                    onMouseLeave={() => setOpen("")}
                  >
                    <Image src={data.image} />
                    <DetailsConatiner className={isopen === data.id && "hover"}>
                      <WorkName>{data.work_name}</WorkName>
                      <WorkDescription>{data.description}</WorkDescription>
                      <WorkLink>
                        <FiExternalLink />
                      </WorkLink>
                    </DetailsConatiner>
                  </Item>
                </Works>
              );
            })}
          </BottomConatiner>
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding-top: 60px;
  @media (max-width: 480px) {
    padding-top: 20px;
  }
`;
const Wrapper = styled.div``;
const TopConatiner = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.h3`
  font-size: 40px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`;
const Color = styled.span`
  color: #7dc3ad;
`;
const BottomConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-gap: 15px;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Works = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Item = styled.a``;

// const ImageConatiner = styled.div`
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// `;
const Image = styled.img`
  display: block;
  height: 60vh;

  border-radius: 12px;
  width: 100%;
`;
const DetailsConatiner = styled.div`
  width: 100%;
  height: 0;
  text-align: center;
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
const WorkName = styled.h5`
  font-size: 25px;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;
const WorkDescription = styled.p`
  margin-bottom: 10px;
`;
const WorkLink = styled.div`
  font-size: 30px;
`;
