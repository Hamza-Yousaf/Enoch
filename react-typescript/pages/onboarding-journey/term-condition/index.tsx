//@ts-nocheck
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const TermCondition: React.FC = () => {
  const next = () => {
    var currentIndex = $("div.active").index();
    if (currentIndex == 10) {
      window.location.href = "/onboarding-journey/enoch-info";
    }
  };

  return (
    <>
      <header className="enoch-header">
        <div>
          <img className="encho-logo cursor" src="/images/encho-logo.png" />
        </div>
      </header>
      <section>
        <div>
          <img className="aggrement-bg" src="/images/aggrement-bg.png" />
        </div>

        <div className="aggrement-section">
          <h3 className="terms-title">Terms of service</h3>

          <p className="aggrement-description mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <div className="scrollable-section">
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="scrollable-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>

          <button
            type="button"
            className="aggrement-btn"
            data-toggle="modal"
            data-target="#largeModal"
          >
            Agree & Continue
          </button>
        </div>

        {/* <!-- slider modal --> */}
        <div className="enochfisher-modal">
          <div
            className="enoch-modal modal fade"
            id="largeModal"
            role="dialog"
            aria-labelledby="basicModal"
            aria-hidden="true"
          >
            <div className=" modal-dialog-centered modal-dialog modal-xl">
              <div className=" modal-content">
                <div className=" modal-body">
                  <div>
                    <img
                      src="/images/cross-modal.png"
                      className="cross-modal cursor"
                      data-dismiss="modal"
                    />
                  </div>
                  {/* <!-- carousel --> */}
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item item active">
                        <div className="img-bg bg-blue">
                          <div className="img-section all-graphic-img"></div>
                          <div className="text-area-bottom">
                            <div className="p-25">
                              <img
                                src="/images/earnmoney.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <h1 className="slider-heading self-center">
                              More ways to earn money
                            </h1>
                            <p className="slider-description_earn_money">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative red-bg">
                            <div className="top-icon post-feed">
                              <img
                                src="/images/posttofeed.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading">Post to feed</h1>
                              <p className="slider-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 share-img "></div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction bg-brown dots-patteren">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon">
                              <img
                                src="/images/followfrineds.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading">Follow friends</h1>
                              <p className="slider-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 friendship-img"></div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction bg-blue">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon go-shoping">
                              <img
                                src="/images/shopping.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom go-shoping">
                              <h1 className="slider-heading">Go shopping</h1>
                              <p className="slider-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 cart-img"></div>
                        </div>
                      </div>
                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction bg-black dots-patteren">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon">
                              <img
                                src="/images/becomecreater.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading">Become Creator</h1>
                              <p className="slider-description">
                                Create NFT’s and add a store in just few clicks
                                and start selling colelctible arts, music,
                                downloads, tickets, and band merch today. Best
                                of all, we don't charge any gas fees.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 nfts-img"></div>
                        </div>
                      </div>
                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction bg-dark-blue dots-patteren">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon">
                              <img
                                src="/images/livestreaming.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading">Live Streaming</h1>
                              <p className="slider-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 online-img"></div>
                        </div>
                      </div>
                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon">
                              <img
                                src="/images/playtoearn.png"
                                className="enochpop-slide-icon-ern"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading text-black">
                                Play to earn
                              </h1>
                              <p className="slider-description text-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 gaming-img"></div>
                        </div>
                      </div>
                      <div className="carousel-item item">
                        <div className="img-bg bg-white nft-img web-view"></div>

                        <div className="mbl-img-bg">
                          <div className="img-section nft-img mbl-view"></div>
                          <div className="icon-overlay">
                            <img
                              src="/images/Enoch-gift-party.png"
                              className="enochpop-slide-icon"
                              alt="..."
                            />
                          </div>
                          <div className="text-area-left text-overlay">
                            <h1 className="slider-heading text-black">
                              Send a gift
                            </h1>
                            <p className="slider-description text-black">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item item">
                        <div className="img-bg bg-charcol enochCommunity">
                          <div className="img-section people-img"></div>

                          <div className="text-area-top">
                            <h1 className="slider-heading self-center">
                              Join Enoch Community
                            </h1>
                            <p className="slider-description-join-enoch">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg disp-flex mbl-flex-direction bg-dark-blue">
                          <div className="w-50-100 mbl-100 mbl-order-2 pos-relative">
                            <div className="top-icon bug">
                              <img
                                src="/images/reportbug.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <div className="text-area-left mbl-text-bottom">
                              <h1 className="slider-heading">Report a bug</h1>
                              <p className="slider-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>

                          <div className="w-50-100 mbl-img-section mbl-order-1 bug-img"></div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg red-bg">
                          <div className="img-section credit-img"></div>

                          <div className="text-area-bottom">
                            <div className="">
                              <img
                                src="/images/freecredit.png"
                                className="enochpop-slide-icon"
                                alt="..."
                              />
                            </div>
                            <h1 className="slider-heading self-center">
                              Free Credit
                            </h1>
                            <p className="slider-description-free-credit">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item item">
                        <div className="img-bg bg-blue">
                          <div className="img-section globe-img"></div>

                          <div className="text-area-bottom pd-20">
                            <h1 className="slider-heading self-center">
                              Discover & get inspired
                            </h1>
                            <p className="slider-description-free-credit">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-controls">
                      {/* <!-- slider controls --> */}
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="3"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="4"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="5"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="6"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="7"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="8"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="9"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="10"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="11"
                        ></li>
                      </ol>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="link-text">Link Text</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                        onClick={() => next()}
                      >
                        <a href="/onboarding-journey/enoch-info">
                          <span className="link-text">Post Feed</span>
                        </a>
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withApollo(TermCondition, { getDataFromTree });
