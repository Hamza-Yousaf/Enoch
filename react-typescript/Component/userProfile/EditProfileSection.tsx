import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import {
  GET_OTHER_USER_QUERY,
  GET_USER_PROFILE_QUERY,
} from "../../graphql/queries";
import { format } from "date-fns";
import { Spin } from "antd";
import dynamic from "next/dynamic";
const EditProfileForm = dynamic(() => import("./EditProfileForm"));
const ProfileDetails = dynamic(() => import("./ProfileDetails"));
const AvatarChangeModal = dynamic(() => import("./AvatarChangeModal"));
import { TOGGLE_FOLLOW_MUTATION } from "../../graphql/userProfileMutations";
import { USERS_I_FOLLOW_QUERY } from "../../graphql/Queries/usersIFollow";
import AlertModal from "../AlertModal";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from "react-lazy-load-image-component";

export const userJoinedDate = (date: string) => {
  if (date?.length > 0) {
    return `${format(new Date(Number(date)), "MMM")} ${format(
      new Date(Number(date)),
      "y"
    )}`;
  }
};

export const userBirthday = (date: string) => {
  if (date?.length > 0) {
    return `${format(new Date(date), "do")} ${format(
      new Date(date),
      "MMM"
    )} ${format(new Date(date), "y")}`;
  }
};

interface Props {
  userId: string;
  usersIFollow: any;
}

