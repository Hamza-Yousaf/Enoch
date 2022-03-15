import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import dynamic from "next/dynamic";
const AllBetsBlock = dynamic(() => import("./AllBetsBlock"));
const MybetsBlock = dynamic(() => import("./MybetsBlock"));
const ResultsHeader = dynamic(() => import("./ResultsHeader"));

const WinnersBlock = () => {
  const dispatch = useDispatch();
  const { current_keno_winners_tab } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const current_keno_winners_tab_value = useSelector(
    (state: State) => state.currentKenoWinnersTab
  );

  const changeTab = (tabName: string) => {
    current_keno_winners_tab(tabName);
  };
  return (
    <div id="Keno_Winners" className="keno_tabcontent keno-d-block">
      <div className="Keno-Tournament-content">
        <div className="tab Keno-winner-tab">
          <div className="d-flex">
            <button
              className={
                current_keno_winners_tab_value === "all_bets"
                  ? "tablinks2 active"
                  : "tablinks"
              }
              onClick={() => changeTab("all_bets")}
            >
              All Bets
            </button>
            <button
              className={
                current_keno_winners_tab_value === "my_bets"
                  ? "tablinks2 active"
                  : "tablinks"
              }
              onClick={() => changeTab("my_bets")}
            >
              My Bets
            </button>
          </div>
          <ResultsHeader />
        </div>

        {current_keno_winners_tab_value === "all_bets" ? (
          <AllBetsBlock />
        ) : (
          <MybetsBlock />
        )}
      </div>
    </div>
  );
};

export default WinnersBlock;
