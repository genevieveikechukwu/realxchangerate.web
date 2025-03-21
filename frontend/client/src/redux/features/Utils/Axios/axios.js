import axios from "axios";

const baseURL = "https://api.streetrates.hng.tech/api";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL,
  headers,
  timeout: 60000,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export default axiosInstance;
