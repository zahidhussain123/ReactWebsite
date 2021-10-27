import React from "react";
import styled from "styled-components";
import App from "../images/cc.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  } ;
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;

const Image = styled.img`
  margin-left: 50px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Title = styled.span`
  font-size: 70px;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  } ;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  color: gray;
  font-size: 20px;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>Well</b> <span>_</span> Begin <br></br>
          <b>Half</b> <span> _</span> Done
        </Title>
        <SubTitle>We know that good start means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences and print materials that communicate clearly, achieve
          marketing goals and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarentee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Feature;
