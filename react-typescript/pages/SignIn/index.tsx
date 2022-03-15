import { NextPage } from "next";
import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const SignInEmail = dynamic(() => import("../../Component/SignIn"));

interface Props {
  accessToken: string;
}

//@ts-ignore
const SignInPage: NextPage<Props> = () => {
  if (typeof window !== "undefined") {
    return <SignInEmail />;
  } else {
    return "loading...";
  }
};

export default SignInPage;
