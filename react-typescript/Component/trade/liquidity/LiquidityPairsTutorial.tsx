const LiquidityPairsTutorial = () => {
  return (
    <div className="trade-tutorial">
    <div className="trade-tutorial-hd"><h2>Tutorials</h2></div>

    <div className="trade-tutorial-card">
      <ul>
        <li>
          <div className="tutorial-img-block">
            <img src="/images/liquidity-token.png" className="img-fluid" alt="tutoral" />
            <div className="tutorial-like-view">
              <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
              <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
            </div>
            {/* <!-- <h3>EARN CRYPTO<br/>
          WHILE YOU <br/>
          SLEEP.</h3> --> */}
          </div>
          <div className="tutorial-txt-block">
            <h3 className="mb-4">Earn Crypto while you sleep </h3>
            <p>Crypto has produced thousands of millionaires and you can be one of them. Be a part of the DeFi community. </p>
            <div className="bottom-readmo"><a href="#">Raed More</a></div>
          </div>
        </li>
        <li>
          <div className="video-midblock2">
            <img src="/images/liquidity-token2.png" className="img-fluid" alt="tutoral" />

          </div>
        </li>
        <li>
          <div className="tutorial-img-block">
            <img src="/images/liquidity-token1.png" className="img-fluid" alt="tutoral" />
            {/* <!-- <div className="tutorial-like-view">
          <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like"/>516K</span>
          <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew"/>516K</span>
        </div> --> */}
          </div>
          <div className="tutorial-txt-block">
            <h3>What is liquidity provider (LP) tokens ?</h3>
            <p>LP tokens are tokens that you, as an LP, recieve  for supplying crypto assets (liquidity) to a pool. You can use these tokens in future to cash out your assets.</p>
            <div className="bottom-readmo"><a href="#">Raed More</a></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default LiquidityPairsTutorial;
