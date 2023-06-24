import { React } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import FileDownloadLink from "../assets/image/Ajith.pdf";
import { useRef } from "react";
import { useEffect } from "react";

export default function Footer() {
  const [store, setStore] = useState(false);
  const [message, setMessage] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xmmdjj",
        "template_ig7w1ca",
        form.current,
        "l2wUE9tYg2M9cdike"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("successfully");
          setStore(!store);
        },
        (error) => {
          console.log(error.text);
          setMessage("Something Worng");
        }
      );
  };

  const social = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/ajith.sreegopakumar.1?mibextid=LQQJ4d",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/ajithsreegopakumar?igshid=MjEwN2IyYWYwYw==",
    },
    {
      icon: <FaWhatsappSquare />,
      link: "https://wa.me/9074417467",
    },
    {
      icon: <FaLinkedin />,
      link: "https://instagram.com/ajithsreegopakumar?igshid=MjEwN2IyYWYwYw==",
    },
  ];
  useEffect(() => {
    setName("");
    setEmail("");
    setText("");
  }, [store]);
  if (!store) {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  return (
    <div>
      <Container id="contact">
        <Wrapper className="Wrapper">
          <LeftSide>
            <Title>
              <Color>Contact </Color>Me
            </Title>
            <MailContiner>
              <LinkIcon>
                <AiOutlineMail />
              </LinkIcon>
              <Mail href="mailto: cg10ajith@gmail.com">
                cg10ajith@gmail.com
              </Mail>
            </MailContiner>
            <PhoneConatiner>
              <PhoneIcon>
                <AiTwotonePhone />
              </PhoneIcon>
              <Number href="tel:9074417467">9074417467</Number>
            </PhoneConatiner>
            <SocialMediaContiner>
              {social.map((item) => {
                return (
                  <Item href={item.link} target="_blank">
                    {item.icon}
                  </Item>
                );
              })}
            </SocialMediaContiner>
            <Download href={FileDownloadLink} download="cv">
              Download Cv
            </Download>
            {/* <DownloadContainer>
             
            </DownloadContainer> */}
          </LeftSide>
          <RightSide ref={form} onSubmit={sendEmail}>
            <NameInput
              name="from_name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Your name"
            />
            <MailInput
              name="from_email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email"
            />
            <TetxInput
              name="message"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Your message"
            />
            <SubmitButton onClick={sendEmail}>Submit</SubmitButton>
            <ErrorMessage>{message}</ErrorMessage>
          </RightSide>
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  padding: 60px 0px;
  @media (max-width: 480px) {
    padding: 50px 0px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  @media (max-width: 980px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.h3`
  font-size: 51px;
  margin-bottom: 40px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`;
const Color = styled.span`
  color: #7dc3ad;
`;
const MailContiner = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`;
const LinkIcon = styled.div`
  padding: 10px 11px;
  //   background: #7dc3ad;
  background: linear-gradient(rgb(36 40 38), rgb(125, 195, 173));
  border-radius: 50%;
`;
const Mail = styled.a`
  margin-left: 10px;
  text-decoration: none;
`;
const PhoneConatiner = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`;
const PhoneIcon = styled.div`
  padding: 10px 11px;
  //   background: #7dc3ad;
  background: linear-gradient(rgb(36 40 38), rgb(125, 195, 173));
  border-radius: 50%;
`;
const Number = styled.a`
  margin-left: 10px;
  text-decoration: none;
`;
const SocialMediaContiner = styled.div`
  margin-bottom: 30px;
  display: flex;
`;
const Item = styled.a`
  margin-left: 10px;
  font-size: 25px;
  &:first-child {
    margin-left: 0px;
  }
`;

const Download = styled.a`
  padding: 10px 20px;
  background: linear-gradient(rgb(36 40 38), rgb(125, 195, 173));
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
`;
const RightSide = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 980px) {
    width: unset;
  }
`;
const NameInput = styled.input`
  margin-bottom: 20px;
  padding: 20px 10px;
  -webkit-appearance: none;
  box-shadow: none !important;
  background: #242424;
  border: none;
  border-radius: 6px;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const MailInput = styled.input`
  margin-bottom: 20px;
  padding: 20px 10px;
  border-radius: 6px;
  background: #242424;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const TetxInput = styled.textarea`
  margin-bottom: 20px;
  border-radius: 6px;
  padding: 20px 10px;
  background: #242424;
  height: 100%;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.h3`
  padding: 10px 20px;
  background: linear-gradient(rgb(36 40 38), rgb(125, 195, 173));
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 19%;
  margin-top: 30px;
  border-radius: 6px;
`;
const ErrorMessage = styled.h6`
  margin-top: 5px;
  color: #7dc3ae;
`;
