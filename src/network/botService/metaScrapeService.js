import apiService from "../base/apiService";
import ApiError from "../base/apiError";

export const fetchMetaScrape = async (urls) => {
  try {
    
    const response = await apiService.post(`/url-meta`, {
        urls: urls
    });
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      // Handle the custom error
      console.error(`Error [${error.status}]: ${error.message}`, error.data);
    } else {
      // Handle other types of errors
      console.error("Unknown error:", error.message);
    }
    throw error;
  }
};
