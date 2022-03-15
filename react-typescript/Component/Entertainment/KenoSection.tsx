import React, { useState } from "react";
import dynamic from "next/dynamic";
const JackpotPrizeBanner = dynamic(() => import("./JackpotPrizeBanner"));
const KenoGame = dynamic(() => import("./KenoGame"));
const KenoMenu = dynamic(() => import("./KenoMenu"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
const TournamentBlock = dynamic(() => import("./Keno/Tournament/TournamentBlock"));
const WinnersBlock = dynamic(() => import("./Keno/Winners/WinnersBlock"));
const ResultBlock = dynamic(() => import("./Keno/Result/ResultBlock"));
const InfoBlock = dynamic(() => import("./Keno/Information/InfoBlock"));
const SubTabList = dynamic(() => import("./SubTabList"));

const KenoSection = () => {
  const dispatch = useDispatch();

  const { current_keno_tab } = bindActionCreators(actionCreators, dispatch);

  const current_keno_tab_value = useSelector(
    (state: State) => state.currentKenoTab
  );

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  return (
    <div className="entertainment-tabcontent-block">
      <div id="popular" className="bonusestabcontent">
        <SubTabList
          current_entertainment_tab_value={current_entertainment_tab_value}
        />
        <div className="entertainment-Keno-contemt">
          <JackpotPrizeBanner />
          <div className="keno-gamesCard-sect">
            <div className="row">
              <KenoGame imageClass={"game-card-bg game-card1-bg"} />
              <KenoGame imageClass={"game-card-bg game-card2-bg"} />
              <KenoGame imageClass={"game-card-bg game-card3-bg"} />
              <KenoGame imageClass={"game-card-bg game-card4-bg"} />
              <KenoGame imageClass={"game-card-bg game-card5-bg"} />
              <KenoGame imageClass={"game-card-bg game-card6-bg"} />
            </div>
          </div>

          <div className="Keno-Tabs-section">
            <KenoMenu />
            {current_keno_tab_value === "tournament" && <TournamentBlock />}
            {current_keno_tab_value === "winners" && <WinnersBlock />}
            {current_keno_tab_value === "result" && <ResultBlock />}
            {current_keno_tab_value === "information" && <InfoBlock />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenoSection;
