import React, { useEffect, useState, useRef } from "react";

interface Props {
  showWheel: boolean;
  setShowWheel: React.Dispatch<React.SetStateAction<boolean>>;
  showWheelValue: boolean;
  setShowPrizeWon: React.Dispatch<React.SetStateAction<boolean>>;
  setPrizeImage: React.Dispatch<React.SetStateAction<string>>;
}

const WheelOdRizkModal: React.FC<Props> = ({
  showWheel,
  setShowWheel,
  setPrizeImage,
  setShowPrizeWon,
}) => {
  const possibleDegrees = [
    1100, 1120, 1145, 1168, 1190, 1210, 1233, 1253, 1273, 1293, 1318, 1340,
    1365, 1390, 1415, 1438,
  ];

  const [showSpinButton, setShowSpinButton] = useState(false);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [spin, setSpin] = useState(false);

  const reset = () => {
    setHour(0);
    setMinutes(0);
    setSeconds(5);
  };

  function randomNumber(min: any, max: any) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const spinWheel = (): any => {
    let deg2 = possibleDegrees[randomNumber(1, 16)];
    console.log(deg2);
    wheel.current.style.pointerEvents = "none";
    wheel.current.style.transition = "all 3s linear";
    wheel.current.style.transform = `rotate(${deg2}deg)`;
    wheel.current.classList.add("blur");

    wheel.current.addEventListener("transitionend", () => {
      reset();
      setShowSpinButton(false);
      wheel.current.classList.remove("blur");
      wheel.current.style.pointerEvents = "auto";
      wheel.current.style.transition = "none";
      const actualDeg2 = deg2 % 360;
      wheel.current.style.transform = `rotate(${actualDeg2}deg)`;

      switch (deg2) {
        case 1100:
          setPrizeImage("/images/win2000.png");
          break;
        case 1145:
          setPrizeImage("/images/win1500.png");
          break;
        case 1210:
          setPrizeImage("/images/win1000.png");
          break;
        case 1233:
          setPrizeImage("/images/win900.png");
          break;
        case 1253:
          setPrizeImage("/images/win800.png");
          break;
        case 1293:
          setPrizeImage("/images/win600.png");
          break;
        case 1318:
          setPrizeImage("/images/win500.png");
          break;
        case 1390:
          setPrizeImage("/images/win300.png");
          break;
        case 1415:
          setPrizeImage("/images/win200.png");
          break;
        case 1438:
          setPrizeImage("/images/win100.png");
          break;
        case 1190:
          setPrizeImage("/images/winner-pic.png");
          break;
        default:
          setPrizeImage("/images/winextra.png");
      }
      setTimeout(() => {
        setShowPrizeWon(true);
      }, 500);
    });
    return null;
  };

  const wheel = useRef(null);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hour === 0) {
            clearInterval(myInterval);
            setShowSpinButton(true);
          } else {
            setHour(hour - 1);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="spin-modal-block">
      <div
        id="rizk-modal1"
        className={showWheel ? "modal fade open" : "modal fade"}
      >
        <div className="modal-content spin-modal-content">
          <span onClick={() => setShowWheel(false)} className="close">
            <img
              src="images/closeround.png"
              alt="close"
              className="img-fluid"
              data-dismiss="modal"
            />
          </span>

          <div className="spin-content-hd">
            <h3>Wheel of Rizk</h3>
            <p>
              Kind of like the Wheel of Fortune, but about a million times
              better
            </p>
          </div>
          <div className="wheel-spin-block">
            <div className="entertainment-marker">
              <img className="marker img-fluid" src="images/marker.png" />
            </div>
            <div
              ref={wheel}
              className={spin ? "wheel no-pointer-events blur" : "wheel"}
            >
              <img src="images/Wheels.png" className="img-fluid" alt="spin" />
            </div>
            <div className="wheel-spin-txt1">
              <img
                src="images/rizk-wheel.png"
                className="img-fluid"
                alt="spin"
              />
            </div>
          </div>
          {showSpinButton === true ? (
            <div className="wheel-btn-block">
              <button
                onClick={spinWheel}
                id="rizk-btn"
                className="wheel-spin-button"
              >
                <img
                  src="images/spinButton.png"
                  className="img-fluid"
                  alt="button"
                />
              </button>
            </div>
          ) : (
            <>
              <div id="display" className="display">
                -
              </div>
              <div className="clock clock-active">
                <p>Next free spin bonus</p>
                <div className="clock-timer">
                  <label id="hour">{hour < 10 ? `0${hour}` : hour}</label>:
                  <label id="minutes">
                    {minutes === 60
                      ? `00`
                      : minutes < 10
                      ? `0${minutes}`
                      : minutes}
                  </label>
                  :
                  <label id="seconds">
                    {seconds === 60
                      ? `00`
                      : seconds < 10
                      ? `0${seconds}`
                      : seconds}
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WheelOdRizkModal;
