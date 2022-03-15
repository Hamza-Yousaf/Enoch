import React from "react";
import dynamic from "next/dynamic";
const UserMenu = dynamic(() => import("./UserMenu"));

const Header = () => {
  return (
    <div className="row">
      <header className="custom-header">
        <div className="ezl-dashboard-header">
          <div className="menu-left">
            <div className="menu-wrap">
              <a href="#menu" className="menu-link">
                <img src="/images/Menu.png" alt="Menu" className="img-fluid" />
              </a>
            </div>
            <div className="header-logo">
              <a href="javascript:void(0)">
                <img src="/images/logo.png" alt="logo" className="img-fluid" />
              </a>
              <span className="onboard-beta">BETA</span>                              
            </div>
          </div>
          <div className="menuright-side">
            <div className="right-search">
              <form className="search-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fund, ISIN, Keyword "
                  />
                  <button className="search-form-btn" type="submit">
                    <img
                      className="search-img"
                      src="/images/search.png"
                      alt="search"
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="menu-mid-sect">
              <ul id="submenubar">
                <li className="">
                  <div className="menu-times-notifi">
                    <img
                      src="/images/home.png"
                      alt="home"
                      className="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0)">Home</a>
                </li>
                {/* <!-- <li className="">
								<div className="menu-times-notifi"><img src="/images/network.png" alt="network" className="img-fluid"/><span>0</span></div>
								<a href="javascript:void(0)">My Network</a>
							</li> --> */}
                <li className="">
                  <div className="menu-times-notifi">
                    <img
                      src="/images/Chat.png"
                      alt="Chat"
                      className="img-fluid"
                    />
                    <span>0</span>
                  </div>
                  <a href="javascript:void(0)">Messaging</a>
                </li>
                <li className="ether-block">
                  <div className="menu-times-notifi mr-2">
                    <img
                      src="/images/Ethereum.png"
                      alt="Ethereum"
                      className="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0)">
                    ETH Mainnet <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li className="connect-wallet-block">
                  <a href="javascript:void(0)">Connect Wallet</a>
                </li>
                <li className="connect-wallet-block">
                  <a href="javascript:void(0)">
                    <span>
                      <img src="/images/cart.png" className="img-fluid mr-2" />
                    </span>
                    Cart
                  </a>
                </li>
              </ul>
              <div className="toggle-menu">
                <div className="d-inline-block">
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    id="submenu-toggle"
                  ></i>
                </div>
              </div>
            </div>

            <div className="ezl-notificaion">
              <div className="position-relative notificaion-dropdown ezl-notificaion-marg">
                <a href="javascript:void(0)" className="popup">
                  <img src="/images/help.png" alt="help" />
                </a>
              </div>
              <div className=" position-relative notificaion-dropdown">
                <a href="javascript:void(0)" className="popup">
                  <img src="/images/alertBell.png" alt="Bell" />
                  <span className="notificaion-spn">10</span>
                </a>
              </div>
            </div>
            <UserMenu />
          </div>
        </div>
        <div className="switch-user-modal-block">
          <div id="switch-user-modal" className="modal fade">
            {/* <!-- Modal content --> */}
            <div className="modal-content switch-user-modal-content">
              <span className="close">
                <img
                  src="/images/postCross.png"
                  alt="close"
                  className="img-fluid"
                  data-dismiss="modal"
                />
              </span>
              <h2>Which account would you like to use?</h2>
              <div className="switch-user-modal-list">
                <h3>Your accounts</h3>
                <ul>
                  <li>
                    <img
                      src="/images/postUser1.png"
                      className="img-fluid"
                      alt="pic"
                    />{" "}
                    <span>Robert Rose</span>
                  </li>
                  <li>
                    <img
                      src="/images/postUser2.png"
                      className="img-fluid"
                      alt="pic"
                    />{" "}
                    <span>88mph</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="dApp-menu-btn">
        <a href="#">
          <img
            src="/images/LeftSide-Menu.png"
            alt="menu"
            className="img-fluid"
            data-toggle="modal"
            data-target="right-top-modal"
          />
        </a>
        <div className="right-top-modal-block">
          <div id="right-top-modal" className="modal fade">
            {/* <!-- Modal content --> */}
            <div className="modal-content right-top-modal-content">
              <span className="close">
                <img
                  src="/images/postCross2.png"
                  alt="close"
                  className="img-fluid"
                  data-dismiss="modal"
                />
              </span>
              <div className="right-top-body-block">
                <div className="right-top-body-block-lft">
                  <form className="right-search-form">
                    <div className="right-form-group">
                      <img
                        src="/images/help-Search.png"
                        className="img-fluid"
                        alt="search"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search menu..."
                      />
                    </div>
                  </form>
                  <div className="enoch-community-scrollable">
                    <div className="enoch-menu-block-panel">
                      <div className="enoch-menu-block-lft">
                        <div className="enoch-menu-block-items">
                          <h2>Peronal</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon1.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Earn</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon2.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Ranking</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon3.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Billing</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon4.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Affiliate</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items">
                          <h2>Entertainment</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon11.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Popular</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon12.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Slots</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon13.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Live Casino </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon14.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Lottery</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon15.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Roulette</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon16.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Promotions</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items">
                          <h2>Advertising</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon19.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Ad Manager </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon20.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Enoch Ad </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items mb-0">
                          <h2>User Setting </h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon26.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Your Profile </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon27.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Your Account</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="enoch-menu-block-right">
                        <div className="enoch-menu-block-items">
                          <h2>Social</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon5.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a>
                                  <h3>My Networks</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon6.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Communities</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon7.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Artist Channels </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon8.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Company pages </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon9.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Events </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon10.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>News Feed </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items">
                          <h2>Shopping</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon17.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Digital Art Marketplace </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items">
                          <h2>Jobs</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon18.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Remote workhub</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="enoch-menu-block-items">
                          <h2>Developer</h2>
                          <ul>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon21.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Develop</h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon22.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Grow </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon23.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Earn </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon24.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Github </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="right-modal-lft">
                                <img
                                  src="/images/menu-icon25.png"
                                  className="img-fluid"
                                  alt="planner"
                                />
                              </div>
                              <div className="right-modal-right">
                                <a href="#">
                                  <h3>Docs </h3>
                                  <p>
                                    Organise or find events and other things to
                                    do online and nearby
                                  </p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-top-body-block-right">
                  <h3>Create</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon1.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Post
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon2.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon3.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Artist Channel
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon4.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Group
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon5.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Event
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon6.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Company page{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon7.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Job
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon8.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        Digital Art{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img
                            src="/images/creat-icon8.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>{" "}
                        AD{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
