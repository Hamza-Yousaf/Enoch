import React, { useState } from "react";
import router from "next/router";
import Link from "next/link";
import classnames from "classnames";
import { setDate } from "date-fns";

interface Props {
  isUserCommunity: any;
  communityId: string;
  success: boolean;
  communityName: string;
  communityDescription: string;
}

const CommunityPageSideBar: React.FC<Props> = ({
  isUserCommunity,
  communityId,
  success,
  communityName,
  communityDescription,
}) => {
  const [toggleDes, setToggleDes] = useState(false);
  const [des, setDes] = useState("");

  return (
    <>
      {isUserCommunity === "true" && (
        <div className="enoch-community-deefi-block-right">
          <div className="enoch-manage-comm">
            <h3>Manage Community </h3>

            <div className="ml-4 mr-4">
              <div
                className={classnames("enoch-manage-description", {
                  "description-border": toggleDes,
                })}
              >
                {toggleDes ? (
                  <div className="manage-description-write">
                    <textarea
                      className="scroll"
                      placeholder="Tell us about your community"
                      name="des"
                      maxLength={500}
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    ></textarea>
                    <div>
                      <div className="manage-description-btngrp">
                        500 character remaining
                        <span onClick={() => {
                          setToggleDes(false), setDes('')
                        }}>
                          <button className="manage-description-cancel">
                            Cancel
                          </button>
                        </span>
                        <button
                          className="manage-description-save"
                          onClick={() => setToggleDes(false)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="manage-description-txt" onClick={() => setToggleDes(true)}>
                    Add description
                  </span>
                )}
                {toggleDes == false && des != "" && (
                  <div className="manage-description-write">
                    <div className="descriptionscroll">
                      {des}
                      <span className="manage-edit-txt" onClick={() => setToggleDes(true)}>
                        <img
                          src="/images/manageedit.png"
                          className="img-fluid"
                          alt="edit"
                        />
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="enoch-community-online">
                <div className="enoch-community-online-lft">
                  <p>1</p>
                  <h4>Members</h4>
                </div>
                <div className="enoch-community-online-right">
                  <p>2</p>
                  <h4>Online</h4>
                </div>
              </div>
              <div className="enoch-community-created">
                Created Jul 28, 2021
              </div>
              <div className="community-manage-topic">
                <h4>Community topics</h4>
                <p>
                  Add a Primary Topics{" "}
                  <span className="ml-2">
                    <img
                      src="/images/manageInfo.png"
                      className="img-fluid"
                      alt="info"
                    />
                  </span>
                </p>
              </div>
              <div>
                <Link href="/post">
                  <button className="community-manage-post-btn text-white">
                    Create Post
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="enoch-manage-comm-block2">
            <h3>1 Member</h3>
            <p>Including Hitman99 and 104 other connections</p>
            <div className="enoch-manage-member">
              <img
                src="/images/user-ReginaCooper.png"
                className="img-fluid"
                alt="user-ReginaCooper"
              />
            </div>
            <div>
              <button className="community-manage-post-btn text-white">
                Invite Connections
              </button>
            </div>
            <h4>Manage</h4>
          </div>
          <div className="enoch-manage-comm-block3">
            <h3>Moderator</h3>
            <div className="manage-moderator">
              <div className="manage-moderator-lft">
                <img
                  src="/images/speaker1.png"
                  className="img-fluid"
                  alt="user"
                />
              </div>
              <div className="manage-moderator-right">
                <h4>@Leslymariax`</h4>
                <p>New NFT lady, Crypto Enthusiast, Lifelong Otaku </p>
              </div>
            </div>
            <h5>Manage</h5>
          </div>
          <div className="enoch-community-addSect1">
            {/* <!-- <p className="mb-2">Ad by <span className="ml-1"><img src="/images/managelogoo.png" className="img-fluid" alt="icon"></span></p> --> */}
            <div className="enoch-community-levelup">
              <img
                src="/images/Banner-Side1.png"
                className="img-fluid comm-banner-img"
                alt="banner"
              />
              <div className="community-levelup-block">
                <p className="community-levelup-txt1">
                  upgrade to VIP Pass to <br />
                  Unlock NFT prizes
                </p>
                <p className="community-levelup-txt2">
                  VIP level bONUS PrizeS{" "}
                </p>
                <p className="community-levelup-txt3">
                  UP TO 20,000 <span>amber COINS </span>
                </p>
                <div>
                  <button className="community-levelup-upgrade-btn">
                    UPGRADE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="enoch-community-addSect2">
            <p className="mb-2">
              Ad by{" "}
              <span className="ml-1">
                <img
                  src="/images/managelogoo.png"
                  className="img-fluid"
                  alt="icon"
                />
              </span>
            </p>
            <div className="enoch-community-addSect2-inner">
              <div className="enoch-community-addSect2-inner-block">
                <h3>Top GAMING Communities</h3>
                <div>
                  <button className="btn comm-explorenw-btn">
                    EXLPORE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUserCommunity === "false" && (
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
              <div><button className="community-manage-post-btn text-white">Create Post</button></div>
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
          <div className="enoch-community-addSect1">
						
						<div className="enoch-community-levelup">
							<img src="/images/Banner-Side1.png" className="img-fluid comm-banner-img" alt="banner"/>
							<div className="community-levelup-block">
								<p className="community-levelup-txt1">upgrade to VIP Pass to <br/>Unlock NFT prizes</p>
								<p className="community-levelup-txt2">VIP level bONUS PrizeS </p>
								<p className="community-levelup-txt3">UP TO 20,000 <span>amber COINS </span></p>
								<div><button className="community-levelup-upgrade-btn">UPGRADE</button></div>
							</div>
						</div>
					
					</div>
					<div className="enoch-community-addSect2">
						
						<div className="enoch-community-addSect2-inner">
							<div className="enoch-community-addSect2-inner-block">
								<h3>Top GAMING Communities</h3>
								<div><button className="btn comm-explorenw-btn">EXLPORE NOW</button></div>
							</div>
						</div>
						
					</div>
        </div>
      )}
    </>
  );
};

export default CommunityPageSideBar;
