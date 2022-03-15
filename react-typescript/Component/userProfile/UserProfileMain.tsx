import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import React, { useState, useEffect } from "react";
import { USERS_I_FOLLOW_QUERY } from "../../graphql/Queries/usersIFollow";
import withApollo from "../../lib/withApollo";
import dynamic from "next/dynamic";
const FollowSection = dynamic(
  () => import("../FollowShowMore/Components/MainSection/FollowSection")
);
const LeftSideBar = dynamic(() => import("../onBoard/left-sidebar"));
const EditProfileModal = dynamic(() => import("./EditProfileModal"));
const EditProfileSection = dynamic(() => import("./EditProfileSection"));
const Experience = dynamic(() => import("./Experience"));
const Interests = dynamic(() => import("./Interests"));
const PostsSection = dynamic(() => import("./PostsSection"));
const UserProfileRightSideBar = dynamic(
  () => import("./UserProfileRightSideBar")
);
const Dashboard = dynamic(() => import("./Dashboard"));

interface Props {
  loggedInUser: any;
  userId: string;
}

const UserProfileMain: React.FC<Props> = ({ loggedInUser, userId }) => {
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  const [usersIFollow, setUsersIFollow] = useState([]);

  const usersIFollowData = useQuery(USERS_I_FOLLOW_QUERY);

  useEffect(() => {
    if (usersIFollowData?.data) {
      setUsersIFollow(usersIFollowData?.data?.UsersIFollowerd);
    }
  }, [usersIFollowData?.data]);

  console.log("xxx", loggedInUser, userId);
  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="dApp-S-Home-body">
          <div className="row m-0">
            <div className="home-post-block">
              <LeftSideBar />
              {!showMoreSuggestions ? (
                <div className="home-post-mid">
                  <div className="dApp-home-profile-sect">
                    <EditProfileSection
                      //@ts-ignore
                      userId={userId}
                      usersIFollow={usersIFollow}
                    />
                  </div>
                  <div className="dApp-over-mid">
                    <div className="mid-ovelay dApp-overlay"></div>
                    <div className="dApp-home-profile-collaps-sect">
                      {userId?.length < 1 ? (
                        <>
                          <Dashboard
                            //@ts-ignore
                            userId={loggedInUser?.id}
                          />
                        </>
                      ) : (
                        ""
                      )}
                      <Interests userId={userId} />
                      <Experience userId={userId} />
                    </div>
                    <EditProfileModal />
                    <PostsSection userId={userId} />
                  </div>
                </div>
              ) : (
                <FollowSection
                  //@ts-ignore
                  setShowMoreSuggestions={setShowMoreSuggestions}
                />
              )}
              <UserProfileRightSideBar
                //@ts-ignore
                setShowMoreSuggestions={setShowMoreSuggestions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(UserProfileMain, { getDataFromTree });
