import React from "react";

const EmailListItem = ({
  email,
  index,
  openEmail,
  deleteEmail,
  toggleStar,
}) => {
  const senderName = email.from.split("@")[0];

  return (
    <li
      className={`list-group-item ${
        email.unread ? "fw-bold bg-light px-5 mx-4" : "px-5 mx-4"
      }`}
      style={{ cursor: "pointer" }}
      onClick={() => openEmail(index)}
    >
      <div>
        <strong>From:</strong> {senderName}
      </div>
      <div>
        <strong>Subject:</strong> {email.subject}
      </div>
      <div className="text-muted">{email.body.substring(0, 50)}...</div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-warning btn-sm mx-1"
          onClick={(e) => {
            e.stopPropagation();
            toggleStar(index);
          }}
        >
          {email.starred ? "⭐" : "☆"}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            deleteEmail(index);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default EmailListItem;
