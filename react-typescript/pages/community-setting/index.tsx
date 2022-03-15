import React from "react";
import dynamic from "next/dynamic";
const CommunitySettings = dynamic(() => import("../../Component/onBoard/Community/CommunitySettings"));

const CommunitySetting = () => {
  return <CommunitySettings />;
};

export default CommunitySetting;
