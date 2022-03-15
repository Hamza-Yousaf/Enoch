import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const SignInAndSecurityItems = dynamic(() => import("./SignInAndSecurity/SignInAndSecurityItems"));
import { AccountPreferencesItems } from "./AccountPreferences/AccountPreferencesItems";
import {
  AccountPreferencesData,
  signInAndSecurityData,
  VisibilityData,
  communicationsData,
  dataPrivacyData,
  advertisingData,
} from "../utilsData/DashBoardDetailsData";
const VisibilityItem = dynamic(() => import("./Visibility/VisibilityItem"));
const CommunicationsItem = dynamic(() => import("./communications/communicationsItem"));
const DataPrivacyItem = dynamic(() => import("./DataPrivacy/DataPrivacyItem"));
const AdvertisingDataItem = dynamic(() => import("./AdvertisingData/AdvertisingDataItem"));

interface DashBoardDetailsProps {
  currentTab: string;
  showAuthCodes: boolean;
  setShowAuthCodes: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashBoardDetails: React.FC<DashBoardDetailsProps> = ({
  currentTab,
  setShowAuthCodes,
  showAuthCodes,
}): JSX.Element => {
  if (currentTab === "Sign in & Security") {
    return (
      <div className="enoch-setting-acblock-right" id="accordion-togg-block">
        {signInAndSecurityData.map((data, key) => {
          return (
            <SignInAndSecurityItems
              key={key}
              title={data.title}
              description={data.description}
              items={data.items}
              id={data.id}
              showAuthCodes={showAuthCodes}
              setShowAuthCodes={setShowAuthCodes}
            />
          );
        })}
      </div>
    );
  } else if (currentTab === "Visibility") {
    return (
      <div className="enoch-setting-acblock-right" id="accordion-togg-block">
        {VisibilityData.map((data, key) => {
          return (
            <VisibilityItem
              key={key}
              title={data.title}
              description={data.description}
              items={data.items}
              id={data.id}
            />
          );
        })}
      </div>
    );
  } else if (currentTab === "Communications") {
    return (
      <div className="enoch-setting-acblock-right" id="accordion-togg-block">
        {communicationsData.map((data, key) => {
          return (
            <CommunicationsItem
              key={key}
              title={data.title}
              description={data.description}
              items={data.items}
              id={data.id}
            />
          );
        })}
      </div>
    );
  } else if (currentTab === "Data Privacy") {
    return (
      <div className="enoch-setting-acblock-right" id="accordion-togg-block">
        {dataPrivacyData.map((data, key) => {
          return (
            <DataPrivacyItem
              key={key}
              title={data.title}
              description={data.description}
              items={data.items}
              id={data.id}
            />
          );
        })}
      </div>
    );
  } else if (currentTab === "Advertising Data") {
    return (
      <div className="enoch-setting-acblock-right" id="accordion-togg-block">
        {advertisingData.map((data, key) => {
          return (
            <AdvertisingDataItem
              key={key}
              title={data.title}
              description={data.description}
              items={data.items}
              id={data.id}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="enoch-setting-acblock-right" id="accordion-togg-block">
      {AccountPreferencesData.map((data, key) => {
        return (
          <AccountPreferencesItems
            key={key}
            title={data.title}
            description={data.description}
            items={data.items}
            id={data.id}
            currentTab={null}
            setCurrentTab={null}
          />
        );
      })}
    </div>
  );
};
