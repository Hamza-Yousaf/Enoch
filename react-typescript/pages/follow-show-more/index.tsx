import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const FollowShowMore = dynamic(() => import("../../Component/FollowShowMore"));

const FollowMoreContainer = () => {
  return <FollowShowMore />;
};

export default FollowMoreContainer;
