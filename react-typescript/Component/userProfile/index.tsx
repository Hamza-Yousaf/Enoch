//@ts-nocheck
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Header from "../../Component/onBoard/header";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import withApollo from "../../lib/withApollo";
import dynamic from "next/dynamic";
const UserProfileMain = dynamic(() => import("./UserProfileMain"));
import { getDataFromTree } from "@apollo/client/react/ssr";

interface Props {
  userId: string;
}

const UserProfile: React.FC<Props> = ({ userId }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (data) {
      setLoggedInUser(data?.getUserProfile);
    }
  }, [data]);

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <UserProfileMain loggedInUser={loggedInUser} userId={userId} />
    </div>
  );
};

export default withApollo(UserProfile, { getDataFromTree });
