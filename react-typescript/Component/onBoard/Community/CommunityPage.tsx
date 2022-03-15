import Link from "next/link";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
const SignIn = dynamic(() => import("../../../Component/SignIn"));
import { verifyToken } from "../../../lib/verifyToken";
import router from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { JOIN_COMMUNITY_MUTATION } from "../../../graphql/mutations";
const AlertModal = dynamic(() => import("../../AlertModal"));
import { GET_COMMUNITY } from "../../../graphql/queries";
const GrowYourCommunity = dynamic(() => import("./GrowYourCommunity"));
const CreatePost = dynamic(() => import("./CreatePost"));
const LatestPosts = dynamic(() => import("./LatestPosts"));
const CommunityPageSideBar = dynamic(() => import("./CommunityPageSideBar"));
const BackgroundPhotoModal = dynamic(() => import("./BackgroundPhotoModal"));
const InviteModal = dynamic(() => import("./InviteModal"));
const ManagenotiModal = dynamic(() => import("./ManagenotiModal"));
const Wiki = dynamic(() => import("./Wiki"));
const FAQ = dynamic(() => import("./faq"));
const Rules = dynamic(() => import("./rules"));
const AMDS = dynamic(() => import("./amds"));

interface Props {
  communityName: string;
  communityHolder: string;
  loading: boolean;
  communityId: any;
  communityDescription: string;
  isUserCommunity: string | string[] | undefined;
  joinedUsers: any;
  userProfile: any;
}

