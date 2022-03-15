const LiquidityPositionsTutorial = () => {
  return (
    <div className="trade-tutorial">
      <div className="trade-tutorial-hd"><h2>Tutorials</h2></div>

      <div className="trade-tutorial-card">
        <ul>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/liquidity-img1.png" className="img-fluid" alt="tutoral" />
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
            </div>
            <div className="tutorial-txt-block">
              <h3>What is liquidity provider ?</h3>
              <p>A liquidity provider is a crypto investor which supplies crypto assets (AKA liquidity) for other traders and earns passive income from the transaction fees. </p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
          <li>
            <div className="video-midblock3">

              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />/516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
              <div className="play-btn"><button><img src="/images/PlayCircle.png" className="img-fluid" alt="play" /></button></div>

            </div>
          </li>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/liquidity-img3.png" className="img-fluid" alt="tutoral" />
              {/* <!-- <div className="tutorial-like-view">
              <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like"/>516K</span>
              <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew"/>516K</span>
            </div> --> */}
            </div>
            <div className="tutorial-txt-block">
              <h3>How Liquidty Providers Earn ? </h3>
              <p>When trading assets, traders pay certain amount of fees to the liquidity providers for providing liquidity. LPs earn these small fees on a daily basis. </p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default LiquidityPositionsTutorial;