const EditProfileSection: React.FC<Props> = ({ userId, usersIFollow }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [showAvatarEditModal, setShowAvatarEditModal] = useState(false);
  const [avatarModalTab, setAvatarModalTab] = useState("avatar");
  const [following, setFollowing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [showUnFollowOptions, setShowUnFollowOptions] = useState(false);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
      {
        query: USERS_I_FOLLOW_QUERY,
      },
    ],
  });

  const loggedInUserQueryData = useQuery(GET_USER_PROFILE_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  const otherUserQueryData = useQuery(GET_OTHER_USER_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      userId: userId,
    },
  });

  useEffect(() => {
    if (otherUserQueryData?.data && userId?.length > 0) {
      setUser(otherUserQueryData?.data?.getOtherUserProfile);
    } else if (loggedInUserQueryData?.data && userId?.length < 1) {
      setUser(loggedInUserQueryData?.data?.getUserProfile);
    }
  }, [otherUserQueryData?.data, loggedInUserQueryData?.data]);

  useEffect(() => {
    if (router.query?.showEditProfileForm === "true")
      setShowEditProfileForm(true);
  }, [router.query]);

  const onSuggestionHandler = (item: any) => {
    const userid = item?.id.toString();
    toggleFollowM({
      variables: {
        userid: userid,
      },
    })
      .then((res) => {
        console.log(res);
        if (/you start following/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setFollowing(true);
        }
        if (/you cancel follow/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setFollowing(false);
          setShowUnFollowOptions(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMessage(err.message);
        setShowAlert(true);
        setSuccess(true);
      });
  };

  console.log("i follow", usersIFollow);

  useEffect(() => {
    let result = usersIFollow.filter((item: any) => {
      return item?.followinguserid === user?.id;
    });

    console.log("following array", result);

    if (result?.length > 0) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }, [usersIFollow?.length, user, userId]);

  console.log(following);

  return (
    <>
      <AlertModal
        message={message}
        setShowAlert={setShowAlert}
        showAlert={showAlert}
        success={success}
      />
      <div className=" dApp-home-cover-And-DP-sect">
        <div
          style={{
            height: 240,
            backgroundImage: `url(${user?.backgroundAvatar}) `,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="dApp-home-cover-photo"
        >
          {/* <img
            src={
              user?.backgroundAvatar || "/images/dApp-home-profile-cover.png"
            }
            alt="cover-photo"
            className="img-fluid cover-bg-img"
          /> */}
          {loggedInUserQueryData?.loading || otherUserQueryData?.loading ? (
            <div
              style={{ height: 240 }}
              className="d-flex flex-row justify-content-center align-items-center"
            >
              <Spin indicator={antIcon} />
            </div>
          ) : (
            <div className="onboarding-prof-avatr ">
              <div
                // style={{ height: 215 }}
                className="onboarding-prof-avatr-pic "
              >
                <div className="userchangeAvImg-overFrame">
                  <LazyLoadImage
                    src={
                      user?.cardAvatar === "1"
                        ? "/images/use-ava-img.png"
                        : user?.cardAvatar === "2"
                        ? "/images/use-ava-img2.png"
                        : user?.cardAvatar === "3"
                        ? "/images/use-ava-img3.png"
                        : ""
                    }
                    className="img-fluid"
                    alt="enoch"
                    effect="opacity"
                  />

                  <p
                    className={
                      user?.cardAvatar === "1"
                        ? "userchangeAvImg-name"
                        : user?.cardAvatar === "2"
                        ? "userchangeAvImg-name-2"
                        : user?.cardAvatar === "3"
                        ? "userchangeAvImg-name-3"
                        : ""
                    }
                  >
                    {user?.userName}
                  </p>
                  <p className="userchangeAvImg-bio">{user?.cardTitle}</p>
                </div>
                <span
                  className={`userchangeAvImg-avatr ${
                    user?.cardAvatar === "1"
                      ? "userchangeAvImg-card3-img"
                      : user?.cardAvatar === "2"
                      ? "userchangeAvImg-card1-img"
                      : "userchangeAvImg-card2-img"
                  }`}
                >
                  {/* <LazyLoadImage
                    src={user?.profileImage || "/images/user-Av4.png"}
                    className="img-fluid"
                    alt="enoch"
                    effect="opacity"
                  /> */}
                  <img
                    src={user?.profileImage || "/images/user-Av4.png"}
                    className="img-fluid"
                    alt="avatar"
                  />
                </span>
                <div
                  className={
                    showEditProfileForm
                      ? "dApp-proPoic-overlay proPoic-overlay"
                      : "dApp-proPoic-overlay"
                  }
                >
                  <button
                    onClick={() => {
                      setShowAvatarEditModal(true);
                      setAvatarModalTab("avatar");
                    }}
                    className="dApp-overlay-profPic-editBttn"
                  >
                    <img
                      src="/images/userEdit.png"
                      className="img-fluid"
                      alt="user"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            className={
              showEditProfileForm
                ? "dApp-prof-bg dApp-prof-bg-d-block"
                : "dApp-prof-bg"
            }
          >
            <img
              src="/images/change-bg-icon.png"
              className="img-fluid mr-2"
              alt="icon"
            />
            <span
              onClick={() => {
                setShowAvatarEditModal(true);
                setAvatarModalTab("bg");
              }}
            >
              Change the Background Image
            </span>
          </div>
          {userId?.length < 1 && (
            <>
              {!showEditProfileForm && (
                <div className="onboardinguser-edit d-none-actiive">
                  <button
                    onClick={() => {
                      setShowEditProfileForm(true);
                    }}
                    className="onboardinguser-edit-btn"
                  >
                    <img
                      src="/images/userEdit.png"
                      className="img-fluid"
                      alt="user"
                    />
                  </button>
                </div>
              )}
            </>
          )}
          {userId?.length > 0 && (
            <div className="onboardinguser-top-usrbttns-grp">
              <ul>
                <li className="onboardinguser-dropbtn">
                  <span
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="/images/onboardThreeDots.png"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                  <div
                    className="
                                  dropdown-menu
                                  onboardthreeDots-btn-content
                                "
                  >
                    <ul>
                      <li>Leaderboard</li>
                      <li>Send Gift</li>
                      <li>Mute @{user?.userName}</li>
                      <li>Block @{user?.userName}</li>
                      <li>Report @{user?.userName}</li>
                    </ul>
                  </div>
                </li>
                {/* <li>
                <span>
                  <img
                    src="/images/onboard-pic1.png"
                    className="img-fluid"
                    alt="icon"
                  />
                </span>
              </li> */}
                <li>
                  <span>
                    <img
                      src="/images/onboard-pic1.svg"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src="/images/onboard-pic3.svg"
                      className="img-fluid"
                      alt="icon"
                    />
                  </span>
                </li>
                <li
                  className={
                    showUnFollowOptions ? "onboard-folow open" : "onboard-folow"
                  }
                  style={
                    following
                      ? { background: "#2bbd54" }
                      : { background: "#7521e2" }
                  }
                >
                  {following === false ? (
                    <button
                      onClick={() => {
                        onSuggestionHandler(user);
                      }}
                      className="onboard-followbtn"
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setShowUnFollowOptions(true);
                      }}
                      className="onboard-followbtn"
                    >
                      Following
                    </button>
                  )}

                  <div className="dropdown-menu op-follow-btn-content">
                    <h3>Unfollow @Alvaro Stats</h3>
                    <p>
                      Their Tweets will no longer show up in your home timeline.
                      You can still view thier profile, unless their Tweets are
                      protected.
                    </p>
                    <div className="OP-unfollow-btn">
                      <button
                        onClick={() => setShowUnFollowOptions(false)}
                        className="Cancel"
                      >
                        <a href="#!">Cancel</a>
                      </button>
                      <button
                        onClick={() => onSuggestionHandler(user)}
                        className="Unfollow"
                      >
                        <a href="#!">Unfollow</a>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <div className="onboardinguser-edit-modal-block">
            <AvatarChangeModal
              user={user}
              avatarModalTab={avatarModalTab}
              setAvatarModalTab={setAvatarModalTab}
              showAvatarEditModal={showAvatarEditModal}
              setShowAvatarEditModal={setShowAvatarEditModal}
              setShowEditProfileForm={setShowEditProfileForm}
            />
          </div>
        </div>
        {showEditProfileForm && (
          <EditProfileForm
            user={user}
            setShowEditProfileForm={setShowEditProfileForm}
          />
        )}

        {showEditProfileForm === false && (
          //@ts-ignore
          <ProfileDetails
            // loading={loading}
            user={user}
            showEditProfileForm={showEditProfileForm}
          />
        )}
      </div>
    </>
  );
};

export default withApollo(EditProfileSection, { getDataFromTree });
