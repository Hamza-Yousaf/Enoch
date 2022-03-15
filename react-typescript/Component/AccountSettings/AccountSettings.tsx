import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header/index"));
import { HeaderBreadCrumb } from "../header/HeaderBreadCrumb";
import { DashBoard } from "./DashBoard";
const BackupCodesPage = dynamic(() => import("./SignInAndSecurity/TwoStepVerification/BackupCodesPage"));

interface Props {
  tab: string | undefined;
}

const AccountSettings: React.FC<Props> = ({ tab }): JSX.Element => {
  const [showAuthCodes, setShowAuthCodes] = useState(false);
  const [mainPath, setMainPath] = useState("Settings");
  const [subPath, setSubPath] = useState("account");
  const [innerSubPath, setInnerSubPath] = useState("");

  return (
    <div className="container-fluid dashboard-body-bg">
      {/* <div className="row"> */}
      <Header />
      <HeaderBreadCrumb
        mainPath={mainPath}
        subPath={subPath}
        innerSubPath={innerSubPath}
      />
      {showAuthCodes ? (
        <BackupCodesPage
          showAuthCodes={showAuthCodes}
          setShowAuthCodes={setShowAuthCodes}
        />
      ) : (
        <DashBoard
          showAuthCodes={showAuthCodes}
          setShowAuthCodes={setShowAuthCodes}
          tab={tab}
        />
      )}
      {/* </div> */}
    </div>
  );
};

export default AccountSettings;
