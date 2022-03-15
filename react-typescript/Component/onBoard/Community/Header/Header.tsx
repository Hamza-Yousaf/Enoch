import React, { useState } from "react";
import dynamic from "next/dynamic";
const OptionsSubMenu = dynamic(() => import("./OptionsSubMenu"));
const UserSubMenu = dynamic(() => import("./UserSubMenu"));

const Header = () => {
  const [showUserSubmenu, setShowUserSubMenu] = useState(false);
  const [showOptionsSubMenu, setShowOptionsSubMenu] = useState(false);

  const openUserSubMenu = () => {
    setShowUserSubMenu(!showUserSubmenu);
  };

  const openOptionsSubMenu = () => {
    setShowOptionsSubMenu(!showOptionsSubMenu);
  };
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
              <div
                className="
                    position-relative
                    notificaion-dropdown
                    ezl-notificaion-marg
                  "
              >
                <a href="javascript:void(0)" className="popup">
                  <img src="/images/help.png" alt="help" />
                </a>
              </div>
              <div className="position-relative notificaion-dropdown">
                <a href="javascript:void(0)" className="popup">
                  <img src="/images/alertBell.png" alt="Bell" />
                  <span className="notificaion-spn">10</span>
                </a>
              </div>
            </div>
            <div className="ezl-user-ac">
              <div className="account-d dropdown">
                <div className="dropdown-buttn">
                  <span onClick={openUserSubMenu} className="popup">
                    <div className="user-img">
                      <img
                        src="/images/user-ReginaCooper.png"
                        alt="user image"
                        className="img-fluid"
                      />
                    </div>
                  </span>
                  <UserSubMenu
                    showUserSubMenu={showUserSubmenu}
                    setShowUserSubMenu={setShowUserSubMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="switch-user-modal-block">
          <div id="switch-user-modal" className="modal fade">
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
                <ul>
                  <li>
                    <img
                      src="/images/postUser1.png"
                      className="img-fluid"
                      alt="pic"
                    />
                    <span>Robert Rose</span>
                  </li>
                  <li>
                    <img
                      src="/images/postUser2.png"
                      className="img-fluid"
                      alt="pic"
                    />
                    <span>88mph</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="dApp-menu-btn">
        <a onClick={openOptionsSubMenu} href="#">
          <img
            src="/images/LeftSide-Menu.png"
            alt="menu"
            className="img-fluid"
            data-toggle="modal"
            data-target="right-top-modal"
          />
        </a>
        <div className="right-top-modal-block">
          <OptionsSubMenu
            showOptionsSubMenu={showOptionsSubMenu}
            setShowOptionsSubMenu={setShowOptionsSubMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
