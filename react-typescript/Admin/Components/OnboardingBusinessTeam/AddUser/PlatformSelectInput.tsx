import React, { useState } from "react";

const PlatformSelectInput = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const showDropdown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <>
      <div className="no-team-block-hd-lft">
        <div
          className={
            openDropDown
              ? "enochApp-drop-box dropdown open"
              : "enochApp-drop-box dropdown"
          }
        >
          <span className="enoch-green-circle"></span>
          <a
            onClick={showDropdown}
            href="javascript:void(0)"
            className="enochApp-droplist"
          >
            enoch.app
          </a>
          <div
            //   id="enochAppfunc-DropdownList"
            className="enochApp-content custm-zindex-1 dropdown-menu"
          >
            <ul className="enochAppfunc-drop-scrollable">
              <li>enoch.app</li>
              <li>Delegate Organization Adminstration role</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="no-team-block-hd-right">
        <div>
          <a href="#" className="bttn-primary add-usr-bttn">
            Add new user
          </a>
        </div>
      </div>
    </>
  );
};

export default PlatformSelectInput;
