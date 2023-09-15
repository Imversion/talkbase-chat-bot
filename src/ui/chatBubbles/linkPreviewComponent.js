import React from "react";
import "./chatBubble.css";

const LinkPreview = ({ theme, imageUrl, url, title, description }) => {
  return (
    <div
      onClick={() => {
        window.open(`https://${process.env.REACT_APP_TRACKER_PAGE_PATH}?url=`+url, '_blank');
      }}
      className="link-preview chat-bubble link"
      style={{
        backgroundColor: theme.botBubbleColor,
        border: `1px solid ${theme.botBubbleColor}`,
      }}
    >
      <img src={imageUrl} alt="Link Image" />
      <h4
        className="link-preview-title"
        style={{
          color: theme.botBubbleTextColor,
        }}
      >
        {title}
      </h4>
      <a
        href={url}
        className="link-preview-url"
        style={{
          color: theme.linkColor,
        }}
      >
        {url}
      </a>
      <p
        className="link-preview-description"
        style={{
          color: theme.botBubbleTextColor,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default LinkPreview;
