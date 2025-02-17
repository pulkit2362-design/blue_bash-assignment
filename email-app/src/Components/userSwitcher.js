import React from "react";

const UserSwitcher = ({ users, currentUser, openInbox, notifications }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      {users.map((user) => (
        <button
          key={user}
          className={`btn mx-2 ${
            currentUser === user ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => openInbox(user)}
        >
          {user}{" "}
          {notifications[user] > 0 && (
            <span className="badge bg-danger">{notifications[user]}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default UserSwitcher;
