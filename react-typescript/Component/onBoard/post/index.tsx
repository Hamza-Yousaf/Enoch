import React, { useState } from 'react'

const BoardingPost: React.FC = () => {
  return (
    <>
      <div id="Posts" className="tabcontent">
        <div className="dApp-status-block">
          <div className="dApp-status-heading">
            <div className="dApp-status-heading-profile-pic">
              <img src="/images/userAvatar1.png" alt="DP" className="img-fluid" />
            </div>
            <div className="dApp-status-heading-text">
              <h1>@Hulk66</h1>
              <h2>3 followers</h2>
              <h3><span><img src="/images/Clock.png" alt="icon" className="img-fluid" /></span>July 15</h3>
            </div>
            <div className="dApp-post-3dots dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots" /><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots-active" /></a>
              <div className="dropdown-menu home-drop-postStatus">
                <ul>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/post-save.png" alt="save" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Save</h3>
                          <p>Save for later</p></div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/copy.png" alt="copy" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h4>Copy link to post</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/report.png" alt="report" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Report this post</h3>
                          <p>This post is offensive or the account is hacked</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dApp-status-caption-sect">
            <p>Our interactive session on "Happiness at the Workplace" with the renowned communication speaker Mukund Trivedy was an eye-opener on various challenges faced by employees across the country. …<a href="#">see more</a></p>
          </div>

          <div className="dApp-status-react-sect">
            <ul className="daap-homepost-users-view">
              <li className="dApp-status-react-icon">
                <img src="/images/like.png" alt="icon" className="img-fluid" />
                <img src="/images/love.png" alt="icon" className="img-fluid" />
                <img src="/images/heart.png" alt="icon" className="img-fluid" />
                <img src="/images/clap.png" alt="icon" className="img-fluid" />
                <img src="/images/light.png" alt="icon" className="img-fluid" />
                <img src="/images/wow.png" alt="icon" className="img-fluid" />
                <span data-toggle="modal" data-target="#reaction-modal">15,422</span>
              </li>
              <li><span><img src="/images/user-view-icon1.png" alt="icon" className="img-fluid" /></span> 475 comments</li>
              <li><span> <img src="/images/user-view-icon2.png" alt="icon" className="img-fluid" /> </span>676,614 Views</li>
              <li><span><img src="/images/user-view-icon4.png" alt="icon" className="img-fluid" /> </span>$22</li>
              <li className="mr-0"><span><img src="/images/user-view-icon3.png" alt="icon" className="img-fluid" /> </span>$3</li>

            </ul>
          </div>
          <div className="user-reaction-modal-block">
            <div id="reaction-modal" className="modal reaction-modal-popup in">
              <div className="modal-dialog">

                {/* <!-- Modal content--> */}
                <div className="modal-content user-reaction-modal-content">
                  <span className="close"><img src="/images/hCross.png" alt="close" className="img-fluid" data-dismiss="modal" /></span>
                  <h3>Reactions </h3>
                  <div className="modal-body user-reaction-modal-body">
                    <div className="user-reaction-modal-block-list">
                      <ul>
                        <li>15,422</li>
                        <li><span><img src="/images/reaction1.png" alt="icon" className="img-fluid" /></span>10k</li>
                        <li><span><img src="/images/reaction2.png" alt="icon" className="img-fluid" /></span>2k</li>
                        <li><span><img src="/images/reaction3.png" alt="icon" className="img-fluid" /></span>1k</li>
                        <li><span><img src="/images/reaction4.png" alt="icon" className="img-fluid" /></span>800</li>
                        <li><span><img src="/images/reaction5.png" alt="icon" className="img-fluid" /></span>1.2k</li>
                        <li><span><img src="/images/reaction6.png" alt="icon" className="img-fluid" /></span>422</li>
                      </ul>
                    </div>
                    <div className="user-reaction-content-list">
                      <ul>
                        <li>
                          <span><img src="/images/Touchstone.png" alt="Touchstone" className="img-fluid" /></span>
                          <div>
                            <h4>@Touchstone . 1</h4>
                            <p>UX Director & Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                          </div>
                        </li>
                        <li>
                          <span><img src="/images/Zappos.png" alt="Zappos" className="img-fluid" /></span>
                          <div>
                            <h4>@Zappos . 1</h4>
                            <p>UX Director & Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                          </div>
                        </li>
                        <li>
                          <span><img src="/images/Zivasa.png" alt="Zivasa" className="img-fluid" /></span>
                          <div>
                            <h4>@Zivasa . 1</h4>
                            <p>UX Director & Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                          </div>
                        </li>
                        <li>
                          <span><img src="/images/comm-usr-img5.png" alt="Savasana" className="img-fluid" /></span>
                          <div>
                            <h4>@Savasana . 1</h4>
                            <p>UX Director & Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                          </div>
                        </li>
                        <li>
                          <span><img src="/images/Vivocoo.png" alt="Vivocoo" className="img-fluid" /></span>
                          <div>
                            <h4>@Vivocoo . 1</h4>
                            <p>UX Director & Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="dApp-status-like-comment-share-sect">
            <ul>
              <li>
                <div className="home-post-usr-reaction-wrap">
                  <div className="home-post-usr-reaction">
                    <span><img src="/images/reaction1.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction2.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction3.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction4.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction5.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction6.png" alt="icon" className="img-fluid" /></span>
                  </div>
                </div>
                <span><img src="/images/like-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
              </li>

              <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid" /></span><a href="#">Dislike</a></li>

              <li><span><img src="/images/gift.png" alt="icon" className="img-fluid" /></span> <a href="#">Gift</a></li>

              <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid" /></span><a href="#">Comment</a></li>

              <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid" /></span><a href="#">Share</a></li>

              <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid" /></span><a href="#">Send</a></li>

            </ul>
          </div>

        </div>

        <div className="dApp-status-block">
          <div className="dApp-status-heading">
            <div className="dApp-status-heading-profile-pic">
              <img src="/images/userAvatar1.png" alt="DP" className="img-fluid" />
            </div>
            <div className="dApp-status-heading-text">
              <h1>Robert Rose</h1>
              <h2>3 followers</h2>
              <h3><span><img src="/images/Clock.png" alt="icon" className="img-fluid" /></span>July 15 </h3>
            </div>
            <div className="dApp-post-3dots dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots" /><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots-active" /></a>
              <div className="dropdown-menu home-drop-postStatus">
                <ul>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/post-save.png" alt="save" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Save</h3>
                          <p>Save for later</p></div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/copy.png" alt="copy" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h4>Copy link to post</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/report.png" alt="report" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Report this post</h3>
                          <p>This post is offensive or the account is hacked</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dApp-status-content-sect">
            <img src="/images/onboard-post-img2.png" alt="image" className="img-fluid" />
          </div>

          <div className="dApp-status-react-sect">
            <ul className="daap-homepost-users-view">
              <li className="dApp-status-react-icon">
                <img src="/images/like.png" alt="icon" className="img-fluid" />
                <img src="/images/love.png" alt="icon" className="img-fluid" />
                <img src="/images/heart.png" alt="icon" className="img-fluid" />
                <img src="/images/clap.png" alt="icon" className="img-fluid" />
                <img src="/images/light.png" alt="icon" className="img-fluid" />
                <img src="/images/wow.png" alt="icon" className="img-fluid" />
                <span data-toggle="modal" data-target="#reaction-modal">15,422</span>
              </li>
              <li><span><img src="/images/user-view-icon1.png" alt="icon" className="img-fluid" /></span> 475 comments</li>
              <li><span> <img src="/images/user-view-icon2.png" alt="icon" className="img-fluid" /> </span>676,614 Views</li>
              <li><span><img src="/images/user-view-icon4.png" alt="icon" className="img-fluid" /> </span>$22</li>
              <li className="mr-0"><span><img src="/images/user-view-icon3.png" alt="icon" className="img-fluid" /> </span>$3</li>

            </ul>
          </div>

          <div className="dApp-status-like-comment-share-sect">
            <ul>
              <li>
                <div className="home-post-usr-reaction-wrap">
                  <div className="home-post-usr-reaction">
                    <span><img src="/images/reaction1.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction2.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction3.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction4.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction5.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction6.png" alt="icon" className="img-fluid" /></span>
                  </div>
                </div>
                <span><img src="/images/like-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
              </li>

              <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid" /></span><a href="#">Dislike</a></li>

              <li><span><img src="/images/gift.png" alt="icon" className="img-fluid" /></span> <a href="#">Gift</a></li>

              <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid" /></span><a href="#">Comment</a></li>

              <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid" /></span><a href="#">Share</a></li>

              <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid" /></span><a href="#">Send</a></li>

            </ul>
          </div>


        </div>

        <div className="dApp-status-block">
          <div className="dApp-status-heading">
            <div className="dApp-status-heading-profile-pic">
              <img src="/images/userAvatar1.png" alt="DP" className="img-fluid" />
            </div>
            <div className="dApp-status-heading-text">
              <h1>@Hulk66</h1>
              <h2>3 followers</h2>
              <h3><span><img src="/images/Clock.png" alt="icon" className="img-fluid" /></span>July 15</h3>
            </div>
            <div className="dApp-post-3dots dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots" /><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots-active" /></a>
              <div className="dropdown-menu home-drop-postStatus">
                <ul>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/post-save.png" alt="save" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Save</h3>
                          <p>Save for later</p></div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/copy.png" alt="copy" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h4>Copy link to post</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/report.png" alt="report" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Report this post</h3>
                          <p>This post is offensive or the account is hacked</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dApp-status-caption-sect">
            <p>Our interactive session on "Happiness at the Workplace" with the renowned communication speaker Mukund Trivedy.</p>
          </div>

          <div className="dApp-status-react-sect">
            <ul className="daap-homepost-users-view">
              <li className="dApp-status-react-icon">
                <img src="/images/like.png" alt="icon" className="img-fluid" />
                <img src="/images/love.png" alt="icon" className="img-fluid" />
                <img src="/images/heart.png" alt="icon" className="img-fluid" />
                <img src="/images/clap.png" alt="icon" className="img-fluid" />
                <img src="/images/light.png" alt="icon" className="img-fluid" />
                <img src="/images/wow.png" alt="icon" className="img-fluid" />
                <span data-toggle="modal" data-target="#reaction-modal">15,422</span>
              </li>
              <li><span><img src="/images/user-view-icon1.png" alt="icon" className="img-fluid" /></span> 475 comments</li>
              <li><span> <img src="/images/user-view-icon2.png" alt="icon" className="img-fluid" /> </span>676,614 Views</li>
              <li><span><img src="/images/user-view-icon4.png" alt="icon" className="img-fluid" /> </span>$22</li>
              <li className="mr-0"><span><img src="/images/user-view-icon3.png" alt="icon" className="img-fluid" /> </span>$3</li>

            </ul>
          </div>

          <div className="dApp-status-like-comment-share-sect">
            <ul>
              <li>
                <div className="home-post-usr-reaction-wrap">
                  <div className="home-post-usr-reaction">
                    <span><img src="/images/reaction1.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction2.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction3.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction4.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction5.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction6.png" alt="icon" className="img-fluid" /></span>
                  </div>
                </div>
                <span><img src="/images/like-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
              </li>

              <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid" /></span><a href="#">Dislike</a></li>

              <li><span><img src="/images/gift.png" alt="icon" className="img-fluid" /></span> <a href="#">Gift</a></li>

              <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid" /></span><a href="#">Comment</a></li>

              <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid" /></span><a href="#">Share</a></li>

              <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid" /></span><a href="#">Send</a></li>

            </ul>
          </div>


        </div>

        <div className="dApp-status-block no-border">
          <div className="dApp-status-heading">
            <div className="dApp-status-heading-profile-pic">
              <img src="/images/userAvatar1.png" alt="DP" className="img-fluid" />
            </div>
            <div className="dApp-status-heading-text">
              <h1>@Hulk66</h1>
              <h2>3 followers</h2>
              <h3><span><img src="/images/Clock.png" alt="icon" className="img-fluid" /></span>July 15 </h3>
            </div>
            <div className="dApp-post-3dots dropdown">
              <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots" /><img src="/images/dApp-ThreeDots.png" alt="3dots" className="img-fluid post-threedots-active" /></a>
              <div className="dropdown-menu home-drop-postStatus">
                <ul>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/post-save.png" alt="save" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Save</h3>
                          <p>Save for later</p></div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/copy.png" alt="copy" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h4>Copy link to post</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft"><img src="/images/report.png" alt="report" className="img-fluid" /></div>
                        <div className="drop-postStatus-block-right">
                          <h3>Report this post</h3>
                          <p>This post is offensive or the account is hacked</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dApp-status-content-sect">
            <img src="/images/onboard-post-img3.png" alt="image" className="img-fluid" />
            <div className="dApp-status-video-play-btn">
              <img src="/images/dApp-play-btn.png" alt="play" className="img-fluid" />
            </div>
          </div>

          <div className="dApp-status-react-sect">
            <ul className="daap-homepost-users-view">
              <li className="dApp-status-react-icon">
                <img src="/images/like.png" alt="icon" className="img-fluid" />
                <img src="/images/love.png" alt="icon" className="img-fluid" />
                <img src="/images/heart.png" alt="icon" className="img-fluid" />
                <img src="/images/clap.png" alt="icon" className="img-fluid" />
                <img src="/images/light.png" alt="icon" className="img-fluid" />
                <img src="/images/wow.png" alt="icon" className="img-fluid" />
                <span data-toggle="modal" data-target="#reaction-modal">15,422</span>
              </li>
              <li><span><img src="/images/user-view-icon1.png" alt="icon" className="img-fluid" /></span> 475 comments</li>
              <li><span> <img src="/images/user-view-icon2.png" alt="icon" className="img-fluid" /> </span>676,614 Views</li>
              <li><span><img src="/images/user-view-icon4.png" alt="icon" className="img-fluid" /> </span>$22</li>
              <li className="mr-0"><span><img src="/images/user-view-icon3.png" alt="icon" className="img-fluid" /> </span>$3</li>

            </ul>
          </div>

          <div className="dApp-status-like-comment-share-sect">
            <ul>
              <li>
                <div className="home-post-usr-reaction-wrap">
                  <div className="home-post-usr-reaction">
                    <span><img src="/images/reaction1.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction2.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction3.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction4.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction5.png" alt="icon" className="img-fluid" /></span>
                    <span><img src="/images/reaction6.png" alt="icon" className="img-fluid" /></span>
                  </div>
                </div>
                <span><img src="/images/like-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
              </li>

              <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid" /></span><a href="#">Dislike</a></li>

              <li><span><img src="/images/gift.png" alt="icon" className="img-fluid" /></span> <a href="#">Gift</a></li>

              <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid" /></span><a href="#">Comment</a></li>

              <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid" /></span><a href="#">Share</a></li>

              <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid" /></span><a href="#">Send</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardingPost
