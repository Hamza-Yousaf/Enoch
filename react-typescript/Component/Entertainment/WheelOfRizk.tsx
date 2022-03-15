import React, { useState } from "react";
import dynamic from "next/dynamic";
const WheelOdRizkModal = dynamic(() => import("./wheelOdRizkModal"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
const WonModal = dynamic(() => import("./WonModal"));


const WheelOfRizk = () => {
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
      <WheelOdRizkModal
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
      <div className="game-block-img">
        <img src="images/bonus-img1.png" className="img-fluid" alt="bonus" />
      </div>
    </li>
  );
};

export default WheelOfRizk;
