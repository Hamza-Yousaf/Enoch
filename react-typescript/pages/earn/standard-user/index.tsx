import React, { Component } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
const HeadBanner = dynamic(() => import("../../../Component/Earn/standard-user/HeadBanner"));
const IronRank = dynamic(() => import("../../../Component/Earn/standard-user/IronRank"));
const BalanceSect = dynamic(() => import("../../../Component/Earn/standard-user/BalanceSect"));
const TabSect = dynamic(() => import("../../../Component/Earn/standard-user/TabSect"));
import { verifyToken } from "../../../lib/verifyToken";
import router from "next/router";
const SignIn = dynamic(() => import("../../../Component/SignIn"));

class StandardUser extends Component {
  render() {
    if (typeof window !== "undefined") {
      if (!verifyToken()) {
        router.replace("/");
        return <SignIn />;
      }
    }
    return (
      <div className="container-fluid dashboard-body-bg second-body-bg pb-0">
        <Header />
        <div className="row">
          <div className="ezl-dashboard-container">
            <HeadBanner />
            <IronRank />
            <BalanceSect />
            <TabSect />
          </div>
        </div>
      </div>
    );
  }
}

export default StandardUser;
