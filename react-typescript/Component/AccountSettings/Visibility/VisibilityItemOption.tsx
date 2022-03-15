import React, { useState } from "react";
import dynamic from "next/dynamic";
const List = dynamic(() => import("./Inputs/List"));
const RadioSelect = dynamic(() => import("./Inputs/RadioSelect"));
const SelectBox = dynamic(() => import("./Inputs/SelectBox"));
const Switch = dynamic(() => import("./Inputs/Switch"));

interface Props {
  title: string;
  description: string;
  question: string;
  inputType: string;
  defaultValue: string;
  inputOptions: {
    id: string;
    title: string;
    icon: boolean;
    value: string;
    valueDescription?: string;
  }[];
  extraBlock: HTMLParagraphElement;
}

const VisibilityItemOption: React.FC<Props> = ({
  title,
  description,
  question,
  inputType,
  inputOptions,
  extraBlock,
  defaultValue,
}) => {
  const [openContents, setOpenContents] = useState(false);
  const toggleOpenContents = () => {
    setOpenContents(!openContents);
  };
  return (
    <div
      className={
        openContents
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-block">
        <div className="enoch-acount-detail-lft">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div
          className={
            openContents
              ? "enoch-acount-detail-right acc-active"
              : "enoch-acount-detail-right"
          }
        >
          <div className="enoch-acount-detail-bk">
            <span className="enoch-acount-view-btn">
              <a
                href="#"
                className="enoch-acount-view-cls enochaccordion-block"
                onClick={toggleOpenContents}
              >
                Change
              </a>
              <a
                href="#"
                className="
                          enoch-acount-view-cls
                          accordion-block-close
                        "
                onClick={toggleOpenContents}
              >
                close
              </a>
            </span>
          </div>
          <p>{defaultValue}</p>
        </div>
        <div className="accordion-content-blck">
          <div
            className={
              title === "Blocking"
                ? "accordion-content-blocking"
                : "accordion-content-visibility"
            }
          >
            <p
              style={{ fontWeight: "bold", color: "#1e1f2d" }}
              className="content-visibility-txt"
            >
              {question}
            </p>
            {inputType === "radioSelect" ? (
              <RadioSelect inputOptions={inputOptions} />
            ) : inputType === "selectBox" ? (
              <SelectBox inputOptions={inputOptions} />
            ) : inputType === "switch" ? (
              <Switch />
            ) : inputType === "list" ? (
              <List listItems={inputOptions} />
            ) : (
              ""
            )}
            {title === "Manage active status" ? (
              <h3>
                Changes to this setting may take up to 30 minutes to take
                effect.
              </h3>
            ) : (
              ""
            )}
            {title === "Who can see or download your email address" ? (
              <>
                <p style={{ fontSize: 12 }} className="visibility-para1">
                  Allow your connections to download your email
                  <span>mail@gmail.com</span> in their data export? If no, your
                  primary email address will not be included.
                  <a href="#">Learn more</a>
                </p>
                <Switch />
              </>
            ) : (
              ""
            )}
            {extraBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilityItemOption;
