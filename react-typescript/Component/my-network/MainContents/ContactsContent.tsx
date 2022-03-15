import React, { useState } from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { contactsNetworkData } from "../../../lib/ContactsNetworkData";

const ContactsContent = () => {
  const [dropDown, setDropDown] = useState("Recently added");

  const dropDownHandler = (value: string) => {
    setDropDown(value)
  }

  return (
    <div className="bdy_sec_ntwrk">
      <div className="imported_cntct">
        <div className="import_head">
          <h3 className="imp_avex_cntct">191 Imported Contacts</h3>
        </div>
        <div className="Headdown-nft">
          <div className="SortedByitem">
            <span className="mr-2">Sorted By:</span>
            <div className="network-importcontact dropdown">
              <div
                className="SortedByitem__link Dropdown-to-recent"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  id="network-importcontact_ID"
                  className="network-importcontact-dropbox"
                >
                  {dropDown}
                </span>

                <img src="/images/arrow.svg" alt="icon" className="img-fluid" />
              </div>
              <div id="importcontactMenuButton" className="Recent-add-fn-ln">
                <ul>
                  <li className="recent" onClick={() => dropDownHandler("Recently added")}> Recently added</li>
                  <li className="recent" onClick={() => dropDownHandler("First name")}> First name</li>
                  <li className="recent" onClick={() => dropDownHandler("Last name")}> Last name</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="serch_company">
            <input
              type="text"
              id="myHouse"
              name="myHouse"
              className="magicSearchFull__search"
              placeholder="Search by name or company"
            />
            <img
              src="/images/search-ntf.png"
              alt=""
              className="magic_serch_company"
            />
          </div>
        </div>
      </div>

      <ul>
        {contactsNetworkData &&
          contactsNetworkData.map((item, index) => {
            return (
              <li>
                <div className="cus_avex_netwrk">
                  <div className="Find-start-conversation-Chat-list-users-bft-block">
                    <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                      <img src={item?.img} alt="img" className="img-fluid" />
                    </div>
                    <div className="Find-start-conversation-Chat-list-text-nft-text">
                      <h4>{item?.name}</h4>
                      <p>{item?.dec}</p>
                      <span className="datetime">
                        <img
                          className="clock-image imgfluid"
                          src="/images/Clock-time.png"
                        />
                        <p className="date">{item?.date}</p>
                      </span>
                    </div>
                  </div>
                </div>
                {item?.msg && (
                  <div className="Find-start-conversation-Chat-list-btns_avex_netwrk">
                    <div className="sidebarUserListLiblack">
                      <button className="avex_btn_ntwrk">Message</button>{" "}
                    </div>
                  </div>
                )}

                {item?.invite && (
                  <div className="Find-start-conversation-Chat-list-btns_avex_netwrk">
                    <div className="sidebarUserListLiblack">
                      <button className="avex_btn_ntwrk">Invite</button>{" "}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default withApollo(ContactsContent, { getDataFromTree });
