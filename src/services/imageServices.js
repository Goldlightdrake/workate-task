import axiosClient from "./axiosClient";

const itemsPerPage = 3;

export const getImagesList = async ({ page = 1 }) => {
  return await axiosClient
    .get(`v2/list?page=${page}&limit=${itemsPerPage}`)
    .then((response) => {
      saveImagesToSessionStorage(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      throw Error(e.response);
    });
};

export const saveImagesToSessionStorage = (images) => {
  const imagesFromSessionStorage = getImagesFromSessionStorage();
  if (imagesFromSessionStorage) {
    sessionStorage.setItem(
      "images",
      JSON.stringify([...imagesFromSessionStorage, ...images])
    );
    return;
  }
  sessionStorage.setItem("images", JSON.stringify(images));
};

export const getImagesFromSessionStorage = () => {
  const imagesFromSessionStorage = JSON.parse(sessionStorage.getItem("images"));
  if (imagesFromSessionStorage) {
    return imagesFromSessionStorage;
  }
  return null;
};

export const saveLikedImageToLocalStorage = (image) => {
  const imagesFromLocalStorage = getLikedImagesFromLocalStorage();
  if (imagesFromLocalStorage) {
    localStorage.setItem(
      "likedImages",
      JSON.stringify([...imagesFromLocalStorage, image])
    );
    return;
  }
  localStorage.setItem("likedImages", JSON.stringify([image]));
};

export const removeLikedImageFromLocalStorage = (image) => {
  const imagesFromLocalStorage = getLikedImagesFromLocalStorage();
  if (imagesFromLocalStorage) {
    const imagesWithoutUnlikedImage = imagesFromLocalStorage.filter(
      (img) => img.id !== image.id
    );
    console.log(imagesWithoutUnlikedImage);
    localStorage.setItem(
      "likedImages",
      JSON.stringify(imagesWithoutUnlikedImage)
    );
    return;
  }
};

export const getLikedImagesFromLocalStorage = () => {
  const likeImagesFromLocalStorage = JSON.parse(
    localStorage.getItem("likedImages")
  );
  if (likeImagesFromLocalStorage) {
    return likeImagesFromLocalStorage;
  }
  return null;
};

export const isImageLikedFromLocalStorage = (image) => {
  const likeImagesFromLocalStorage = JSON.parse(
    localStorage.getItem("likedImages")
  );
  if (likeImagesFromLocalStorage) {
    return likeImagesFromLocalStorage.some((img) => img.id === image.id);
  }
  return false;
};
