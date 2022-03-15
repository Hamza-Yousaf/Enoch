import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const HomePost = dynamic(() => import("../Component/home-post"));
const SignUpEmail = dynamic(() => import("../Component/SignUp"));
import { verifyToken } from "../lib/verifyToken";

const SignUp = () => {
  if (typeof window !== "undefined") {
    if (verifyToken()) {
      router.replace("/");
      return <HomePost />;
    }
  }

  return <SignUpEmail />;
};

export default SignUp;
