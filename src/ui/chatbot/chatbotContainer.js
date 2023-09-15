import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/actions/actions";
import ChatbotUI from "./chatbotUI";
import "./chatbotUI.css";
import { fetchAnswerAction } from "../../redux/actions/fetchAnswerAction";

const organization = "4ff2d4c0-c96e-4125-82be-28dfb15d0bdf";
const kbid = "e39140ef-fa16-49e7-b656-f86bf5be0d16";
const defaultInitialMessage = {
  messageKind: "bot",
  content:
    "🔍 Want to know about our business or products? I've got the answers.",
};

const suggestedQuestions = [
  "How does this work?   \u{1F4BC}",
  "Can you show me a demo? \u{1F3AC}",
  "What are your features? \u{1f31f}",
];

const aiAgentNames = [
  "Ava",
  "Benji",
  "Chetan",
  "Daisy",
  "Esha",
  "Finn",
  "Gita",
  "Hugo",
  "Isha",
  "Jasper",
  "Kavi",
  "Lila",
  "Meera",
  "Nico",
  "Olive",
  "Priya",
  "Quinn",
  "Rani",
  "Surya",
  "Zoe",
];

const agentName = aiAgentNames[Math.floor(Math.random() * aiAgentNames.length)];
const ChatbotContainer = (sessionID) => {
  const dispatch = useDispatch();
  const isGettingAnswer = useSelector((state) => state.chat.isGettingAnswer);
  const messages = useSelector((state) => state.chat.messages);
  const theme = useSelector((state) => state.theme);

  const handleSendMessage = (message) => {
    dispatch(addMessage({ messageKind: "user", content: message }));
    dispatch(fetchAnswerAction(message, kbid, organization, sessionID));
  };

  return (
    <div className="chatbot-area">
      <ChatbotUI
        messages={messages}
        theme={theme}
        onSendMessage={handleSendMessage}
        isLoading={isGettingAnswer}
        defaultInitialMessage={defaultInitialMessage}
        suggestedQuestions={suggestedQuestions}
        agentName={agentName}
      />
    </div>
  );
};

export default ChatbotContainer;
