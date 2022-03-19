import React from "react";
import styled from "styled-components";

import ImageGrid from "../../components/ImageGrid";
import BackgroundImage from "../../components/BackgroundImage";

const MainPageLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainPage = () => {
  return (
    <MainPageLayout>
      <BackgroundImage />
      <ImageGrid />
    </MainPageLayout>
  );
};

export default MainPage;
