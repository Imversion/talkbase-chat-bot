import React, { useState, useRef, useEffect } from "react";
import "./chatbotUI.css";
import "../chatBubbles/chatBubble.css";
import LineLoadingIndicator from "../lineLoadindIndicator";
import ChatBubble from "../chatBubbles/chatBubble";
import LinkPreview from "../chatBubbles/linkPreviewComponent";

const ChatbotUI = ({
  messages,
  onSendMessage,
  theme,
  isLoading,
  defaultInitialMessage,
  suggestedQuestions,
  agentName,
}) => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const messagesEndRef = useRef(null);
  const dot = "\u00b7";

  const handleSendMessage = (msg) => {
    if (msg.trim()) {
      setMessage("");
      setIsSent(true);
      onSendMessage(msg); // Set isSent to true when message is sent

      // Reset isSent after a short delay
      setTimeout(() => {
        setIsSent(false);
      }, 300);
    }
  };

  const handleClose = () => {};

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className="chatbot-container"
      style={{ fontFamily: theme.primaryFont, color: theme.textColor }}
    >
      <div
        className="chatbot-header"
        style={{ backgroundColor: theme.headerColor, color: theme.textColor }}
      >
        <div className="header-info">
          <h2>{agentName}</h2>
          <div className="status">
            <span className="online-indicator"></span>
            <span style={{ fontWeight: 600, fontSize: 13 }}>
              Online {dot} Avg response time is 5 seconds
            </span>
          </div>
        </div>
        <button
          className="icon-button"
          onClick={() => {
            handleClose();
          }}
          style={{ color: theme.textColor }}
        >
          {"\u02df"}
        </button>
      </div>
      <div
        className="message-container"
        style={{ backgroundColor: theme.bgColor }}
      >
        {messages.length === 0 ? (
          <ChatBubble message={defaultInitialMessage} theme={theme} index={0} />
        ) : (
          <div></div>
        )}
        {messages.length === 0 ? (
          <div className="suggested-questions">
            {suggestedQuestions.map((question, index) => (
              <div
                style={{
                  color: theme.userBubbleTextColor,
                  backgroundColor: theme.userBubbleColor,
                }}
                key={index}
                className="suggested-question"
                onClick={() => {
                  setMessage(question);
                  handleSendMessage(question);
                }}
              >
                {question}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {Array.isArray(messages) &&
          messages.map((msg, index) =>
            msg.messageKind === "bot-sources-meta" ? (
              <LinkPreview
                theme={theme}
                title={msg.title}
                imageUrl={msg.image}
                description={msg.description}
                url={msg.url}
              />
            ) : (
              <ChatBubble
                message={msg}
                theme={theme}
                index={index}
                agentName={agentName}
              />
            )
          )}
        <div ref={messagesEndRef}></div>
      </div>
      <LineLoadingIndicator loading={isLoading} theme={theme} />
      <div
        className="chatbot-input-area"
        style={{ backgroundColor: theme.inputBackgroundColor }}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            borderColor: theme.headerColor,
            color: theme.inputTextColor,
          }}
        />
        <button
          disabled={isLoading || message.trim() === ""}
          className="send-button"
          onClick={() => {
            handleSendMessage(message);
          }}
          style={{
            color: theme.textColor,
            backgroundColor: theme.headerColor,
    
          
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;
