import React, { useState } from "react";
import classnames from "classnames";

const FAQBridge = () => {
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
      <h3 onClick={() => faqDropDownHandler(!faqDropDown)}>FAQs for Bridge  </h3>

      <div id="trade-faq" className={classnames("trade-faq-drop", {
        show: faqDropDown == true,
      })}>
        <div className="trade-ask-ques" onClick={() => faqModelHandler(true)}><button className="ask-ques-btn" data-toggle="modal" data-target="ques-modal">Ask a Question</button></div>
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
                  1. What is a bridge ?</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <p>A bridge is a tool widely used in the crypto ecosystem to transfer your assets from one blockchain to other. For example, if you have USDC on your Ethereum address and you want to purchase an NFT which is on ploygon blockchain, you would first have to convert your USDC on ethereum to USDC on polygon using the bridge provided on the Enoch open finance page.</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed">
                  2. How does a bridge work? </a>
              </h4>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <p>A bridge allows you to move your assets from one blockchain to other. The way this works is, first your assets are burned on the existing chain. Once burning is completed, same amount of assets are minted  on the other chain for the specified account address.</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed">
                  3. Why would I use a bridge?</a>
              </h4>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <p> The Enoch platform supports multiple blockchains but it primarily uses Ploygon blockchain to carry out transactions. So if you are a user having assets from other blockchains, you would required a bridge to move your assets to ploygon blockchain. On the flip side, if you have made earnings from the Enoch platform and want to move assets to other chains, then too you will require a bridge.</p>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed">
                  4. How long does it take to bridge assets?</a>
              </h4>
            </div>
            <div id="collapse4" className="panel-collapse collapse">
              <p> Bridging assets may take anywhere between 10mins to 1hr. It also depends on the transaction speed of the blockchains you want to migrate from.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQBridge;
