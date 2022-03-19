import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const BackgroundImageSection = styled.section`
  width: 100%;
  height: 35vh;
  background-color: grey;
`;

const StyledParallax = styled(Parallax)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .react-parallax-bgimage {
    filter: brightness(40%) !important;
  }
`;

const BackgroundHeader = styled.h2`
  color: white;
  font-size: 8rem;
  @media (max-width: 1352px) {
    font-size: 6rem;
  }
  @media (max-width: 852px) {
    font-size: 3rem;
  }
`;

const BackgroundImage = () => {
  const generateSeed = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <BackgroundImageSection>
      <StyledParallax
        bgImage={`https://picsum.photos/seed/${generateSeed(5)}/2560/560`}
        strength={600}
      >
        <BackgroundHeader>Randterest</BackgroundHeader>
      </StyledParallax>
    </BackgroundImageSection>
  );
};

export default BackgroundImage;
