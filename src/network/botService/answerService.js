import apiService from "../base/apiService";
import ApiError from "../base/apiError";

export const fetchAnswer = async (question, chatbotID, orgID, sessionID , agentID) => {
  try {
    
    const response = await apiService.post(`/askquestion`, {
      question: question,
      kb_id: chatbotID,
      org_id: orgID,
      session_id: sessionID,
      agentID: agentID === undefined ? process.env.REACT_APP_DEFAULT_AGENT_ID : agentID
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
