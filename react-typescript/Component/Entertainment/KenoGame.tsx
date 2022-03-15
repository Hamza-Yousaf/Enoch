import React from "react";
import router from "next/router";

interface Props {
  imageClass: string;
}

const KenoGame: React.FC<Props> = ({ imageClass }) => {
  const goToKenoGame = () => {
    router.push("/entertainment/treasure-hunt");
  };
  return (
    <div className="col-sm-6 col-lg-4 p-0">
      <div className={imageClass}>
        <div className="top-draw">
          <span>
            <img src="images/stime.png" className="img-fluid mr-1" alt="time" />
            DRAW
          </span>
          <span>20:00:00</span>
        </div>
        <div className="leko-like-view">
          <span>
            <img src="images/klike.png" className="img-fluid mr-1" alt="like" />
            1.2K
          </span>
          <span>
            <img
              src="images/kview.png"
              className="img-fluid mr-1"
              alt="viiew"
            />
            3.5K
          </span>
        </div>
        <div className="game-card-blur-bg">
          <div className="game-card-blur-bg-content">
            <ul>
              <li className="white-border row-1">
                <h2>Treasure hunt monthly</h2>
                <h3>1,000,000 AMBER</h3>
              </li>

              <li className="white-border">
                <h2>Prize Position</h2>
                <h3>100</h3>
              </li>

              <li className="gray-border">
                <h2>Winning Strategy</h2>
                <h3>A X BET = X Points</h3>
              </li>

              <li className="gray-border">
                <h2>Tournament Game</h2>
                <h3>KENO</h3>
              </li>
            </ul>
            <button onClick={goToKenoGame}>PLAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenoGame;
