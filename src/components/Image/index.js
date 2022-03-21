import React, { useState } from "react";
import styled from "styled-components";

import Fab from "@mui/material/Fab";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  saveLikedImageToLocalStorage,
  removeLikedImageFromLocalStorage,
  isImageLikedFromLocalStorage,
} from "../../services/imageServices";

const imageBaseUrl = "http://source.unsplash.com/";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
  border-radius: 1.5rem;
  position: relative;
  filter: brightness(100%);
  &:hover > img {
    filter: brightness(60%);
  }
`;

const ImagePicture = styled.img`
  transition: all 1s ease;
  height: 30rem;
  width: 40rem;
  display: ${(props) => (props.isLoading ? "none" : "block")};
  border-radius: 1.5rem;
  @media (max-width: 944px) {
    height: 25rem;
    width: 35rem;
  }
  @media (max-width: 440px) {
    height: 20rem;
    width: 30rem;
  }
`;

const ImageAuthor = styled.span`
  position: absolute;
  color: white;
  font-size: 2rem;
  top: 3rem;
  font-weight: 600;
`;

const ImageAddToFav = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const StyledSkeleton = styled(Skeleton)`
  //Can't get around removing !important here. Tried with overwriting
  // mui class within styled compontent but it doesn't worked.
  width: 40rem !important;
  height: 30rem !important;
  border-radius: 1.5rem;
  @media (max-width: 944px) {
    height: 25rem !important;
    width: 35rem !important;
  }
  @media (max-width: 440px) {
    height: 20rem !important;
    width: 30rem !important;
  }
`;

const Image = ({ image }) => {
  const [loading, setLoading] = useState(true);
  const [imageToggled, setImageToggled] = useState(false);
  const [favorite, setFavorite] = useState(isImageLikedFromLocalStorage(image));
  const { author, url } = image;
  const imageUrl = imageBaseUrl + url.split("/")[4];

  return (
    <ImageContainer
      onMouseOver={() => setImageToggled(true)}
      onMouseLeave={() => setImageToggled(false)}
      data-testid="image-container"
    >
      <StyledSkeleton
        data-testid="skeleton"
        variant="rectangular"
        animation="wave"
        sx={{ display: loading ? "block" : "none" }}
      />
      <ImagePicture
        data-testid="image"
        isLoading={loading}
        src={imageUrl}
        onLoad={() => setLoading(false)}
      />
      {imageToggled && (
        <>
          <ImageAuthor>{author}</ImageAuthor>
          <ImageAddToFav>
            <Fab
              aria-label="like"
              onClick={() => {
                setFavorite(!favorite);
                //Because we are using setState in this scope we must make our localStorage saving reversed.
                if (favorite) {
                  removeLikedImageFromLocalStorage(image);
                } else {
                  saveLikedImageToLocalStorage(image);
                }
              }}
            >
              <FavoriteIcon fontSize="large" color={favorite ? "error" : ""} />
            </Fab>
          </ImageAddToFav>
        </>
      )}
    </ImageContainer>
  );
};

export default Image;
