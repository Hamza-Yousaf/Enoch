import React, { useState } from "react";

interface TimezoneInput {
  inputValue: string[];
}

const TimezoneInput: React.FC<TimezoneInput> = ({ inputValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState(
    "GMT+1 (European Central Time)"
  );

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };
  const changeCurrentTimezone = (timezone: string): void => {
    setCurrentTimezone(timezone);
    setShowOptions(false);
  };
  return (
    <div className="accordion-content-time">
      <h3>Choose a timezone</h3>
      <div className="position-relative">
        <div className="timeSetting-drop-box">
          <span
            style={{ cursor: "pointer" }}
            onClick={toggleShowOptions}
            id="langSetting"
            className={
              showOptions
                ? "timeSetting-droplist select-active"
                : "timeSetting-droplist"
            }
          >
            {currentTimezone}
          </span>
        </div>
        <div
          id="langSetting-DropdownList"
          className={
            showOptions
              ? "timeSetting-content custm-zindex-1 show"
              : "timeSetting-content custm-zindex-1"
          }
        >
          <ul className="setting-form-drop-scrollable">
            {inputValue.map((value, key) => {
              return (
                <li key={key} onClick={() => changeCurrentTimezone(value)}>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimezoneInput;
