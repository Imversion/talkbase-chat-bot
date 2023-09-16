import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// import { CSSTransition } from "react-transition-group";
import "./chatBubble.css"; // Import the CSS for animations

const ChatBubble = ({ message, theme, index , agentName }) => {
  return (
    // <CSSTransition
    //   in={true} // Always true for this use case
    //   timeout={300} // Duration of animation in milliseconds
    //   classNames="chat-bubble-animation"
    //   appear
    // >
      <div
        className={
          message.messageKind === "user"
            ? `chat-bubble user`
            : `chat-bubble bot`
        }
        style={{
          backgroundColor:
            message.messageKind === "bot"
              ? theme.botBubbleColor
              : theme.userBubbleColor,
        }}
      >
        <div
          key={index}
          style={{
            color:
              message.messageKind === "bot-sources"
                ? theme.linkColor
                : message.messageKind === "user"
                ? theme.userBubbleTextColor
                : theme.botBubbleTextColor,
          }}
        >
          <ReactMarkdown remarkPlugins={[gfm]} children={message.content} />
        </div>
        <span
          className="sender-name"
          style={{
            color:
              message.messageKind === "user"
                ? theme.userBubbleTextColor
                : theme.botBubbleTextColor,
          }}
        >
          {message.messageKind === "user" ? "You" : agentName}
        </span>
      </div>
    // </CSSTransition>
  );
};

export default ChatBubble;
