import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 8px;
  padding: 20px;
  box-shadow: 4px -5px 19px 6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px -5px 19px 6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px -5px 19px 6px rgba(0, 0, 0, 0.75);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  } ;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  } ;
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  background-color: white;
  color: crimson;
  border-radius: 10px;
  @media only screen and (max-width: 480px) {
    display: none;
  } ;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 20px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
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
    font-size: 12px;  } ;
`;

const PriceCart = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>

      <List>
        <ListItem>200 handcrafted templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>100+ pre built websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCart;
