import React from "react";
import dynamic from "next/dynamic";
const EventsList = dynamic(() => import("../../../Component/home-post/Components/Events/EventsList"));

const EventsPage = () => {
  return <EventsList />;
};

export default EventsPage;
