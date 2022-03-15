import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../onBoard/header"));
const MainTabList = dynamic(() => import("./MainTabList"));
const TopBanner = dynamic(() => import("./TopBanner"));
const MainSection = dynamic(() => import("./MainSection"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const HomePage = () => {
  const dispatch = useDispatch();
  const { current_entertainment_tab, current_entertainment_sub_menu } =
    bindActionCreators(actionCreators, dispatch);

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  const current_entertainment_sub_menu_value = useSelector(
    (state: State) => state.current_entertainment_sub_menu
  );

  const current_keno_tab_value = useSelector(
    (state: State) => state.currentKenoTab
  );

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <TopBanner
            current_entertainment_sub_menu_value={
              current_entertainment_sub_menu_value
            }
          />
          <MainTabList />
          <MainSection
            current_entertainment_sub_menu_value={
              current_entertainment_sub_menu_value
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
