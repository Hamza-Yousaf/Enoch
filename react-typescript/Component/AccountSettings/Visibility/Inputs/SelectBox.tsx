import React, { useState } from "react";

interface Props {
  inputOptions: any;
}

const SelectBox: React.FC<Props> = ({ inputOptions }) => {
  const [selectedOption, setSelectedOption] = useState(inputOptions[0]);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownShow = () => {
    setOpenDropdown(!openDropdown);
  };

  const chooseOption = (option: string) => {
    setSelectedOption(option);
    setOpenDropdown(false);
  };

  return (
    <div
      className="
                              profile-visibility-dropdown
                              position-relative
                            "
    >
      <div className="visibilitySetting-drop-box">
        <a
          href="#"
          onClick={handleDropdownShow}
          id="visibilitySetting"
          className={
            openDropdown
              ? "timeSetting-droplist visibilitySetting-droplist select-active"
              : "timeSetting-droplist visibilitySetting-droplist"
          }
        >
          {selectedOption}
        </a>
      </div>
      <div
        id="visibilitySetting-DropdownList"
        className={
          openDropdown
            ? "timeSetting-content visibilitySetting-content show"
            : "timeSetting-content visibilitySetting-content"
        }
      >
        <ul className="sign-form-drop-scrollable">
          {inputOptions.map((option: any, key: any) => {
            return (
              <li onClick={() => chooseOption(option)} key={key}>
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectBox;
