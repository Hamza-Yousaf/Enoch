import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const PopularTabItems = () => {
  const dispatch = useDispatch();

  const {
    current_entertainment_tab,
    current_entertainment_sub_menu,
    showWheelModal,
  } = bindActionCreators(actionCreators, dispatch);

  const current_entertainment_sub_menu_value = useSelector(
    (state: State) => state.current_entertainment_sub_menu
  );

  const [activeItem, setActiveItem] = useState(
    current_entertainment_sub_menu_value
  );

  return (
    <div className="entertainment-subtag-line">
      <ul>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("bonuses");
            current_entertainment_sub_menu("bonuses");
          }}
          className={activeItem === "bonuses" ? "tag-active2" : ""}
        >
          Bonuses
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("keno");
            current_entertainment_sub_menu("keno");
          }}
          className={activeItem === "keno" ? "tag-active2" : ""}
        >
          Keno
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("roulette");
            // current_entertainment_sub_menu("roulette");
          }}
          className={activeItem === "roulette" ? "tag-active2" : ""}
        >
          Roulette
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("blackjack");
            // current_entertainment_sub_menu("blackjack");
          }}
          className={activeItem === "blackjack" ? "tag-active2" : ""}
        >
          Blackjack
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("sports-betting");
            current_entertainment_sub_menu("sports-betting");
          }}
          className={activeItem === "sports-betting" ? "tag-active2" : ""}
        >
          Sports Betting
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("virtual-sports");
            // current_entertainment_sub_menu("virtual-sports");
          }}
          className={activeItem === "virtual-sports" ? "tag-active2" : ""}
        >
          Virtual Sports
        </li>
        <li
          onClick={() => {
            showWheelModal(false);
            setActiveItem("gangster-wars");
            current_entertainment_sub_menu("gangster-wars");
          }}
          className={activeItem === "gangster-wars" ? "tag-active2" : ""}
        >
          Gangsters Wars
        </li>
        <li
          onClick={() => {
            setActiveItem("inferno");
            // current_entertainment_sub_menu("inferno");
          }}
          className={activeItem === "inferno" ? "tag-active2" : ""}
        >
          Inferno
        </li>
      </ul>
    </div>
  );
};

export default PopularTabItems;
