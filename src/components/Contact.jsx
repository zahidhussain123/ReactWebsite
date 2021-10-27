import React from "react";
import styled from "styled-components";
import map from "../images/map.png";
import phone from "../images/phone.png";
import send from "../images/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://i.pinimg.com/originals/4a/37/c3/4a37c32793009833a38a9ea9a9f5b8a5.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  } ;
`;

const Title = styled.h1`
  margin: 60px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  } ;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  } ;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 50%;
  } ;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  } ;
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
    align-self: center;
  } ;
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 15px;
    margin-top: 10px;
  } ;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  } ;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  } ;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  } ;
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  } ;
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={map} />
            <Text>Police line,H-10 Islamic IIUI,Islamabad</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={phone} />
            <Text>+92 305 9488689</Text>
            <Text>+92 335 5615732</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={send} />
            <Text>zahid4307@gmail.com</Text>
            <Text>zaid345@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
