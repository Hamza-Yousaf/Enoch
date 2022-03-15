import Link from "next/link";
import classnames from "classnames";

const LiquiditySection = (props: any) => {
    const { liquidityTab, liquidityTabHandler } =
        props;
    return (
        <div className="trade-section1">
            <div className="trade-tabblock">
                <div className="trade-tabsection-lft">
                    <div className="trade-tablink-sect">
                        <ul>
                            <li>
                                <Link href="/trade/swap">
                                    <button className="trade_tablinks">SWAP <img src="/images/info-icon.png" className="img-fluid ml-2" alt="info" /></button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/trade/liquidity">
                                    <button className="trade_tablinks active">LIQUIDITY <img src="/images/info-icon.png" className="img-fluid ml-2" alt="info" /></button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/trade/bridge">
                                    <button className="trade_tablinks" >BRIDGE <img src="/images/info-icon.png" className="img-fluid ml-2" alt="info" /></button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="trade-tabcontent-block">
                        <div id="SWAP" className="trade_tabcontent">
                            <div className="tarde-swap-block">swap</div>
                        </div>
                        <div id="LIQUIDITY" className="trade_tabcontent trade-d-block">
                            <div className="tarde-liquidity-block">
                                <div className="tarde-liquidity-top">
                                    <div className="liquidity-tablink-sect">
                                        <ul>
                                            <li onClick={() => liquidityTabHandler("top_pairs")}>
                                                <button
                                                    className={classnames("liquidity_tablinks", {
                                                        active: liquidityTab == "top_pairs",
                                                    })}
                                                >
                                                    TOP PAIRS
                                                </button>
                                            </li>
                                            <li
                                                onClick={() => liquidityTabHandler("your_positions")}
                                            >
                                                <button
                                                    className={classnames("liquidity_tablinks", {
                                                        active: liquidityTab == "your_positions",
                                                    })}
                                                >
                                                    Your Positions
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex">
                                        <span className="liquidity-top-block1"><div className="gas-tooltip">Today's gas price</div><img src="/images/swap-icon1.png" className="img-fluid mr-2" alt="icon" />56</span>
                                        <span className="liquidity-top-block2"><div className="addEnoch-tooltip">Add ENOCH to your metamask wallet</div>   <img src="/images/swap-icon2.png" className="img-fluid" alt="icon" /></span>
                                    </div>
                                </div>

                            </div>
                            {liquidityTab == "top_pairs" && (
                                <div className="liquidity-tabl-block">
                                    <div id="top_pairs" className="liquidity_tabcontent liquidity-d-block">
                                        <div className="liquidity-deatails-tbl">
                                            <div className="liquidity-table">
                                                <div className="liquidity-tableHeading">
                                                    <div className="liquidity-tableCell">Composition</div>
                                                    <div className="liquidity-tableCell">Pool value </div>
                                                    <div className="liquidity-tableCell">24hrs Volume  </div>
                                                    <div className="liquidity-tableCell">APR </div>
                                                    <div className="liquidity-tableCell">Pool value </div>
                                                </div>
                                                <div className="liquidity-tableBody">
                                                    {/* <!--table body start--> */}
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2"><img src="/images/pair-icon1.png" className="img-fluid" alt="icon" /></span>
                                                                <span><img src="/images/pair-icon2.png" className="img-fluid" alt="icon" /></span>
                                                            </div>
                                                            <div className="liquidity-tableCell">$ 2,000,456</div>
                                                            <div className="liquidity-tableCell">$ 21,456</div>
                                                            <div className="liquidity-tableCell">12.3%</div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">1,045
                                                                    <span><button className="add-liquidity-btn">+ Liquidity</button> </span>
                                                                    <div className="liquid-view-bttn">
                                                                        <a href="#" id="trade-dropbox-list-input" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/de-select.png" className="img-fluid" alt="ether" /></a>
                                                                        <div id="trade-dropbox-list" className="dropdown-menu liquid-view-tooltip">
                                                                            <div className="trade-view-detail"><a href="#">View Details</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                                            <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2"><img src="/images/pair-icon1.png" className="img-fluid" alt="icon" /></span>
                                                                <span><img src="/images/pair-icon3.png" className="img-fluid" alt="icon" /></span>
                                                            </div>
                                                            <div className="liquidity-tableCell">$ 2,000,456</div>
                                                            <div className="liquidity-tableCell">$ 21,456</div>
                                                            <div className="liquidity-tableCell">12.3%</div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">1,045
                                                                    <span><button className="add-liquidity-btn">+ Liquidity</button> </span>
                                                                    <div className="liquid-view-bttn">
                                                                        <a href="#" id="trade-dropbox-list-input" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/de-select.png" className="img-fluid" alt="ether" /></a>
                                                                        <div id="trade-dropbox-list" className="dropdown-menu liquid-view-tooltip">
                                                                            <div className="trade-view-detail"><a href="#">View Details</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                                            <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2"><img src="/images/pair-icon1.png" className="img-fluid" alt="icon" /></span>
                                                                <span><img src="/images/pair-icon2.png" className="img-fluid" alt="icon" /></span>
                                                            </div>
                                                            <div className="liquidity-tableCell">$ 2,000,456</div>
                                                            <div className="liquidity-tableCell">$ 21,456</div>
                                                            <div className="liquidity-tableCell">12.3%</div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">1,045
                                                                    <span><button className="add-liquidity-btn">+ Liquidity</button> </span>
                                                                    <div className="liquid-view-bttn">
                                                                        <a href="#" id="trade-dropbox-list-input" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/de-select.png" className="img-fluid" alt="ether" /></a>
                                                                        <div id="trade-dropbox-list" className="dropdown-menu liquid-view-tooltip">
                                                                            <div className="trade-view-detail"><a href="#">View Details</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                                            <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2"><img src="/images/pair-icon1.png" className="img-fluid" alt="icon" /></span>
                                                                <span><img src="/images/pair-icon2.png" className="img-fluid" alt="icon" /></span>
                                                            </div>
                                                            <div className="liquidity-tableCell">$ 2,000,456</div>
                                                            <div className="liquidity-tableCell">$ 21,456</div>
                                                            <div className="liquidity-tableCell">12.3%</div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">1,045
                                                                    <span><button className="add-liquidity-btn">+ Liquidity</button> </span>
                                                                    <div className="liquid-view-bttn">
                                                                        <a href="#" id="trade-dropbox-list-input" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/de-select.png" className="img-fluid" alt="ether" /></a>
                                                                        <div id="trade-dropbox-list" className="dropdown-menu liquid-view-tooltip">
                                                                            <div className="trade-view-detail"><a href="#">View Details</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span><img src="/images/klike.png" className="img-fluid mr-1" alt="like" />516K</span>
                                                            <span><img src="/images/kview.png" className="img-fluid mr-1" alt="viiew" />516K</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--table body end--> */}
                                            </div>
                                        </div>
                                        <div className="liquidity-table-pagination">
                                            <ul className="">

                                                <li>
                                                    <a href="javascript:void(0)" className="liquidity-arow-link-lft"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                                                </li>
                                                <li className="link-active">
                                                    <a href="javascript:void(0)" className="">1</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="">2</a>
                                                </li>
                                                <li><a href="javascript:void(0)" className="">3</a></li>

                                                <li>
                                                    <a href="javascript:void(0)" className="liquidity-arow-link-right"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                    <div id="your_positions" className="liquidity_tabcontent">

                                    </div>
                                </div>
                            )
                            }
                            {liquidityTab == "your_positions" && (
                                <div className="liquidity-tabl-block">
                                    <div id="top_pairs" className="liquidity_tabcontent"></div>
                                    <div
                                        id="your_positions"
                                        className="liquidity_tabcontent liquidity-d-block"
                                    >
                                        <div className="liquidity-deatails-tbl">
                                            <div className="liquidity-table">
                                                <div className="liquidity-tableHeading2">
                                                    <div className="liquidity-tableCell">
                                                        Composition
                                                    </div>
                                                    <div className="liquidity-tableCell">
                                                        Pooled supply
                                                    </div>
                                                    <div className="liquidity-tableCell">
                                                        Pool tokens
                                                    </div>
                                                    <div className="liquidity-tableCell">
                                                        Pool Share{" "}
                                                    </div>
                                                    <div className="liquidity-tableCell">
                                                        Pool volume{" "}
                                                    </div>
                                                </div>
                                                <div className="liquidity-tableBody">
                                                    {/* <!--table body start--> */}
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader2">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2">
                                                                    <img
                                                                        src="/images/pair-icon1.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <img
                                                                        src="/images/pair-icon2.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                45.34 / 8.443
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.87654
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.05 %
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">
                                                                    $ 2,000,456
                                                                    <div className="liquid-view-bttn">
                                                                        <a
                                                                            href="#"
                                                                            id="trade-dropbox-list-input"
                                                                            className=""
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="true"
                                                                        >
                                                                            <img
                                                                                src="/images/de-select.png"
                                                                                className="img-fluid"
                                                                                alt="ether"
                                                                            />
                                                                        </a>
                                                                        <div
                                                                            id="trade-dropbox-list"
                                                                            className="dropdown-menu liquid-view-tooltip view-custm-mrg"
                                                                        >
                                                                            <div className="trade-view-detail">
                                                                                <a href="#">View Details</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span>
                                                                <img
                                                                    src="/images/klike.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="like"
                                                                />
                                                                516K
                                                            </span>
                                                            <span>
                                                                <img
                                                                    src="/images/kview.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="viiew"
                                                                />
                                                                516K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader2">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2">
                                                                    <img
                                                                        src="/images/pair-icon1.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <img
                                                                        src="/images/pair-icon2.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                45.34 / 8.443
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.87654
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.05 %
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">
                                                                    $ 2,000,456
                                                                    <div className="liquid-view-bttn">
                                                                        <a
                                                                            href="#"
                                                                            id="trade-dropbox-list-input"
                                                                            className=""
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="true"
                                                                        >
                                                                            <img
                                                                                src="/images/de-select.png"
                                                                                className="img-fluid"
                                                                                alt="ether"
                                                                            />
                                                                        </a>
                                                                        <div
                                                                            id="trade-dropbox-list"
                                                                            className="dropdown-menu liquid-view-tooltip view-custm-mrg"
                                                                        >
                                                                            <div className="trade-view-detail">
                                                                                <a href="#">View Details</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span>
                                                                <img
                                                                    src="/images/klike.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="like"
                                                                />
                                                                516K
                                                            </span>
                                                            <span>
                                                                <img
                                                                    src="/images/kview.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="viiew"
                                                                />
                                                                516K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader2">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2">
                                                                    <img
                                                                        src="/images/pair-icon1.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <img
                                                                        src="/images/pair-icon2.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                45.34 / 8.443
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.87654
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.05 %
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">
                                                                    $ 2,000,456
                                                                    <div className="liquid-view-bttn">
                                                                        <a
                                                                            href="#"
                                                                            id="trade-dropbox-list-input"
                                                                            className=""
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="true"
                                                                        >
                                                                            <img
                                                                                src="/images/de-select.png"
                                                                                className="img-fluid"
                                                                                alt="ether"
                                                                            />
                                                                        </a>
                                                                        <div
                                                                            id="trade-dropbox-list"
                                                                            className="dropdown-menu liquid-view-tooltip view-custm-mrg"
                                                                        >
                                                                            <div className="trade-view-detail">
                                                                                <a href="#">View Details</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span>
                                                                <img
                                                                    src="/images/klike.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="like"
                                                                />
                                                                516K
                                                            </span>
                                                            <span>
                                                                <img
                                                                    src="/images/kview.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="viiew"
                                                                />
                                                                516K
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="liquidity-tableRow">
                                                        <div className="liquidity-tableRowHeader2">
                                                            <div className="liquidity-tableCell">
                                                                <span className="mr-2">
                                                                    <img
                                                                        src="/images/pair-icon1.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <img
                                                                        src="/images/pair-icon2.png"
                                                                        className="img-fluid"
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                45.34 / 8.443
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.87654
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                0.05 %
                                                            </div>
                                                            <div className="liquidity-tableCell">
                                                                <div className="liq-poolvql">
                                                                    $ 2,000,456
                                                                    <div className="liquid-view-bttn">
                                                                        <a
                                                                            href="#"
                                                                            id="trade-dropbox-list-input"
                                                                            className=""
                                                                            data-toggle="dropdown"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="true"
                                                                        >
                                                                            <img
                                                                                src="/images/de-select.png"
                                                                                className="img-fluid"
                                                                                alt="ether"
                                                                            />
                                                                        </a>
                                                                        <div
                                                                            id="trade-dropbox-list"
                                                                            className="dropdown-menu liquid-view-tooltip view-custm-mrg"
                                                                        >
                                                                            <div className="trade-view-detail">
                                                                                <a href="#">View Details</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="liquidity-like-view">
                                                            <span>
                                                                <img
                                                                    src="/images/klike.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="like"
                                                                />
                                                                516K
                                                            </span>
                                                            <span>
                                                                <img
                                                                    src="/images/kview.png"
                                                                    className="img-fluid mr-1"
                                                                    alt="viiew"
                                                                />
                                                                516K
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--table body end--> */}
                                            </div>
                                        </div>
                                        <div className="liquidity-table-pagination">
                                            <ul className="">
                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="liquidity-arow-link-lft"
                                                    >
                                                        <i
                                                            className="fa fa-angle-left"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li className="link-active">
                                                    <a href="javascript:void(0)" className="">
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="">
                                                        2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="">
                                                        3
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="liquidity-arow-link-right"
                                                    >
                                                        <i
                                                            className="fa fa-angle-right"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div id="BRIDGE" className="trade_tabcontent">
                            BRIDGE
                        </div>

                    </div>
                </div>

            </div>
            <div className="trade-adsection-right">
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


    );
};

export default LiquiditySection;
