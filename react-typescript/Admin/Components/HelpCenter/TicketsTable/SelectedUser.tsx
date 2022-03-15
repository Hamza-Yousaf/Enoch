import React from "react";
interface Props {
  memberImg: any;
  memberName: any;
}

const SelectedUser: React.FC<Props> = ({ memberImg, memberName }) => {
  return (
    <div className="user-dp-after-select">
      <img src={memberImg} alt="avatar" className="img-fluid dp" />
      <div className="active-status-dot">
        <img
          src="/images/active-status-dot.png"
          alt="dot"
          className="img-fluid"
        />
      </div>
      <div className="share-ticket-user-name">
        <h5>
          {memberName}
          <span>,</span>
        </h5>
        {/* <h6>Designer, ABC Technology</h6> */}
      </div>
    </div>
  );
};

export default SelectedUser;
