import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const KenoTabList = () => {
  const dispatch = useDispatch();
  const {
    current_keno_tab,
    current_keno_tournament_tab,
    current_keno_winners_tab,
  } = bindActionCreators(actionCreators, dispatch);

  const current_keno_tab_value = useSelector(
    (state: State) => state.currentKenoTab
  );

  const changeTab = (tabName: string) => {
    current_keno_tab(tabName);
  };
  return (
    <div className="tab keno-tab">
      <button
        className={
          current_keno_tab_value === "tournament" ? "keno_tablinks1 active" : ""
        }
        onClick={() => changeTab("tournament")}
      >
        Keno Tournament
      </button>
      <button
        className={
          current_keno_tab_value === "winners"
            ? "keno_tablinks1 active"
            : " keno_tablinks1"
        }
        onClick={() => changeTab("winners")}
      >
        Keno Winners
      </button>
      <button
        className={
          current_keno_tab_value === "result"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
        onClick={() => changeTab("result")}
      >
        Keno Result
      </button>
      <button
        className={
          current_keno_tab_value === "information"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
        onClick={() => changeTab("information")}
      >
        Keno Information
      </button>
    </div>
  );
};

export default KenoTabList;
