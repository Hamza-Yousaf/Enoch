import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const CasinoTabItems = () => {
  const [activeItem, setActiveItem] = useState("keno");
  const dispatch = useDispatch();

  const { current_entertainment_sub_menu } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="entertainment-subtag-line">
      <ul>
        <li
          onClick={() => {
            setActiveItem("keno");
            current_entertainment_sub_menu("keno");
          }}
          className={activeItem === "keno" ? "tag-active2" : ""}
        >
          Keno
        </li>
        <li
          onClick={() => {
            setActiveItem("roulette");
            // current_entertainment_sub_menu("roulette");
          }}
          className={activeItem === "roulette" ? "tag-active2" : ""}
        >
          Roulette
        </li>
        <li
          onClick={() => {
            setActiveItem("blackjack");
            // current_entertainment_sub_menu("blackjack");
          }}
          className={activeItem === "blackjack" ? "tag-active2" : ""}
        >
          Blackjack
        </li>
      </ul>
    </div>
  );
};

export default CasinoTabItems;
