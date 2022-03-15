import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/index";
import dynamic from "next/dynamic";
const SubTabList = dynamic(() => import("./SubTabList"));


const GamesSection = () => {
  const dispatch = useDispatch();

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );
  return (
    <div className="entertainment-tabcontent-block">
      <div id="games" className="bonusestabcontent">
        <SubTabList
          current_entertainment_tab_value={current_entertainment_tab_value}
        />
        <div className="entertaiment-gameswar-block">
          <div className="entertaiment-gameswar-innerblock">
            <img
              src="images/games-img2.png"
              className="img-fluid"
              alt="sports"
            />
            <div className="gameswar-innerblock-content">
              <h3>Coming Soon</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <ul>
                <li>
                  48<span>Days</span>
                </li>
                <li>
                  48<span>Hours</span>
                </li>
                <li>
                  48<span>Minutes</span>
                </li>
                <li>
                  48<span>Seconds</span>
                </li>
              </ul>

              <div className="game-notify-checkbox">
                <input type="checkbox" id="au_input4" />
                <label>Notify me</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
