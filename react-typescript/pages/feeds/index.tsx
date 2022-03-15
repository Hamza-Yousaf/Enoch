import React, { useEffect } from "react";
import withAuth from "../../lib/withAuth";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import dynamic from "next/dynamic";
import LoadingComponent from "../../Component/LoadingComponent";

const HomePost = dynamic(() => import("../../Component/home-post"), {
  loading: () => <LoadingComponent />,
});

//
//@ts-ignore
const Feeds = () => {
  if (typeof window !== "undefined") {
    return <HomePost />;
  } else {
    return "loading...";
  }
};

export default withApollo(withAuth(Feeds), { getDataFromTree });
