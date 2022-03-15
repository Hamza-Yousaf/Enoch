const SwapTutorial = () => {
  return (
    <div className="trade-tutorial">
      <div className="trade-tutorial-hd"><h2>Tutorials</h2></div>

      <div className="trade-tutorial-card">
        <ul>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/tutorial-img2.png" className="img-fluid" alt="tutoral" />
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
            </div>
            <div className="tutorial-txt-block">
              <h3>What is Enoch swap and how  it works ?  </h3>
              <p>A swap allows you to trade your one crypto with another. To complete the trade, certain percentage (~ 3 USD) of your asset will be ...</p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
          <li>
            <div className="video-midblock">
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
              <div className="play-btn"><button><img src="/images/PlayCircle.png" className="img-fluid" alt="play" /></button></div>
              <h3>$Enoch Swap Explained </h3>
              <p>Swaps are extremely helpful when it comes to exchanging crypto assets trustlessly and anonymously. Enoch provides</p>
            </div>
          </li>
          <li>
            <div className="tutorial-img-block">
              <img src="/images/tutorial-img1.png" className="img-fluid" alt="tutoral" />
              <div className="tutorial-like-view">
                <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
              </div>
            </div>
            <div className="tutorial-txt-block">
              <h3>Swap Crypto Like a Pro</h3>
              <p>You are in complete control of your own assets. The gas fees is the price you pay to stay in full control.</p>
              <div className="bottom-readmo"><a href="#">Raed More</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SwapTutorial;
