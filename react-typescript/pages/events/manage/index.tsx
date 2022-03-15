import React from "react";
import dynamic from "next/dynamic";
const Manageevent = dynamic(() => import("../../../Component/home-post/Components/Events/Manage/ManagePageComponent"));

const ManageEventsPage = () => {
  return <Manageevent />;
};

export default ManageEventsPage;
