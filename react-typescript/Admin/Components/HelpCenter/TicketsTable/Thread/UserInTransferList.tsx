import React from "react";

const UserInTransferList = () => {
  return (
    <div className="user-dp">
      <div className="user-dp-after-select">
        <img
          src="/images/hAdmin-avatars-1.png"
          alt="avatar"
          className="img-fluid dp"
        />
        <div className="active-green-dot-1 active-status">
          <div className="active"></div>
        </div>
        <div className="share-ticket-user-name">
          <h5>Robert Rose</h5>
        </div>
      </div>
      <button className="btn-Remove">
        <a href="#">Remove</a>
      </button>
    </div>
  );
};

export default UserInTransferList;
