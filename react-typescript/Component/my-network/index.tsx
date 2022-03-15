import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../state/index";
const Header = dynamic(() => import("../../Component/onBoard/header"));
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import LeftSideBar from "./left-sidebar";
import MainContainer from "./MainContents/MainContainer";
import AcceptIgonreModal from "./MainContents/AcceptIgonreModal";
import ContactsModalContainer from "./MainContents/ContactsModalContainer";



const MyNetworkContainer = () => {
  return (
    <>
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <div className="row">
          <div className="ezl-dashboard-container">
            <div className="mynetworkBody">
              <div className="row m-0">
                <LeftSideBar />
                <div className="col-lg-9 p-0">
                  <div className="MyNetworkRightCol-sect">
                    <MainContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AcceptIgonreModal />
      </div>
      <ContactsModalContainer />
    </>
  );
};

export default withApollo(MyNetworkContainer, { getDataFromTree });
