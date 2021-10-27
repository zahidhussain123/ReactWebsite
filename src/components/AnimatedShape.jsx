import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: lightblue;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  animation: square 25s alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
  top: 200px;
  left: -100px;
  animation: circle 25s alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Rectangle = styled.div`
  width: 50px;
  height: 80px;
  background-color: green;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  animation: rect 25s alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
const AnimatedShape = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

export default AnimatedShape;
