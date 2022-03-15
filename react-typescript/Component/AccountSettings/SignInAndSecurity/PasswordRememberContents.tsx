import React, { useState } from "react";

const PasswordRememberContents = () => {
  const [expandDetails, setExpandDetails] = useState(false);

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };
  return (
    <div
      className={
        expandDetails
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-block">
        <div className="enoch-acount-detail-lft">
          <h5>Devices that remember your Password</h5>
          <p>Add a Phone number in case you have trouble Signing In</p>
        </div>
        <div
          className={
            expandDetails
              ? "enoch-acount-detail-right acc-active"
              : "enoch-acount-detail-right"
          }
        >
          <div className="enoch-acount-detail-bk">
            <span className="enoch-acount-view-btn">
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls enochaccordion-block"
              >
                Change
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={toggleExpand}
                className="enoch-acount-view-cls accordion-block-close"
              >
                close
              </span>
            </span>
          </div>
          <p>0 device</p>
        </div>
        <div className="accordion-content-blck">
          <p className="p-txt1">
            There are no devices associated with this account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordRememberContents;
