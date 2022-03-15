import React from "react";

const LatestPosts = () => {
  return (
    <div className="communityView-content-block">
      <div id="posts" className="communityView-tabcontent communityView-d-block">
        <div className="enoch-community-creat-post">
          <div className="enoch-community-creat-post-lft">
            <span><img src="/images/defi-user.png" className="img-fluid" alt="user" /></span><div className="home-post-input">Create Post </div>
          </div>
          <div className="enoch-community-creat-post-right">
            <ul>
              <li><input type="file" className="home-post-file-uplod" /><img src="/images/post-Image.png" className="img-fluid" alt="Photo" /></li>
              <li><input type="file" className="home-post-file-uplod" /><img src="/images/post-Video.png" className="img-fluid" alt="Video" /></li>
              <li><img src="/images/post-Event.png" className="img-fluid" alt="Event" /></li>
              <li><img src="/images/post-Article.png" className="img-fluid" alt="Write Article" /></li>
            </ul>
          </div>
        </div>
        <div className="communityView-hot-sect">
          <ul>
            <li><span><img src="/images/hot-img.png" className="img-fluid mr-2" alt="hot" />Hot</span></li>
            <li><span className="inactiveItems"><img src="/images/new.png" className="img-fluid mr-2" alt="new" />New</span></li>
            <li><span className="inactiveItems"><img src="/images/top.png" className="img-fluid mr-2" alt="top" />Top</span></li>
          </ul>
        </div>
        <div className="community-enoch">
          <div className="dApp-status-block pb-4">
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

            <div className="communiPost-content-sect">
              <img src="/images/community-post-img.png" alt="image" className="img-fluid" />
            </div>
            <div className="communiPost-content-body">
              <h3>Decentralized finance (DeFi)</h3>
              <p>Bitcoin in many ways was the first DeFi application. Bitcoin lets you really own and control value and send it anywhere around the world. It does this by providing a way for a large number of people, who don't trust each other, to agree on a ledger of accounts without the need for a trusted intermediary. Bitcoin is open to anyone and no one has the authority to change its rules. Bitcoin is open to anyone and no one has the authority to change its rules. Bitcoin's rules, like its scarcity and its openness, are written into the technology. It's not like traditional finance where governments can print money which devalues your savings and companies can shut down markets. Bitcoin's rules, like its scarcity and its openness, are written into the technology. It's not like traditional finance where governments can print money which devalues your savings and companies can shut down markets.</p>
              <p>Bitcoin is open to anyone and no one has the authority to change its rules.</p>
            </div>

            <div className="dApp-status-like-comment-share-sect pt-0">
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
                  <span><img src="/images/like1.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov1.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
                </li>

                <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid post-like" /><img src="/images/dislike-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Dislike</a></li>

                <li><span><img src="/images/gift.png" alt="icon" className="img-fluid post-like" /><img src="/images/gift-hov.png" alt="icon" className="img-fluid post-like-hov" /></span> <a href="#">Gift</a></li>

                <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/comment-icon-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Comment</a>
                </li>

                <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid post-like" /><img src="/images/dApp-Share-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Share</a>
                </li>

                <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid post-like" /><img src="/images/Paper-Plane-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Send</a>
                </li>

              </ul>
            </div>


          </div>
          <div className="dApp-status-block pb-4">
            <div className="dApp-status-heading">
              <div className="dApp-status-heading-profile-pic">
                <img src="/images/speaker2.png" alt="DP" className="img-fluid" />
              </div>
              <div className="dApp-status-heading-text">
                <h1>@Metaquq</h1>
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

            <div className="communiPost-content-sect">
              <img src="/images/community-post-img2.png" alt="image" className="img-fluid" />
            </div>
            <div className="communiPost-content-body">
              <h3>How to Relax Your Body and Mind</h3>
              <p>Once you've discovered how to relax, you should experience less overall stress. The next step is learning how to maintain a state of relaxation and how to relax again quickly after you deal with future stressors. Work to amass more resources for dealing with stressors you face and becoming less reactive to them.</p>

              <p>Make efforts to live a low-stress lifestyle, such as learning breathing exercises, doing regular exercise, meditating, writing in a journal, and cultivating relationships. Learn how to be more emotionally resilient.</p>

              <p>It's important to learn how to manage your stress in a healthy way. If you're feeling stressed out or you're struggling to make stress management techniques work for you, consider professional help. A licensed mental health professional can assist you in learning relaxation strategies that can work for you.</p>

            </div>

            <div className="dApp-status-like-comment-share-sect pt-0">
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
                  <span><img src="/images/like1.png" alt="icon" className="img-fluid post-like" /><img src="/images/like-hov1.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Like</a>
                </li>

                <li><span><img src="/images/dislike.png" alt="icon" className="img-fluid post-like" /><img src="/images/dislike-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Dislike</a></li>

                <li><span><img src="/images/gift.png" alt="icon" className="img-fluid post-like" /><img src="/images/gift-hov.png" alt="icon" className="img-fluid post-like-hov" /></span> <a href="#">Gift</a></li>

                <li><span><img src="/images/comment-icon.png" alt="icon" className="img-fluid post-like" /><img src="/images/comment-icon-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Comment</a>
                </li>

                <li><span><img src="/images/dApp-Share.png" alt="icon" className="img-fluid post-like" /><img src="/images/dApp-Share-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Share</a>
                </li>

                <li><span><img src="/images/Paper-Plane.png" alt="icon" className="img-fluid post-like" /><img src="/images/Paper-Plane-hov.png" alt="icon" className="img-fluid post-like-hov" /></span><a href="#">Send</a>
                </li>

              </ul>
            </div>


          </div>
        </div>
      </div>
      <div id="predictions" className="communityView-tabcontent">prediction</div>
      <div id="wiki" className="communityView-tabcontent">wiki</div>
      <div id="faq" className="communityView-tabcontent">faq</div>
      <div id="rules" className="communityView-tabcontent">rules</div>
      <div id="amas" className="communityView-tabcontent">amas</div>
    </div>
  );
};

export default LatestPosts;
