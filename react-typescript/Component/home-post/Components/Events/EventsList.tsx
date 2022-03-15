import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../Component/onBoard/header"));
const MainSection = dynamic(() => import("./MainSection"));

const EventsList = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <MainSection />
    </div>
  );
};

export default EventsList;
