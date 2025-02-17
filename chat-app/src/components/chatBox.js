import React, { useRef } from "react";
import SendButton from "./sendButton";

const ChatBox = ({
  user,
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
}) => {
  const textAreaRef = useRef(null);
  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Insert a new line
        e.preventDefault();
        onInputChange(user, inputValue + "\n");
        setTimeout(adjustHeight, 0);
      } else {
        e.preventDefault();
        onSendMessage(user);
        setTimeout(() => {
          if (textAreaRef.current) {
            textAreaRef.current.style.height = "40px";
          }
        }, 0);
      }
    }
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <div
          className={`card-header text-white ${
            user === "John" ? "bg-primary" : "bg-success"
          }`}
        >
          {user}
        </div>
        <div
          className="card-body chat-box"
          style={{ height: "70vh", overflowY: "auto" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${
                msg.sender === user
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`alert ${
                  msg.sender === user
                    ? user === "John"
                      ? "alert-primary"
                      : "alert-success"
                    : "alert-secondary"
                }`}
                style={{ maxWidth: "75%" }}
              >
                {msg.text}
                <div
                  className="text-muted"
                  style={{
                    fontSize: "12px",
                    textAlign: msg.sender === user ? "right" : "left",
                  }}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer d-flex">
          <textarea
            ref={textAreaRef}
            className="form-control me-2"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => {
              onInputChange(user, e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{ maxHeight: "150px", overflowY: "auto" }}
          />
          <SendButton user={user} onSendMessage={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
