import Link from "next/link";
const BridgeSection = () => {
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
                                    <button className="trade_tablinks">LIQUIDITY <img src="/images/info-icon.png" className="img-fluid ml-2" alt="info" /></button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/trade/bridge">
                                    <button className="trade_tablinks active" >BRIDGE <img src="/images/info-icon.png" className="img-fluid ml-2" alt="info" /></button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="trade-tabcontent-block">

                        <div id="SWAP" className="trade_tabcontent">

                        </div>
                        <div id="LIQUIDITY" className="trade_tabcontent">
                            LIQUIDITY
                        </div>
                        <div id="BRIDGE" className="trade_tabcontent trade-d-block">
                            <div className="tarde-swap-block">
                                <div className="tarde-swap-top">
                                    <span className="swap-top-block1">
                                        <div className="gas-tooltip">Today's gas price</div>
                                        <img src="/images/swap-icon1.png" className="img-fluid mr-2" alt="icon" />56
                                    </span>
                                    <span className="liquidity-top-block2"><div className="addEnoch-tooltip">Add ENOCH to your metamask wallet</div>   <img src="/images/swap-icon2.png" className="img-fluid" alt="icon" /></span>
                                </div>
                                <div className="swap-fromTo-block">
                                    <div className="swap-from-block swap-from-topTip">
                                        <p><span>Tip:</span> When you swap one token with another, you make the trade in a decentralised manner. The Enoch platform has no control over your assets and the trade is carried out by preprogramed pieces of code.</p>
                                    </div>
                                    <div className="swap-from-block">
                                        <div className="swap-from-block-lft">
                                            <h3 className="mb-0">From</h3>
                                            <p>Ethereum mainnet</p>
                                            <div className="trade-dropdown">
                                                <a href="#" id="trade-dropbox-list-input" className="trade-input-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/trade-ether.png" className="img-fluid mr-2" alt="ether" />ETH</a>
                                                <div id="trade-dropbox-list" className="dropdown-menu trade-input-dropbox-list">
                                                    <ul>
                                                        <li><span><img src="/images/trade-ether.png" className="img-fluid mr-2" alt="ether" /></span>ETH</li>
                                                        <li>-</li>
                                                        <li>-</li>
                                                        <li>-</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swap-from-block-right">
                                            <p>00.00</p>
                                            <div className="swap-balance-block">
                                                Balance: 1.2 ETH<span className="swap-balance-max">max</span><span className="swap-balance-val">~ $ 0.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swap-transfer-mid">
                                        <span><img src="/images/transfer.png" className="img-fluid" alt="icon" /></span>
                                    </div>
                                    <div className="swap-from-block">
                                        <div className="swap-from-block-lft">
                                            <h3 className="mb-0">To</h3>
                                            <p>Polygon mainnet</p>
                                            <div className="trade-dropdown tr-zindex2">
                                                <a href="#" id="trade-dropbox-list-input" className="trade-input-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img src="/images/swap-icon2.png" className="img-fluid mr-2" alt="ether" />Enoch</a>
                                                <div id="trade-dropbox-list" className="dropdown-menu trade-input-dropbox-list">
                                                    <ul>
                                                        <li><span><img src="/images/swap-icon2.png" className="img-fluid mr-2" alt="Enoch" /></span>Enoch</li>
                                                        <li>-</li>
                                                        <li>-</li>
                                                        <li>-</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swap-from-block-right">
                                            <p>00.00</p>
                                            <div className="swap-balance-block2">
                                                <span className="swap-balance-val">~ $ 0.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="trade-swap-btn-block mb-170">
                                        <button className="swap-bttn">CONVERT</button>
                                    </div>

                                </div>
                            </div>
                            <div className="tarde-swap-socialShare">
                                <div className="swap-socialShare-bttn">
                                    <span className="social-tradelike"><img src="/images/trade-like.png" className="img-fluid mr-1 trade-like" alt="icon" /><img src="/images/trade-like-hov.png" className="img-fluid mr-1 trade-like-hovr" alt="icon" />516K</span>
                                    <span><img src="/images/tradeshare-icon2.png" className="img-fluid mr-1" alt="icon" />516K</span>
                                    <span><img src="/images/tradeshare-icon3.png" className="img-fluid mr-1" alt="icon" /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="trade-adsection-right">
                <div className="trade-adsection-right-block1">
                    <img src="/images/swap-banner-ad1.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
                <div className="trade-adsection-right-block5">
                    <img src="/images/swap-banner-ad5.png" className="img-fluid" alt="icon" />
                    <div className="ad-sponsored">Sponsored <span><img src="/images/Sponsored-icon.png" className="img-fluid" alt="icon" /></span></div>
                </div>
            </div>
        </div>

    );
};

export default BridgeSection;
