import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_SUGGEST_FOLLOW } from "../../graphql/userProfileQueries";
import withApollo from "../../lib/withApollo";
import dynamic from "next/dynamic";
const WhoToFollow = dynamic(() => import("../home-post/Components/MainSection/WhoToFollow"));
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import { GET_MY_FOLLOERS } from "../../graphql/Queries/myFollowers";
import { USERS_I_FOLLOW_QUERY } from "../../graphql/Queries/usersIFollow";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  setShowMoreSuggestions: any;
}

const UserProfileRightSideBar: React.FC<Props> = ({
  setShowMoreSuggestions,
}) => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { loading, data } = useQuery(GET_SUGGEST_FOLLOW);
  const [profileCompleteStatus, setProfileCompleteStatus] = useState(60);
  const [usersIFollow, setUsersIFollow] = useState([]);

  const [allMyFollowers, setAllMyFollowers] = useState([]);

  const allFollowersData = useQuery(GET_MY_FOLLOERS);

  useEffect(() => {
    if (allFollowersData?.data) {
      setAllMyFollowers(allFollowersData?.data?.AllMyFloowers);
    }
  }, [allFollowersData]);

  const loggedInUserQueryData = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (data) {
      setUser(data?.getUserProfile);
    }
  }, [data]);

  useEffect(() => {
    if (loggedInUserQueryData?.data) {
      setLoggedInUser(loggedInUserQueryData?.data?.getUserProfile);
    }
  }, [loggedInUserQueryData?.data]);

  console.log(loggedInUser);

  const usersIFollowData = useQuery(USERS_I_FOLLOW_QUERY);

  useEffect(() => {
    if (usersIFollowData?.data) {
      setUsersIFollow(usersIFollowData?.data?.UsersIFollowerd);
    }
  }, [usersIFollowData?.data]);
  return (
    <div className="home-post-right">
      <div className="right-ovelay dApp-overlay"></div>
      {profileCompleteStatus === 100 && (
        <div className="dApp-What-happening-sect">
          <div className="dApp-What-happeningheadings">
            <h1>What’s happening</h1>
          </div>
          <div className="dApp-What-happening-news-sect">
            <div className="dApp-What-happening-news">
              <div className="dApp-What-happening-news-text">
                <h2>
                  News . <span>2 minutes ago</span>
                </h2>
                <p>
                  Looking at the claim that discourse around ‘White Previlege’
                  can hamper white working class students.
                </p>
              </div>
              <div className="dApp-What-happening-news-photo">
                <img
                  src="/images/dApp-news-pic-1.png"
                  alt="photo"
                  className="img-fluid"
                />
              </div>
            </div>
            <h6>
              Treanding with <a href="#">#WhitePrevilege</a>
            </h6>
          </div>

          <div className="dApp-Trending-United-Kingdom-sect">
            <h1>Trending in United Kingdom</h1>
            <a href="#">#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className="dApp-Trending-United-Kingdom-3dots">
              <img
                src="/images/dApp-ThreeDots.png"
                alt="3Dots"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="dApp-Trending-United-Kingdom-sect">
            <h1>Trending in United Kingdom</h1>
            <a href="#">#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className="dApp-Trending-United-Kingdom-3dots">
              <img
                src="/images/dApp-ThreeDots.png"
                alt="3Dots"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="dApp-Who-seemore">
            <a href="#">Show more</a>
          </div>
        </div>
      )}
      {profileCompleteStatus < 100 && (
        <div className="Complete-profile-progress-sect">
          <div className="Complete-profile-DP">
            <div className="userchangeAvImg-overFrame">
              <LazyLoadImage
                src={
                  loggedInUser?.cardAvatar === "1"
                    ? "/images/use-ava-img.png"
                    : loggedInUser?.cardAvatar === "2"
                    ? "/images/use-ava-img2.png"
                    : loggedInUser?.cardAvatar === "3"
                    ? "/images/use-ava-img3.png"
                    : ""
                }
                className="img-fluid"
                alt="enoch"
                effect="opacity"
              />
              {/* <img
                src={
                  loggedInUser?.cardAvatar === "1"
                    ? "/images/use-ava-img.png"
                    : loggedInUser?.cardAvatar === "2"
                    ? "/images/use-ava-img2.png"
                    : loggedInUser?.cardAvatar === "3"
                    ? "/images/use-ava-img3.png"
                    : ""
                }
                className="img-fluid"
                alt="avatar"
              /> */}
              <p
                className={
                  loggedInUser?.cardAvatar === "1"
                    ? "userchangeAvImg-username"
                    : loggedInUser?.cardAvatar === "2"
                    ? "userchangeAvImg-username-2"
                    : loggedInUser?.cardAvatar === "3"
                    ? "userchangeAvImg-username-3"
                    : ""
                }
              >
                {loggedInUser?.userName}
              </p>
              <p className="userchangeAvImg-userbio">
                {loggedInUser?.cardTitle}
              </p>
            </div>
            <span
              className={`userchangeAvImg-avatr ${
                loggedInUser?.cardAvatar === "1"
                  ? "userchangeAvImg-card3-img"
                  : loggedInUser?.cardAvatar === "2"
                  ? "userchangeAvImg-card1-img"
                  : "userchangeAvImg-card2-img"
              }`}
            >
              <img
                src={loggedInUser?.profileImage || "/images/user-Av4.png"}
                className="img-fluid"
                alt="avatar"
              />
            </span>
          </div>
          <div className="Complete-profile-progress-userName">
            <p>60% Complete</p>
            <div className="Complete-profile-progress-Bar">
              <div className="Complete-profile-progress-line"></div>
            </div>
          </div>

          <p className="onboarding-edit-prof-bottm">
            A Completed profile is 71% more likely to be viewed by a community.
          </p>
        </div>
      )}

      <div className="dApp-Who-to-follow-sect">
        <div className="dApp-Who-to-follow-headings">
          <h1>Who to follow</h1>
        </div>
        {data?.SuggestFollow?.length > 0 ? (
          data?.SuggestFollow?.slice(0, 3).map((item: any, index: any) => {
            return <WhoToFollow usersIFollow={usersIFollow} item={item} />;
          })
        ) : (
          <div className="dApp-Who-to-follow">
            <div className="dApp-Who-to-follow-content">
              <ul>
                <li className="Promoted">
                  <span>No Follow</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="dApp-Who-seemore">
          <a onClick={() => setShowMoreSuggestions(true)} href="#">
            Show more
          </a>
        </div>
      </div>
      <div className="dApp-Who-quickLink">
        <h2>Quick links</h2>
        <ul>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Communities</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Livezone</a>
          </li>
          <li>
            <a href="#">Spheres</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withApollo(UserProfileRightSideBar, { getDataFromTree });
