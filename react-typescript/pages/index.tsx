import router from "next/router";
import React from "react";
import { verifyToken } from "../lib/verifyToken";
import { GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
const HomeEnoch = dynamic(() => import("../Component/Enoch-Website"), {
  loading: () => <>loading app...</>,
});

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

const HomePage = () => {
  if (typeof window !== "undefined") {
    if (verifyToken()) {
      router.push("/feeds");
      return "redirecting...";
    } else {
      return <HomeEnoch />;
    }
  }
};

export default HomePage;
