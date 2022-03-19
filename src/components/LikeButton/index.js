import React from "react";
import styled, { keyframes } from "styled-components";

const size = "100px";
const frames = 62;

const like = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: calc(${size} * ${frames} * -1 + 3);
  }
`;

const LikeButtonInput = styled.input`
  display: none;
`;

const LikeButtonHearth = styled.div`
  background-image: url("https://assets.codepen.io/23500/Hashflag-AppleEvent.svg");
  background-size: calc(${size} * ${frames}) ${size};
  background-repeat: no-repeat;
  background-position-x: calc(${size} * (${frames} * -1 + 2));
  background-position-y: calc(${size} * 0.02);
  width: ${size};
  height: ${size};
  ${LikeButtonInput}:checked + & {
    animation: ${like} 1s steps(calc(${frames} - 3));
    animation-fill-mode: forwards;
  }
`;

const LikeButtonContainer = styled.label`
  user-select: none;
  display: block;
  width: ${size};
  height: ${size};
  cursor: pointer;
  border-radius: 999px;
  overflow: visible;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  @media (hover: hover) {
    &:hover {
      background-color: #e1255e15;
      ${LikeButtonHearth} {
        background-position-x: calc(${size} * (${frames} * -1 + 1));
      }
    }
  }
`;

const LikeButton = () => {
  return (
    <LikeButtonContainer>
      <LikeButtonInput type="checkbox" />
      <LikeButtonHearth />
    </LikeButtonContainer>
  );
};

export default LikeButton;
