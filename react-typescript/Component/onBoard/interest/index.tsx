import React, { useState } from "react";
import classnames from "classnames";
interface BoardingIntProfileProps {}

interface BoardingIntProfileState {
  openINT: boolean;
  show: boolean;
  show1: boolean;
  show2: boolean;
}

class BoardingIntProfile extends React.Component<
  BoardingIntProfileProps,
  BoardingIntProfileState
> {
  constructor(props: BoardingIntProfileProps) {
    super(props);
    this.state = {
      openINT: false,

      show: true,
      show1: false,
      show2: false,
    };
  }

  render() {
    return (
      <div className="dApp-home-profile-collaps-content">
        <button
          className={classnames("dApp-home-profile-collapsible", {
            active: this.state.openINT,
          })}
          onClick={() => this.setState({ openINT: !this.state.openINT })}
        >
          <div className="dApp-home-profile-collaps-btn">
            <label>Interest </label>
          </div>
        </button>
        <div
          className={classnames("roles_collaps", {
            "d-block": this.state.openINT,
          })}
        >
          <div className="dApp-Interest-tab-sect">
            <div className="dApp-Interest-tabs">
              <div className="dApp-Interest-tab-heading tab">
                <button
                  onClick={() => {
                    this.setState({
                      show: true,
                      show1: false,
                      show2: false,
                    });
                  }}
                  id="Interest_defaultOpen"
                  className={classnames(
                    "Interest_tablinks dApp-Interest_tablinks",
                    {
                      active: this.state.show,
                    }
                  )}
                >
                  Infulencers<div className="dApp-Interest-tab-underline"></div>
                </button>

                <button
                  onClick={() => {
                    this.setState({
                      show: false,
                      show1: true,
                      show2: false,
                    });
                  }}
                  className={classnames(
                    "Interest_tablinks dApp-Interest_tablinks",
                    {
                      active: this.state.show1,
                    }
                  )}
                >
                  Companies<div className="dApp-Interest-tab-underline"></div>
                </button>

                <button
                  onClick={() => {
                    this.setState({
                      show: false,
                      show1: false,
                      show2: true,
                    });
                  }}
                  className={classnames(
                    "Interest_tablinks dApp-Interest_tablinks ml-0",
                    {
                      active: this.state.show2,
                    }
                  )}
                >
                  Communities<div className="dApp-Interest-tab-underline"></div>
                </button>
              </div>

              <div
                id="Infulencers"
                className={classnames("Interest_tabcontent", {
                  "d-none": this.state.show,
                  "d-block": this.state.show,
                })}
              >
                <ul>
                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/influence-pic1.png"
                          alt="user img"
                          className="img-fluid"
                        />
                        <div className="Interest_tabcontent-list-img-act">
                          <img
                            src="/images/follow-green.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>@Zachking</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/followPlus.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Follow</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/influence-pic2.png"
                          alt="user img"
                          className="img-fluid"
                        />
                        <div className="Interest_tabcontent-list-img-act">
                          <img
                            src="/images/follow-green.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>@Addisonrae</h1>

                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/followPlus.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Follow</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/influence-pic3.png"
                          alt="user img"
                          className="img-fluid"
                        />
                        <div className="Interest_tabcontent-list-img-act">
                          <img
                            src="/images/follow-green.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>@Hudakattan</h1>

                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/followPlus.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Follow</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/influence-pic4.png"
                          alt="user img"
                          className="img-fluid"
                        />
                        <div className="Interest_tabcontent-list-img-act">
                          <img
                            src="/images/follow-green.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>@Khabylame</h1>

                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/followPlus.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Follow</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/influence-pic5.png"
                          alt="user img"
                          className="img-fluid"
                        />
                        <div className="Interest_tabcontent-list-img-act">
                          <img
                            src="/images/follow-green.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>@KaylaItsines</h1>

                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/followPlus.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Follow</a>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                id="Companies"
                className={classnames("Interest_tabcontent", {
                  "d-none": this.state.show1,
                  "d-block": this.state.show1,
                })}
              >
                <ul>
                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/compound.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Compound</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/aave.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Aave</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/kava.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Kava</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/balancer.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Balancer</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/kyberswap.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Kyberswap</h1>
                        <h3>912 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                id="Tribes"
                className={classnames("Interest_tabcontent", {
                  "d-none": this.state.show2,
                  "d-block": this.state.show2,
                })}
              >
                <ul>
                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img no-border">
                        <img
                          src="/images/ethereum-dApps.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Ethereum Development and DApps</h1>
                        <h3>2467537 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/dApp-ethereum.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Ethereum</h1>
                        <h3>2467537 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/citizenFinance.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Citizen Finance</h1>
                        <h3>2467537 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/spooky-swap.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>Spooky Swap</h1>
                        <h3>2467537 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="Interest_tabcontent-list-left">
                      <div className="Interest_tabcontent-list-img">
                        <img
                          src="/images/Defl-Pulse.png"
                          alt="user img"
                          className="img-fluid"
                        />
                      </div>

                      <div className="Interest_tabcontent-list-text">
                        <h1>DefI Pulse</h1>
                        <h3>2467537 followers</h3>
                      </div>
                    </div>
                    <div className="Interest_tabcontent-list-Following-btn">
                      <button>
                        <span>
                          <img
                            src="/images/dApp-Checkmark.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </span>
                        <a href="#">Following</a>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardingIntProfile;
