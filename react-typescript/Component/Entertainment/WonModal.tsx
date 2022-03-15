import React from "react";
interface Props {
  prizeImage: string;
  showPrizeWon: boolean;
  setShowPrizeWon: React.Dispatch<React.SetStateAction<boolean>>;
}

const WonModal: React.FC<Props> = ({
  prizeImage,
  showPrizeWon,
  setShowPrizeWon,
}) => {
  return (
    <>
      {prizeImage === "/images/winextra.png" ? (
        <div id="rizk-modal3" className={showPrizeWon ? "modal fade open" : ""}>
          <div className="modal-content spin-modal-content">
            <span onClick={() => setShowPrizeWon(false)} className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div className="winmodal-custmZ">
              <img
                src="images/winextra.png"
                className="img-fluid"
                alt="bonus"
              />
            </div>
          </div>
        </div>
      ) : prizeImage === "/images/winner-pic.png" ? (
        <div id="rizk-modal5" className={showPrizeWon ? "modal fade open" : ""}>
          <div className="modal-content spin-modal-content">
            <span onClick={() => setShowPrizeWon(false)} className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>

            <div className="winmodal-custmZ">
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
                  <span className="winner-user-right">
                    <span className="winuser-img">
                      <img
                        src="images/comm-usr-img4.png"
                        className="img-fluid"
                        alt="user"
                      />
                    </span>
                    @Titan456
                  </span>
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
      ) : (
        <div
          id="cash-modal11"
          className={showPrizeWon ? "modal fade open" : ""}
        >
          <div className="modal-content spin-modal-content">
            <span onClick={() => setShowPrizeWon(false)} className="close">
              <img
                src="images/closeround.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>
            <div>
              <img src={prizeImage} className="img-fluid" alt="bonus" />
            </div>
            <div className="winner-user-details">
              <ul>
                <li>
                  <span className="winner-user-lft">Player Name </span>
                  <span className="winner-user-right">
                    <span className="winuser-img">
                      <img
                        src="images/comm-usr-img4.png"
                        className="img-fluid"
                        alt="user"
                      />
                    </span>
                    @Titan456
                  </span>
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
      )}
    </>
  );
};

export default WonModal;
