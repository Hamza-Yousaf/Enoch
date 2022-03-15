import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const FollowTab = () => {
  return (
    <div className="Follow_fresh_perspectives_sect">
      <h2>Follow fresh perspectives </h2>
      <h2 className="active">1,358 Following </h2>
      <h2 className="mr-0">1,358 Followers </h2>
    </div>
  );
};

export default withApollo(FollowTab, { getDataFromTree });
