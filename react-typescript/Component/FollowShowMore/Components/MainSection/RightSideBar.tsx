import React, { useEffect, useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";
import { actionCreators, State } from "../../../../state/index";

const RightSideBar = () => {

  const dispatch = useDispatch();

  const { showCreateCommunityModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { showEditProfileModal, userProfile } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const showCreateCommunityModalValue = useSelector(
    (state: State) => state.showCreateCommunityModal
  );

  const showEditProfileModalValue = useSelector(
    (state: State) => state.showEditProfileModal
  );

  useEffect(() => {
    return;
  }, showCreateCommunityModalValue);



  return (
    <>
      <div className="home-post-right">
        <div className="right-ovelay dApp-overlay"></div>
        {/* <!---
			            <div className="Complete-profile-progress-sect">
			                <div className="Complete-profile-DP">
			                    <img src="/images/onboard-user-pi2.png" alt="User-DP" className="img-fluid" />
			                </div>
			                <div className="Complete-profile-progress-userName">
			                  
			                    <div className="Complete-profile-progress-Bar">
			                        <div className="Complete-profile-progress-line"></div>
			                    </div>
			                    <p>60% Complete</p>
			                </div>
			                <div className="onboarding-edit-prof-link"><a href="#">Edit  Public Profile & URL</a></div>			              
			                <p className="onboarding-edit-prof-bottm">A Completed profile is 71% more likely to be views by a recruiter.</p>
			            </div>
			            --> */}
        <div className="dApp-What-happening-sect">
          <div className="dApp-What-happeningheadings">
            <h1>What’s happening</h1>
          </div>
          <div className="dApp-What-happening-news-sect">
            <div className="dApp-What-happening-news">
              <div className="dApp-What-happening-news-text">
                <h2>
                  News . <span>2 minutes ago</span>
                </h2>
                <p>
                  Looking at the claim that discourse around ‘White Previlege’
                  can hamper white working className students.
                </p>
              </div>
              <div className="dApp-What-happening-news-photo">
                <img
                  src="/images/dApp-news-pic-1.png"
                  alt="photo"
                  className="img-fluid"
                />
              </div>
            </div>
            <h6>
              Treanding with <a href="#">#WhitePrevilege</a>
            </h6>
          </div>

          <div className="dApp-Trending-United-Kingdom-sect">
            <h1>Trending in United Kingdom</h1>
            <a href="#">#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className="dApp-Trending-United-Kingdom-3dots">
              <img
                src="/images/dApp-ThreeDots.png"
                alt="3Dots"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="dApp-Trending-United-Kingdom-sect">
            <h1>Trending in United Kingdom</h1>
            <a href="#">#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className="dApp-Trending-United-Kingdom-3dots">
              <img
                src="/images/dApp-ThreeDots.png"
                alt="3Dots"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="dApp-Who-seemore">
            <a href="#">Show more</a>
          </div>
        </div>

        {/* <!-- <div className="dApp-Who-to-follow-sect">
			                <div className="dApp-Who-to-follow-headings">
			                    <h1>You might like</h1>
			                </div>
			                <div className="dApp-Who-to-follow">
			                    <div className="dApp-Who-to-follow-content">
			                        <div className="dApp-Who-to-follow-dp">
			                            <img src="/images/userAvatar4.png" alt="photo" className="img-fluid"/>
										
			                        </div>
			                        <ul>
			                            <li className="profile-name">@djirridiant </li>			                            
			                            <li className="Promoted"><span><img src="/images/External-Link.png" alt="icon" className="img-fluid"/></span>Promoted</li>
			                        </ul>
			                    </div>
			                    <div className="dApp-Who-to-follow-btn">
			                        <button>Follow</button>
			                    </div>
			                </div>
			                
			                <div className="dApp-Who-to-follow">
			                    <div className="dApp-Who-to-follow-content">
			                        <div className="dApp-Who-to-follow-dp">
			                            <img src="/images/userAvatar2.png" alt="photo" className="img-fluid">
										<span className="dApp-follow-dp-icon"><img src="/images/follow-icon.png" alt="photo" className="img-fluid"></span>
			                        </div>
			                        <ul>
			                            <li className="profile-name">@CurtisDaws</li>
			                           
			                        </ul>
			                    </div>
			                    <div className="dApp-Who-to-follow-btn">
			                        <button>Follow</button>
			                    </div>
			                </div>
			                
			                <div className="dApp-Who-to-follow mb-4">
			                    <div className="dApp-Who-to-follow-content">
			                        <div className="dApp-Who-to-follow-dp">
			                            <img src="/images/userAvatar5.png" alt="photo" className="img-fluid">
			                        </div>
			                        <ul>
			                            <li className="profile-name">@JaniceHum</li>
			                           
			                        </ul>
			                    </div>
			                    <div className="dApp-Who-to-follow-btn">
			                        <button>Follow</button>
			                    </div>
			                </div>
			                
			                <div className="dApp-Who-seemore dApp-Who-to-follow-seemore"><a href="#">Show more</a></div>
			            </div> --> */}
        <div className="dApp-Who-quickLink">
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="/events/create">Events</a>
            </li>
            <li onClick={() => showCreateCommunityModal(true)}
            >
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Livezone</a>
            </li>
            <li>
              <a href="#">Spheres</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default withApollo(RightSideBar, { getDataFromTree });
