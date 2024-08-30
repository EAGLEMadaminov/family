import axios from "axios";

// const url = "https://vodiytezkoruz-aomcq.ondigitalocean.app";
const url = "http://localhost:4000";
const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: false,
});

export default axiosInstance;
