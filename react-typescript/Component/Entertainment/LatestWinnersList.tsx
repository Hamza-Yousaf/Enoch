import React from "react";

const LatestWinnersList = () => {
  return (
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
  );
};

export default LatestWinnersList;
