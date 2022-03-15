import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const AccountSettings = dynamic(() => import("../../Component/AccountSettings/AccountSettings"));
import Head from "next/head";
import { NextPage } from "next";
import cookie from "cookie";
import { verifyToken } from "../../lib/verifyToken";
import router from "next/router";
const SignIn = dynamic(() => import("../../Component/SignIn"));

interface Props {
  currentTab?: string;
}

const AccountPreferencesPage: NextPage<Props> = ({ currentTab }) => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return (
    <Fragment>
      <Head>
        <title>Account Settings</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <AccountSettings tab={currentTab || "Account Prefrences"} />
    </Fragment>
  );
};

export default AccountPreferencesPage;
