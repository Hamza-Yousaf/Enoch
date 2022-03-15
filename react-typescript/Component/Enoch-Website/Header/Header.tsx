import React from "react";
import dynamic from "next/dynamic";
const Topbar = dynamic(() => import("./Topbar"));
const Menubar = dynamic(() => import("./Menubar"));

const HeaderWebsite = (props:any) => {
  return (
    <header className="banner-main">
      <Topbar/>
      <Menubar/>
      {props.children}
    </header>

  );
};

export default HeaderWebsite;
