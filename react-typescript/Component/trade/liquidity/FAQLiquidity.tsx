import React, { useState } from "react";
import classnames from "classnames";

const FAQLiquidity = () => {
  const [faqDropDown, setFaqDropDown] = useState(false);
  const [faqModel, setFaqModel] = useState(false);


  const faqDropDownHandler = (value: boolean) => {
    setFaqDropDown(value);
  };

  const faqModelHandler = (value: boolean) => {
    setFaqModel(value);
  };
  return (
    <div className="swap-faq-block">
      <h3 onClick={() => faqDropDownHandler(!faqDropDown)}>FAQs for Liquidity Providers</h3>
      <div id="trade-faq" className={classnames("trade-faq-drop", {
        show: faqDropDown == true,
      })}>
        <div className="trade-ask-ques" onClick={() => faqModelHandler(true)}>
          <button className="ask-ques-btn" data-toggle="modal" data-target="ques-modal">Ask a Question</button>
        </div>
        <div className="ask-ques-modalBlock">
          <div id="ques-modal" className={classnames("modal fade", {
            open: faqModel == true,
          })}>
            {/* <!-- Modal content --> */}
            <div className="modal-content ques-modal-content ">
              <span className="close" onClick={() => faqModelHandler(false)}><img src="/images/Tclose.png" alt="close" className="img-fluid" data-dismiss="modal" /></span>
              <h4>Ask a Question</h4>
              <textarea className="ques-textarea" placeholder="Ask your questions"></textarea>
              <div className="mt-4" onClick={() => faqModelHandler(false)}><button className="submit-ques-bttn">Submit your questions</button></div>
            </div>
          </div>
        </div>
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed">
                  1. What are liquidity pools?</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <p>A basic Liquidity Pool creates a market for a particular pair of assets on a decentralized exchange (e.g: DAI/ETH). When the Liquidity Pool is created, a liquidity provider sets the initial price and equal supply of both assets</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed">
                  2. How do liquidity pools work?</a>
              </h4>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <p> When liquidity is supplied to a pool, the liquidity provider (LP) receives special tokens called LP tokens in proportion to the amount of liquidity it has supplied to the pool. When the pool facilitates a trade, a rate of 0.3% is distributed proportionally among all LP token holders.</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed">
                  3. How do liquidity pools make money?</a>
              </h4>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <p>Liquidity providers earn fees from transactions on the Enoch swap. The collected transaction fees are distributed proportionally to all the liquidity providers in the pool, so the more crypto assets you stake the more fees you'll earn.</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed">
                  4. What are the risks of liquidity pools?</a>
              </h4>
            </div>
            <div id="collapse4" className="panel-collapse collapse">
              <p>Once a liquidity pool is drained of a particular token, liquidity providers can become exposed to impermanent loss. This loss typically occurs when the ratio of the tokens in the liquidity pool becomes uneven. This loss is calculated by comparing the value of your tokens in the liquidity pool versus the value of simply holding them</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed">
                  5. How do I add money to a liquidity pool?</a>
              </h4>
            </div>
            <div id="collapse5" className="panel-collapse collapse">
              <div className="panel-collapse-content">
                To become a Liquidity provider:
                <ul>
                  <li><span>1.</span> Go to the liquidity tab on the Enoch open finance page.</li>
                  <li><span>2.</span> Select a liquidity pool from the list of available pools and click in “liquidity” button. Make sure you hold sufficient amount of both assets of the pool. If not, use the Enoch swap.</li>
                  <li><span>3.</span> Add amount of tokens you want to add. Enter amount for either one of the tokens and the second amount will be filled automatically.</li>
                  <li><span>4.</span> Click on “supply amount” and confirm the transaction from the popup.</li>
                  <li><span>5.</span> Chose the payment method and on successful transaction you will receive LP tokens of the pool. These LP tokens suggests that you are a Liquidity provided on the Enoch platform.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" className="collapsed">
                  6. How do I withdraw from a liquidity pool?</a>
              </h4>
            </div>
            <div id="collapse6" className="panel-collapse collapse">
              <div className="panel-collapse-content">
                Under the Liquidity tab of the Enoch open finance page:
                <ul>
                  <li><span>1.</span> Click on “your positions”. You would be able to see all your current positions in the pools you have supplied liquidity to.</li>
                  <li><span>2.</span> Select the pool you want to remove liquidity from.</li>
                  <li><span>3.</span> Enter amount of Liquidity you want to remove.</li>
                  <li><span>4.</span> Confirm the transaction from your desired wallet. On success, the LP tokens in your possession will be burned and the liquidity you supplied will be deposited back to your wallet along with potential profits.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQLiquidity;
