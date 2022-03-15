import React, { useState } from "react";
import dynamic from "next/dynamic";
const AccountPreferencesGetItems = dynamic(() => import("./AccountPreferencesItemsGetItems"));
import { AccountPreferencesSetItems } from "./AccountPreferencesSetItems";

interface AccountPreferencesItemsProps {
  title: any;
  description: any;
  id: any;
  currentTab: any;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>> | null;
  items?: any;
}

export const AccountPreferencesItems: React.FC<AccountPreferencesItemsProps> =
  ({ title, description, id, items }) => {
    return (
      <div className="enoch-setting-right-block" id={id}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        {items?.map((item: any, key: any) => {
          if (item.name === "name" || item.name === "address") {
            return <AccountPreferencesGetItems key={key} item={item} />;
          } else {
            return <AccountPreferencesSetItems key={key} item={item} />;
          }
        })}
      </div>
    );
  };
