import React, { useState } from "react";
import dynamic from "next/dynamic";
const AutoplayInput = dynamic(() => import("./Inputs/AutoplayInput"));
const LanguageInput = dynamic(() => import("../Inputs/LanguageInput"));
const TimezoneInput = dynamic(() => import("./Inputs/TimezoneInput"));
const ShowProfileInput = dynamic(() => import("./Inputs/ShowProfileInput"));
import { itemsWithNoContents } from "../../utilsData/DashBoardDetailsData";
import Link from "./Inputs/Link";
const MergeAccountsForm = dynamic(() => import("./Inputs/MergeAccountsForm"));

interface SitePrefItemProps {
  item: any;
}

export const AccountPreferencesSetItems: React.FC<SitePrefItemProps> = ({
  item,
}) => {
  const [expandDetails, setExpandDetails] = useState(false);

  const toggleExpand = (): void => {
    setExpandDetails(!expandDetails);
  };

  return (
    <div
      className={
        expandDetails
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-lft">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
      <div
        className={
          expandDetails
            ? "enoch-acount-detail-right acc-active"
            : "enoch-acount-detail-right"
        }
      >
        <div className="enoch-acount-detail-bk">
          <span className="enoch-acount-view-btn">
            <span
              style={{ cursor: "pointer" }}
              onClick={toggleExpand}
              className="enoch-acount-view-cls enochaccordion-block"
            >
              Change
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={toggleExpand}
              className="enoch-acount-view-cls accordion-block-close"
            >
              close
            </span>
          </span>
        </div>
        <p>{item.default}</p>
      </div>
      {!itemsWithNoContents.includes(item.name) ? (
        <div className="accordion-content-blck">
          {item.name === "time" ? (
            <TimezoneInput inputValue={item.input.values} />
          ) : item.name === "language" ? (
            <LanguageInput inputValues={item.input.values} />
          ) : item.name === "contentLanguage" ? (
            <LanguageInput inputValues={item.input.values} />
          ) : item.name === "Autoplay" ? (
            <AutoplayInput question="Autoplay videos that appear on Enoch?" />
          ) : item.name === "showingProfile" ? (
            <ShowProfileInput inputValues={item.input.values} />
          ) : item.name === "peopleAlsoViewed" ? (
            <AutoplayInput question="Display “People also viewed” box on your Profile page?" />
          ) : item.name === "microsoft" || item.name === "twitter" ? (
            <Link
              description={item.description}
              link={item.link}
              linkText={item.linkText}
            />
          ) : item.name === "mergeAccounts" ? (
            <MergeAccountsForm />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
