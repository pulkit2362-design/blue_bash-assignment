import React from "react";

import EmailListItem from "./emailListItem";
import EmailDetails from "./emailDetails";

const Inbox = ({
  emails,
  openEmail,
  deleteEmail,
  toggleStar,
  selectedEmail,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h4 className="text-primary">Inbox</h4>
        {emails.length === 0 ? (
          <p className="text-muted">No emails.</p>
        ) : (
          <ul className="list-group">
            {emails.map((email, index) => (
              <EmailListItem
                key={index}
                email={email}
                index={index}
                openEmail={openEmail}
                deleteEmail={deleteEmail}
                toggleStar={toggleStar}
              />
            ))}
          </ul>
        )}
      </div>
      {/* <div className="col-md-4">
        <EmailDetails email={selectedEmail} />
      </div> */}
    </div>
  );
};

export default Inbox;
