import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const CompanyHead = dynamic(() => import("../../Component/company/company-head"));
const CompanyPostSection = dynamic(() => import("../../Component/company/post-section"));
const LeftSideBar = dynamic(() => import("../../Component/company/left-sidebar"));
const RightSideBar = dynamic(() => import("../../Component/company/right-sidebar"));
import { verifyToken } from "../../lib/verifyToken";
const SignIn = dynamic(() => import("../../Component/SignIn"));
import router from "next/router";

const SingleCompany: React.FC = () => {
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
          <div className="dApp-S-Home-body">
            <CompanyHead />
            <div className="company-cat-sect">
              <div className="company-cat-lft-menu">
                <ul>
                  <li className="company-listItem-active">Home</li>
                  <li>Groups</li>
                  <li>Jobs</li>
                  <li>Events</li>
                  <li className="company-more">
                    <div
                      className="company-more-dropdownBox"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More{" "}
                    </div>
                    <div
                      id="company-more-dropList1"
                      className="dropdown-menu company-more-drop-list"
                    >
                      <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="company-cat-right-block">
                <div className="company-promote">
                  <button className="promote-bttn">
                    <img
                      src="/images/flag.png"
                      className="mr-2 img-fluid"
                      alt="flag"
                    />{" "}
                    Promote
                  </button>
                </div>
                <div className="company-threedots">
                  <img
                    src="/images/companyThreeDots.png"
                    className="img-fluid"
                    alt="dots"
                  />
                </div>
                <div className="company-user-drop">
                  <div
                    className="company-user-dropbox"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="/images/Scompany-user.png"
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <div
                    id="company-more-dropList2"
                    className="dropdown-menu company-more-drop-list"
                  >
                    <ul>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-post-block">
              <LeftSideBar />
              <CompanyPostSection />
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCompany;
