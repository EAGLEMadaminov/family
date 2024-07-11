import axios from 'axios';

// const url = 'https://seashell-app-xgxae.ondigitalocean.app';
const url = 'http://localhost:3000';
const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: false,
});

export default axiosInstance;
