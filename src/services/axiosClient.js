import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://picsum.photos/",
  timeout: 2500,
});

export default axiosClient;
