import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const MyCommunities = dynamic(() => import("../../Component/onBoard/Community/MyCommunities"));
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";

const MyCommunitiesPage = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return <MyCommunities />;
};

export default MyCommunitiesPage;
