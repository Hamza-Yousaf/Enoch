//@ts-nocheck
import React from "react";
import withAuth from "../../lib/withAuth";
import dynamic from "next/dynamic";
const UserProfile = dynamic(() => import("../../Component/userProfile"));

const UserProfilePage = () => {
  return <UserProfile userId={""} />;
};

export default withAuth(UserProfilePage);
