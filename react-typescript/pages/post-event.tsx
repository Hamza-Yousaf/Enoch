import React from "react";
import dynamic from "next/dynamic";
const PostEvent = dynamic(() => import("../Component/home-post/Components/Events/PostEvent"));
import { NextPage } from "next";
import cookie from "cookie";
import router from "next/router";

interface Props {
  loggedInUser: any;
  accessToken: string;
}
//@ts-ignore
const PostEventPage: NextPage<Props> = ({ loggedInUser, accessToken }) => {
  if (typeof window !== "undefined") {
    if (accessToken && loggedInUser) {
      //@ts-ignore
      return <PostEvent loggedInUser={JSON.parse(loggedInUser)} />;
    } else {
      router.push("/SignIn");
      return "";
    }
  } else {
    return "";
  }
};

export default PostEventPage;
