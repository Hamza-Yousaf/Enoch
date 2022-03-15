import React from "react";
import { useState } from "react";

interface DashboardDetailsItemProps {
  item: any;
}

const AccountPreferencesGetItems: React.FC<DashboardDetailsItemProps> = ({
  item,
}) => {
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
          <h5>{item.title}</h5>
          <p>{item.description} </p>
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
        </div>
        <div className="accordion-content-blck">
          {item.name === "name" ? (
            <div className="accordion-content-name">
              <ul>
                <li>
                  <span>Full Name</span>
                  <span>{item.values.fullname} </span>
                </li>
                <li>
                  <span>Date Of Birth</span>
                  <span>{item.values.dateOfBirth}</span>
                </li>
                <li>
                  <span>Nationality</span>
                  <span>{item.values.nationality}</span>
                </li>
              </ul>
            </div>
          ) : item.name === "address" ? (
            <div className="accordion-content-txt">
              <p>15 Neutwache Frankfurt, Down Town Station, Berlin, 21149</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPreferencesGetItems;
