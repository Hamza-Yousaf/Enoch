import React, { useEffect, useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { GET_SUGGEST_FOLLOW } from "../../../../graphql/userProfileQueries";
import { TOGGLE_FOLLOW_MUTATION } from "../../../../graphql/userProfileMutations";
import dynamic from "next/dynamic";
const WhoToFollowWithBio = dynamic(() => import("../../../home-post/Components/MainSection/WhoToFollowWithBio"));
import { GET_MY_FOLLOERS } from "../../../../graphql/Queries/myFollowers";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { USERS_I_FOLLOW_QUERY } from "../../../../graphql/Queries/usersIFollow";

interface Props {
  setShowMoreSuggestions: any;
}

const FollowSection: React.FC<Props> = ({ setShowMoreSuggestions }) => {
  const [message, setMessage] = useState("follow functionality not supported");
  const [success, setSuccess] = useState(false);
  const [usersIFollow, setUsersIFollow] = useState([]);
  const { loading, data } = useQuery(GET_SUGGEST_FOLLOW);

  console.log(data);

  const [allMyFollowers, setAllMyFollowers] = useState([]);

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
    ],
  });

  const allFollowersData = useQuery(GET_MY_FOLLOERS);

  useEffect(() => {
    if (allFollowersData?.data) {
      setAllMyFollowers(allFollowersData?.data?.AllMyFloowers);
    }
  }, [allFollowersData]);

  console.log(allMyFollowers);

  const usersIFollowData = useQuery(USERS_I_FOLLOW_QUERY);

  useEffect(() => {
    if (usersIFollowData?.data) {
      setUsersIFollow(usersIFollowData?.data?.UsersIFollowerd);
    }
  }, [usersIFollowData?.data]);

  console.log(usersIFollow);

  return (
    <>
      <div className="home-post-mid">
        <div className="home-post-mid-show-more-sec-x">
          <div className="home-post-mid-show-more-content">
            <div className="home-post-mid-show-more-headings">
              <span className="close-show-more-content">
                <a onClick={() => setShowMoreSuggestions(false)} href="#">
                  <img
                    src="/images/follow-arrow-right.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </a>
              </span>
              <h2>Connect</h2>
            </div>
            <div className="You-might-like-follow-sect">
              <h3>You might like</h3>
            </div>
            <div className="You-might-like-follow-list">
              <ul>
                {data?.SuggestFollow?.length > 0
                  ? data?.SuggestFollow?.map((item: any, index: boolean) => {
                      return (
                        <WhoToFollowWithBio
                          //@ts-ignore
                          key={index}
                          item={item}
                          followers={allMyFollowers}
                          usersIFollow={usersIFollow}
                          setShowMoreSuggestions={setShowMoreSuggestions}
                        />
                      );
                    })
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(FollowSection, { getDataFromTree });
