import axios from "axios";

import ApiError from "./apiError";


const url = process.env.REACT_APP_BASE_URL;

const apiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

// apiService.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     setAuthToken(token);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

apiService.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let errorMsg = '';
      let status = null;
      let data = null;
  
      if (error.response) {
        errorMsg = error.response.data.message || error.response.statusText;
        status = error.response.status;
        data = error.response.data;
      } else if (error.request) {
        errorMsg = "No response received from the server.";
      } else {
        errorMsg = error.message;
      }
  
      // Throw the custom ApiError
      throw new ApiError(errorMsg, status, data);
    }
  );

export default apiService;
