import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
import dynamic from "next/dynamic";
const SubTabList = dynamic(() => import("./SubTabList"));


const MainTabList = () => {
  const dispatch = useDispatch();
  const { current_entertainment_tab, current_entertainment_sub_menu } =
    bindActionCreators(actionCreators, dispatch);

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  const stateObj = useSelector((state: State) => state);

  const changeTab = (tabName: string) => {
    console.log("clicked");
    current_entertainment_sub_menu(tabName);
  };

  console.log(stateObj);
  return (
    <div className="entertainment-tag-block">
      <div className="entertainment-tag-line1 flex-row-reverse">
        <div className="entertainment-tag-search">
          <span>
            <img
              src="/images/tagsearch.png"
              className="img-fluid"
              alt="search"
            />
          </span>
          <input type="text" placeholder="Search for the games" />
        </div>
        <ul className="bonusestab">
          <li>
            <button
              onClick={() => current_entertainment_tab("popular")}
              className={
                current_entertainment_tab_value === "popular"
                  ? "bonusestablinks active"
                  : "bonusestablinks"
              }
            >
              POPULAR
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                current_entertainment_tab("casino");
                current_entertainment_sub_menu("keno");
              }}
              className={
                current_entertainment_tab_value === "casino"
                  ? "bonusestablinks active"
                  : "bonusestablinks"
              }
            >
              casino
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                current_entertainment_tab("sports");
                current_entertainment_sub_menu("sports-betting");
              }}
              className={
                current_entertainment_tab_value === "sports"
                  ? "bonusestablinks active"
                  : "bonusestablinks"
              }
            >
              sports
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                current_entertainment_tab("games");
                current_entertainment_sub_menu("gangster-wars");
              }}
              className={
                current_entertainment_tab_value === "games"
                  ? "bonusestablinks active"
                  : "bonusestablinks"
              }
            >
              games
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                current_entertainment_tab("promotions");
                current_entertainment_sub_menu("bonuses");
              }}
              className={
                current_entertainment_tab_value === "promotions"
                  ? "bonusestablinks active"
                  : "bonusestablinks"
              }
            >
              promotions
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTabList;
