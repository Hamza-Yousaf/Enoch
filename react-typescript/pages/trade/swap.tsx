import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const SwapBanner = dynamic(() => import("../../Component/trade/swap/SwapBanner"));
const SwapSection = dynamic(() => import("../../Component/trade/swap/SwapSection"));
const FAQSwap = dynamic(() => import("../../Component/trade/swap/FAQSwap"));
const SwapTutorial = dynamic(() => import("../../Component/trade/swap/SwapTutorial"));

const Trade: React.FC = () => {
  return (
    <div className="container-fluid pb-0">
      <Header />
      <div className="row trade-bg">
        <div className="ezl-dashboard-container">
          <SwapBanner />
          <SwapSection />
          <FAQSwap />
          {/* <div className="swap-faq-block">
            <h3 >FAQs for Swap  </h3>

            <div id="trade-faq" className="trade-faq-drop">
              <div className="trade-ask-ques"><button className="ask-ques-btn" data-toggle="modal" data-target="ques-modal">Ask a Question</button></div>
              <div className="ask-ques-modalBlock">
                <div id="ques-modal" className="modal fade">
               
                  <div className="modal-content ques-modal-content ">
                    <span className="close"><img src="/images/Tclose.png" alt="close" className="img-fluid" data-dismiss="modal" /></span>
                    <h4>Ask a Question</h4>
                    <textarea className="ques-textarea" placeholder="Ask your questions"></textarea>
                    <div className="mt-4"><button className="submit-ques-bttn">Submit your questions</button></div>
                  </div>
                </div>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className="collapsed">
                        1. What is a swap ?</a>
                    </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse">
                    <p>A swap or decentralized exchange, also known as DEX, offers a new type of pair-matching that allows traders to place orders and trade cryptocurrencies without an intermediary institution controlling the funds. Therefore it allows traders to exchange crypto in a decentralised way.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" className="collapsed">
                        2. How does a swap work?</a>
                    </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <p>There are Liquidity Providers (LPs) who deposit their crypto assets in liquidity pools. Anybody with certain amount of crypto can become an LP. When performing a swap, you enter this liquidity pool and deposit one asset and withdraw the other in the ratio proportional to the current market price of your crypto. Thus you trade crypto in a decentralised fashion without the need for a middle man service.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" className="collapsed">
                        3. Why would I use a swap?</a>
                    </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <p>If you hold a particular crypto asset and want to pay for a product or service, let’s say ETH, but the service requires the payment in USDC. In such a situation you would first need to convert your ETH to USDC and then pay the service in USDC. The conversion of ETH to USDC will be done by using a swap.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" className="collapsed">
                        4. Is my crypto safe while using the swap?</a>
                    </h4>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <p>The swap mechanism is completely automated and rigorously tested. With the decentralised design, you are in complete control of your own assets. So yes, given that you follow the provided instructions properly, your crypto is completely safe while using the swap.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" className="collapsed">
                        5. What are the prerequisites before using a swap?</a>
                    </h4>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse">
                    <p> To use the swap, you only need a web3 wallet where can store, send and receive crypto. If you do not have your own web3 wallet, you can use the wallet provided by the Enoch platform. There are no other prerequisites.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse6" className="collapsed">
                        6. Do I need to pay any fees while swapping my crypto?</a>
                    </h4>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse">
                    <p>Yes. While performing a swap, you will have to pay 2 types of fees. One, would be the fees you pay to the liquidity providers (LPs), 0.3%, who allow you make the swap by providing liquidity and risking their own crypto. Second, would be the transaction fees. This fees needs to be paid to the network operators who run their own node to keep the network running for you.</p>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapse7" className="collapsed">
                        7. Can I become a Liquidity Provider?</a>
                    </h4>
                  </div>
                  <div id="collapse7" className="panel-collapse collapse">
                    <p> Absolutely. If you are holding crypto as a long term investment, you can deposit it in a liquidity pool and earn more crypto by charging LP fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <SwapTutorial />
        </div>
      </div>
    </div>
  );
};
export default Trade;
