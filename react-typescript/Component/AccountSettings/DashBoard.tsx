import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { DashBoardDetails } from "./DashBoardDetails";
import Cookie from "js-cookie";

interface Props {
  showAuthCodes: boolean;
  setShowAuthCodes: React.Dispatch<React.SetStateAction<boolean>>;
  userAgent?: string;
  tab: any;
}

export const DashBoard: React.FC<Props> = ({
  showAuthCodes,
  setShowAuthCodes,
  tab,
}) => {
  const [currentTab, setCurrentTab] = useState(() => {
    return tab;
  });

  useEffect(() => {
    Cookie.set("currentTab", currentTab);
  }, [currentTab]);

  return (
    <div className="ezl-dashboard-container">
      <div className="row">
        <div className="col-12">
          <div className="enoch-setting-acblock">
            <SideBar setCurrentTab={setCurrentTab} currentTab={currentTab} />
            <DashBoardDetails
              showAuthCodes={showAuthCodes}
              setShowAuthCodes={setShowAuthCodes}
              currentTab={currentTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
