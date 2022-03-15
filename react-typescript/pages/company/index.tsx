import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
import router from "next/router";
import { verifyToken } from "../../lib/verifyToken";
const SignIn = dynamic(() => import("../../Component/SignIn"));

const Company: React.FC = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg pb-0">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="company-create-block">
            <div className="company-create-head">
              <h2>Create a company page</h2>
              <p>
                Complete actions to unlock new features along the way. On
                average, completed pages get 30% more traffic. Learn more
              </p>
            </div>
            <div className="company-contentBody">
              <ul>
                <li>
                  <div className="company-block company-block-item1">
                    <div className="company-bg-block"></div>
                    <div className="company-img-block custm-top1">
                      <img
                        src="/images/compani-img1.png"
                        className="img-fluid"
                        alt="company"
                      />
                    </div>
                    <h3>Startups</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-block company-block-item2">
                    <div className="company-bg-block"></div>
                    <div className="company-img-block custm-top2">
                      <img
                        src="/images/compani-img2.png"
                        className="img-fluid"
                        alt="company"
                      />
                    </div>
                    <h3>SMEs</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-block company-block-item3">
                    <div className="company-bg-block"></div>
                    <div className="company-img-block custm-top3">
                      <img
                        src="/images/compani-img3.png"
                        className="img-fluid"
                        alt="company"
                      />
                    </div>
                    <h3>Corporates</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-block company-block-item4">
                    <div className="company-bg-block"></div>
                    <div className="company-img-block custm-top4">
                      <img
                        src="/images/compani-img4.png"
                        className="img-fluid"
                        alt="company"
                      />
                    </div>
                    <h3>Educational Institution</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </li>
              </ul>
              <div className="company-block-bottom">
                <div className="company-bg-block"></div>
                <div className="company-block-bottom-inner">
                  <div className="company-block-bottom-inner-lft">
                    <h3>
                      Increase salas with <br />
                      less efforts
                    </h3>
                    <p>
                      Focus on the needs of your customer , instead of data
                      collection. We help you to fully automate the quoting
                      process of the some private service.
                    </p>
                  </div>
                  <div className="company-block">
                    <img
                      src="/images/compani-img5.png"
                      className="img-fluid"
                      alt="company"
                    />
                  </div>
                </div>
                <div className="company-block-bottom2">
                  <ul>
                    <li>
                      <img
                        src="/images/compny-icon1.png"
                        className="img-fluid"
                        alt="Engagement"
                      />
                      <span className="ml-2">Engagement</span>
                    </li>
                    <li>
                      <img
                        src="/images/compny-icon2.png"
                        className="img-fluid"
                        alt="Saving time"
                      />
                      <span className="ml-2">Saving time</span>
                    </li>
                    <li>
                      <img
                        src="/images/compny-icon3.png"
                        className="img-fluid"
                        alt="Simple integration"
                      />
                      <span className="ml-2">Simple integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
