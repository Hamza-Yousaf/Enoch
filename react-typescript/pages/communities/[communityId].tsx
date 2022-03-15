import router from "next/router";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const CommunityPage = dynamic(
  () => import("../../Component/onBoard/Community/CommunityPage")
);
const SignIn = dynamic(() => import("../../Component/SignIn"));
import { verifyToken } from "../../lib/verifyToken";
import { useLocation } from "react-router";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_COMMUNITY, GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import "three-dots/dist/three-dots.min.css";

const SingleCommunityPage = () => {
  const router = useRouter();
  const { communityId, isUserCommunity } = router.query;

  console.log(communityId, isUserCommunity);

  const { data, loading, error } = useQuery(GET_COMMUNITY, {
    variables: {
      communityId: communityId,
    },
  });

  const userProfile = useQuery(GET_USER_PROFILE_QUERY);

  if (error) {
    console.log(error);
  }

  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }

  return (
    <CommunityPage
      communityName={data?.getCommunity?.communityName}
      communityHolder={data?.getCommunity?.communityHolder}
      loading={loading}
      communityId={communityId}
      communityDescription={data?.getCommunity?.communityDescription}
      isUserCommunity={isUserCommunity}
      joinedUsers={data?.getCommunity?.joinedUsers}
      userProfile={userProfile}
    />
  );
};

export default withApollo(SingleCommunityPage, { getDataFromTree });
