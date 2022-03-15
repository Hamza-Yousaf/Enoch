import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../../Component/onBoard/header"));
const MainSection = dynamic(() => import("./MainSection"));

const CreateEvent = () => {
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <MainSection />
    </div>
  );
};

export default CreateEvent;
