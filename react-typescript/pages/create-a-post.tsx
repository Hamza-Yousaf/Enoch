import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { GetStaticPropsContext } from "next";
const Header = dynamic(() => import("../Component/onBoard/header"));
const CreateAPost = dynamic(() => import("../Component/CreateAPost"));

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: { hello: "hello" },
  };
}

const CreatePostPage = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <CreateAPost />
    </div>
  );
};

export default CreatePostPage;
