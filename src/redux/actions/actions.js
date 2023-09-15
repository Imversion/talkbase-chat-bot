export const ADD_MESSAGE = "ADD_MESSAGE";
export const FETCH_ANSWER_REQUEST = "FETCH_ANSWER_REQUEST";
export const FETCH_ANSWER_SUCCESS = "FETCH_ANSWER_SUCCESS";
export const FETCH_ANSWER_FAILURE = "FETCH_ANSWER_FAILURE";
export const FETCH_URL_META_DATA = "FETCH_URL_META_DATA";
export const FETCH_URL_META_DATA_SUCCESS = "FETCH_URL_META_DATA_SUCCESS";
export const FETCH_URL_META_DATA_FAILURE = "FETCH_URL_META_DATA_FAILURE";
// Action creators
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const fetchAnswerRequest = (question, chatbotID, orgID, sessionID) => ({
  type: FETCH_ANSWER_REQUEST,
  payload: { question, chatbotID, orgID, sessionID },
});

export const fetchAnswerSuccess = (answer) => ({
  type: FETCH_ANSWER_SUCCESS,
  payload: answer,
});

export const fetchAnswerFailure = (error) => ({
  type: FETCH_ANSWER_FAILURE,
  payload: error,
});

export const fetchUrlMetaData = (url) => ({
  type: FETCH_URL_META_DATA,
  payload: url,
});

export const fetchUrlMetaDataSuccess = (metaData) => ({
  type: FETCH_URL_META_DATA_SUCCESS,
  payload: metaData,
});

export const fetchUrlMetaDataFailure = (error) => ({
  type: FETCH_URL_META_DATA_FAILURE,
  payload: error,
});
