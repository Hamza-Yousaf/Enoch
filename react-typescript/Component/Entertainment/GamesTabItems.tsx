import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const GamesTabItems = () => {
  const [activeItem, setActiveItem] = useState("gangster-wars");

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
            setActiveItem("gangster-wars");
            current_entertainment_sub_menu("gangster-wars");
          }}
          className={activeItem === "gangster-wars" ? "tag-active2" : ""}
        >
          Gangster War
        </li>
        <li
          onClick={() => setActiveItem("inferno")}
          className={activeItem === "inferno" ? "tag-active2" : ""}
        >
          Inferno
        </li>
      </ul>
    </div>
  );
};

export default GamesTabItems;
