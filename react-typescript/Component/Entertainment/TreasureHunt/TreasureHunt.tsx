import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../onBoard/header"));
const JackpotBanner = dynamic(() => import("./JackpotBanner"));
const NumbersToPlayChoice = dynamic(() => import("./NumbersToPlayChoice"));
const PickNumbers = dynamic(() => import("./PickNumbers"));
const Tabs = dynamic(() => import("./Tabs"));

const TreasureHunt = () => {
  const [numberOfLine, setNumberOfLine] = useState(2);
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg pb-0">
      <Header />
      <div className="row treasurehunt-bg">
        <div className="ezl-dashboard-container">
          <JackpotBanner />
          <Tabs />
          <NumbersToPlayChoice />
          <PickNumbers
            numberOfLines={numberOfLine}
            setNumberOfLines={setNumberOfLine}
          />
        </div>
      </div>
    </div>
  );
};

export default TreasureHunt;
