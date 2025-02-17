import React from "react";

const SendButton = ({ user, onSendMessage }) => {
  return (
    <button
      className={`btn ${user === "John" ? "btn-primary" : "btn-success"}`}
      onClick={() => onSendMessage(user)}
    >
      Send
    </button>
  );
};

export default SendButton;
