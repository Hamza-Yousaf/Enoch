import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const TreasureHunt = dynamic(() => import("../../Component/Entertainment/TreasureHunt/TreasureHunt"));
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";

const TreasureHuntPage = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return <TreasureHunt />;
};

export default TreasureHuntPage;
