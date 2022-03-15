import React, { useState } from "react";
import classnames from "classnames";
import dynamic from "next/dynamic";
const EPAllPost = dynamic(() => import("./EPAllPost"));
const EPOpenPost = dynamic(() => import("./EPOpenPost"));
const EPClosePost = dynamic(() => import("./EPClosePost"));



const mainTabArry = [
    'All',
    'Open',
    'Closed'
]

const subTabArry = [
    'Popular',
    'wETH',
    'USDC',
    'DAI',
    'USDT',
    'wBTC',
]

const EPPostContainer = (props: any) => {
    const [mainTab, setMainTab] = useState('All');
    const [subTab, setSubTab] = useState([]);

    const { lpModel, setLPModelHandler } = props;

    const mainTabHandler = (value: string) => {
        setMainTab(value);
    };


    return (
        <div className="epools-section">
            <div className="epools-sect-hd"><h2>ENTERTAINMENT POOL</h2></div>
            <div className="epools-cat-sect">
                <div className="epools-cat-tabsect">
                    <ul>
                        {mainTabArry.map((item, index) => {
                            return <li><button className={classnames("epools_tablinks", {
                                active: item == mainTab,
                            })} onClick={() => mainTabHandler(item)}>{item} </button></li>
                        })}
                    </ul>
                </div>

            </div>
            <div className="epools-cat-contentbody">
                <div id="epools_all" className="epools_tabcontent epools-d-block">
                    <div className="epools-cat-subsect">
                        <ul>

                            <li className="epools-tag-active">Popular</li>
                            <li>wETH</li>
                            <li>USDC</li>
                            <li>DAI</li>
                            <li>USDT</li>
                            <li>wBTC</li>
                        </ul>
                    </div>

                    {mainTab == 'All' && <EPAllPost setLPModelHandler={setLPModelHandler} />}
                    {mainTab == 'Open' && <EPOpenPost setLPModelHandler={setLPModelHandler} />}
                    {mainTab == 'Closed' && <EPClosePost setLPModelHandler={setLPModelHandler} />}




                </div>
                <div id="epools_open" className="epools_tabcontent">
                    <div className="epools-cat-subsect">
                        <ul>
                            <li>Popular</li>
                            <li>wETH</li>
                            <li className="epools-tag-active">USDC</li>
                            <li className="epools-tag-active">DAI</li>
                            <li className="epools-tag-active">USDT</li>
                            <li>wBTC</li>
                        </ul>
                    </div>
                    <div className="epools-cat-contentBlock">
                        <div className="epools-cat-lft">
                            <ul className="epoools-cat-list">
                                <li>
                                    <div className="epools-cat-listItem">
                                        <div className="epools-cat-listItem-hd">
                                            <h3>Keno</h3>
                                            <span><button className="epools-play-bttn">Play</button></span>
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
                                                    <div className="listItem-block-right epools-green-clr">
                                                        OPEN
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
                                                            <li><img src="/images/epools-user1.png" className="img-fluid" alt="icon" /></li>
                                                            <li><img src="/images/epools-user2.png" className="img-fluid" alt="icon" /></li>
                                                            <li><img src="/images/epools-user3.png" className="img-fluid" alt="icon" /></li>
                                                            <li className="epools-user-last">+500</li>
                                                        </ul>
                                                        <span>23 till now, 5 HOT</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="listItem-block-lft">
                                                        Pool Value<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                                    </div>
                                                    <div className="listItem-block-right epools-green-clr">
                                                        $2,000,000
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="listItem-block-lft">
                                                        Volume (24h)<span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                                    </div>
                                                    <div className="listItem-block-right epools-green-clr">
                                                        $250.000
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="listItem-block-lft">
                                                        Players <span className="ml-2"><img src="/images/epoolsAlert.png" className="img-fluid" alt="bell" /></span>
                                                    </div>
                                                    <div className="listItem-block-right liquidity-provdr">
                                                        <ul>
                                                            <li><img src="/images/epools-user1.png" className="img-fluid" alt="icon" /></li>
                                                            <li><img src="/images/epools-user2.png" className="img-fluid" alt="icon" /></li>
                                                            <li><img src="/images/epools-user3.png" className="img-fluid" alt="icon" /></li>
                                                            <li className="epools-user-last">+4K</li>
                                                        </ul>
                                                        <span>23 till now, 5 HOT</span>
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
                                                <span><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="epools-cat-right">
                            <div className="trade-adsection-right-block1">
                                <img src="/images/swap-banner-ad1.png" className="img-fluid" alt="icon" />
                                <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                            </div>
                            <div className="trade-adsection-right-block2">
                                <img src="/images/swap-banner-ad2.png" className="img-fluid" alt="icon" />
                                <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="epools_closed" className="epools_tabcontent">
                    <div className="epools-cat-subsect">
                        <ul>
                            <li className="epools-tag-active">wETH</li>
                            <li>USDC</li>
                            <li>DAI</li>
                            <li>USDT</li>
                            <li className="epools-tag-active">wBTC</li>
                        </ul>
                    </div>
                    <div className="epools-cat-contentBlock">
                        <div className="epools-cat-lft">
                            <ul className="epoools-cat-list">
                                <li>
                                    <div className="epools-cat-listItem">
                                        <div className="epools-cat-listItem-hd">
                                            <h3>Joker Poker</h3>
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
                                                        <span className=""><img src="/images/epools-icon1.png" className="img-fluid" alt="icon" /></span>

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
                                                <span><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
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
                                                <span><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="epools-cat-listItem">
                                        <div className="epools-cat-listItem-hd">
                                            <h3>Keno</h3>
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
                                                <span><button className="epools-rules-bttn" data-toggle="modal" data-target="LPrules-modal">LP Rules </button></span>
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
                            <div className="trade-adsection-right-block1 mb-0">
                                <img src="/images/swap-banner-ad1.png" className="img-fluid" alt="icon" />
                                <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EPPostContainer;
