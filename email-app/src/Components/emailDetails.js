import React from "react";

const EmailDetails = ({ email }) => {
  if (!email) return <p className="text-muted">hiiiiii</p>;

  return (
    <div className="card border-primary">
      <div className="card-header bg-primary text-white">{email.subject}</div>
      <div className="card-body">
        <p>
          <strong>From:</strong> {email.from}
        </p>
        <p>
          <strong>To:</strong> {email.to}
        </p>
        <p>{email.body}</p>
      </div>
    </div>
  );
};

export default EmailDetails;
