import React, { useState } from "react";
import shareModal from "../../home-post/HomeModals/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const CompanyPostSection: React.FC = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  return (
    <>
      <div className="home-post-mid">
        <div className="dApp-home-profile-sect2">
          <div className="dApp-status-block mb-16 pt-0 pb-0">
            <div className="home-post-share-block">
              <div className="home-post-share-lft">
                <img
                  src="/images/company-user.png"
                  alt="DP"
                  className="img-fluid"
                />
              </div>
              <div className="home-post-share-right">
                <div className="home-post-input">Share</div>
                <ul>
                  <li>
                    <span>
                      <img
                        src="/images/post-Image.png"
                        className="img-fluid"
                        alt="Photo"
                      />
                    </span>
                    Photo
                  </li>
                  <li>
                    <span>
                      <img
                        src="/images/post-Video.png"
                        className="img-fluid"
                        alt="Video"
                      />
                    </span>
                    Video
                  </li>
                  <li>
                    <span>
                      <img
                        src="/images/post-Event.png"
                        className="img-fluid"
                        alt="Event"
                      />
                    </span>
                    Event
                  </li>
                  <li>
                    <span>
                      <img
                        src="/images/post-Article.png"
                        className="img-fluid"
                        alt="Write Article"
                      />
                    </span>
                    Write Article
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dApp-status-block mb-16">
            <div className="dApp-status-heading">
              <div className="dApp-status-heading-profile-pic">
                <img
                  src="/images/Scompany-user.png"
                  alt="DP"
                  className="img-fluid"
                />
              </div>
              <div className="dApp-status-heading-text">
                <h1>88 mph </h1>
                <h2>912 followers</h2>
                <h3>
                  <span>
                    <img
                      src="/images/Clock.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  1h.{" "}
                </h3>
              </div>
              <div className="dApp-post-3dots dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/images/dApp-ThreeDots.png"
                    alt="3dots"
                    className="img-fluid post-threedots"
                  />
                  <img
                    src="/images/ThreeDots-active.png"
                    alt="3dots"
                    className="img-fluid post-threedots-active"
                  />
                </a>
                <div className="dropdown-menu home-drop-postStatus">
                  <ul>
                    <li className="">-</li>
                    <li className="">-</li>
                    <li className="">-</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dApp-status-content-sect">
              <img
                src="/images/company-post-img1.png"
                alt="image"
                className="img-fluid"
              />
            </div>

            <div className="dApp-status-like-comment-share-sect">
              <ul>
                <li>
                  <div className="home-post-usr-reaction-wrap">
                    <div className="home-post-usr-reaction">
                      <span>
                        <img
                          src="/images/reaction1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction2.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction3.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction4.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction5.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction6.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <span>
                    <img
                      src="/images/like-icon.png"
                      alt="icon"
                      className="img-fluid post-like"
                    />
                    <img
                      src="/images/like-hov.png"
                      alt="icon"
                      className="img-fluid post-like-hov"
                    />
                  </span>
                  <a href="#">Like</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dislike.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Dislike</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/gift.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>{" "}
                  <a href="#">Gift</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/comment-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Comment</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dApp-Share.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Share</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/Paper-Plane.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Send</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dApp-status-block mb-16">
            <div className="dApp-status-heading">
              <div className="dApp-status-heading-profile-pic">
                <img
                  src="/images/company-user.png"
                  alt="DP"
                  className="img-fluid"
                />
              </div>
              <div className="dApp-status-heading-text">
                <h1>88 mph</h1>
                <h2>912 followers</h2>
                <h3>
                  <span>
                    <img
                      src="/images/Clock.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  1h.
                </h3>
              </div>
              <div className="dApp-post-3dots dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/images/dApp-ThreeDots.png"
                    alt="3dots"
                    className="img-fluid post-threedots"
                  />
                  <img
                    src="/images/ThreeDots-active.png"
                    alt="3dots"
                    className="img-fluid post-threedots-active"
                  />
                </a>
                <div className="dropdown-menu home-drop-postStatus">
                  <ul>
                    <li className="">-</li>
                    <li className="">-</li>
                    <li className="">-</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dApp-status-caption-sect">
              <p>
                Our interactive session on "Happiness at the Workplace" with the
                renowned communication speaker Mukund Trivedy was an eye-opener
                on various challenges faced by employees across the country. …
                <a href="#">see more</a>
              </p>
            </div>

            <div className="dApp-status-like-comment-share-sect dapp-home-post-react">
              <ul>
                <li>
                  <div className="home-post-usr-reaction-wrap">
                    <div className="home-post-usr-reaction">
                      <span>
                        <img
                          src="/images/reaction1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction2.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction3.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction4.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction5.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction6.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <span>
                    <img
                      src="/images/like-icon.png"
                      alt="icon"
                      className="img-fluid post-like"
                    />
                    <img
                      src="/images/like-hov.png"
                      alt="icon"
                      className="img-fluid post-like-hov"
                    />
                  </span>
                  <a href="#">Like</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dislike.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Dislike</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/gift.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>{" "}
                  <a href="#">Gift</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/comment-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Comment</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dApp-Share.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Share</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/Paper-Plane.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Send</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dApp-status-block">
            <div className="dApp-status-heading">
              <div className="dApp-status-heading-profile-pic">
                <img
                  src="/images/Scompany-user.png"
                  alt="DP"
                  className="img-fluid"
                />
              </div>
              <div className="dApp-status-heading-text">
                <h1>88 mph </h1>
                <h2>912 followers</h2>
                <h3>
                  <span>
                    <img
                      src="/images/Clock.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  1h.{" "}
                </h3>
              </div>
              <div className="dApp-post-3dots dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/images/dApp-ThreeDots.png"
                    alt="3dots"
                    className="img-fluid post-threedots"
                  />
                  <img
                    src="/images/ThreeDots-active.png"
                    alt="3dots"
                    className="img-fluid post-threedots-active"
                  />
                </a>
                <div className="dropdown-menu home-drop-postStatus">
                  <ul>
                    <li className="">-</li>
                    <li className="">-</li>
                    <li className="">-</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dApp-status-content-sect">
              <img
                src="/images/company-post-img2.png"
                alt="image"
                className="img-fluid"
              />
              {/* <!-- <div className="vdo-play-btn"><button><img src="/images/company-vdoBtn.png" className="img-fluid" alt="play btn"/></button></div> --> */}
            </div>
            <div className="dApp-status-react-sect">
              <ul className="daap-homepost-users-view">
                <li className="dApp-status-react-icon">
                  <img
                    src="/images/like.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <img
                    src="/images/love.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <img
                    src="/images/heart.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <img
                    src="/images/clap.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <img
                    src="/images/light.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <img src="/images/wow.png" alt="icon" className="img-fluid" />
                  <span>15,422</span>
                </li>
                <li>
                  <span>
                    <img
                      src="/images/user-view-icon1.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>{" "}
                  475 comments
                </li>
                <li>
                  <span>
                    {" "}
                    <img
                      src="/images/user-view-icon2.png"
                      alt="icon"
                      className="img-fluid"
                    />{" "}
                  </span>
                  676,614 Views
                </li>
                <li>
                  <span>
                    <img
                      src="/images/user-view-icon4.png"
                      alt="icon"
                      className="img-fluid"
                    />{" "}
                  </span>
                  22
                </li>
                <li className="mr-0">
                  <span>
                    <img
                      src="/images/user-view-icon3.png"
                      alt="icon"
                      className="img-fluid"
                    />{" "}
                  </span>
                  3
                </li>
              </ul>
            </div>
            <div className="dApp-status-like-comment-share-sect">
              <ul>
                <li>
                  <div className="home-post-usr-reaction-wrap">
                    <div className="home-post-usr-reaction">
                      <span>
                        <img
                          src="/images/reaction1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction2.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction3.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction4.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction5.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/reaction6.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <span>
                    <img
                      src="/images/like-icon.png"
                      alt="icon"
                      className="img-fluid post-like"
                    />
                    <img
                      src="/images/like-hov.png"
                      alt="icon"
                      className="img-fluid post-like-hov"
                    />
                  </span>
                  <a href="#">Like</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dislike.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Dislike</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/gift.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>{" "}
                  <a href="#">Gift</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/comment-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Comment</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/dApp-Share.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Share</a>
                </li>

                <li>
                  <span>
                    <img
                      src="/images/Paper-Plane.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <a href="#">Send</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPostSection;
