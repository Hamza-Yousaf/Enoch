import React from "react";
import { useState } from "react";

interface ShowProfileInputProps {
  inputValues: string[];
}

const ShowProfileInput: React.FC<ShowProfileInputProps> = ({ inputValues }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentChoice, setCurrentChoice] = useState("All Enoch Members");

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };
  const changeCurrentChoice = (choice: string): void => {
    setCurrentChoice(choice);
    setShowOptions(false);
  };
  return (
    <div className="accordion-content-time">
      <h3>Display “People also viewed” box on your Profile page?e</h3>
      <div className="position-relative">
        <div className="timeSetting-drop-box">
          <span
            style={{ cursor: "pointer" }}
            onClick={toggleShowOptions}
            id="profileSetting"
            className={
              showOptions
                ? "timeSetting-droplist select-active"
                : "timeSetting-droplist"
            }
          >
            {currentChoice}
          </span>
        </div>

        <div
          id="profileSetting-DropdownList"
          className={
            showOptions
              ? "timeSetting-content custm-zindex-4 show"
              : "timeSetting-content custm-zindex-4"
          }
        >
          <ul className="">
            {inputValues.map((value, key) => {
              return (
                <li key={key} onClick={() => changeCurrentChoice(value)}>
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

export default ShowProfileInput;
