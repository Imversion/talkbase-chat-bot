// reducers/chatReducer.js

import {
  ADD_MESSAGE,
  FETCH_ANSWER_FAILURE,
  FETCH_ANSWER_REQUEST,
  FETCH_ANSWER_SUCCESS,
  FETCH_URL_META_DATA,
  FETCH_URL_META_DATA_FAILURE,
  FETCH_URL_META_DATA_SUCCESS,
} from "./actions/actions";

const initialState = {
  messages: [],
  isGettingAnswer: false,
  error: null,
  sessionID: null,
  messageCount:0
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageCount: state.messageCount + 1,
        messages: [
          ...state.messages,
          { ...action.payload },
        ],
      };
    case FETCH_ANSWER_REQUEST:
      return {
        ...state,
        isGettingAnswer: true,
        error: null,
      };

    case FETCH_ANSWER_SUCCESS:
      return {
        ...state,
        isGettingAnswer: false,
        error: null,
      };

    case FETCH_ANSWER_FAILURE:
      return {
        ...state,
        isGettingAnswer: false,
        error: action.payload,
      };

    case FETCH_URL_META_DATA:
      return {
        ...state,
        isGettingAnswer: false,
        error: null,
      };

    case FETCH_URL_META_DATA_SUCCESS:
        return {
            ...state,
            messages: state.messages.map(message => {
            if(message.id === action.payload.id){
                const replacement = action.payload.response;
                replacement.messageKind = "bot-sources-meta"
                replacement.id = action.payload.id
                return replacement ? { ...replacement } : message;
            }
            else{
                return message;
            }
            }),
          };
    case FETCH_URL_META_DATA_FAILURE:
      return {
        ...state,
        isGettingAnswer: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

// Utility function to generate unique IDs. You can use libraries like 'uuid' for this.
function generateUniqueId() {
  // Implementation here...
}

export default chatReducer;
