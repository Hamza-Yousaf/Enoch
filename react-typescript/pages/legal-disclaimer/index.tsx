import React, { useState } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));

const LegalDisclaimer: React.FC = () => {
  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid">
        <HeaderWebsite>
          <div className="enochweb-header-coookiePolicy">
            <div className="enochweb-header-coookiePolicyimg">
              <LazyLoadImage
                src="/images/cookie-policy-bg.png" 
                className="img-fluid" 
                alt="enoch"
                effect="blur"
              />
            </div>
            <div className="enochweb-header-tag">
              <div id="cookie-hd-title1" className="enochwen-cookiePolicy-headline">
                <h2>Privacy and Cookie Policy</h2>
              </div>
              <div id="cookie-hd-title2" className="enochwen-cookiePolicy-headline cookiePolicy-headline-dBlock">
                <h2>Legal Disclaimer</h2>
              </div>

              <div id="cookie-hd-title3" className="enochwen-cookiePolicy-headline">
                <h2>Copyright Policy</h2>
              </div>
              <div id="cookie-hd-title4" className="enochwen-cookiePolicy-headline">
                <h2>Terms of service</h2>
              </div>
            </div>

          </div>
        </HeaderWebsite>
        <div className="enochweb-cookiePolicy-sect">
          <div className="enochweb-container">
            <div className="cookie-policy-block">
              <div className="cookie-policy-block-lft">
                <ul>
                  <li>
                    {" "}
                    <a href="/cookie-policy">
                      <button className="cookietablink">
                        privacy & Cookie Policy{" "}
                      </button>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/legal-disclaimer">
                      <button className="cookietablink active">Legal disclaimer </button>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/copyright-policy">
                      <button className="cookietablink">Copyright policy</button>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/terms-service">
                      <button className="cookietablink">
                        Terms of service
                      </button>
                    </a>
                  </li>
                </ul>

              </div>
              <div className="cookie-policy-block-right">
                <div id="Legal" className="cookietabcontent cookie-display">
                  <div className="cookie-policy-privacy-body">
                    <h2>Legal Disclaimer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

export default trackWindowScroll(LegalDisclaimer);
