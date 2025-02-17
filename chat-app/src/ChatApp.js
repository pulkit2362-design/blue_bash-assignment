import React, { useState, useEffect } from "react";
import ChatBox from "./components/chatBox";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputs, setInputs] = useState({ John: "", Jenny: "" });

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleInputChange = (user, value) => {
    setInputs((prev) => ({ ...prev, [user]: value }));
  };

  const sendMessage = (user) => {
    if (!inputs[user].trim()) return;

    const newMessage = {
      sender: user,
      text: inputs[user],
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

    setInputs((prev) => ({ ...prev, [user]: "" }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">CHAT APP</h2>
      <div className="row">
        <ChatBox
          user="John"
          messages={messages}
          inputValue={inputs["John"]}
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
        />
        <ChatBox
          user="Jenny"
          messages={messages}
          inputValue={inputs["Jenny"]}
          onInputChange={handleInputChange}
          onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatApp;
