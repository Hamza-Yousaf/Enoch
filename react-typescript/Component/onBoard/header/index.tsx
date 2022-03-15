import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Link from "next/link";
import OnOutsiceClick from "react-outclick";
import { useMutation, useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";
import { removeUserToken } from "../../../lib/removeUserToken";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import withApollo from "../../../lib/withApollo";
import { GET_USER_PROFILE_QUERY } from "../../../graphql/queries";
import {
  setOnlineStatus,
  RecieveUser_Network_Status,
} from "../../../graphql/mutattions/setOnlineStatus";

const Header: React.FC = () => {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState<boolean>(false);
  const [switchAccount, setSwitchAccount] = useState<boolean>(false);
  const [switchModal, setSwitchModal] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const [tradeMenu, setTradeMenu] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (data) {
      setLoggedInUser(data?.getUserProfile);
    }
  }, [data]);

  const {
    showCreateCommunityModal,
    current_entertainment_tab,
    current_entertainment_sub_menu,
  } = bindActionCreators(actionCreators, dispatch);

  const logoutHandler = () => {
    removeUserToken();
    router.push("/");
  };

  const goToEntertainment = (mainTab: string, subTab: string) => {
    current_entertainment_tab(mainTab);
    current_entertainment_sub_menu(subTab);
    setSearchMenu(false);
    router.push("/entertainment");
  };

  const [setOnlineStatusFunc] = useMutation(setOnlineStatus, {
    refetchQueries: [{ query: GET_USER_PROFILE_QUERY }],
  });

  const [RecieveUserNetworkStatusFunc] = useMutation(
    RecieveUser_Network_Status
  );

  const setUserOnlineStatus = () => {
    setOnlineStatusFunc()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     if (window.navigator.onLine) {
  //       RecieveUserNetworkStatusFunc({
  //         variables: {
  //           status: true
  //         },
  //       })
  //         .then((res) => {
  //           //console.log(res);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //     else {
  //       RecieveUserNetworkStatusFunc({
  //         variables: {
  //           status: false
  //         },
  //       })
  //         .then((res) => {
  //           //console.log(res);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }, 3000);
  // }, []);

  return (
    <>
      <div className="row">
        <header className="custom-header">
          <OnOutsiceClick
            onOutsideClick={(e) => {
              setSwitchAccount(false);
              setSwitchModal(false);
              setTradeMenu(false);
            }}
          >
            <div className="ezl-dashboard-header">
              <div className="menu-left">
                <div className="menu-wrap">
                  {/* <!--trade menu--> */}
                  <a
                    onClick={() => setTradeMenu(!tradeMenu)}
                    className="menu-link"
                  >
                    <img
                      src="/images/Menu.png"
                      alt="Menu"
                      className="img-fluid"
                    />
                  </a>
                  <div
                    className={classnames("tradecontainer", {
                      show: tradeMenu,
                    })}
                    id="trademenu-drpdown"
                  >
                    <div
                      className="trade-menu-panel-panel-group"
                      id="accordionMenu"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="trade-menu-panel">
                        <div className="trade-menu-heading" role="tab">
                          <h4 className="trade-menu-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordionMenu"
                              href="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <span>
                                <img
                                  src="/images/Over.png"
                                  className="img-fluid"
                                  alt="Overview"
                                />
                              </span>
                              Overview
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="trade-menu-panel">
                        <div
                          className="trade-menu-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="trade-menu-title">
                            <a
                              className="collapsed trade-dropmenu"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordionMenu"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <span>
                                <img
                                  src="/images/Borrow.png"
                                  className="img-fluid trade-menu-icon"
                                  alt="Trade"
                                />
                                <img
                                  src="/images/Borrow2.png"
                                  className="img-fluid trade-menu-icon-active"
                                  alt="Trade"
                                />
                              </span>
                              Trade
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="trade-menu-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <ul className="nav">
                            <li>
                              <Link href="/trade/swap">
                                <a>Swap</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/trade/liquidity">
                                <a className="trade-menuItem-active">
                                  Liquidity
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/trade/bridge">
                                <a>Bridge</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="trade-menu-panel">
                        <div
                          className="trade-menu-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="trade-menu-title">
                            <a
                              className="collapsed trade-dropmenu"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordionMenu"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <span>
                                <img
                                  src="/images/pools.png"
                                  className="img-fluid trade-menu-icon"
                                  alt="pools"
                                />
                                <img
                                  src="/images/pools2.png"
                                  className="img-fluid trade-menu-icon-active"
                                  alt="pools"
                                />
                              </span>
                              Pools
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="trade-menu-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <ul className="nav">
                            <li>
                              <Link href="/trade/entertainment-pools">
                                <a className="trade-menuItem-active">
                                  Entertainment Pools
                                </a>
                              </Link>
                            </li>
                            <li>
                              <a href="#">NFT Farming Pools</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="trade-menu-panel">
                        <div
                          className="trade-menu-heading"
                          role="tab"
                          id="headingFour"
                        >
                          <h4 className="trade-menu-title">
                            <a
                              className="collapsed trade-dropmenu"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordionMenu"
                              href="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <span>
                                <img
                                  src="/images/menuStacking.png"
                                  className="img-fluid trade-menu-icon"
                                  alt="Staking"
                                />
                                <img
                                  src="/images/menuStacking2.png"
                                  className="img-fluid trade-menu-icon-active"
                                  alt="Staking"
                                />
                              </span>
                              Staking
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="trade-menu-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFour"
                        >
                          <ul className="">
                            <li>
                              <a href="#">Enoch Staking</a>
                            </li>
                            <li>
                              <a href="#" className="trade-menuItem-active">
                                NFT staking
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="header-logo">
                  <Link href="/feeds">
                    <a>
                      <img
                        src="/images/logo.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </a>
                  </Link>
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
                        placeholder="Search "
                      />
                      <button className="search-form-btn">
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
                    className={classnames("", {
                      "submenu-active": subMenu,
                    })}
                  >
                    <li>
                      <div className="menu-times-notifi">
                        <img
                          src="/images/home.png"
                          alt="home"
                          className="img-fluid"
                        />
                      </div>
                      <Link href="/feeds">
                        <a>Home</a>
                      </Link>
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
                          <img
                            src="/images/cart.png"
                            className="img-fluid mr-2"
                          />
                        </span>
                        Cart
                      </a>
                    </li>
                  </ul>
                  <div className="toggle-menu">
                    <div className="d-inline-block">
                      <i
                        className={classnames("", {
                          "fa fa-bars": !subMenu,
                          "fa fa-times": subMenu,
                        })}
                        onClick={() => setSubMenu(!subMenu)}
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

                <div className="ezl-user-ac">
                  <div className="account-d dropdown">
                    <div className="dropdown-buttn">
                      <span className="popup">
                        <div
                          className="user-img"
                          onClick={() => setSwitchAccount(!switchAccount)}
                        >
                          <img
                            src="/images/profile-pic.png"
                            alt="user image"
                            className="img-fluid"
                          />
                        </div>
                      </span>
                      <div
                        id="myPopup"
                        className={classnames("popupbox dropdown-menu", {
                          show: switchAccount,
                        })}
                      >
                        <ul className="">
                          <li>
                            <div className="enoch-usr-prof">
                              <span>
                                <img
                                  style={{ width: 30, height: 30 }}
                                  src={
                                    loggedInUser?.profileImage ||
                                    "/images/user-pro-pic.png"
                                  }
                                  className="img-fluid"
                                  alt="profile- pic"
                                />
                                {loggedInUser?.userName != null
                                  ? loggedInUser?.userName
                                  : "EncchUser007"}
                              </span>
                              <span
                                onClick={() => {
                                  router.push({
                                    pathname: `/my-profile`,
                                    query: {
                                      showEditProfileForm: true,
                                    },
                                  });
                                }}
                              >
                                <Link href="/my-profile">
                                  <a>Change</a>
                                </Link>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="enoch-usr-status-block">
                              <div className="usr-status-left">
                                Online Status
                              </div>
                              <div className="usr-status-right">
                                <div className="post-switch">
                                  <label className="postswitch">
                                    <input
                                      onChange={setUserOnlineStatus}
                                      type="checkbox"
                                      checked={loggedInUser?.isOnline}
                                    />
                                    <span className="post-slider round"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="enoch-usr-status-block">
                              <a href="#">Become Creator </a>
                            </div>
                            <div className="enoch-usr-status-block">
                              <Link href="/my-profile">
                                {/* <a className="enoch-blue-clr"> */}
                                Your Public Profile
                                {/* </a> */}
                              </Link>
                            </div>
                            <div className="enoch-usr-status-block enoch-usr-status-block-follwrs">
                              <a href="#">Follower requests</a>{" "}
                              <span>{loggedInUser?.followerCount}</span>
                            </div>
                            <div className="enoch-usr-status-block mb-0">
                              <a href="#">Invite a Friend</a>
                            </div>
                          </li>
                          <li>
                            <div className="enoch-usr-status-block">
                              <Link href="/account-and-settings">
                                <a>Setting</a>
                              </Link>
                            </div>
                            <div className="enoch-usr-status-block">
                              <Link href="/help-center">
                                <a>Help Center</a>
                              </Link>
                            </div>
                            {/* <div className="enoch-usr-status-block">
                              <Link href="/kyc/profile-steps">
                                Verify Account (KYC)
                              </Link>
                            </div> */}
                            <div className="enoch-usr-status-block mb-0">
                              <a href="#" className="orange-clr">
                                Upgrade to Premium
                              </a>
                            </div>
                          </li>
                          <li className="mt-4">
                            <div className="enoch-usr-status-block mb-0">
                              Wallet
                              <span>
                                <a href="#" className="btn freebonus-btn">
                                  $400
                                </a>
                              </span>
                            </div>
                          </li>
                          <li className="mt-4 pb-0">
                            <div className="enoch-usr-status-block mb-0 manage-ac">
                              <h3>Manage</h3>
                              <ul>
                                <li>
                                  <div className="manage-ac-block">
                                    <span>Comapny: </span>
                                    <Link href="/company/single-company">
                                      <span className="ml-1">
                                        <img
                                          src="/images/man-icon1.png"
                                          className="img-fluid mr-1"
                                          alt="user"
                                        />
                                        88mph{" "}
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="manage-ac-block">
                                    <span>Comapny: </span>
                                    <span className="ml-1">
                                      <img
                                        src="/images/man-icon2.png"
                                        className="img-fluid mr-1"
                                        alt="user"
                                      />
                                      CryptoBlue{" "}
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="mt-4 mb-0 pb-0">
                            <div
                              className="enoch-usr-status-block mb-0"
                              onClick={() => logoutHandler()}
                            >
                              <a className="post-red-clr">Logout</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="switch-user-modal-block">
              <div
                id="switch-user-modal"
                className={classnames("modal fade", {
                  open: switchModal,
                })}
              >
                {/* <!-- Modal content --> */}
                <div className="modal-content switch-user-modal-content">
                  <span className="close" onClick={() => setSwitchModal(false)}>
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
          </OnOutsiceClick>
          <div className="dApp-menu-btn">
            <a href="#" onClick={() => setSearchMenu(true)}>
              <img
                src="/images/LeftSide-Menu.png"
                alt="menu"
                className="img-fluid"
                data-toggle="modal"
                data-target="right-top-modal"
              />
            </a>

            <OnOutsiceClick
              onOutsideClick={(e) => {
                setSearchMenu(false);
              }}
            >
              <div className="right-top-modal-block">
                <div
                  id="right-top-modal"
                  className={classnames("modal fade", {
                    open: searchMenu,
                  })}
                >
                  {/* <!-- Modal content --> */}
                  <div className="modal-content right-top-modal-content">
                    <span
                      className="close"
                      onClick={() => {
                        setSearchMenu(false);
                      }}
                    >
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
                                <h2>Personal</h2>
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
                                      <a href="#">NFT Vault</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <Link href="/earn/standard-user">
                                        <a>Earning</a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon28.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#">Wallet</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="#">Billing</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon35.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#">Ranking</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="#">Affiliate</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          goToEntertainment(
                                            "popular",
                                            "bonuses"
                                          )
                                        }
                                      >
                                        Popular
                                      </a>

                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon30.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          goToEntertainment("casino", "keno")
                                        }
                                      >
                                        Casino
                                      </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon31.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          goToEntertainment(
                                            "sports",
                                            "sports-betting"
                                          )
                                        }
                                      >
                                        Sports
                                      </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon32.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          goToEntertainment(
                                            "games",
                                            "gangster-wars"
                                          )
                                        }
                                      >
                                        Games
                                      </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          goToEntertainment(
                                            "promotions",
                                            "bonuses"
                                          )
                                        }
                                      >
                                        Promotions
                                      </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="#">Ad Manager </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="#">Enoch Ad</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <Link href="/setting/profile">
                                        <a>Your Profile </a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <Link href="/account-and-settings">
                                        <a>Your Account</a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                    <Link href="/my-network">                                   
                                      <a>My Networks</a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="/communities">Communities</a>

                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/spheres.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#!">Spheres</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon36.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#">Livezone</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/company-icon.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <Link href="#">
                                        <a>Company pages </a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/Events-icon.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <Link href="/events">
                                        <a>Events </a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon37.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <Link href="/feeds">
                                        <a>News Feed </a>
                                      </Link>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="enoch-menu-block-items">
                                <h2>Creative</h2>
                                <ul>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon33.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#!">Creator Portals </a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                        src="/images/menu-icon34.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#!">Digital Marketplace</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="right-modal-lft">
                                      <img
                                        src="/images/menu-icon38.png"
                                        className="img-fluid"
                                        alt="planner"
                                      />
                                    </div>
                                    <div className="right-modal-right">
                                      <a href="#!">Enoch Shops</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="enoch-menu-block-items">
                                <h2>Find Work</h2>
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
                                      <a href="#">Remote workhub</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                                      <a href="#!">Enoch for developers</a>
                                      <p>
                                        Organise or find events and other things
                                        to do online and nearby
                                      </p>
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
                            <Link href="/post">
                              <a>
                                <span>
                                  <img
                                    src="/images/creat-icon1.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </span>{" "}
                                Post
                              </a>
                            </Link>
                          </li>
                          <li
                            onClick={() => {
                              console.log(router.route === "/");
                              if (router.route === "/feeds") {
                                console.log("ok...");
                                showCreateCommunityModal(true);
                                setSearchMenu(false);
                              } else {
                                router.push({
                                  pathname: "/feeds",
                                  query: {
                                    showCreateCommunityModal: true,
                                  },
                                });
                              }
                            }}
                          >
                            <a style={{ cursor: "pointer" }}>
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
                            <Link href="/events/create">
                              <a>
                                <span>
                                  <img
                                    src="/images/creat-icon5.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </span>{" "}
                                Event
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="/images/creat-icon10.png"
                                  className="img-fluid"
                                  alt="icon"
                                />
                              </span>{" "}
                              NFT
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <span>
                                <img
                                  src="/images/spheres-small.png"
                                  className="img-fluid"
                                  alt="icon"
                                />
                              </span>
                              Sphere
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <span>
                                <img
                                  src="/images/creat-icon11.png"
                                  className="img-fluid"
                                  alt="icon"
                                />
                              </span>{" "}
                              Reel
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>
                                <img
                                  src="/images/creat-icon14.png"
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
                                  src="/images/creat-icon12.png"
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
                                  src="/images/creat-icon13.png"
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
            </OnOutsiceClick>
          </div>
        </header>
      </div>
    </>
  );
};

export default withApollo(Header, { getDataFromTree });
