const BridgeTutorial = () => {
  return (
    <div className="trade-tutorial">
      <div className="trade-tutorial-hd"><h2>Tutorials</h2></div>

      <div className="trade-tutorial-card">
        <ul>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/bridge-pic1.png" className="img-fluid" alt="tutoral" />
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
            </div>
            <div className="tutorial-txt-block">
              <h3>Lusarn Bridge Faster, Cheaper   Cross-chain Transactions  </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
          <li>
            <div className="bridge-video-midblock">
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
              <div className="bridge-play-vdo">
                <h3>How instantly move  Crypto Assets ? </h3>
                <div className="play-btn m-0"><button><img src="/images/PlayCircle2.png" className="img-fluid" alt="play" /></button></div>
              </div>
            </div>
          </li>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/bridge-pic3.png" className="img-fluid" alt="tutoral" />
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
            </div>
            <div className="tutorial-txt-block">
              <h3>Launching Lusarn cross-chain Bridge</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BridgeTutorial;
