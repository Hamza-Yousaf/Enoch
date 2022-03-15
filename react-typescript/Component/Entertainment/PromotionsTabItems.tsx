import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const PromotionsTabItems = () => {
  const [activeItem, setActiveItem] = useState("bonuses");

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
            setActiveItem("bonuses");
            current_entertainment_sub_menu("bonuses");
          }}
          className={activeItem === "bonuses" ? "tag-active2" : ""}
        >
          Bonuses
        </li>
        <li
          onClick={() => setActiveItem("promotions")}
          className={activeItem === "promotions" ? "tag-active2" : ""}
        >
          Promotions
        </li>
      </ul>
    </div>
  );
};

export default PromotionsTabItems;
