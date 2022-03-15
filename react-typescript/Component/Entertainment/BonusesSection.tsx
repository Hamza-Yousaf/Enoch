import React from "react";
import dynamic from "next/dynamic";
const BonusCard = dynamic(() => import("./BonusCard"));
const WheelOfCash = dynamic(() => import("./WheelOfCash"));
const WheelOfRizk = dynamic(() => import("./WheelOfRizk"));
const SubTabList = dynamic(() => import("./SubTabList"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const BonusesSection = () => {
  const dispatch = useDispatch();

  const { current_entertainment_tab, current_entertainment_sub_menu } =
    bindActionCreators(actionCreators, dispatch);

  const current_entertainment_tab_value = useSelector(
    (state: State) => state.current_entertainment_tab
  );

  const current_entertainment_popular_tab_value = useSelector(
    (state: State) => state.current_entertainment_sub_menu
  );
  return (
    <>
      <div className="entertainment-tabcontent-block">
        <div id="popular" className="bonusestabcontent">
          <SubTabList
            current_entertainment_tab_value={current_entertainment_tab_value}
          />
          <div className="entertainment-game-block">
            <div className="entertainment-game-block1">
              <ul>
                <WheelOfRizk />
                <WheelOfCash />
                <BonusCard
                  image="/images/bonus-img3.png"
                  imgClass="game-block-img"
                />
                <BonusCard
                  image="/images/bonus-img4.png"
                  imgClass="game-block-img"
                />
              </ul>
            </div>
            <div className="entertainment-game-block2">
              <div className="entertainment-game-block2-lft">
                <ul>
                  <BonusCard
                    image="/images/bonus-img5.png"
                    imgClass="game-block-img"
                  />
                  <BonusCard
                    image="/images/bonus-img6.png"
                    imgClass="game-block-img"
                  />
                  <BonusCard
                    image="/images/bonus-img7.png"
                    imgClass="game-block-img"
                  />
                </ul>
              </div>
              <div className="entertainment-game-block2-mid">
                <h2>Latest Winners</h2>
                <ul>
                  <li>
                    <div className="game-block2-mid-lft">
                      <div>
                        <img
                          src="images/winner1.png"
                          className="img-fluid"
                          alt="winner"
                        />
                      </div>
                      <div className="winner-details">
                        <h3>
                          Juha Matti | <span>just won</span>
                        </h3>
                        <h4>A2000</h4>
                        <p>Wheel of Cash</p>
                      </div>
                    </div>
                    <div className="game-block2-mid-right">
                      <button className="playnow-btn">PLAY NOW</button>
                    </div>
                  </li>
                  <li>
                    <div className="game-block2-mid-lft">
                      <div>
                        <img
                          src="images/winner2.png"
                          className="img-fluid"
                          alt="winner"
                        />
                      </div>
                      <div className="winner-details">
                        <h3>
                          ATTI <span>just won</span>
                        </h3>
                        <h4>A1500</h4>
                        <p>Keno</p>
                      </div>
                    </div>
                    <div className="game-block2-mid-right">
                      <button className="playnow-btn">PLAY NOW</button>
                    </div>
                  </li>
                  <li>
                    <div className="game-block2-mid-lft">
                      <div>
                        <img
                          src="images/winner3.png"
                          className="img-fluid"
                          alt="winner"
                        />
                      </div>
                      <div className="winner-details">
                        <h3>
                          Jason Brown| <span>just won</span>
                        </h3>
                        <h4>A500</h4>
                        <p>Wheel of Cash</p>
                      </div>
                    </div>
                    <div className="game-block2-mid-right">
                      <button className="playnow-btn">PLAY NOW</button>
                    </div>
                  </li>
                  <li>
                    <div className="game-block2-mid-lft">
                      <div>
                        <img
                          src="images/winner4.png"
                          className="img-fluid"
                          alt="winner"
                        />
                      </div>
                      <div className="winner-details">
                        <h3>
                          Maria Dev | <span>just won</span>
                        </h3>
                        <h4>A300</h4>
                        <p>Wheel of Cash</p>
                      </div>
                    </div>
                    <div className="game-block2-mid-right">
                      <button className="playnow-btn">PLAY NOW</button>
                    </div>
                  </li>
                  <li>
                    <div className="game-block2-mid-lft">
                      <div>
                        <img
                          src="images/winner4.png"
                          className="img-fluid"
                          alt="winner"
                        />
                      </div>
                      <div className="winner-details">
                        <h3>
                          Eli Quil |<span>just won</span>
                        </h3>
                        <h4>A200</h4>
                        <p>Keno</p>
                      </div>
                    </div>
                    <div className="game-block2-mid-right">
                      <button className="playnow-btn">PLAY NOW</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="entertainment-game-block2-right">
                <ul>
                  <BonusCard
                    image="/images/bonus-img8.png"
                    imgClass="game-block-img"
                  />
                  <BonusCard
                    image="/images/bonus-img9.png"
                    imgClass="game-block-img"
                  />
                  <BonusCard
                    image="/images/bonus-img10.png"
                    imgClass="game-block-img"
                  />
                </ul>
              </div>
            </div>
            <div className="entertainment-game-block1">
              <ul>
                <BonusCard
                  image="/images/bonus-img11.png"
                  imgClass="game-block-img"
                />
                <BonusCard
                  image="/images/bonus-img12.png"
                  imgClass="game-block-img"
                />
                <BonusCard
                  image="/images/bonus-img13.png"
                  imgClass="game-block-img"
                />
                <BonusCard
                  image="/images/bonus-img14.png"
                  imgClass="game-block-img"
                />
              </ul>
            </div>
          </div>
          <div className="entertainment-game-block3 mb-4">
            <ul>
              <BonusCard
                image="/images/bonus-img15.png"
                imgClass="game-block-img"
              />
              <BonusCard
                image="/images/bonus-img16.png"
                imgClass="game-block-img"
              />
              <BonusCard
                image="/images/bonus-img17.png"
                imgClass="game-block-img"
              />
            </ul>
          </div>
          <div className="entertainment-terms">
            <span>
              <a href="#">Terms & Condition</a>
            </span>
            <span>
              <a href="#">
                <img
                  src="images/drop-arrw.png"
                  className="img-fluid"
                  alt="down arrow"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusesSection;
