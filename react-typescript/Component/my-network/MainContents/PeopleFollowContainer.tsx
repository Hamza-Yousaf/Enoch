import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import FollowTab from "./FollowTab";
import FollowDecsp from "./FollowDecsp";
import PeopleFollowContent from "./PeopleFollowContent";

const PeopleFollowContainer = () => {
  return (
    <>
      <FollowTab />
      <PeopleFollowContent/>
    </>
  );
};

export default withApollo(PeopleFollowContainer, { getDataFromTree });
