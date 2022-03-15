import React, { useState } from "react";
import dynamic from "next/dynamic";
const Tab = dynamic(() => import("./Tab"));
const Members = dynamic(() => import("./Members"));
const Roles = dynamic(() => import("./Roles"));

export interface TabProps {
  currentTab: string | null;
  changeTab: (tab: string) => void | null;
}

const MembersTable = () => {
  const [currentTab, setCurrentTab] = useState("members");

  const changeTab = (tab: string) => {
    setCurrentTab(tab);
  };
  return (
    <div className="team-member-role-block">
      <Tab changeTab={changeTab} currentTab={currentTab} />
      <Members currentTab={currentTab} changeTab={changeTab} />
      <Roles currentTab={currentTab} changeTab={changeTab} />
    </div>
  );
};

export default MembersTable;
