import React from 'react';

const FinalPollFeed = () => {
    return (
        <div className="cryptoWrap">
            <div className="cryptoWrap__heading">
                Will these partnerships lead crypto to mainstream awareness?
            </div>
            <div className="cryptoWrap__subheading">
                The author can see how you vote. Learn more
            </div>
            <div className="mainstream-awareness-cls">
                <div className="crypto__btn">
                    <button className="cryptoButton">Yes</button>
                </div>
                <div className="crypto__btn">
                    <button className="cryptoButton">No</button>
                </div>
                <div className="crypto__btn">
                    <button className="cryptoButton">
                        Crypto is already popular
                    </button>
                </div>
            </div>
            <div className="awareness-cls2">
                <div className="crypto__ProgWraper">
                    <div className="crypto__Prog Yes">
                        <span className="crypto__ProgValue">Yes
                        </span>
                        <span>
                            <img className="crypto__ProgValueTickImg" src="images/tick-circle.svg" alt=""/></span>
                    </div>
                    <div className="crypto__ProgValuePercentage">72%</div>
                </div>
                <div className="crypto__ProgWraper">
                    <div className="crypto__Prog No">
                        <span className="crypto__ProgValue">No</span>

                    </div>
                    <div className="crypto__ProgValuePercentage">18%</div>
                </div>
                <div className="crypto__ProgWraper">
                    <div className="crypto__Prog_popular">
                        <div className="crypto__Prog Crypto_popular">
                            <span className="crypto__ProgValue">Crypto is already popular
                            </span>
                        </div>
                    </div>
                    <div className="crypto__ProgValuePercentage">10%</div>
                </div>
            </div>
            <div className="cryptoVote">139 votes • 4d left
                <span className="cryptoVoteUndo">undo</span>
            </div>
        </div>
    );
};

export default FinalPollFeed;