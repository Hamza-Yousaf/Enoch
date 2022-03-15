import React from "react";

const Switch = () => {
  return (
    <div className="visibility-switch">
      No
      <label className="visibilityswitch">
        <input type="checkbox" />
        <span className="visibility-slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
