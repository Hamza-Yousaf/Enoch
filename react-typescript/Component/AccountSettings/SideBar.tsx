import React, { useEffect, useState } from "react";
import { SideBarItem } from "./SideBarItem";
import {
  AccountPreferencesData,
  SecurityData,
  visibiltyData,
  communicationsData,
  advertisingDataData,
  dataPrivacyData,
} from "../utilsData/SideBarData";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

interface SideBarProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: any;
}

export const SideBar: React.FC<SideBarProps> = ({
  setCurrentTab,
  currentTab,
}) => {
  const [activeItem, setActiveItem] = useState<string>(currentTab);

  const dispatch = useDispatch();

  const { changeInnerPath } = bindActionCreators(actionCreators, dispatch);

  const innerPath = useSelector((state: State) => state.innerPath);

  useEffect(() => {
    changeInnerPath(currentTab);
  }, []);
  return (
    <div className="enoch-setting-acblock-lft" id="accordion-block">
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Account Prefrences"
        contents={AccountPreferencesData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Sign in & Security"
        contents={SecurityData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Visibility"
        contents={visibiltyData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Communications"
        contents={communicationsData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Data Privacy"
        contents={dataPrivacyData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <SideBarItem
        setCurrentTab={setCurrentTab}
        title="Advertising Data"
        contents={advertisingDataData}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
    </div>
  );
};
