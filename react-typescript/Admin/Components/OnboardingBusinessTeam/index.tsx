import React, { useState } from "react";
import { HeaderBreadCrumb } from "../../../Component/header/HeaderBreadCrumb";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
const AddUser = dynamic(() => import("./AddUser"));
const AdminConsoleHomepage = dynamic(() => import("./AdminConsoleHomepage"));
const AdminLaunchPad = dynamic(() => import("./AdminLaunchPad"));

const OnboardingBusinessTeam = () => {
  const [showConsoleHomePage, setShowConsoleHomePage] = useState(false);
  const [showLaunchpad, setShowLaunchpad] = useState(true);
  const [showAddUser, setShowAddUser] = useState(true);
  const [users, setUsers] = useState([{ name: "kk", email: "kk", role: "kk" }]);

  return (
    <div className="container-fluid dashboard-body-bg">
      <Header />
      <HeaderBreadCrumb
        mainPath={"helpcenter"}
        subPath={"inbox"}
        innerSubPath={""}
      />
      <>
        {showLaunchpad ? (
          <AdminLaunchPad
            setShowConsoleHomePage={setShowConsoleHomePage}
            setShowLaunchpad={setShowLaunchpad}
            setShowAddUser={setShowAddUser}
          />
        ) : showConsoleHomePage ? (
          <AdminConsoleHomepage
            setShowConsoleHomePage={setShowConsoleHomePage}
            setShowLaunchpad={setShowLaunchpad}
            setShowAddUser={setShowAddUser}
          />
        ) : showAddUser ? (
          <AddUser
            setShowConsoleHomePage={setShowConsoleHomePage}
            setShowLaunchpad={setShowLaunchpad}
            setShowAddUser={setShowAddUser}
            users={users}
            setUsers={setUsers}
          />
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default OnboardingBusinessTeam;
