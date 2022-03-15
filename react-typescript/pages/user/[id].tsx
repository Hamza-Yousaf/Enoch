import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const UserProfile = dynamic(() => import("../../Component/userProfile"));
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const OtherUserProfilePage = () => {
  const [user, setUser] = useState(null);

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  const router = useRouter();
  const id = router.query.id;

  console.log("euser", user, id);

  useEffect(() => {
    if (data) {
      setUser(data?.getUserProfile);
    }
  }, [data, id]);
  //@ts-ignore

  return <>{user && <UserProfile userId={user?.id === id ? "" : id} />}</>;
};

export default withApollo(OtherUserProfilePage, { getDataFromTree });
