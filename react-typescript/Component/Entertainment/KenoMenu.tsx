import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const KenoMenu = () => {
  const dispatch = useDispatch();

  const { current_keno_tab } = bindActionCreators(actionCreators, dispatch);

  const current_keno_tab_value = useSelector(
    (state: State) => state.currentKenoTab
  );

  const setCurrentTab = (tabName: string) => {
    current_keno_tab(tabName);
  };

  return (
    <div className="tab keno-tab">
      <button
        onClick={() => {
          setCurrentTab("tournament");
        }}
        className={
          current_keno_tab_value === "tournament"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
      >
        Keno Tournament
      </button>
      <button
        onClick={() => {
          setCurrentTab("winners");
        }}
        className={
          current_keno_tab_value === "winners"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
      >
        Keno Winners
      </button>
      <button
        onClick={() => {
          setCurrentTab("result");
        }}
        className={
          current_keno_tab_value === "result"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
      >
        Keno Result
      </button>
      <button
        onClick={() => {
          setCurrentTab("information");
        }}
        className={
          current_keno_tab_value === "information"
            ? "keno_tablinks1 active"
            : "keno_tablinks1"
        }
      >
        Keno Information
      </button>
    </div>
  );
};

export default KenoMenu;
