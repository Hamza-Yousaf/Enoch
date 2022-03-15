import React, { useEffect, useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { GET_SUGGEST_FOLLOW } from "../../../../graphql/userProfileQueries";
import WhoToFollow from "./WhoToFollow";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { GET_MY_FOLLOERS } from "../../../../graphql/Queries/myFollowers";
import { USERS_I_FOLLOW_QUERY } from "../../../../graphql/Queries/usersIFollow";

interface Props {
  setShowMoreSuggestions: any;
}

const RightSideBar: React.FC<Props> = ({ setShowMoreSuggestions }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("follow functionality not supported");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allMyFollowers, setAllMyFollowers] = useState([]);

  const allFollowersData = useQuery(GET_MY_FOLLOERS);

  useEffect(() => {
    if (allFollowersData?.data) {
      setAllMyFollowers(allFollowersData?.data?.AllMyFloowers);
    }
  }, [allFollowersData]);

  const [success, setSuccess] = useState(false);
  const { loading, data, error } = useQuery(GET_SUGGEST_FOLLOW);
  const [profileCompleteStatus, setProfileCompleteStatus] = useState(60);
  const [usersIFollow, setUsersIFollow] = useState([]);

  console.log("xxx", data, error);

  const loggedInUserQueryData = useQuery(GET_USER_PROFILE_QUERY);

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
    <>
      <div className="home-post-right">
        {/* <CompleteProfile /> */}
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
                <img
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
                />
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
                  src={loggedInUser?.profileImage}
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
              A Completed profile is 71% more likely to be viewed by a
              community.
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
        <div className="dApp-Topics-to-follow-sect">
          <div className="dApp-Topics-to-follow-headings">
            <h1>Topics to follow</h1>
          </div>
          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Cricket </h2>
              <h3>Sport</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Female Top Fashion </h2>
              <h3>All about fashion world</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Technology </h2>
              <h3>Latest gadgets</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow">
            <div className="dApp-Topics-to-follow-content">
              <h2>Entertainment </h2>
              <h3>All about hollywood</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>

          <div className="dApp-Topics-to-follow mb-0">
            <div className="dApp-Topics-to-follow-content">
              <h2>Careers </h2>
              <h3>Search for jobs</h3>
            </div>
            <div className="dApp-Who-to-follow-btn">
              <button>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(RightSideBar, { getDataFromTree });
