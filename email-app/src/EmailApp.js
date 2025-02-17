import React, { useState, useEffect } from "react";
import UserSwitcher from "./Components/userSwitcher";
import NavigationButtons from "./Components/navigationButtons";
import Inbox from "./Components/inbox";
import ComposeEmail from "./Components/composeEmail";

const users = {
  Jenny: "jenny@2025",
  John: "john@2024",
};

const EmailApp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [emails, setEmails] = useState(() => {
    const savedEmails = localStorage.getItem("emails");
    return savedEmails ? JSON.parse(savedEmails) : { Jenny: [], John: [] };
  });

  const [notifications, setNotifications] = useState({ Jenny: 0, John: 0 });
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [view, setView] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const sendEmail = (to, from, subject, body) => {
    const newEmail = { from, to, subject, body, unread: true, starred: false };
    setEmails((prev) => ({ ...prev, [to]: [newEmail, ...prev[to]] })); // Add new email at the top
    setNotifications((prev) => ({ ...prev, [to]: prev[to] + 1 }));
  };

  const deleteEmail = (index) => {
    setEmails((prev) => ({
      ...prev,
      [currentUser]: prev[currentUser].filter((_, i) => i !== index),
    }));
    setSelectedEmail(null);
  };

  const toggleStar = (index) => {
    setEmails((prev) => {
      const updatedEmails = [...prev[currentUser]];
      updatedEmails[index].starred = !updatedEmails[index].starred;
      return { ...prev, [currentUser]: updatedEmails };
    });
  };

  const handleLogin = () => {
    if (users[selectedUser] === password) {
      setCurrentUser(selectedUser);
      setNotifications((prev) => ({ ...prev, [selectedUser]: 0 }));
      setSelectedEmail(null);
      setView("inbox");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedUser(null);
    setPassword("");
    setView(null);
  };

  if (!currentUser) {
    return (
      <div className="container mt-4 text-center">
        <h2>Hey! Which account do you want to log in?</h2>
        {!selectedUser ? (
          <>
            <UserSwitcher
              users={Object.keys(users)}
              currentUser={currentUser}
              openInbox={setCurrentUser}
              notifications={notifications}
            />
          </>
        ) : (
          <div>
            <h3>Enter password for {selectedUser}</h3>
            <input
              type="password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-success m-2" onClick={handleLogin}>
              Login
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => setSelectedUser(null)}
            >
              Back
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center mb-4">Hey {currentUser}!</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <NavigationButtons setView={setView} />
      {view === "inbox" && (
        <Inbox
          emails={emails[currentUser]}
          openEmail={(index) => {
            const updatedEmails = [...emails[currentUser]];
            updatedEmails[index].unread = false;
            setEmails((prev) => ({ ...prev, [currentUser]: updatedEmails }));
            setSelectedEmail(updatedEmails[index]);
          }}
          deleteEmail={deleteEmail}
          toggleStar={toggleStar}
          selectedEmail={selectedEmail}
        />
      )}
      {view === "compose" && (
        <ComposeEmail
          onSendEmail={sendEmail}
          users={Object.keys(users)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};

export default EmailApp;
