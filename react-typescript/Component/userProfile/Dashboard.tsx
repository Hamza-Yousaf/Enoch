import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import {
  GET_USER_TOTAL_POST_VIEW,
  GET_PROFILE_VIEW_COUNTER,
} from "../../graphql/Queries/homepostQuery";

interface Props {
  userId?: any;
}

const Dashboard: React.FC<Props> = ({ userId }) => {
  const [postViewCounter, setPostViewCounter] = useState("0");
  const [porfileViewCounter, setProfileViewCounter] = useState("0");

  const getUserTotalPostView = useQuery(GET_USER_TOTAL_POST_VIEW, {
    variables: {
      userId: userId,
    },
  });

  const getProfileViewCounter = useQuery(GET_PROFILE_VIEW_COUNTER, {
    variables: {
      userId: userId,
    },
  });

  useEffect(() => {
    if (getUserTotalPostView?.data) {
      setPostViewCounter(getUserTotalPostView?.data?.GetAUserTotalPostView);
    }
  }, [getUserTotalPostView?.data]);

  useEffect(() => {
    if (getProfileViewCounter?.data) {
      setProfileViewCounter(getProfileViewCounter?.data?.getProfleViewsCounter);
    }
  }, [getProfileViewCounter?.data]);
  console.log("pv", getUserTotalPostView);
  return (
    <main>
      <div className="dApp-Your-Dashbaord-sect">
        <div className="dApp-Your-Dashbaord-heading">
          <h1>Your Dashbaord</h1>
          <h2>Private to you</h2>
        </div>

        <div className="dApp-Your-Dashbaord-content">
          <div className="dApp-Your-Dashbaord-content-col">
            <h3>{porfileViewCounter ? porfileViewCounter : "0"}</h3>
            <p>Who viewed your profile</p>
          </div>

          <div className="dApp-Your-Dashbaord-content-col">
            <h3>{postViewCounter ? postViewCounter : "0"}</h3>
            <p>Post views</p>
          </div>

          <div className="dApp-Your-Dashbaord-content-col mb-0">
            <h3>379</h3>
            <p>Search appearances</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withApollo(Dashboard, { getDataFromTree });
