import React from "react";
import SubTabList from "./SubTabList";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const SportsSection = () => {
  const dispatch = useDispatch();

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );
  return (
    <div className="entertainment-tabcontent-block">
      <div id="sports" className="bonusestabcontent">
        <SubTabList
          current_entertainment_tab_value={current_entertainment_tab_value}
        />
        <div className="entertaiment-sportsBeting-block">
          <div className="entertaiment-sportsBeting-innerblock">
            <img
              src="images/sportbet-img.png"
              className="img-fluid"
              alt="sports"
            />
            <div className="sportsBeting-innerblock-content">
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

export default SportsSection;
