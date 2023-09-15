class ApiError extends Error {
    constructor(message, status, data) {
      super(message);
      this.name = "ApiError";
      this.status = status; // HTTP status code
      this.data = data;    // Any additional data from the response
    }
  }
  
  export default ApiError;
