import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const NumberToPlay = dynamic(() => import("./NumberToPlay"));


const NumbersToPlayChoice = () => {
  const [stakeValue, setStakeValue] = useState(1);
  const dispatch = useDispatch();
  const { numbers_to_play_in_treasure_hunt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const numbers_to_play_in_treasure_hunt_value = useSelector(
    (state: State) => state.numbersToPlayInTreasureHunt
  );

  return (
    <div className="treasurehunt-sect1">
      <div className="treasurehunt-block1 block1-lft-bg">
        <div className="treasurehunt-block1-lft">
          <h3>How many numbers you like to play</h3>
          <p>
            You can pick 1-10 numbers within <br /> 1-70 range
          </p>
        </div>
        <div className="treasurehunt-block1-right">
          <div className="treasurehunt-dropdown tr-zindex2">
            <a
              href="#"
              id="treasurehunt-dropbox-list-input1"
              className="treasurehunt-hunt-box"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              {numbers_to_play_in_treasure_hunt_value}{" "}
              {numbers_to_play_in_treasure_hunt_value === 1
                ? "number"
                : "numbers"}
            </a>
            <div
              id="treasurehunt-dropbox-list1"
              className="dropdown-menu treasurehunt-hunt-dropbox-list"
            >
              <ul>
                {Array.from({ length: 11 }, (_, i) => i + 1).map(
                  (number: any, key: any) => {
                    if (key > 0) return <NumberToPlay number={key} />;
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="treasurehunt-block1 block1-right-bg">
        <div className="treasurehunt-block1-lft">
          <h3>Choose a stake</h3>
          <p>
            The higher the stake, the bigger the win. You can win upto 1,000,000
            Amber coins while picking 1o numbers with x10 stake.
          </p>
        </div>
        <div className="treasurehunt-block1-right">
          <div className="treasurehunt-dropdown tr-zindex1">
            <a
              href="#"
              id="treasurehunt-dropbox-list-input2"
              className="treasurehunt-hunt-box"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              x{stakeValue}
            </a>
            <div
              id="treasurehunt-dropbox-list2"
              className="dropdown-menu treasurehunt-hunt-dropbox-list"
            >
              <ul>
                {Array.from({ length: 11 }, (_, i) => i + 1).map(
                  (number: any, key: any) => {
                    if (key > 0)
                      return <li onClick={() => setStakeValue(key)}>x{key}</li>;
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersToPlayChoice;
