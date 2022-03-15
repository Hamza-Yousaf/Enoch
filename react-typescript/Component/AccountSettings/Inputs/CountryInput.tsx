import React, { useState } from "react";
import dynamic from "next/dynamic";
const LanguageInput = dynamic(() => import("./LanguageInput"));
import { CountryList } from "../../utilsData/CountryData";

const CountryInput = () => {
  const [country, setCountry] = useState("United States");
  const [showDropdown, setShowDropdown] = useState(false);

  const changeCountry = (country: string) => {
    setCountry(country);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="country-dropdown">
      <div className="select-box account-select-box">
        <div
          className={
            showDropdown
              ? "options-container acc-options-container active"
              : "options-container acc-options-container"
          }
        >
          <div className="options-list">
            {CountryList.map((country, key) => {
              return (
                <div key={key} className="option acc-option">
                  <input
                    type="radio"
                    className="radio"
                    id="automobiles"
                    name="category"
                  />
                  <span
                    onClick={() => changeCountry(country)}
                    className="acc-info-label"
                    // htmlFor="automobiles"
                  >
                    {country}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div onClick={toggleDropdown} className="selected acc-info-select">
          {country}
        </div>
      </div>
    </div>
  );
};

export default CountryInput;
