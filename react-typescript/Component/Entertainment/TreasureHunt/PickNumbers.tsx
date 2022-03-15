import React, { useState } from "react";
import Number from "./Number";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const NumberLine = dynamic(() => import("./NumberLine"));

export interface NumberLineProps {
  numberOfLines: number;
  setNumberOfLines: React.Dispatch<React.SetStateAction<number>>;
}

const PickNumbers: React.FC<NumberLineProps> = ({
  numberOfLines,
  setNumberOfLines,
}) => {
  const [pickedNumberCount, setPickedNumberCount] = useState(0);
  const [numbers, setNumbers] = useState<string[]>([]);

  const dispatch = useDispatch();
  const { numbers_to_play_in_treasure_hunt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const numbers_to_play_in_treasure_hunt_value = useSelector(
    (state: State) => state.numbersToPlayInTreasureHunt
  );

  const selectNumber = (selectedNumber: string) => {
    if (numbers.length < numbers_to_play_in_treasure_hunt_value)
      setNumbers([...numbers, selectedNumber]);
  };

  return (
    <div className="treasurehunt-sect2">
      <div className="treasurehunt-block2-lft">
        <div className="treasurehunt-block2-luckyNo">
          <div className="treasurehunt-block2-luckyNo-hd">
            <span className="block2-luckyNo-txt">
              {pickedNumberCount}/{numbers_to_play_in_treasure_hunt_value}
            </span>
            <span className="block2-luckyNo-bttn">
              <button className="newline-btn">+ Add New Line</button>
            </span>
          </div>
          <div className="treasurehunt-block2-luckyNo-mid">
            <ul>
              {Array.from({ length: 71 }, (_, i) => i + 1).map(
                (number: any, key: any) => {
                  if (key > 0)
                    return (
                      <Number
                        pickedNumberCount={pickedNumberCount}
                        setPickedNumberCount={setPickedNumberCount}
                        number={key}
                        selectNumber={selectNumber}
                      />
                    );
                }
              )}
            </ul>
          </div>
          <div className="treasurehunt-block2-luckyNo-bottm">
            <div className="luckyNo-bottm-lft">
              <span>
                <button className="treasure-autopick-btn">Auto Pick</button>
              </span>
              <span>
                <button className="newline-btn">Set as a lucky</button>
              </span>
            </div>
            <div className="luckyNo-bottm-right">
              <button className="newline-btn">Clear</button>
            </div>
          </div>
        </div>
        {Array.from({ length: numberOfLines }, (_, i) => i + 1).map(
          (number: any, key: any) => {
            if (key > 0) return <NumberLine numbers={numbers} />;
          }
        )}
      </div>
      <div className="treasurehunt-block2-right">
        <div className="treasurehunt-right-sect1">
          <div className="treasurehunt-right-txtblock">
            <h3>Treasure hunt</h3>
            <p>Prize : 1,000,000 Amber COINS </p>
          </div>
        </div>
        <div className="treasurehunt-right-sect2">
          <div className="treasurehunt-draw">
            <span>
              <img
                src="/images/stime.png"
                className="img-fluid mr-1"
                alt="time"
              />
              DRAW
            </span>
            <span>20:00:00</span>
          </div>
          <div className="treasurehunt-like-view">
            <span>
              <img
                src="/images/klike.png"
                className="img-fluid mr-1"
                alt="like"
              />
              1.2K
            </span>
            <span>
              <img
                src="/images/IconArtwork.png"
                className="img-fluid mr-1"
                alt="viiew"
              />
              3.5K
            </span>
          </div>
          <div className="treasurehunt-right-imgblock">
            <span className="right-imgblock-pic1">
              <img
                src="/images/treasurhunt-img3.png"
                className="img-fluid"
                alt="viiew"
              />
            </span>
            <span className="right-imgblock-pic2">
              <img
                src="/images/treasurhunt-img2.png"
                className="img-fluid"
                alt="viiew"
              />
            </span>
          </div>
          <div className="treasurehunt-list-detail">
            <ul>
              <li>
                <span>
                  <img
                    src="/images/treasurhunt-icon1.png"
                    className="img-fluid mr-2"
                    alt="icon"
                  />
                  Number of line
                </span>
                <span>3</span>
              </li>
              <li>
                <span>
                  <img
                    src="/images/treasurhunt-icon2.png"
                    className="img-fluid mr-2"
                    alt="icon"
                  />
                  Ticket
                </span>
                <span>1</span>
              </li>
              <li>
                <span>
                  <img
                    src="/images/treasurhunt-icon3.png"
                    className="img-fluid mr-2"
                    alt="icon"
                  />
                  Total
                </span>
                <span>
                  <img
                    src="/images/tInfo2.png"
                    className="img-fluid Trinfo-hover mr-1"
                    alt="icon"
                  />
                  $2
                  <div className="tr-info-txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </div>
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <button className="treasure-makepayment-btn">MAKE PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickNumbers;
