import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const ContactsContainer = () => {
  return (
    <>
      {/* <!-- Ahti add Contacts network screen --> */}
      

      <div className="network_folwers_decsp">
        <p className="descrip_avex">
          Unfollow to stop seeing their posts in your feed. Don’t worry, they
          won’t be notified.
        </p>
      </div>
      <div className="cntct_btns_avex">
        <div className="custon_nft33">
          <button
            className="nft_btn btn-rom btn-primary-avex "
            data-toggle="modal"
            data-target="#demo-1"
          >
            <i>
              <img
                src="/images/Plus_network.png"
                alt=""
                className="nft_icons"
              />
            </i>
            Add more contacts
          </button>
          <button className="nft_btn2">
            <i>
              <img
                src="/images/Download-icon.png"
                alt=""
                className="nft_icons"
              />
            </i>
            Export contacts
          </button>
          <button className="nft_btn3">
            <i>
              <img src="/images/Sync-icon.png" alt="" className="nft_icons" />
            </i>
            Manage synced contacts
          </button>
        </div>
      </div>

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
                    Recently added
                  </span>

                  <img
                    src="/images/arrow.svg"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div id="importcontactMenuButton" className="Recent-add-fn-ln">
                  <ul>
                    <li className="recent"> Recently added</li>
                    <li className="recent"> First name</li>
                    <li className="recent"> Last name</li>
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
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-1.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@MisterTea5</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="Find-start-conversation-Chat-list-btns_avex_netwrk">
              <div className="sidebarUserListLiblack">
                <button className="avex_btn_ntwrk">Message</button>{" "}
              </div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-2.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@Shaquille.oatmeal</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-3.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@Hoosier-daddy</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-4.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@BadKarma</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-5.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@Casanova</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-6.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@MisterTea5</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
            <div className="Find-start-conversation-Chat-list-btns_avex_netwrk">
              <div className="sidebarUserListLiblack">
                <button className="avex_btn_ntwrk">Invite</button>{" "}
              </div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-7.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@HairyPoppins</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-8.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@YellowSnowman</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-9.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@Tinfoilhat</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-10.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@HeartTicker </h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-11.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@PawneeGoddess </h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
          <li>
            <div className="cus_avex_netwrk">
              <div className="Find-start-conversation-Chat-list-users-bft-block">
                <div className="Find-start-conversation-Chat-list-user-dp-nft-sec">
                  <img
                    src="/images/ntf-12.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="Find-start-conversation-Chat-list-text-nft-text">
                  <h4>@Babushka</h4>
                  <p>NFT Community and Metaverse. Follow and ...</p>
                  <span className="datetime">
                    <img
                      className="clock-image imgfluid"
                      src="/images/Clock-time.png"
                    />
                    <p className="date">July 15</p>
                  </span>
                </div>
              </div>
              <div className="Find-start-conversation-Chat-list-btns_avex_netwrk"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default withApollo(ContactsContainer, { getDataFromTree });
