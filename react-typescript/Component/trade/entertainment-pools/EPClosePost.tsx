import React, { useState } from "react";
import Link from "next/link";

const EPClosePost = (props: any) => {
    const { setLPModelHandler } = props;

    return (
        <div className="epools-cat-contentBlock">
            <div className="epools-cat-lft">
                <ul className="epoools-cat-list">
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Keno</h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <img src="/images/epools-img6.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-red-clr">
                                            CLOSED
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            <span className="mr-2"><img src="/images/epools-icon1.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon2.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon3.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon4.png" className="img-fluid" alt="icon" /></span>
                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn epools-disable-btn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Poker </h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <div className="tutorial-like-view2">
                                    <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                    <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                </div>
                                <img src="/images/epools-img5.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-red-clr">
                                            CLOSED
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">

                                            <span className="mr-2"><img src="/images/epools-icon4.png" className="img-fluid" alt="icon" /></span>
                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn epools-disable-btn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Roulette </h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <div className="tutorial-like-view2">
                                    <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                    <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                </div>
                                <img src="/images/epools-img7.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-red-clr">
                                            CLOSED
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">

                                            <span className="mr-2"><img src="/images/epools-icon4.png" className="img-fluid" alt="icon" /></span>
                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn epools-disable-btn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Blackjack     </h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <div className="tutorial-like-view2">
                                    <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                    <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                </div>
                                <img src="/images/epools-img3.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-cyan-clr">
                                            SOON
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">

                                            <span className="mr-2"><img src="/images/epools-icon4.png" className="img-fluid" alt="icon" /></span>
                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Joker Poker </h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <div className="tutorial-like-view2">
                                    <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                    <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                </div>
                                <img src="/images/epools-img4.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-red-clr">
                                            CLOSED
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">

                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn epools-disable-btn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="epools-cat-listItem">
                            <div className="epools-cat-listItem-hd">
                                <h3>Slots      </h3>
                                <span><button className="epools-play-bttn epools-disable-btn">Play</button></span>
                            </div>
                            <div className="epools-img-block">
                                <div className="tutorial-like-view2">
                                    <span className="mr-2"><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                    <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                </div>
                                <img src="/images/epools-img8.png" className="img-fluid epools-img" alt="epools" />
                                <div className="epools-bottm-sect">
                                    <div className="epools-bottm-lft">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-bell.png" className="img-fluid" alt="bell" /></span>Get Notification</a>
                                    </div>
                                    <div className="epools-bottm-right">
                                        <a href="#"><span className="mr-2"><img src="/images/epools-Share.png" className="img-fluid" alt="share" /></span>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="epools-listItem-block">
                                <ul>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Status <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-red-clr">
                                            CLOSED
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Approximate Odds <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            1-10/70
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Composition <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            <span className="mr-2"><img src="/images/epools-icon1.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon2.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon3.png" className="img-fluid" alt="icon" /></span>
                                            <span className="mr-2"><img src="/images/epools-icon4.png" className="img-fluid" alt="icon" /></span>
                                            <span className=""><img src="/images/epools-icon5.png" className="img-fluid" alt="icon" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Liquidity Providers <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-green-clr">
                                            $0.00
                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right liquidity-provdr">
                                            <ul>
                                                <li><img src="/images/epools-user4.png" className="img-fluid" alt="icon" /></li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="listItem-block-lft">
                                            APR<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                        </div>
                                        <div className="listItem-block-right epools-orange-clr">
                                            12.3%
                                        </div>
                                    </li>
                                </ul>
                                <div className="epools-rules-bttn-block">
                                    <span><button className="epools-view-bttn epools-disable-btn">View Details  </button></span>
                                    <span onClick={() => setLPModelHandler(true)}><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="epools-cat-right">
                <div className="trade-adsection-right-block3">
                    <img src="/images/swap-banner-ad3.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
                <div className="trade-adsection-right-block4 mb-40">
                    <img src="/images/swap-banner-ad4.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
                <div className="trade-adsection-right-block1">
                    <img src="/images/swap-banner-ad1.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
                <div className="trade-adsection-right-block3">
                    <img src="/images/swap-banner-ad3.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
            </div>
        </div>


    );
};

export default EPClosePost;
