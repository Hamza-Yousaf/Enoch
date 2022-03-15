import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

interface Props {
  number: any;
}

const NumberToPlay: React.FC<Props> = ({ number }) => {
  const dispatch = useDispatch();
  const { numbers_to_play_in_treasure_hunt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const numbers_to_play_in_treasure_hunt_value = useSelector(
    (state: State) => state.numbersToPlayInTreasureHunt
  );
  const setNumberToPlay = (number: any) => {
    numbers_to_play_in_treasure_hunt(number);
  };

  return (
    <li onClick={() => setNumberToPlay(number)}>
      {number} {number === 1 ? "number" : "numbers"}
    </li>
  );
};

export default NumberToPlay;
