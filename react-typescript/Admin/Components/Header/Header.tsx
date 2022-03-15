import React from "react";
import { navItems } from "../../utilsData/navItemsData";

const Header = () => {
  return (
    <>
      <div className="row">
        <header className="custom-header">
          <div className="ezl-dashboard-header">
            <div className="menu-left">
              <div className="menu-wrap">
                <a href="#menu" className="menu-link">
                  <img
                    src="/images/Menu.png"
                    alt="Menu"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="header-logo">
                <a>
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="menuright-side">
              <div className="right-search">
                <form className="/search-form">
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
                  {navItems.map((item, key) => {
                    if (item.type === "navLink") {
                      return (
                        <li key={key} className={item.itemClass}>
                          <div className="menu-times-notifi">
                            <img
                              src={item.imgSrc}
                              alt={item.alt}
                              className="img-fluid"
                            />
                            {item.count ? <span>{item.count}</span> : ""}
                          </div>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      );
                    } else if (item.type === "bitcoin1") {
                      return (
                        <li key={key} className="ether-block ml-md-4">
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
                      );
                    } else if (item.type === "bitcoin2") {
                      return (
                        <li
                          key={key}
                          className="connect-wallet-block cust-marg-12">
                          <a href="#">Connect Wallet</a>
                        </li>
                      );
                    } else if (item.type === "dropdown") {
                      return (
                        <li key={key} className="pl-0">
                          <div className="free-account-d">
                            <div className="dropdown">
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <img
                                  src="/images/free-icon.png"
                                  alt="icon"
                                  className="img-fluid mr-2"
                                />
                                <span>Free</span>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <ul>
                                  <li>
                                    <a className="#" href="#"></a>
                                  </li>
                                  <li>
                                    <a className="#" href="#"></a>
                                  </li>
                                  <li>
                                    <a className="#" href="#"></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="toggle-menu">
                  <div className="d-inline-block">
                    <i
                      className="fa fa-bars"
                      aria-hidden="true"
                      id="submenu-toggle"></i>
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
                    <span className="popup">
                      <div className="user-img">
                        <img
                          src="/images/user-ReginaCooper.png"
                          alt="user image"
                          className="img-fluid"
                        />
                      </div>
                    </span>
                    <div className="popupbox dropdown-menu" id="myPopup">
                      <ul className="">
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
