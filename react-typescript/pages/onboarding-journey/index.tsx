import React, { useState } from 'react'
import Link from 'next/link'

const onBoardingSilder: React.FC = () => {
    return (

        <div className="container-fluid">

            <div className="row">
                <div className="onboarding-new-container container-bg1">
                    <div id="enochCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators enochCarousel-indicat">
                            <li data-target="#enochCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#enochCarousel" data-slide-to="1" className=""></li>
                            <li data-target="#enochCarousel" data-slide-to="2" className=""></li>
                            <li data-target="#enochCarousel" data-slide-to="3" className=""></li>
                            <li data-target="#enochCarousel" data-slide-to="4" className=""></li>
                            <li data-target="#enochCarousel" data-slide-to="5" className=""></li>
                            <li data-target="#enochCarousel" data-slide-to="6" className=""></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item enochCarousel-item active">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Social commerce </h3>
                                                <p>We are launching Enoch. It’s the very first social commerce, Native in-depth NFT+ gamification.We are bringing together top voices, unseen creators, interesting insights, must-read topics across the metaverse, fashion, gaming, art, music, crypto, web3, open finance, NFTs— a highly concentrated, high quality content platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Meet me in the metaverse/The Metaverse Is Evolving</h3>
                                                <p>We’re focused on creating a place, where everyone will have an avatar and your digital identity and culture can live and thrive, and that starts with a high fidelity, premium, and accessible experience. It’s a virtual experience in 3D whether you are playing, creating, gaming, or exploring.“By rolling out our NFT economy and marketplace next, we will unlock community capitalism to the fullest extent.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Community takes all: <br />The Power of Social+   </h3>
                                                <p>Culture Revolution given us evolutionary advantage and If history has proven anything , it’s that evolution that always wins. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Watch or boardcast live events   </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                    fugiat nulla pariatur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Create and sell your first NFT   </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                    fugiat nulla pariatur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>Create something worth
                                                    building a community around</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                    fugiat nulla pariatur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item enochCarousel-item">
                                <div className="onboarding-new-block">
                                    <div className="onboarding-slide-lft-sect">
                                        <div className="onboarding-new-block-lft">
                                            <img src="/images/onboarding-slider-img.png" className="img-fluid" alt="slider" />
                                        </div>
                                    </div>
                                    <div className="onboarding-slide-right-sect">
                                        <div className="onboarding-new-block-right">
                                            <div className="onboarding-new-hearder-img"><img src="/images/enoch-logoNew.png" className="img-fluid" alt="logo" /></div>
                                            <div>
                                                <h3>More Than A Trend: Entering The Metaverse Will Become A Necessity For Brands   </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                    fugiat nulla pariatur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="onboarding-new-slide-pagi">
                            {/* <!-- Left and right controls --> */}
                            <a className="left carousel-control" href="#enochCarousel" data-slide="prev">

                                <span className="slide-pagi-prev">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#enochCarousel" data-slide="next">

                                <span className="slide-pagi-next">Next</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    )
}
export default onBoardingSilder
