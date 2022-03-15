import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("../../Component/Entertainment/HomePage"));
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";

const index = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return <HomePage />;
};

export default index;
