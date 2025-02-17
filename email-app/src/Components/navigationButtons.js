import React from "react";
const NavigationButtons = ({ setView }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <button
        className="btn btn-outline-primary mx-2"
        onClick={() => setView("inbox")}
      >
        Inbox
      </button>
      <button
        className="btn btn-outline-success mx-2"
        onClick={() => setView("compose")}
      >
        Compose Email
      </button>
    </div>
  );
};

export default NavigationButtons;
