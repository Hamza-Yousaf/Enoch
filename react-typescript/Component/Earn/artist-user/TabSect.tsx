import React, { useState } from 'react'
import classnames from 'classnames';

const TabSect = () => {
  const [activeMenu, setActiveMenu] = useState('overview')
  return (
    <div className="earn-overview-tab-sect">
      <div className="earn-tablink-sect">
        <ul>
          <li>
            <button
              className={classnames('earn_tablinks', {
                active: activeMenu == 'overview'
              })}
              id='defaultOpen'
              onClick={() => setActiveMenu('overview')}

            >Overview
            </button>
          </li>
          <li>
            <button
              className={classnames('earn_tablinks', {
                active: activeMenu == 'transactions'
              })}
              id='defaultOpen'
              onClick={() => setActiveMenu('transactions')}
            >
              Transactions
            </button>
          </li>
          <li>
            <button className={classnames('earn_tablinks', {
              active: activeMenu == 'game-contest'
            })}
              id='defaultOpen'
              onClick={() => setActiveMenu('game-contest')}>
              Game Contest
            </button></li>
          <li>
            <button className={classnames('earn_tablinks', {
              active: activeMenu == 'affiliate'
            })}
              id='defaultOpen'
              onClick={() => setActiveMenu('affiliate')} >
              Affiliate
            </button>
          </li>
          <li>
            <button className={classnames('earn_tablinks', {
              active: activeMenu == 'currency'
            })}
              id='defaultOpen'
              onClick={() => setActiveMenu('currency')}>
              Currency
            </button>
          </li>
        </ul>
      </div>
      <div className="earn-tabcontent-block">
        <div id="overview"
          className={classnames('earn_tabcontent', {
            'earn-d-block': activeMenu == 'overview'
          })}
        >
          <div className="earn-withdraw-b">
            <div className="earn-withdraw-lft">
              <span><img src="/images/withdrawIcon.png" className="img-fluid" alt="icon" /></span>
              <div>
                <h3>Withdraw Balance</h3>
                <p>Total money you are abel to withdraw </p>
              </div>
            </div>
            <div className="earn-withdraw-right">
              <div className="earn-withdraw-right-input">
                <span className="earn-withdraw-total">Total</span>
                <span className="withdraw-total-val">$0.00 </span>
                <div className="earn-withdraw-input-fild">

                  <a href="#" id="withdraw-dropbox-list-input" className="withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                  <div id="withdraw-dropbox-list" className="dropdown-menu withdraw-dropbox-list">
                    <ul>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div><button className="earn-withdraw-bttn">Withdraw Now</button></div>
            </div>
          </div>
          <div className="earn-pending-withdraw-sect">
            <div className="earn-pending-withdraw-lft">
              <div className="pending-withdraw-p0">
                <span><img src="/images/pending.png" className="img-fluid" alt="icon" /></span>
                <div className="pending-withdraw-p0-txt">
                  <h3>Pending Withdrawls</h3>
                  <p>Total amount locked in bonuses  </p>
                </div>
              </div>
              <span className="no-pending-fund">No Pending Fund</span>
            </div>
            <div className="earn-pending-withdraw-right">
              <div className="pending-withdraw-p0">
                <span><img src="/images/bonus-balance.png" className="img-fluid" alt="icon" /></span>
                <div className="pending-withdraw-p0-txt">
                  <h3>Bonus Balance</h3>
                  <p>Total amount locked in bonuses  </p>
                </div>
              </div>
              <div className="earn-pending-right-input">
                <div className="pending-total-val">
                  <span className="earn-pndng-withdraw-total">Total</span>
                  <span className="withdraw-total-val">$0.00 </span>
                </div>
                <div className="earn-withdraw-input-fild">

                  <a href="#" id="withdraw-dropbox-list-input1" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                  <div id="withdraw-dropbox-list1" className="dropdown-menu withdraw-dropbox-list">
                    <ul>
                      <li>
                        <div className="earn-currency-listItem">
                          <div className="currency-listItem-lft">
                            <span><img src="/images/Amber.png" className="img-fluid" alt="icon" /></span>
                            <div className="currency-listItem-txt">
                              <h3>Amber</h3>
                              <p>$0.0016</p>
                            </div>
                          </div>
                          <div className="currency-listItem-mid">
                            <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                          </div>
                          <div className="currency-listItem-right">
                            <h3>100,800</h3>
                            <p>$161,28</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="earn-currency-listItem">
                          <div className="currency-listItem-lft">
                            <span><img src="/images/USDC.png" className="img-fluid" alt="icon" /></span>
                            <div className="currency-listItem-txt">
                              <h3>USDC</h3>
                              <p>$0.46</p>
                            </div>
                          </div>
                          <div className="currency-listItem-mid">
                            <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                          </div>
                          <div className="currency-listItem-right">
                            <h3>13,800</h3>
                            <p>$150,000</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="earn-currency-listItem">
                          <div className="currency-listItem-lft">
                            <span><img src="/images/USDT.png" className="img-fluid" alt="icon" /></span>
                            <div className="currency-listItem-txt">
                              <h3>USDT</h3>
                              <p>$0.46</p>
                            </div>
                          </div>
                          <div className="currency-listItem-mid">
                            <span><img src="/images/Polygon2.png" className="img-fluid" alt="icon" /></span>-2.1%
                          </div>
                          <div className="currency-listItem-right">
                            <h3>13,800</h3>
                            <p>$150,000</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="earn-currency-listItem">
                          <div className="currency-listItem-lft">
                            <span><img src="/images/DAI.png" className="img-fluid" alt="icon" /></span>
                            <div className="currency-listItem-txt">
                              <h3>DAI</h3>
                              <p>$0.46</p>
                            </div>
                          </div>
                          <div className="currency-listItem-mid">
                            <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                          </div>
                          <div className="currency-listItem-right">
                            <h3>13,800</h3>
                            <p>$150,000</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="earn-currency-listItem">
                          <div className="currency-listItem-lft">
                            <span><img src="/images/Ether.png" className="img-fluid" alt="icon" /></span>
                            <div className="currency-listItem-txt">
                              <h3>Ether</h3>
                              <p>$0.46</p>
                            </div>
                          </div>
                          <div className="currency-listItem-mid">
                            <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                          </div>
                          <div className="currency-listItem-right">
                            <h3>13,800</h3>
                            <p>$150,000</p>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="earn-recent-income-sect">
            <div className="earn-recent-income-hd">
              <h3>Recent Income </h3>
              <p>Manage and view your income  </p>
            </div>
            <div className="earn-pending-withdraw-sect">
              <div className="earn-pending-withdraw-lft">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/freind.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Friends</h3>
                    <p>Total amount locked in bonuses   </p>
                  </div>
                </div>
                <div className="earn-pending-right-input">
                  <div className="pending-total-val">
                    <span className="earn-pndng-withdraw-total">Total</span>
                    <span className="withdraw-total-val">$0.00 </span>
                  </div>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input2" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list2" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/Amber.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>Amber</h3>
                                <p>$0.0016</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>100,800</h3>
                              <p>$161,28</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/Enoch.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>Enoch</h3>
                                <p>$1.16</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0.00</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/DAI.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>DAI</h3>
                                <p>$1.00</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon2.png" className="img-fluid" alt="icon" /></span>-2.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/USDC.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>USDC</h3>
                                <p>$1.00</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/USDT.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>USDT</h3>
                                <p>$0.46</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/Ether.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>ETH</h3>
                                <p>$3200</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/wBTC.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>wBTC</h3>
                                <p>$42000</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="earn-pending-withdraw-right">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/artist-mandala.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Mandala</h3>
                    <p>Total amount locked in bonuses </p>
                  </div>
                </div>
                <div className="earn-pending-right-input">
                  <div className="pending-total-val">
                    <span className="earn-pndng-withdraw-total">Total</span>
                    <span className="withdraw-total-val">$0.00 </span>
                  </div>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input3" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list3" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="earn-pending-withdraw-lft">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/NomadCitizen.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Nomad Citizen</h3>
                    <p>Total amount locked in bonuses   </p>
                  </div>
                </div>
                <div className="earn-pending-right-input">
                  <div className="pending-total-val">
                    <span className="earn-pndng-withdraw-total">Total</span>
                    <span className="withdraw-total-val">$0.00 </span>
                  </div>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input4" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list4" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="earn-pending-withdraw-right">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/Entertainment.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Entertainment</h3>
                    <p>Total amount locked in bonuses </p>
                  </div>
                </div>
                <div className="earn-pending-right-input">
                  <div className="pending-total-val">
                    <span className="earn-pndng-withdraw-total">Total</span>
                    <span className="withdraw-total-val">$0.00 </span>
                  </div>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input5" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list5" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/Amber.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>Amber</h3>
                                <p>$0.0016</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>100,800</h3>
                              <p>$161,28</p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/DAI.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>DAI</h3>
                                <p>$1.00</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon2.png" className="img-fluid" alt="icon" /></span>-2.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/USDC.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>USDC</h3>
                                <p>$1.00</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/USDT.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>USDT</h3>
                                <p>$0.46</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/Ether.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>ETH</h3>
                                <p>$3200</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="earn-currency-listItem">
                            <div className="currency-listItem-lft">
                              <span><img src="/images/wBTC.png" className="img-fluid" alt="icon" /></span>
                              <div className="currency-listItem-txt">
                                <h3>wBTC</h3>
                                <p>$42000</p>
                              </div>
                            </div>
                            <div className="currency-listItem-mid">
                              <span><img src="/images/Polygon1.png" className="img-fluid" alt="icon" /></span>1.1%
                            </div>
                            <div className="currency-listItem-right">
                              <h3>0</h3>
                              <p>$0</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="earn-recent-income-sect">
            <div className="earn-recent-income-hd">
              <h3>Recent Bonuses  </h3>
              <p>Manage and view your income   </p>
            </div>
            <div className="earn-pending-withdraw-sect">
              <div className="earn-pending-withdraw-lft">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/bonus.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Welcome Bonus, 100 free spins</h3>
                    <p>Expires August 27, 2021  </p>
                  </div>
                </div>
                <div className="earn-pending-right-panel">
                  <div className="earn-bonus-spin"><span className="earn-blue-clr">0% </span><span>spins</span></div>
                  <span className="earn-right-arrw"><a href="#"><img src="/images/right-angl.png" className="img-fluid" alt="forward" /></a></span>
                </div>
              </div>
              <div className="earn-pending-withdraw-right">
                <div className="pending-withdraw-recent-p0">
                  <span><img src="/images/treasure-chest.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Bonus,Promotion code     </h3>
                    <p>Expires August 27, 2021</p>
                  </div>
                </div>
                <div className="earn-pending-right-panel">
                  <div className="earn-bonus-spin"><span className="earn-green-clr">0% </span><span>promo<br />code</span></div>
                  <span className="earn-right-arrw"><a href="#"><img src="/images/right-angl.png" className="img-fluid" alt="forward" /></a></span>
                </div>
              </div>

            </div>
          </div>
          <div className="earn-recent-income-sect">
            <div className="earn-recent-income-hd">
              <h3>Digital Art </h3>
              <p>Manage and view your income </p>
            </div>
            <div className="earn-affiliate-b artist-blue-bg">
              <div className="earn-withdraw-lft">
                <span><img src="/images/withdrawIcon.png" className="img-fluid" alt="icon" /></span>
                <div>
                  <h3>Withdraw Balance</h3>
                  <p>Total money you are abel to withdraw </p>
                </div>
              </div>
              <div className="earn-withdraw-right">
                <div className="earn-withdraw-right-input">
                  <span className="earn-withdraw-total artist-total">Total</span>
                  <span className="withdraw-total-val">$0.00 </span>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input6" className="withdraw-box artist-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list6" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div><button className="earn-withdraw-bttn">Withdraw Now</button></div>
              </div>
            </div>
            <div className="earn-pending-withdraw-sect">
              <div className="earn-pending-withdraw-lft">
                <div className="pending-withdraw-p0">
                  <span><img src="/images/artist-withdrawl.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Pending Withdrawls</h3>
                    <p>Total amount locked in bonuses  </p>
                  </div>
                </div>
                <span className="no-pending-fund">No Pending Fund</span>
              </div>
              <div className="earn-pending-withdraw-right">
                <div className="pending-withdraw-p0">
                  <span><img src="/images/artist-channel.png" className="img-fluid" alt="icon" /></span>
                  <div className="pending-withdraw-p0-txt">
                    <h3>Artist Channel  </h3>
                    <p>Premium content  </p>
                  </div>
                </div>
                <div className="earn-pending-right-input">
                  <div className="pending-total-val">
                    <span className="earn-pndng-withdraw-total">Total</span>
                    <span className="withdraw-total-val">$0.00 </span>
                  </div>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input1" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list1" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>
                          -
                        </li>
                        <li>
                          -
                        </li>
                        <li>
                          -
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="earn-pending-withdraw-right w-100">
                  <div className="pending-withdraw-p0">
                    <span><img src="/images/artist-marketplace.png" className="img-fluid" alt="icon" /></span>
                    <div className="pending-withdraw-p0-txt">
                      <h3>Digital art Marketplace </h3>
                      <p>Total amount locked in bonuses  </p>
                    </div>
                  </div>
                  <div className="earn-pending-right-input">
                    <div className="pending-total-val">
                      <span className="earn-pndng-withdraw-total">Total</span>
                      <span className="withdraw-total-val">$0.00 </span>
                    </div>
                    <div className="earn-withdraw-input-fild">

                      <a href="#" id="withdraw-dropbox-list-input1" className="pending-withdraw-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                      <div id="withdraw-dropbox-list1" className="dropdown-menu withdraw-dropbox-list">
                        <ul>
                          <li>
                            -
                          </li>
                          <li>
                            -
                          </li>
                          <li>
                            -
                          </li>


                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="earn-recent-income-sect">
            <div className="earn-recent-income-hd">
              <h3>Affiliate </h3>
              <p>Manage and view your income </p>
            </div>
            <div className="earn-affiliate-b">
              <div className="earn-withdraw-lft">
                <span><img src="/images/withdrawIcon.png" className="img-fluid" alt="icon" /></span>
                <div>
                  <h3>Withdraw Balance</h3>
                  <p>Total money you are abel to withdraw </p>
                </div>
              </div>
              <div className="earn-withdraw-right">
                <div className="earn-withdraw-right-input">
                  <span className="earn-withdraw-total affiliate-total">Total</span>
                  <span className="withdraw-total-val">$0.00 </span>
                  <div className="earn-withdraw-input-fild">

                    <a href="#" id="withdraw-dropbox-list-input6" className="withdraw-box affiliate-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Currency</a>
                    <div id="withdraw-dropbox-list6" className="dropdown-menu withdraw-dropbox-list">
                      <ul>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div><button className="earn-withdraw-bttn">Withdraw Now</button></div>
              </div>
            </div>
          </div>
          <div className="earn-pending-withdraw-sect">
            <div className="earn-pending-withdraw-lft">
              <div className="pending-withdraw-p0">
                <span><img src="/images/pending.png" className="img-fluid" alt="icon" /></span>
                <div className="pending-withdraw-p0-txt">
                  <h3>Pending Withdrawls</h3>
                  <p>Total amount locked in bonuses  </p>
                </div>
              </div>
              <span className="no-pending-fund">No Pending Fund</span>
            </div>
            <div className="earn-pending-withdraw-right">
              <div className="pending-withdraw-p0">
                <span><img src="/images/refferal.png" className="img-fluid" alt="icon" /></span>
                <div className="pending-withdraw-p0-txt">
                  <h3>Paid  Referral </h3>
                  <p>All  Paying Referrals </p>
                </div>
              </div>
              <span className="no-refferal-fund"> No Referral Found</span>
            </div>
          </div>
          <div className="earn-invite-sect">
            <div className="earn-invite-sect-lft">
              <div className="earn-invite-txt">
                <h3>Invite your friend</h3>
                <p>Earn up to 30% monthly of every paid referral ,Recurring lifetime commissions .</p>
              </div>
            </div>
            <div className="earn-invite-sect-right">
              <button className="earn-join-bttn">Join & Start to earn </button>
            </div>
          </div>
        </div>
        <div id="transactions" className={classnames('earn_tabcontent', {
          'earn-d-block': activeMenu == 'transactions'
        })}>
          Transactions
        </div>
        <div id="game_contest" className={classnames('earn_tabcontent', {
          'earn-d-block': activeMenu == 'game-contest'
        })}>
          Game Contest
        </div>
        <div id="affiliate" className={classnames('earn_tabcontent', {
          'earn-d-block': activeMenu == 'affiliate'
        })}>
          Affiliate
        </div>
        <div id="currency" className={classnames('earn_tabcontent', {
          'earn-d-block': activeMenu == 'currency'
        })}>
          Currency
        </div>
      </div>
    </div>
  );
};

export default TabSect;
