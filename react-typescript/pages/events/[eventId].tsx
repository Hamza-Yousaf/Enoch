import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Event = dynamic(() => import("../../Component/home-post/Components/Events/Event/Event"));
import cookie from "cookie";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { GET_EVENTS_QUERY } from "../../graphql/queries";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

interface Props {
  currentEvent?: any;
}

const SingleEvent: NextPage<Props> = () => {
  const router = useRouter();

  return (
    <>
      <Event />
    </>
  );
};

export default withApollo(SingleEvent, { getDataFromTree });
