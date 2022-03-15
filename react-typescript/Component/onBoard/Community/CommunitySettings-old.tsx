import React from "react";
import dynamic from "next/dynamic";
const CommunityEdit = dynamic(() => import("./CommunityEdit"));
const CommunitySideBar = dynamic(() => import("./CommunitySideBar"));
const Header = dynamic(() => import("../../../Component/onBoard/header"));

const CommunitySettings = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <h2 className="community-manage-hd">
            <a href="#">Back to Community</a>
          </h2>
          <div className="enoch-community-manage-block">
            <CommunitySideBar />
            <CommunityEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySettings;
