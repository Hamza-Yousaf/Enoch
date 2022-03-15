import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

interface Props {
  number: string;
  pickedNumberCount: number;
  setPickedNumberCount: React.Dispatch<React.SetStateAction<number>>;
  selectNumber: (selectedNumber: string) => void;
}

const Number: React.FC<Props> = ({
  number,
  pickedNumberCount,
  setPickedNumberCount,
  selectNumber,
}) => {
  const dispatch = useDispatch();
  const { numbers_to_play_in_treasure_hunt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const numbers_to_play_in_treasure_hunt_value = useSelector(
    (state: State) => state.numbersToPlayInTreasureHunt
  );
  const [active, setActive] = useState(false);

  const toggleClicked = () => {
    if (numbers_to_play_in_treasure_hunt_value > pickedNumberCount) {
      if (active) {
        setPickedNumberCount(pickedNumberCount - 1);
      } else {
        setPickedNumberCount(pickedNumberCount + 1);
      }
      setActive(!active);
    }
  };
  return (
    <li
      onClick={() => {
        toggleClicked();
        selectNumber(number);
      }}
      className={active ? "luckyNo-active" : ""}
    >
      {number}
    </li>
  );
};

export default Number;
