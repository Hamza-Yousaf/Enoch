import React, { Component } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
const HeadBanner = dynamic(() => import("../../../Component/Earn/artist-user/HeadBanner"));
const IronRank = dynamic(() => import("../../../Component/Earn/artist-user/IronRank"));
const BalanceSect = dynamic(() => import("../../../Component/Earn/artist-user/BalanceSect"));
const TabSect = dynamic(() => import("../../../Component/Earn/artist-user/TabSect"));
import { verifyToken } from "../../../lib/verifyToken";
const SignIn = dynamic(() => import("../../../Component/SignIn"));
import router from "next/router";

class ArtistUser extends Component {
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

export default ArtistUser;
