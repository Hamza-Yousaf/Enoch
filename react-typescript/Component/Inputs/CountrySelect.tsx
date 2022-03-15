import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/queries";

interface CountrySelectProps {
  currentCountry: any;
  setCurrentCountry: React.Dispatch<React.SetStateAction<any>>;
  toggleCountryDropdown: () => void;
  showCountryList: boolean;
  setShowCountryList: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  currentCountry,
  setCurrentCountry,
  toggleCountryDropdown,
  showCountryList,
  setShowCountryList,
}) => {
  let [countryList, setCountryList] = useState([]);

  useEffect(() => {
    client
      .query({
        query: GET_COUNTRIES,
      })
      .then((result) => {
        setCountryList(result.data.countries);
      });
  }, []);

  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });
  return (
    <div className=" accordion-content-time">
      <h3>Select Your Country</h3>
      <div className="position-relative">
        <div className="timeSetting-drop-box-country">
          <span
            style={{ cursor: "pointer" }}
            onClick={toggleCountryDropdown}
            id="langSetting"
            className={
              showCountryList
                ? "timeSetting-droplist-country select-active"
                : "timeSetting-droplist-country"
            }
          >
            {currentCountry.name}
          </span>
        </div>
        <div
          id="langSetting-DropdownList"
          className={
            showCountryList
              ? "timeSetting-content custm-zindex-2 show"
              : "timeSetting-content custm-zindex-2"
          }
        >
          <ul className="setting-form-drop-scrollable">
            {countryList?.map((country: any, key: any) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    setCurrentCountry(country);
                    toggleCountryDropdown();
                  }}
                >
                  {country.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
