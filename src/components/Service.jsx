import React from "react";
import styled from "styled-components";
import newgirl from "../images/gg3.png";
import MiniCard from "./MiniCard";
import play from "../images/play.png";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100vh;
  width: 100%;
  object-fit: cover;
  margin-left: 5px;
  
`;

const Video = styled.video`
  height: 100%;
  display: ${(props) => !props.open && "none"};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 70%;
  } ;
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  } ;
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  padding: 15px;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Model = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ClosedButton = styled.button`
  padding: 15px;
  background-color: wheat;
  border: none;
  top: 50px;
  left: 250px;
  position: absolute;
  border-radius: 5px;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const SmallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src={newgirl} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/458886084.sd.mp4?s=57655129e3b533362cfa45815d57632d303d4b70&profile_id=165&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experiences services to startups and small
            businesses to looking for a partner of their digital media ,design
            and development,lead generation and communication requirements.We
            work with you,not for you.Although ,we have a great resources.
          </Desc>

          <Card>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </Card>
          <Button onClick={() => setOpen(true)}>
            <Icon src={play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {SmallScreen && open && (
        <Model>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/458886084.sd.mp4?s=57655129e3b533362cfa45815d57632d303d4b70&profile_id=165&oauth2_token_id=57447761"
          />
          <ClosedButton onClick={() => setOpen(false)}>Click</ClosedButton>
        </Model>
      )}
    </Container>
  );
};

export default Service;
