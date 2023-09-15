import { fetchAnswer } from "../../network/botService/answerService";
import { fetchMetaScrapeAction } from "./fetchMetaScrapeAction";
import { addMessage } from "./actions";

export const fetchAnswerAction =
  (userInput, chatbotID, orgID, sessionID) => async (dispatch, getState) => {
    dispatch({ type: "FETCH_ANSWER_REQUEST" });
    try {
      const botMessage = await fetchAnswer(
        userInput,
        chatbotID,
        orgID,
        sessionID
      );

      dispatch({ type: "FETCH_ANSWER_SUCCESS", payload: botMessage });
      dispatch(
        addMessage({
          messageKind: "bot",
          id: getState().chat.messageCount + 1,
          content: botMessage.data.attributes.answer,
          answer_status: botMessage.data.attributes.answer_status,
          api_source: botMessage.data.attributes.api_source,
          createdAt: botMessage.data.attributes.createdAt,
          chatbotID: botMessage.data.attributes.kb_id,
          sessionID: botMessage.data.attributes.sesssion,
        })
      );

      botMessage.data.attributes.sources.forEach((source) => {
        const id = getState().chat.messageCount + 1;
        dispatch(
          addMessage({
            id: id,
            messageKind: "bot-sources",
            content: source,
          })
        );
        dispatch(fetchMetaScrapeAction(id, source));
      });
    } catch (error) {
      const id = getState().chat.messageCount + 1;
      dispatch(
        addMessage({
          id: id,
          messageKind: "bot",
          content: "I'm sorry, I couldn't find an answer to that. Please try rephrasing your question or provide more context?.",
        })
      );
      dispatch({ type: "FETCH_ANSWER_FAILURE", payload: error.message });
    }
  };
