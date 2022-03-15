import React, { useState } from "react";
import ActivitiesModal from "./ActivitiesModal";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openActivitiesModal, setOpenActivitiesModal] = useState(false);
  const [showSubMenu, setShowSubmenu] = useState(false);

  const changeOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  const showActivitiesModal = () => {
    setOpenActivitiesModal(!openActivitiesModal);
  };

  const toggleSubMenu = () => {
    setShowSubmenu(!showSubMenu);
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
              <a href="#">
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
              <ul
                id="submenubar"
                className={showSubMenu ? "submenu-active" : ""}
              >
                <li className="">
                  <div className="menu-times-notifi">
                    <img
                      src="/images/home.png"
                      alt="home"
                      className="img-fluid"
                    />
                  </div>
                  <a href="#">Home</a>
                </li>
                <li className="">
                  <div className="menu-times-notifi">
                    <img
                      src="/images/network.png"
                      alt="network"
                      className="img-fluid"
                    />
                    <span>0</span>
                  </div>
                  <a href="#">My Network</a>
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
                  <a href="#">Messaging</a>
                </li>
                <li className="ether-block">
                  <div className="menu-times-notifi mr-2">
                    <img
                      src="/images/Ethereum.png"
                      alt="Ethereum"
                      className="img-fluid"
                    />
                  </div>
                  <a href="#">
                    ETH Mainnet <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li className="connect-wallet-block">
                  <a href="#">Connect Wallet</a>
                </li>
                <li className="connect-wallet-block">
                  <a href="#">
                    <span>
                      <img src="/images/cart.png" className="img-fluid mr-2" />
                    </span>
                    Cart
                  </a>
                </li>
              </ul>
              <div onClick={toggleSubMenu} className="toggle-menu">
                <div className="d-inline-block">
                  <i
                    className={showSubMenu ? "fa fa-times" : "fa fa-bars"}
                    aria-hidden="true"
                    id="submenu-toggle"
                  ></i>
                </div>
              </div>
            </div>

            <div className="ezl-notificaion">
              <div className="position-relative notificaion-dropdown ezl-notificaion-marg">
                <a href="#" className="popup">
                  <img src="/images/help.png" alt="help" />
                </a>
              </div>
              <div className=" position-relative notificaion-dropdown">
                <a href="#" className="popup">
                  <img src="/images/alertBell.png" alt="Bell" />
                  <span className="notificaion-spn">10</span>
                </a>
              </div>
            </div>
            <div className="ezl-user-ac">
              <div className="account-d dropdown">
                <div className="dropdown-buttn">
                  <span
                    onClick={() => setOpenUserMenu(!openUserMenu)}
                    className="popup"
                  >
                    <div className="user-img">
                      <img
                        src="/images/user-RenaCooper.png"
                        alt="user image"
                        className="img-fluid"
                      />
                    </div>
                  </span>
                  <UserMenu
                    isOnline={isOnline}
                    changeOnlineStatus={changeOnlineStatus}
                    openUserMenu={openUserMenu}
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
        <a onClick={showActivitiesModal} href="#">
          <img
            src="/images/LeftSide-Menu.png"
            alt="menu"
            className="img-fluid"
            data-toggle="modal"
            data-target="right-top-modal"
          />
        </a>

        <ActivitiesModal
          openActivitiesModal={openActivitiesModal}
          setOpenActivitiesModal={setOpenActivitiesModal}
        />
      </div>
    </div>
  );
};

export default Header;
