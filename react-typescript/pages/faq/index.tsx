import React, { useState, Component } from "react";
import classnames from "classnames";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));

const FAQ: React.FC = () => {
  const [sideBarTab, setSideBarTab] = useState("enoch-token");

  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid">
        <HeaderWebsite>
          <div className="enochweb-header-Faq">
            <div className="enochweb-header-Faqimg">
              <LazyLoadImage
                src="/images/FAQN.png" 
                className="img-fluid" 
                alt="enoch"
                effect="blur"
              />
            </div>
          </div>
        </HeaderWebsite>
        <div className="wnochweb-Faq-sect">
          <div className="enochweb-container">
            <div className="enochweb-faq-head">
              <h2>FAQs</h2>
              <h3>Know the answers</h3>
              <p>
                At Enoch, you will work with the world's most talented Brand
                designers,UX Researchers,Blcockchain Engineers, and Marketers.
              </p>
            </div>
            <div className="enochweb-collapse-sect">
              <div className="enochweb-collapse-block">
                <div className="enochweb-collapse-block-lft">
                  <ul>
                    <li onClick={() => setSideBarTab("enoch-token")}>
                      <button
                        className={classnames("enochfaqtablinks", {
                          active: sideBarTab == "enoch-token",
                        })}
                      >
                        ENOCH TOKEN
                      </button>
                    </li>
                    <li onClick={() => setSideBarTab("participation")}>
                      <button
                        className={classnames("enochfaqtablinks", {
                          active: sideBarTab == "participation",
                        })}
                      >
                        Participation
                      </button>
                    </li>
                    <li onClick={() => setSideBarTab("enoch-vaults")}>
                      <button
                        className={classnames("enochfaqtablinks", {
                          active: sideBarTab == "enoch-vaults",
                        })}
                      >
                        ENOCH Vaults (Staking)
                      </button>
                    </li>
                    <li onClick={() => setSideBarTab("enoch-pad")}>
                      <button
                        className={classnames("enochfaqtablinks", {
                          active: sideBarTab == "enoch-pad",
                        })}
                      >
                        ENOCH Pad
                      </button>
                    </li>
                    <li onClick={() => setSideBarTab("kyc-aml")}>
                      <button
                        className={classnames("enochfaqtablinks", {
                          active: sideBarTab == "kyc-aml",
                        })}
                      >
                        KYC/AML
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="enochweb-collapse-block-right">
                  <div
                    id="Token"
                    className={classnames("Faqtabcontent", {
                      "faq-display": sideBarTab == "enoch-token",
                    })}
                  >
                    <h2>ENOCH Token </h2>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse1"
                          >
                            <h4>
                              {" "}
                              Where can I buy ENOCH tokens? Which is the most
                              convenient place to buy?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse1"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse2"
                          >
                            <h4>What is the ENOCH token contract address?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse2"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse3"
                          >
                            <h4>
                              How can I add ENOCH tokens to my MetaMask wallet?
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse3"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse4"
                          >
                            <h4>
                              Where can I find information about the ENOCH tokens
                              release schedule?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse4"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse5"
                          >
                            <h4>
                              How does the dynamic supply of ENOCH tokens work?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse5"
                          className="enochweb-panel-collapse collapse"
                        >
                          <p className="mb-4">
                            The total final supply of ENOCH tokens is not fixed.
                            Despite the fact that the planned total final supply
                            of ENOCH Token is of 312M of tokens, this will change
                            to the Toll Bridge mechanism: if a ENOCH investor,
                            that participated in private sale, wants to claim his
                            tokens in advance, without waiting the regular
                            distribution, he can do paying a toll. The toll value
                            changes over time, and the subtracted tokens are
                            burned reducing the final token supply.{" "}
                          </p>

                          <p>
                            For further information about ENOCH token please check
                            the ENOCH Economics Paper.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Participation"
                    className={classnames("Faqtabcontent", {
                      "faq-display": sideBarTab == "participation",
                    })}
                  >
                    <h2>SHO Participation</h2>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse6"
                          >
                            <h4> What are a SHO and SEED?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse6"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse7"
                          >
                            <h4>How can I participate to a SHO?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse7"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse8"
                          >
                            <h4>
                              How many days in advance do I need to stake ENOCH
                              tokens in order to participate to a SHO?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse8"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse9"
                          >
                            <h4>
                              I am holding my ENOCH tokens in my ERC20 wallet, am
                              I eligible to participate in the upcoming SHOs?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse9"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse10"
                          >
                            <h4>
                              How many ENOCH tokens do I need to stake in order to
                              win an allocation?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse10"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse11"
                          >
                            <h4>What are Merit Round and Community Round?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse11"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse12"
                          >
                            <h4>
                              Can I apply for both merit and community rounds?
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse12"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse13"
                          >
                            <h4>
                              If I win an allocation for a SHO how and when will I
                              be contacted?
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse13"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Vaults"
                    className={classnames("Faqtabcontent", {
                      "faq-display": sideBarTab == "enoch-vaults",
                    })}
                  >
                    <h2>ENOCH Vaults (Staking) </h2>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse14"
                          >
                            <h4> What is the ENOCH Vault?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse14"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Pad"
                    className={classnames("Faqtabcontent", {
                      "faq-display": sideBarTab == "enoch-pad",
                    })}
                  >
                    <h2>ENOCH PAD</h2>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse14"
                          >
                            <h4>
                              {" "}
                              My Twitter account has been locked or suspended,
                              what should I do?{" "}
                            </h4>
                          </a>
                        </div>
                        <div
                          id="collapse14"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="KYC"
                    className={classnames("Faqtabcontent", {
                      "faq-display": sideBarTab == "kyc-aml",
                    })}
                  >
                    <h2>KYC/AML</h2>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse14"
                          >
                            <h4> Do I need KYC to participate to the sales?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse14"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a
                            className="enochweb-panel-title collapsed"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse15"
                          >
                            <h4>What are the KYC supported Countries?</h4>
                          </a>
                        </div>
                        <div
                          id="collapse15"
                          className="enochweb-panel-collapse collapse"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterWebsite />
      </div>
    </LazyLoadComponent>
  );
};

export default trackWindowScroll(FAQ);
