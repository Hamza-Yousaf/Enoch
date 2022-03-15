import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { GET_COUNTRIES } from "../../graphql/queries";

interface CitySelectProps {
  currentCity: any;
  setCurrentCity: React.Dispatch<React.SetStateAction<string>>;
  country: any;
  showCityList: boolean;
  setShowCityList: React.Dispatch<React.SetStateAction<boolean>>;
}

const CitySelect: React.FC<CitySelectProps> = ({
  country,
  currentCity,
  setCurrentCity,
  showCityList,
  setShowCityList,
}) => {
  let [cityList, setCityList] = useState([]);

  const toggleDropdown = () => {
    setShowCityList(!showCityList);
  };

  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  const handleCityChange = (e: any) => {
    setCurrentCity(e.target.value);
  };

  useEffect(() => {
    client
      .query({
        query: gql`
          query ExampleQuery($code: ID!) {
            country(code: $code) {
              code
              states {
                name
              }
            }
          }
        `,
        variables: {
          code: country.code ? country.code : "GB",
        },
      })
      .then((result) => {
        setCityList(result.data.country.states);
      });
  }, [country]);

  return (
    // <div className="accordion-content-time ">
    //   <label>Select City</label>
    //   <div className="position-relative">
    //     <div onClick={toggleDropdown} className="timeSetting-drop-box-country">
    //       <span
    //         style={{ cursor: "pointer" }}
    //         id="langSetting"
    //         className="timeSetting-droplist-country"
    //       >
    //         {currentCity}
    //       </span>
    //     </div>
    //     {cityList.length > 0 ? (
    //       <div
    //         id="langSetting-DropdownList"
    //         className={
    //           showCityList
    //             ? "timeSetting-content-country custm-zindex-2 show"
    //             : "timeSetting-content-country custm-zindex-2"
    //         }
    //       >
    //         <ul className="setting-form-drop-scrollable">
    //           {cityList.length > 0 &&
    //             cityList?.map((city: any) => {
    //               return (
    //                 <li
    //                   onClick={() => {
    //                     setCurrentCity(city.name);
    //                     toggleDropdown();
    //                   }}
    //                 >
    //                   {city.name}
    //                 </li>
    //               );
    //             })}
    //         </ul>
    //       </div>
    //     ) : (
    //       <div
    //         id="langSetting-DropdownList"
    //         className={
    //           showCityList
    //             ? "timeSetting-content-country custm-zindex-2 show"
    //             : "timeSetting-content-country custm-zindex-2"
    //         }
    //       >
    //         <input
    //           onChange={(e) => handleCityChange}
    //           placeholder="enter your city here"
    //           type="text"
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="accordion-content-time">
      <h3>{cityList.length > 0 ? "Select You City" : "Enter Your City"}</h3>
      {cityList.length > 0 ? (
        <div className="position-relative">
          <div className="timeSetting-drop-box-country">
            <span
              style={{ cursor: "pointer" }}
              onClick={toggleDropdown}
              id="langSetting"
              className={
                showCityList
                  ? "timeSetting-droplist-country select-active"
                  : "timeSetting-droplist-country"
              }
            >
              {currentCity}
            </span>
          </div>
          <div
            id="langSetting-DropdownList"
            className={
              showCityList
                ? "timeSetting-content custm-zindex-2 show"
                : "timeSetting-content custm-zindex-2"
            }
          >
            <ul className="setting-form-drop-scrollable">
              {cityList.length > 0 &&
                cityList?.map((city: any) => {
                  return (
                    <li
                      onClick={() => {
                        setCurrentCity(city.name);
                        toggleDropdown();
                      }}
                    >
                      {city.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="timeSetting-drop-box">
          <span style={{ cursor: "pointer" }}>
            <input
              onChange={(e) => setCurrentCity(e.target.value)}
              type="text"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default CitySelect;
