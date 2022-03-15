import React, { useState } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import classnames from "classnames";
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));

const Career: React.FC = () => {
  const [hiring, setHiring] = useState("compliance");

  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid enochweb-body-bg">
        <HeaderWebsite>
          <div className="enochweb-header-career">
            <div className="enochweb-header-careerimg">
              <LazyLoadImage
                src="/images/careerHeader.png"
                className="img-fluid"
                alt="enoch"
                effect="blur"
              />
            </div>
          </div>
        </HeaderWebsite>
        <div className="enochweb- team-sect">
          <div className="enochweb-container">
            <div className="enochweb-career-block">
              <div className="enochweb-career-block-hd">
                <h2>Career</h2>
                <h3>Join The Team </h3>
                <p>
                  At Enoch, you will work with the world's most talented Brand
                  designers,UX Researchers,Blcockchain Engineers, and Marketers to
                  change how social commerce works. From Design jobs, to marketing
                  and revenue, to meta-Commerce and support positions — we operate
                  globally, think outside the box, and view our colleagues as
                  friends.
                </p>
              </div>
              <div className="enochweb-career-perkBnifit-sect">
                <div className="enochweb-career-mid-img">
                  <LazyLoadImage
                    src="/images/career-img1.png"
                    className="img-fluid"
                    alt="career"
                    effect="blur"
                  />
                </div>
                <h2>Perk & Benifits</h2>
                <ul>
                  <li>
                    <div className="enochweb-perkBnifit-block">
                      <div className="perkBnifit-img">
                        <LazyLoadImage
                          src="/images/career-img2.png"
                          className="img-fluid"
                          alt="career"
                          effect="blur"
                        />
                      </div>
                      <h3>Financial</h3>
                      <p>Lorem ipsum dolor sit Adipiscing elit</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochweb-perkBnifit-block">
                      <div className="perkBnifit-img">
                        <LazyLoadImage
                          src="/images/career-img3.png"
                          className="img-fluid"
                          alt="career"
                          effect="blur"
                        />
                      </div>
                      <h3>Health</h3>
                      <p>Lorem ipsum dolor sit Adipiscing elit</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochweb-perkBnifit-block">
                      <div className="perkBnifit-img">
                        <LazyLoadImage
                          src="/images/career-img4.png"
                          className="img-fluid"
                          alt="career"
                          effect="blur"
                        />
                      </div>
                      <h3>Growth</h3>
                      <p>Lorem ipsum dolor sit Adipiscing elit</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochweb-perkBnifit-block">
                      <div className="perkBnifit-img">
                        <LazyLoadImage
                          src="/images/career-img7.png"
                          className="img-fluid"
                          alt="career"
                          effect="blur"
                        />
                      </div>
                      <h3>Culture</h3>
                      <p>Lorem ipsum dolor sit Adipiscing elit</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="enochweb-ceate-foundation-sect">
                <h2>
                  Create the right foundations
                  <br />
                  for social commerce.
                </h2>
                <p>
                  Tackle some of the hardest problems that exist at the
                  intersection of crypto,NFT, social, art, fashion,Metaverse,AR
                  &VR.
                </p>
                <div className="create-foundtn-img">
                  <LazyLoadImage
                    src="/images/career-img5.png"
                    className="img-fluid"
                    alt="career"
                    effect="blur"
                  />
                </div>
              </div>
              <div className="enochweb-wprkWant-sect">
                <h2>Work how you want</h2>
                <h3>Work where you want</h3>
                <p>
                  Find roles in the most exciting cities for tech jobs, plus
                  thousands of remote and flexible opportunities.
                </p>
                <div className="enochweb-wprkWant-countryList">
                  <ul>
                    <li>London</li>
                    <li>
                      <img
                        src="/images/dot-icon1.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Berlin</li>
                    <li>
                      <img
                        src="/images/dot-icon2.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Rome</li>
                    <li>
                      <img
                        src="/images/dot-icon3.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Paris</li>
                    <li>
                      <img
                        src="/images/dot-icon4.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Madrid</li>
                  </ul>
                  <ul>
                    <li>Lisbon</li>
                    <li>
                      <img
                        src="/images/dot-icon6.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Amsterdam</li>
                    <li>
                      <img
                        src="/images/dot-icon7.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Capetown</li>
                    <li>
                      <img
                        src="/images/dot-icon8.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Pune</li>
                    <li>
                      <img
                        src="/images/dot-icon9.png"
                        className="img-fluid"
                        alt="dot"
                      />
                    </li>
                    <li>Remote </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="enochweb-weHiring-sect">
          {/* <!-- <img src="/images/hiring-bg.png" className="img-fluid" alt="hire"/> --> */}
          <div className="enochweb-container">
            <div className="enochweb-weHiring-content-block">
              <h2>we're hiring</h2>
              <p>
                We’re looking for creative minds to help us continue building the
                world’s first social meta-commerce.{" "}
              </p>
              <div className="enochweb-weHiring-tabBlock">
                <ul>
                  <li onClick={() => setHiring('compliance')}>
                    <button
                      className={classnames("hiretablinks", {
                        "hire-active": hiring == "compliance",
                      })}
                    >
                      Compliance
                    </button>
                  </li>
                  <li onClick={() => setHiring('business-ops')}>
                    <button
                      className={classnames("hiretablinks", {
                        "hire-active": hiring == "business-ops",
                      })}
                    >
                      Business Ops{" "}
                    </button>
                  </li>
                  <li onClick={() => setHiring('digital-marketing')}>
                    <button
                      className={classnames("hiretablinks", {
                        "hire-active": hiring == "digital-marketing",
                      })}
                    >
                      Digital Marketing{" "}
                    </button>
                  </li>
                  <li onClick={() => setHiring('design')}>
                    <button
                      className={classnames("hiretablinks", {
                        "hire-active": hiring == "design",
                      })}
                    >
                      DESIGN
                    </button>
                  </li>
                  <li onClick={() => setHiring('engineering')}>
                    <button
                      className={classnames("hiretablinks", {
                        "hire-active": hiring == "engineering",
                      })}
                    >
                      Engineering
                    </button>
                  </li>
                </ul>
                <div className="enochweb-weHiring-contentBlock">
                  <div id="Compliance" className="hiretabContent hire-d-block">
                    <p>At present we have no job vacancy</p>
                  </div>
                  <div id="Business" className="hiretabContent">
                    <p>At present we have no job vacancy</p>
                  </div>
                  <div id="Digital" className="hiretabContent">
                    <p>At present we have no job vacancy</p>
                  </div>
                  <div id="Design" className="hiretabContent">
                    <p>At present we have no job vacancy</p>
                  </div>
                  <div id="Engineering" className="hiretabContent">
                    <p>At present we have no job vacancy</p>
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

export default trackWindowScroll(Career);
