import axiosClient from "./axiosClient";

const itemsPerPage = 3;

export const getImagesList = async ({ page }) => {
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
  const imagesFromSessionStorage = JSON.parse(sessionStorage.getItem("images"));
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
