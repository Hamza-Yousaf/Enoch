import { NextPage } from "next";
import router from "next/router";
import React from "react";
import dynamic from "next/dynamic";
const EventsList = dynamic(() => import("../../Component/home-post/Components/Events/EventsList"));
import cookie from "cookie";

interface Props {
  accessToken: string;
}

//@ts-ignore
const EventsPage: NextPage<Props> = ({ accessToken }) => {
  if (typeof window !== "undefined") {
    return <EventsList />;
  } else {
    return "loading...";
  }
};

export default EventsPage;
