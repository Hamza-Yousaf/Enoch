import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const MyNetworkContainer = dynamic(() => import("../../Component/my-network"));
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";

const MyNetwork = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return <MyNetworkContainer />;
};

export default MyNetwork;
