import React from "react";
import dynamic from "next/dynamic";
const FollowSection = dynamic(() => import("./FollowSection"));
const LeftSideBar = dynamic(() => import("../../../../Component/onBoard/left-sidebar"));
const RightSideBar = dynamic(() => import("./RightSideBar"));

const MainSection = () => {
  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="dApp-S-Home-body">
          <div className="home-post-block">
            <LeftSideBar />
            <FollowSection />
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
