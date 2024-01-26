/** @format */

// Cat.js

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  0% {
    background-color: #ffb6c1;
  }
  25% {
    background-color: #a7e6da;
  }
  50% {
    background-color: #f1c6e6;
  }
  75% {
    background-color: #c5e3cf;
  }
  100% {
    background-color: #ffb6c1;
  }
`;

const disintegrate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
  }
`;

const shatter = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-100px) translateX(50px);
  }
`;

const CatContainer = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  background-color: #ffb6c1;
  border-radius: 10px 10px 60px 60px;
  overflow: hidden;
  animation: ${colorChange} 5s infinite alternate;
  transition: transform 0.5s;
  cursor: pointer;

  &.clicked {
    animation: ${disintegrate} 0.8s ease-out forwards,
      ${shatter} 1.5s ease-out 0.8s forwards;
  }
`;

const Ear = styled.div`
  position: absolute;
  width: 60px;
  height: 100px;
  background-color: #ffb6c1;
  border-radius: 50%;
  top: -30px;
  left: ${(props) => props.left}px;
`;

const InnerEar = styled.div`
  position: absolute;
  width: 40px;
  height: 80px;
  background-color: #e86d6d;
  border-radius: 50%;
  top: 10px;
  left: 10px;
`;

const Eye = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  top: 50px;
  left: ${(props) => props.left}px;
`;

const Pupil = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  top: 5px;
  left: 5px;
`;

const Nose = styled.div`
  position: absolute;
  width: 8px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
  top: 73px;
  left: ${(props) => props.left}px;
`;

const Mouth = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  background-color: #000;
  border-radius: 0 0 20px 20px;
  top: 85px;
  left: ${(props) => props.left}px;
  transform: rotate(${(props) => props.rotation}deg);
`;

const Whisker = styled.div`
  position: absolute;
  width: 40px;
  height: 2px;
  background-color: #000;
  top: 90px;
  left: ${(props) => props.left}px;
  transform-origin: top ${(props) => props.origin};
  transform: rotate(${(props) => props.rotation}deg);
`;

const Cat = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <CatContainer
      className={isClicked ? "clicked" : ""}
      onClick={handleClick}>
      <Ear className="ear-left">
        <InnerEar />
      </Ear>
      <Ear
        left={140}
        className="ear-right">
        <InnerEar />
      </Ear>
      <Eye
        className="lefteye"
        left={60}>
        <Pupil />
      </Eye>
      <Eye
        className="righteye"
        left={120}>
        <Pupil />
      </Eye>
      <Nose
        className="leftnose"
        left={94}
      />
      <Nose
        className="rightnose"
        left={100}
      />
      <Mouth
        className="leftmouth"
        left={86}
        rotation={90}
      />
      <Mouth
        className="rightmouth"
        left={95}
        rotation={-90}
      />
      <Whisker
        className="leftwhisker"
        left={40}
        origin="right"
        rotation={20}
      />
      <Whisker
        className="leftwhisker"
        left={40}
        origin="right"
        rotation={-20}
      />
      <Whisker
        className="leftwhisker"
        left={40}
        origin="right"
        rotation={0}
      />
      <Whisker
        className="rightwhisker"
        left={120}
        origin="left"
        rotation={20}
      />
      <Whisker
        className="rightwhisker"
        left={120}
        origin="left"
        rotation={0}
      />
      <Whisker
        className="rightwhisker"
        left={120}
        origin="left"
        rotation={-20}
      />
    </CatContainer>
  );
};

export default Cat;
