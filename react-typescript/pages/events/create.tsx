import React from "react";
import dynamic from "next/dynamic";
const CreateEvent = dynamic(() => import("../../Component/home-post/Components/Events/CreateEvent/CreateEvent"));

const CreateEventPage = () => {
  return <CreateEvent />;
};

export default CreateEventPage;