const CommunityPage: React.FC<Props> = ({
  communityHolder,
  communityName,
  loading,
  communityId,
  communityDescription,
  isUserCommunity,
  userProfile,
}) => {
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [headerText, setHeaderText] = useState(communityName);
  const [isHeaderTextEditable, setIsHeaderTextEditable] = useState(false);
  const [editBgColor, setEditBgColor] = useState(false);
  const [communityTab, setCommunityTab] = useState("posts");

  const {
    data: communityData,
    loading: communityLoading,
    error: communityError,
  } = useQuery(GET_COMMUNITY, {
    variables: {
      communityId: communityId,
    },
  });

  let userInCommunity = false;

  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  if (success !== true) {
    communityData?.getCommunity?.joinedUsers?.forEach((user: any) => {
      console.log(user.user.email);
      if (user.user.email === userProfile?.data?.getUserProfile?.email) {
        setSuccess(true);
      }
    });
  }

  const [
    joinCommunity,
    {
      data: joinCommunityData,
      loading: joinCommunityLoading,
      error: joinCommunityEroor,
    },
  ] = useMutation(JOIN_COMMUNITY_MUTATION, {
    refetchQueries: ["GET_COMMUNITY"],
  });

  const join_community = () => {
    joinCommunity({
      variables: {
        communityId,
      },
    })
      .then((result) => {
        console.log(result);
        if (result?.data?.joinCommunity === "Community Joined Successfully") {
          setMessage("Community Joined Successfully");
          setSuccess(true);
          setShowAlert(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
        setSuccess(false);
        setShowAlert(true);
      });
  };

  function countWords(str: any) {
    return str.trim().split(/\s+/).length;
  }

  const setCommunityTabHandler = (value: string) => {
    setCommunityTab(value);
  };

  return (
    <>
      <AlertModal
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        success={success}
        message={message}
      />
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <div className="row">
          <div className="ezl-dashboard-container">
            <div className="enoch-community-header-banner mb-4">
              {isUserCommunity === "true" ? (
                <>
                  <img
                    src="/images/community-img1.png"
                    className="img-fluid your-event-cover-img"
                    alt="banner"
                  />
                  <span
                    className={
                      isHeaderTextEditable
                        ? "enoch-community-BGedit-btn deefi-BGedit-active"
                        : "enoch-community-BGedit-btn"
                    }
                    data-toggle="modal"
                    data-target="#community-head-bg"
                  >
                    <img
                      src="/images/communityEdit.png"
                      className="img-fluid"
                      alt="edit"
                    />
                  </span>
                  <BackgroundPhotoModal />
                  <div
                    className={
                      isHeaderTextEditable
                        ? "enoch-community-header-content paranteditable"
                        : "enoch-community-header-content"
                    }
                  >
                    <h2
                      contentEditable={isHeaderTextEditable}
                      className={isHeaderTextEditable ? "editable" : ""}
                    >
                      {headerText || communityName}
                    </h2>
                    <p className="community-header-txt1">max. 25 words</p>
                    <div className="enoch-community-edit-head">
                      {isHeaderTextEditable ? (
                        <span
                          onClick={() => {
                            setIsHeaderTextEditable(false);
                          }}
                          className="communityEdit-txt2"
                        >
                          <img
                            src="/images/savepage.png"
                            className="img-fluid mr-1"
                            alt="edit"
                          />
                          Save Page
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            setIsHeaderTextEditable(true);
                          }}
                          className="communityEdit-txt1"
                        >
                          <img
                            src="/images/communityEdit.png"
                            className="img-fluid mr-1"
                            alt="edit"
                          />
                          Edit Page
                        </span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="/images/community-img-2.png"
                    className="img-fluid your-event-cover-img"
                    alt="banner"
                  />
                  <div className="enoch-community-header-content">
                    <h2>{headerText || communityName}</h2>
                  </div>
                </>
              )}
            </div>
            <div className="enoch-community-deefi-block">
              <div className="enoch-community-deefi-block-lft">
                <div className="communityView-defi-panel">
                  <div className="enoch-community-deefi-signal mb-4">
                    <div className="enoch-community-deefi-signal-lft">
                      <div className="community-deefi-logo mr-4">
                        <img
                          src="/images/community-img2.png"
                          className="img-fluid"
                          alt="defi"
                        />
                      </div>
                      <div>
                        {loading ? (
                          <div className="ml-3 dot-pulse"></div>
                        ) : loading === false && communityName?.length > 0 ? (
                          <>
                            <h3>{communityName} </h3>
                            <p>{communityHolder}</p>
                          </>
                        ) : (
                          <p>failed to load community data</p>
                        )}
                      </div>
                      <span
                        className={classnames("enoch-community-deefi-editbtn", {
                          "deefi-editbtn-active": isHeaderTextEditable,
                          "deefi-editbtn-bgactive": editBgColor,
                        })}
                        onClick={() => setEditBgColor(true)}
                      >
                        <img
                          src="/images/communityEdit.png"
                          className="img-fluid"
                          alt="edit"
                        />
                      </span>
                      <div
                        className={classnames("community-deefi-change-bg", {
                          "deefi-edit-bgactive": editBgColor,
                        })}
                      >
                        <h3>Change the bg color for your intials</h3>
                        <div className="community-deefi-colr-block">
                          <ul>
                            <li className="deefi-colr1">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr2">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr3 clr-selected">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr4">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr5">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr6">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr7">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr8">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr9">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr10">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr11">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr12">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                            <li className="deefi-colr13">
                              <div className="community-clr-selected">
                                <img
                                  src="/images/imageCheck2.png"
                                  className="img-fluid"
                                  alt="community"
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="community-cat-mor">
                            <span></span>
                          </div>
                        </div>
                        <div className="community-deefi-bttn-block">
                          <button
                            className="community-deefi-cancelbtn"
                            onClick={() => setEditBgColor(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="community-deefi-savelbtn"
                            onClick={() => setEditBgColor(false)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    {isUserCommunity === "true" ? (
                      <div className="enoch-community-deefi-signal-right">
                        <ul className="community-deefi-signal-list">
                          <li>
                            <div className="comuni-defi-share">
                              <img
                                src="/images/community-share.png"
                                className="img-fluid"
                                alt="share"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="comuni-defi-share">
                              <img
                                src="/images/community-alert.png"
                                className="img-fluid"
                                alt="share"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="event-3dots dropdown">
                              <span
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  src="/images/community-3dots.png"
                                  alt="3dots"
                                  className="img-fluid"
                                />
                              </span>
                              <div className="dropdown-menu event-info-droplist">
                                <ul>
                                  <li>Community Tools</li>
                                  <li
                                    data-toggle="modal"
                                    data-target="#Invite-Attendees-Modal"
                                  >
                                    Invite Users
                                  </li>
                                  <li>Delete Community</li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ) : success === false ? (
                      <div className="enoch-community-deefi-signal-right">
                        <ul className="community-deefi-signal-list">
                          <li>
                            <div
                              className="comuni-defi-share"
                              data-toggle="modal"
                              data-target="#managenoti-Modal"
                            >
                              <img
                                src="/images/community-alert.png"
                                className="img-fluid community-alert"
                                alt="share"
                              />
                              <img
                                src="/images/community-alert2.png"
                                className="img-fluid community-alert-hovr"
                                alt="share"
                              />
                            </div>
                          </li>
                          <li>
                            {" "}
                            <button
                              onClick={join_community}
                              className="btn defi-join-btn"
                            >
                              Join
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : success === true ? (
                      <div className="enoch-community-deefi-signal-right">
                        <ul className="community-deefi-signal-list">
                          <li>
                            <div
                              className="comuni-defi-share"
                              data-toggle="modal"
                              data-target="#managenoti-Modal"
                            >
                              <img
                                src="/images/community-alert.png"
                                className="img-fluid community-alert"
                                alt="share"
                              />
                              <img
                                src="/images/community-alert2.png"
                                className="img-fluid community-alert-hovr"
                                alt="share"
                              />
                            </div>
                          </li>
                          <li>
                            <button className="btn defi-joined-btn">
                              Joined
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {isUserCommunity === "false" && (
                    <div className="communityView-tab">
                      <ul className="communityViewCatTab">
                        <li onClick={() => setCommunityTabHandler("posts")}
                        >
                          <button

                            className={classnames("communityViewlinks", {
                              'active': communityTab == "posts",
                            })}
                          >
                            Posts
                          </button>
                        </li>
                        <li
                          onClick={() => setCommunityTabHandler("predictions")}
                        >
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "predictions",
                            })}
                          >
                            Predictions
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("wiki")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "wiki",
                            })}
                          >
                            Wiki{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("faq")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "faq",
                            })}
                          >
                            FAQ{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("rules")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "rules",
                            })}
                          >
                            Rules{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("amds")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "amds",
                            })}
                          >
                            AMAs{" "}
                          </button>
                        </li>
                        <li>
                          <div className="communityView-dropbox">
                            <a
                              href="#"
                              id="communityView-dropbox-list"
                              className="communityView-box"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Discussions
                            </a>
                            <div
                              id="communityView-dropbox-list1"
                              className="dropdown-menu communityView-dropbox-listItems"
                            >
                              <ul>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <span className="communityView-span">
                        {headerText || communityName}
                      </span>
                    </div>
                  )}
                </div>
                {isUserCommunity === "true" && <CreatePost />}
                {isUserCommunity === "true" && <GrowYourCommunity />}
                {isUserCommunity === "false" && communityTab == "posts" && <LatestPosts />}
                {isUserCommunity === "false" && communityTab == "wiki" && <Wiki />}
                {isUserCommunity === "false" && communityTab == "faq" && <FAQ />}
                {isUserCommunity === "false" && communityTab == "rules" && <Rules />}
                {isUserCommunity === "false" && communityTab == "amds" && <AMDS />}
                 
              </div>
              <CommunityPageSideBar
                isUserCommunity={isUserCommunity}
                communityId={communityId}
                success={success}
                communityName={communityName}
                communityDescription={communityDescription}
              />
            </div>
          </div>
        </div>
      </div>
      <InviteModal />
      <ManagenotiModal />
    </>
  );
};

export default CommunityPage;
