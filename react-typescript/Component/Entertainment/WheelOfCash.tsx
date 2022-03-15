import React, { useState } from "react";
import dynamic from "next/dynamic";
const WheelOfCashModal = dynamic(() => import("./WheelOfCashModal"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
const WonModal = dynamic(() => import("./WonModal"));

const WheelOfCash = () => {
  const dispatch = useDispatch();

  const { showWheelModal } = bindActionCreators(actionCreators, dispatch);
  const showWheelValue = useSelector((state: State) => state.showWheelModal);

  const [showWheel, setShowWheel] = useState(false);
  const [showPrizeWon, setShowPrizeWon] = useState(false);
  const [prizeImage, setPrizeImage] = useState("");

  return (
    <li>
      <div className="game-block-top">
        <span onClick={() => setShowWheel(true)} className="game-block-playBtn">
          Collect & Play
        </span>
      </div>
      <WheelOfCashModal
        showWheelValue={showWheelValue}
        showWheel={showWheel}
        setShowWheel={setShowWheel}
        setPrizeImage={setPrizeImage}
        setShowPrizeWon={setShowPrizeWon}
      />
      <div className="winner-modal-block">
        {showPrizeWon && (
          <WonModal
            showPrizeWon={showPrizeWon}
            setShowPrizeWon={setShowPrizeWon}
            prizeImage={prizeImage}
          />
        )}
      </div>
      <div className="winner-modal-block">
        <div id="cash-modal2" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win2000.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal3" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/winextra.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </div>
        </div>
        <div id="rizk-modal4" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win1500.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal4" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/promotion-code.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
            <div className="pomocode-txt">
              <span className="promo-txt">REVEAL PROMO CODE</span>
              <span className="reveal-code">XGHY67UI8OPL</span>
            </div>
            <div className="winner-user-details win-user-promo">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal5" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/Ent-Banners1.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal6" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/promotion-code.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
            <div className="pomocode-txt">
              <span className="promo-txt">REVEAL PROMO CODE</span>
              <span className="reveal-code">XGHY67UI8OPL</span>
            </div>
            <div className="winner-user-details win-user-promo">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal7" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win1000.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal8" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win900.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal9" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win800.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal10" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/winextra.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </div>
        </div>
        <div id="cash-modal11" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win600.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal12" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win500.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal13" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/winextra.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </div>
        </div>
        <div id="cash-modal14" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img
                src="images/promotion-code.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
            <div className="pomocode-txt">
              <span className="promo-txt">REVEAL PROMO CODE</span>
              <span className="reveal-code">XGHY67UI8OPL</span>
            </div>
            <div className="winner-user-details win-user-promo">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal15" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win300.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal16" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win200.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="cash-modal17" className="modal fade">
          <div className="modal-content spin-modal-content">
            <span className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div>
              <img src="images/win100.png" className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">@Robertrose</span>
                </li>
                <li>
                  <span className="winner-user-lft">Game </span>
                  <span className="winner-user-right">Wheel Of Rizk</span>
                </li>
                <li>
                  <span className="winner-user-lft">Platform </span>
                  <span className="winner-user-right">www.enoch.app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="game-block-img">
        <img src="images/bonus-img2.png" className="img-fluid" alt="bonus" />
      </div>
    </li>
  );
};

export default WheelOfCash;
