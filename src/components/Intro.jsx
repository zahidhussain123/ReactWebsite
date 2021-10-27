import React from "react";
import styled from "styled-components";
import download from "../images/gg.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  } ;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  } ;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: wheat;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
  } ;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  font-weight: bold;
  color: #f8667d;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in Early Age</Title>
        <Desc>
          We believe that designing Products and Services in close partnership
          with our clients is the only way to have a real impact on business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us at: 03059488689</Phone>
            <ContactText>For any question?</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={download}></Image>
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Intro;
