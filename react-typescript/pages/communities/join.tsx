import Link from "next/link";
import React, { useState } from "react";
import classnames from "classnames";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const LatestPosts = dynamic(() => import("../../Component/onBoard/Community/LatestPosts"));
const Wiki = dynamic(() => import("../../Component/onBoard/Community/Wiki"));
const FAQ = dynamic(() => import("../../Component/onBoard/Community/faq"));
const Rules = dynamic(() => import("../../Component/onBoard/Community/rules"));
const AMDS = dynamic(() => import("../../Component/onBoard/Community/amds"));


interface BoardingJourProps { }

interface BoardingJourState { }


const BoardingJourCommunityJoin: React.FC = () => {
  const [communityTab, setCommunityTab] = useState("posts");


  const setCommunityTabHandler = (value: string) => {
    setCommunityTab(value);
  };


  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="enoch-community-header-banner mb-4">
            <img src="/images/community-img-2.png" className="img-fluid your-event-cover-img" alt="banner" />

            <div className="enoch-community-header-content">
              <h2>DeFi Signal</h2>

            </div>

          </div>
          <div className="enoch-community-deefi-block">
            <div className="enoch-community-deefi-block-lft">
              <div className="communityView-defi-panel">
                <div className="enoch-community-deefi-signal">
                  <div className="enoch-community-deefi-signal-lft">
                    <div className="community-deefi-logo mr-4"><img src="/images/community-img2.png" className="img-fluid" alt="defi" /></div>
                    <div>
                      <h3>DeFi Signal </h3>
                      <p>@defisignal</p>
                    </div>
                    <span className="enoch-community-deefi-editbtn"><img src="/images/communityEdit.png" className="img-fluid" alt="edit" /></span>

                  </div>
                  <div className="enoch-community-deefi-signal-right">
                    <ul className="community-deefi-signal-list">

                      <li>
                        <div className="comuni-defi-share" data-toggle="modal" data-target="#managenoti-Modal"><img src="/images/community-alert.png" className="img-fluid community-alert" alt="share" /><img src="/images/community-alert2.png" className="img-fluid community-alert-hovr" alt="share" /></div>
                      </li>
                      <li><button className="btn defi-join-btn">Join</button></li>

                    </ul>

                  </div>
                </div>
                <div className="communityView-tab">
                      <ul className="communityViewCatTab">
                        <li onClick={() => setCommunityTabHandler("posts")}
                        >
                          <button

                            className={classnames("communityViewlinks", {
                              'active': communityTab == "posts",
                            })}
                          >
                            Posts
                          </button>
                        </li>
                        <li
                          onClick={() => setCommunityTabHandler("predictions")}
                        >
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "predictions",
                            })}
                          >
                            Predictions
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("wiki")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "wiki",
                            })}
                          >
                            Wiki{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("faq")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "faq",
                            })}
                          >
                            FAQ{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("rules")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "rules",
                            })}
                          >
                            Rules{" "}
                          </button>
                        </li>
                        <li onClick={() => setCommunityTabHandler("amds")}>
                          <button
                            className={classnames("communityViewlinks", {
                              'active': communityTab == "amds",
                            })}
                          >
                            AMAs{" "}
                          </button>
                        </li>
                        <li>
                          <div className="communityView-dropbox">
                            <a
                              href="#"
                              id="communityView-dropbox-list"
                              className="communityView-box"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Discussions
                            </a>
                            <div
                              id="communityView-dropbox-list1"
                              className="dropdown-menu communityView-dropbox-listItems"
                            >
                              <ul>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <span className="communityView-span">
                      @defisignal
                      </span>
                    </div>

             
              </div>            
                {communityTab == "posts" && <LatestPosts />}
                {communityTab == "wiki" && <Wiki />}
                {communityTab == "faq" && <FAQ />}
                {communityTab == "rules" && <Rules />}
                {communityTab == "amds" && <AMDS />}
                 
            </div>
            <div className="enoch-community-deefi-block-right">

              <div className="enoch-manage-comm">
                <div className="enoch-manage-comm-hd">
                  <h2>About Community  </h2>
                  <div className="event-3dots dropdown">
                    <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/abtdots.png" alt="3dots" className="img-fluid" /></span>
                    <div className="dropdown-menu event-info-droplist right-0">
                      <ul>
                        <li>Add To Custom Feed</li>
                        <li>Add To Favorites</li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div className="ml-4 mr-4">
                  <div className="enoch-about-description">
                    The user interface (UI) is a critical part of any software product. When it’s done well, users don’t even notice it. When it’s done poorly, users can’t get past it to efficiently use a product. To increase the chances of success when creating user interfaces, most designers follow interface design principles. Interface design principles represent high-level concepts that are used to guide software design.
                  </div>
                  <div className="enoch-community-online">
                    <div className="enoch-community-online-lft">
                      <p>5</p>
                      <h4>Members</h4>
                    </div>
                    <div className="enoch-community-online-right">
                      <p>4</p>
                      <h4>Online</h4>
                    </div>

                  </div>
                  <div className="enoch-community-created">
                    Created Jul 28, 2021
                  </div>
                  <div className="community-manage-topic">
                    <h4>Community topics</h4>
                    <p>Add a Primary Topics <span className="ml-2"><img src="/images/manageInfo.png" className="img-fluid" alt="info" /></span></p>
                  </div>
                  <Link href="/post">
                  <button className="community-manage-post-btn text-white">
                    Create Post
                  </button>
                </Link>
                  <div className="community-failure">
                    <span>USER FLAIR PREVIEW</span>
                    <span><img src="/images/manageedit.png" className="img-fluid" alt="edit" /></span>
                  </div>
                </div>
              </div>
              <div className="enoch-manage-filterFlair">
                <h3>Filter by flair</h3>
                <ul>
                  <li className="flair-clr1 custm-mr-16">Trailer</li>
                  <li className="flair-clr2">Discussion Thread</li>
                  <li className="flair-clr3 custm-mr-16">Discussion</li>
                  <li className="flair-clr4">Cosplay</li>
                  <li className="flair-clr2">*On the possibility joining the MC</li>
                </ul>
                <p><a href="#">See more</a></p>
              </div>
              <div className="enoch-manage-signalRules">
                <h3>@defisignal Rules</h3>
                <div className="signalRules-accordion-block">
                  <div className="accordion" id="accordionrules">
                    <div className="accordion-item">
                      <div className="signalRules-head collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        1. Do Not Post Spoilers in Titles or Comments
                      </div>
                      <div id="collapseOne" className="collapse signalRules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="signalRules-collapse-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                          <p className="mb-0">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="signalRules-head collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        2. Be Civil
                      </div>
                      <div id="collapseTwo" className="collapse signalRules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="signalRules-collapse-body">

                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="signalRules-head collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        3. No Reports
                      </div>
                      <div id="collapseThree" className="collapse signalRules-collapse-block" aria-labelledby="heading" data-bs-parent="#accordionrules">
                        <div className="signalRules-collapse-body">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="communityview-moderators">
                <h3>Moderators</h3>
                <div className="moderators-btn-block"><button className="communityview-moderators-btn">Message to mods</button></div>
                <ul>
                  <li>@Hulk 66</li>
                  <li>@Tim49</li>
                  <li>@Hello01</li>
                </ul>
                <p><a href="#">View all moderators</a></p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}

export default BoardingJourCommunityJoin;
