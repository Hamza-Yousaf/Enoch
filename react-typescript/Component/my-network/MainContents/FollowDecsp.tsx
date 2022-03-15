import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const FollowDecsp = () => {
  return (
    <div className="network_folwers_decsp">
      <p className="descrip_avex">
        Unfollow to stop seeing their posts in your feed. Don’t worry, they
        won’t be notified.
      </p>
    </div>
  );
};

export default withApollo(FollowDecsp, { getDataFromTree });
