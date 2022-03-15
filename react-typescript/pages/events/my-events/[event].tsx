import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const MyEvent = dynamic(() => import("../../../Component/home-post/Components/Events/MyEvent/MyEvent"));

const Event = () => {
  const router = useRouter();
  const { event } = router.query;
  return <MyEvent />;
};

export default Event;
