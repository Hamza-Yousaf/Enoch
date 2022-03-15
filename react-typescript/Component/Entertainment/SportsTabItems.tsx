import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const SportsTabItems = () => {
  const [activeItem, setActiveItem] = useState("sports-betting");

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
            setActiveItem("sports-betting");
            current_entertainment_sub_menu("sports-betting");
          }}
          className={activeItem === "sports-betting" ? "tag-active2" : ""}
        >
          Sports Betting
        </li>
        <li
          onClick={() => setActiveItem("virtual-sports")}
          className={activeItem === "virtual-sports" ? "tag-active2" : ""}
        >
          Virtual Sports
        </li>
      </ul>
    </div>
  );
};

export default SportsTabItems;
