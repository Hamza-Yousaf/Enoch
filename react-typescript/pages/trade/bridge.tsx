import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const BridgeBanner = dynamic(() => import("../../Component/trade/bridge/BridgeBanner"));
const BridgeSection = dynamic(() => import("../../Component/trade/bridge/BridgeSection"));
const FAQBridge = dynamic(() => import("../../Component/trade/bridge/FAQBridge"));
const BridgeTutorial = dynamic(() => import("../../Component/trade/bridge/BridgeTutorial"));

const Bridge: React.FC = () => {

  return (
    <div className="container-fluid pb-0">
      <Header />
      <div className="row trade-bg">
        <div className="ezl-dashboard-container">
         <BridgeBanner/>
         <BridgeSection/>
         <FAQBridge/>
         <BridgeTutorial/>
        </div>
      </div>
    </div>
  );
};
export default Bridge;
