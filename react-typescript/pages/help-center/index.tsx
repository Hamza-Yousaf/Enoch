import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const HelpCenter = dynamic(() => import("../../Component/HelpCenter/index"));
import cookie from "cookie";
import { NextPage } from "next";

interface Props {
  currentMessageTab?: any;
}

const HelpCenterPage: NextPage<Props> = ({ currentMessageTab }) => {
  return (
    <Fragment>
      <HelpCenter currentMessageTab={currentMessageTab || "inbox"} />
    </Fragment>
  );
};

export default HelpCenterPage;
