import React from "react";
import { TabProps } from ".";

const Tab: React.FC<TabProps> = ({ changeTab, currentTab }) => {
  return (
    <div className="team-member-tab-block">
      <ul>
        <li
          className={
            currentTab === "members"
              ? "teamtablinks h-active"
              : "teamtablelinks"
          }
        >
          <a style={{ cursor: "pointer" }} onClick={() => changeTab("members")}>
            Members
          </a>
          <span className="inbox-msg-count">5</span>
        </li>
        <li
          className={
            currentTab === "roles" ? "teamtablinks h-active" : "teamtablelinks"
          }
        >
          <a style={{ cursor: "pointer" }} onClick={() => changeTab("roles")}>
            Roles
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
