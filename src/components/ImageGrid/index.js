import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Image from "../Image";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  getImagesFromSessionStorage,
  getImagesList,
} from "../../services/imageServices";

const ImageGridSection = styled.section`
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ImageGridContainer = styled.section`
  transition: all 1s ease;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5rem 0;
  gap: 4rem;
  @media (max-width: 1352px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 852px) {
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setPage(page + 1);
    setLoading(true);
    getImagesList({ page: page })
      .then((fetchedImages) => {
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
        setLoading(false);
      })
      .catch((e) => {
        alert(
          "Coś poszło nie tak, sprawdź swoje połączenie internetowe i odśwież strone."
        );
        setError(e);
      });
  };

  useEffect(() => {
    const imagesFromSessionStorage = getImagesFromSessionStorage();
    if (imagesFromSessionStorage) {
      setImages(imagesFromSessionStorage);
      setPage(Math.floor(imagesFromSessionStorage.length / 3) + 1);
    } else {
      setLoading(true);
      getImagesList({ page: 1 })
        .then((fetchedImages) => {
          setImages((prevImages) => [...prevImages, ...fetchedImages]);
          setLoading(false);
        })
        .catch((e) => {
          alert(
            "Coś poszło nie tak, sprawdź swoje połączenie internetowe i odśwież strone."
          );
          setError(e);
        });
    }
  }, []);

  return (
    <ImageGridSection>
      <ImageGridContainer>
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </ImageGridContainer>
      {!error && (
        <LoadingButton
          sx={{
            width: 200,
            height: 50,
            fontSize: 16,
          }}
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Ładuje..."
          variant="contained"
        >
          Załaduj więcej
        </LoadingButton>
      )}
    </ImageGridSection>
  );
};

export default ImageGrid;
