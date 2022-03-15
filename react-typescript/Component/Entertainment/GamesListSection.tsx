import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const LatestWinnersList = dynamic(() => import("./LatestWinnersList"));

const GamesListSection = () => {
  const [hour, setHour] = useState(11);
  const [minute, setMinute] = useState(60);
  const [seconds, setSeconds] = useState(60);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      setSeconds(60);
      setMinute(minute - 1);
    }
    if (minute === 0) {
      setMinute(60);
      setHour(hour - 1);
    }
    if (minute === 0 && hour === 0) {
      setHour(11);
    }
  }, [seconds]);

  const closeSpinModal = () => {
    setCloseModal(true);
  };

  return (
    <div className="entertainment-game-block">
      <div className="entertainment-game-block1">
        <ul>
          <li>
            <div className="game-block-top">
              <span
                className="game-block-top-lft"
                data-toggle="modal"
                data-target="rizk-modal1"
              >
                Collect & Play
              </span>
              <span className="game-block-top-right">FREE</span>
            </div>

            <div onClick={closeSpinModal} className="spin-modal-block">
              <div
                id="rizk-modal1"
                className={closeModal ? "modal fade" : "modal fade open"}
              >
                <div className="modal-content spin-modal-content">
                  <div className="spin-content-hd">
                    <h3>Wheel of Rizk</h3>
                    <p>
                      Kind of like the Wheel of Fortune, but about a million
                      times better
                    </p>
                  </div>
                  <div className="wheel-spin-block">
                    <div className="wheel">
                      <img
                        src="/images/Wheels1.png"
                        className="img-fluid"
                        alt="spin"
                      />
                    </div>
                  </div>
                  <div className="wheel-btn-block button-inactive">
                    <button id="rizk-btn" className="wheel-spin-button">
                      <img
                        src="/images/spinButton.png"
                        className="img-fluid"
                        alt="button"
                      />
                    </button>
                  </div>
                  <div id="display" className="display">
                    -
                  </div>
                  <div className="clock clock-active">
                    <p>Next free spin bonus</p>
                    <div className="clock-timer">
                      <label id="hour">
                        {hour.toString().length < 2 ? "0" + hour : hour}
                      </label>
                      :
                      <label id="minutes">
                        {minute === 60
                          ? "00"
                          : minute.toString().length < 2
                          ? "0" + minute
                          : minute}
                      </label>
                      :
                      <label id="seconds">
                        {seconds === 60
                          ? "00"
                          : seconds.toString().length < 2
                          ? "0" + seconds
                          : seconds}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="winner-modal-block">
              <div id="rizk-modal2" className="modal fade">
                <div className="modal-content spin-modal-content">
                  <span className="close">
                    <img
                      src="/images/closeround.png"
                      alt="close"
                      className="img-fluid"
                      data-dismiss="modal"
                    />
                  </span>
                  <div>
                    <img
                      src="/images/winner-pic.png"
                      className="img-fluid"
                      alt="bonus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="game-block-img">
              <img
                src="/images/bonus-img1.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-top">
              <span
                className="game-block-top-lft"
                data-toggle="modal"
                data-target="spin-modal1"
              >
                Collect & Play
              </span>
              <span className="game-block-top-right">FREE</span>
            </div>
            <div className="spin-modal-block">
              <div id="spin-modal1" className="modal fade">
                <div className="modal-content spin-modal-content cash-bg">
                  <span className="close">
                    <img
                      src="/images/closeround.png"
                      alt="close"
                      className="img-fluid"
                      data-dismiss="modal"
                    />
                  </span>
                  <div className="spin-icon1">
                    <img
                      src="/images/rizk-icon1.png"
                      className="img-fluid"
                      alt="spin"
                    />
                  </div>
                  <div className="spin-icon2">
                    <img
                      src="/images/rizk-icon2.png"
                      className="img-fluid"
                      alt="spin"
                    />
                  </div>
                  <div className="spin-icon3">
                    <img
                      src="/images/rizk-icon3.png"
                      className="img-fluid"
                      alt="spin"
                    />
                  </div>
                  <div className="spin-content-hd">
                    <h3>Wheel of Rizk</h3>
                    <p>
                      Kind of like the Wheel of Fortune, but about a million
                      times better
                    </p>
                  </div>
                  <div className="wheel-spin-block">
                    <img
                      src="/images/Wheels.png"
                      className="img-fluid"
                      alt="spin"
                    />
                  </div>
                  <div>
                    <button
                      id="wheel-btn"
                      className="wheel-spin-btn"
                      data-toggle="modal"
                      data-target="spin-modal2"
                    >
                      SPIN NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="winner-modal-block">
              <div id="spin-modal2" className="modal fade">
                <div className="modal-content spin-modal-content">
                  <span className="close">
                    <img
                      src="/images/closeround.png"
                      alt="close"
                      className="img-fluid"
                      data-dismiss="modal"
                    />
                  </span>

                  <div>
                    <img
                      src="/images/winner-pic.png"
                      className="img-fluid"
                      alt="bonus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="game-block-img">
              <img
                src="/images/bonus-img2.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img3.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img4.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="entertainment-game-block2">
        <div className="entertainment-game-block2-lft">
          <ul>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img5.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img6.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img7.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
          </ul>
        </div>
        <LatestWinnersList />
        <div className="entertainment-game-block2-right">
          <ul>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img8.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img9.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
            <li>
              <div className="game-block-img">
                <img
                  src="/images/bonus-img10.png"
                  className="img-fluid"
                  alt="bonus"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="entertainment-game-block1">
        <ul>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img11.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img12.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img13.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
          <li>
            <div className="game-block-img">
              <img
                src="/images/bonus-img14.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GamesListSection;
