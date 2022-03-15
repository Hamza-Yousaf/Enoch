import React, { useState } from "react";

interface LanguageInputProps {
  inputValues: string[];
}

const LanguageInput: React.FC<LanguageInputProps> = ({ inputValues }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English (UK)");

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };
  const changeCurrentLanguage = (language: string): void => {
    setCurrentLanguage(language);
    setShowOptions(false);
  };
  return (
    <div className="accordion-content-time">
      <h3>Choose a Language</h3>
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
            {currentLanguage}
          </span>
        </div>
        <div
          id="langSetting-DropdownList"
          className={
            showOptions
              ? "timeSetting-content custm-zindex-2 show"
              : "timeSetting-content custm-zindex-2"
          }
        >
          <ul className="setting-form-drop-scrollable">
            {inputValues.map((value, key) => {
              return (
                <li key={key} onClick={() => changeCurrentLanguage(value)}>
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

export default LanguageInput;
