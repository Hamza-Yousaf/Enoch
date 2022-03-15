import React, { useEffect, useState } from "react";
import classnames from "classnames";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { peopleFollowData } from "../../../lib/PeopleFollowData";
import { peopleFollowHashData } from "../../../lib/PeopleFollowHashData";

const PeopleFollowContent = () => {
  const [dropDown, setDropDown] = useState(false);
  const [limit, setLimit] = useState(20);
  const [selectDropDown, setSelectDropDown] = useState("all");
  const [connect, setConnect] = useState(peopleFollowData);

  const onFollowHandler = (index: any) => {
    let newConnect = [];
    newConnect = connect.map((e, i) =>
      index.toString() == i.toString() ? { ...e, follow: !e?.follow } : e
    );
    setConnect(newConnect);
  };

  const setSelectDropDownHandler = (value: string) => {
    if (value == "all") {
      setLimit(20)
      setConnect(peopleFollowData);
    }
    else if (value == "connect") {
      setLimit(8)
      setConnect(peopleFollowData);
    }
    else if (value == "out-of-network" || value == "companies") {
      setLimit(4)
      setConnect(peopleFollowData);
    }
    else if (value == "hashtags") {
      setLimit(8)
      setConnect(peopleFollowHashData);
    }
    setSelectDropDown(value)
    setDropDown(false)
  }

  return (
    <>
      <div className="Filter_Network_sect">
        <h3>
          Unfollow to stop seeing their posts in your feed. Don’t worry, they
          won’t be notified.
        </h3>
        <div className="Filter_Network_Content">
          <h4>Filter by Out-of-Network 45</h4>
          <div className="Filter_Network_Icons_sect">
            <span>
              <img
                src="/images/filter-Cross.svg"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <span className="Filter_Network_IconsBtn" onClick={() => setDropDown(!dropDown)}>
              <img src="/images/filter.svg" alt="icon" className="img-fluid" />
            </span>
          </div>
        </div>
        <div
          className={classnames("filter_menu_sect", {
            'd-block': dropDown,
            'd-none': !dropDown,
          })}
        >
          <ul>
            <li className="filter_menu_sect_all_btn" onClick={() => setSelectDropDownHandler("all")}>
              <h5>All</h5>
            </li>
            <li className="filter_menu_sect_Connections_btn" onClick={() => setSelectDropDownHandler("connect")}>
              <h5>Connections</h5>
              <p>Connections you are following</p>
            </li>
            <li className="filter_menu_sect_OutOfNetwork_btn" onClick={() => setSelectDropDownHandler("out-of-network")}>
              <h5>Out-of-Network</h5>
              <p>People you are following who are not connections</p>
            </li>
            <li className="filter_menu_sect_Companies_btn" onClick={() => setSelectDropDownHandler("companies")}>
              <h5>Companies</h5>
              <p>Companies you are following</p>
            </li>
            <li className="filter_menu_sect_Hashtags_btn" onClick={() => setSelectDropDownHandler("hashtags")}>
              <h5>Hashtags</h5>
              <p>Hashtags you are following</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="follow-Suggestions-people-list-sect">
        <div className="follow-list-content">
          {connect?.slice(0, limit)?.map((item, index) => {
            return (
              <div className="follow_list_card">
                <div className="follow_list_card_DP">
                  <img src={item?.img} alt="img" className="img-fluid" />
                </div>
                <h4>{item?.name}</h4>
                {selectDropDown != "hashtags" ?
                  <>
                    <h5>{item?.dec}</h5>  <h6>
                      <span>
                        <img
                          src="/images/mutual.svg"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      {item?.mutualFirendsCount && item?.mutualFirendsCount + "mutual firends"}
                    </h6>
                  </>
                  :
                  <p>{item?.followCount} followers</p>
                }
                <div
                  className={classnames("follow_card_btns", {
                    'active': item?.follow == true,
                    '': !item?.follow == false
                  })}
                >
                  <button
                    className="Following-btn"
                    onClick={() => onFollowHandler(index)}
                  >
                    <span>
                      <img
                        src="/images/following-Check.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                    Following
                  </button>
                  <button
                    className="Follow-btn"
                    onClick={() => onFollowHandler(index)}
                  >
                    <span>
                      <img
                        src="/images/follow-Icon-Artwork.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                    Follow
                  </button>
                </div>

                <button className="follow-card-close-btn">
                  <img
                    src="/images/follow-card-Cross.svg"
                    alt="icon"
                    className="img-fluid"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withApollo(PeopleFollowContent, { getDataFromTree });
