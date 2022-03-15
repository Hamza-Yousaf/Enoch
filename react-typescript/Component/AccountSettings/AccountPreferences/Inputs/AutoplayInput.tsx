import React, { useState } from "react";
interface AutoplayInputProps {
  question: string;
}

const AutoplayInput: React.FC<AutoplayInputProps> = ({ question }) => {
  const [checkedBox, setCheckedBox] = useState(true);
  const toggleCheckBox = () => {
    setCheckedBox(!checkedBox);
  };
  return (
    <div className="accordion-content-time">
      <h3>{question}</h3>
      <div className="autoplay-switch">
        {checkedBox ? "Yes" : "No"}
        <label className="switch">
          <input type="checkbox" checked={checkedBox} readOnly />
          <span
            onClick={toggleCheckBox}
            className="autoplay-slider round"
          ></span>
        </label>
      </div>
    </div>
  );
};

export default AutoplayInput;
