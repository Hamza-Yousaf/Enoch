import React from "react";

const CompleteProfile = () => {
  return (
    <div className="dApp-What-happening-sect">
      <div className="dApp-What-happeningheadings">
        <h1>What’s happening</h1>
      </div>
      <div className="dApp-What-happening-news-sect">
        <div className="dApp-What-happening-news">
          <div className="dApp-What-happening-news-text">
            <h2>
              News . <span>2 minutes ago</span>
            </h2>
            <p>
              Looking at the claim that discourse around ‘White Previlege’ can
              hamper white working className students.
            </p>
          </div>
          <div className="dApp-What-happening-news-photo">
            <img
              src="/images/dApp-news-pic-1.png"
              alt="photo"
              className="img-fluid"
            />
          </div>
        </div>
        <h6>
          Treanding with <a href="#">#WhitePrevilege</a>
        </h6>
      </div>

      <div className="dApp-Trending-United-Kingdom-sect">
        <h1>Trending in United Kingdom mnmn</h1>
        <a href="#">#CryptoCash</a>
        <p>17.1K Pinned</p>
        <div className="dApp-Trending-United-Kingdom-3dots">
          <img
            src="/images/dApp-ThreeDots.png"
            alt="3Dots"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="dApp-Trending-United-Kingdom-sect">
        <h1>Trending in United Kingdom</h1>
        <a href="#">#CryptoCash</a>
        <p>17.1K Pinned</p>
        <div className="dApp-Trending-United-Kingdom-3dots">
          <img
            src="/images/dApp-ThreeDots.png"
            alt="3Dots"
            className="img-fluid"
          />
        </div>
      </div>

      {/* <!-- <div className="dApp-What-happening-news-sect">
        <div className="dApp-What-happening-news">
            <div className="dApp-What-happening-news-text">
                <h2>News . <span>2 minutes ago</span></h2>
                <p>Looking at the claim that discourse around ‘White Previlege’ can hamper white working className students.</p>
            </div>
            <div className="dApp-What-happening-news-photo">
                <img src="/images/dApp-news-pic-2.png" alt="photo" className="img-fluid" />
            </div>
        </div>
        <h6 className="pb-0">Treanding with <a href="#">#WhitePrevilege</a></h6>
    </div> --> */}
    </div>
  );
};

export default CompleteProfile;
