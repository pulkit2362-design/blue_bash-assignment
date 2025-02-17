import React from "react";

import { useState } from "react";

const ComposeEmail = ({ onSendEmail, users, currentUser }) => {
  const [to, setTo] = useState(
    users.find((user) => user !== currentUser) || ""
  );
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSend = () => {
    if (!subject.trim()) {
      setError("Subject cannot be blank");
      return;
    }
    setError("");
    onSendEmail(to, currentUser, subject, body);
    setSubject("");
    setBody("");
  };

  return (
    <div className="mt-4 card border-secondary">
      <div className="card-header bg-secondary text-white">Compose Email</div>
      <div className="card-body">
        <p>
          <strong>From:</strong>{" "}
          {currentUser === "Jenny" ? "jeeny@gmail" : "john@yahoo.com"}
        </p>
        <select
          className="form-select mb-2"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {users
            .filter((user) => user !== currentUser)
            .map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
        </select>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <textarea
          className="form-control mb-2"
          placeholder="Message..."
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="btn btn-success w-100" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
