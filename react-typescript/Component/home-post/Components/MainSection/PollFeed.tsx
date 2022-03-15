import React from "react";

interface Props {
  post: any;
  postState: any;
  setPostState: any;
  saveAPost: any;
  togglePostOptions: any;
  copyToClipBoard: any;
  setShowCopiedAlert: any;
  user: any;
  toggleFollowUser: any;
  muteUser: any;
  router: any;
}

const PollFeed: React.FC<Props> = ({
  post,
  postState,
  setPostState,
  saveAPost,
  togglePostOptions,
  copyToClipBoard,
  setShowCopiedAlert,
  user,
  muteUser,
  toggleFollowUser,
  router,
}) => {
  return (
    <div className="postWrap">
      <div className="postWrap__like">
        <div className="postWrap__likeWrap">
          <div>
            <span className="Enoch_cash_community">
              <img
                src="images/illus-icon-01.png"
                className="postWrap__img"
                alt="img"
              />
            </span>
          </div>
          <div className="postWrap__heading">
            <span>@Holp09</span> like this
          </div>
        </div>
        <div className="dropdown">
          <a
            href="#!"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="images/three-dots-01.svg"
              alt="3dots"
              className="img-fluid post-threedots"
            />
            <img
              src="images/three-dots-01.svg"
              alt="3dots"
              className="img-fluid post-threedots-active"
            />
          </a>
          <div className="dropdown-menu home-drop-postStatus">
            <ul>
              <li
                onClick={() => {
                  saveAPost();
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/post-save.png"
                        alt="save"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Save</h3>
                      <p>Save for later</p>
                    </div>
                  </div>
                </a>
              </li>
              <li
                onClick={() => {
                  togglePostOptions();
                  copyToClipBoard(`http://localhost:3000/feeds/${post?.id}`)
                    .then((res: any) => {
                      console.log(res);
                      setShowCopiedAlert(true);
                    })
                    .catch((err: any) => console.log(err));
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/copy.png"
                        alt="copy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h4>Copy link to post</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li
                onClick={() => {
                  setPostState({
                    ...postState,
                    post: post,
                    showEmbedPostModal: true,
                  });
                  togglePostOptions();
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/embed-post.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Embed this post</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>

              {user?.id !== post?.user?.id && (
                <li className="">
                  <a className="" href="#!">
                    <div className="drop-postStatus-block">
                      <div className="drop-postStatus-block-lft">
                        <img
                          src="/images/unfollow.png"
                          alt="embed post"
                          className="img-fluid"
                        />
                      </div>
                      <div
                        onClick={() => {
                          togglePostOptions();
                          setPostState({
                            ...postState,
                            userToUnFollow: post?.user,
                          });
                          toggleFollowUser(post?.user);
                          if (!router.query.feedId) {
                            router.push("#");
                          }
                        }}
                        className="drop-postStatus-block-right"
                      >
                        <h3>Unfllow @{post?.user?.userName}</h3>
                        <p>This post is offensive or the account is hacked</p>
                      </div>
                    </div>
                  </a>
                </li>
              )}

              {user?.id !== post?.user?.id && (
                <li onClick={muteUser} className="">
                  <a className="" href="#!">
                    <div className="drop-postStatus-block">
                      <div className="drop-postStatus-block-lft">
                        <img
                          src="/images/mute.png"
                          alt="embed post"
                          className="img-fluid"
                        />
                      </div>
                      <div className="drop-postStatus-block-right">
                        <h3>Mute @{post?.user?.userName}</h3>
                        <p>This post is offensive or the account is hacked</p>
                      </div>
                    </div>
                  </a>
                </li>
              )}

              <li
                onClick={() => {
                  togglePostOptions();
                  setPostState({
                    ...postState,
                    showBlockPostModal: true,
                    post: post,
                  });
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/dont-see.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>I don't want to see this</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
              <li
                onClick={() => {
                  togglePostOptions();
                  setPostState({
                    ...postState,
                    showMainReportPostModal: true,
                    post: post,
                  });
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/report.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Report this post</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
              <li
                onClick={() => {
                  togglePostOptions();
                  setPostState({
                    ...postState,
                    showVisibilitySection: true,
                  });
                }}
                className=""
              >
                <a className="" href="#!">
                  <div className="drop-postStatus-block">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/see.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Who can see this post?</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="postWrap__User">
        <div className="postWrap__user__likeWrap likeWrapNew">
          <div className="postWrap__userMainWrap">
            <span className="Enoch_cash_community_icon">
              <img
                src="images/illus-icon-01.png"
                className="postWrap__user__img"
                alt="img"
              />
            </span>
            <div className="postWrap__User__wrap">
              <div className="postWrap__user__heading">
                @{post?.user?.userName}
              </div>
              <div className="postWrap__user__description">
                {post?.user?.bio}
              </div>
              <div className="postWrap__dateWrap">
                <span>
                  <img src="images/clock-01.svg" alt="img" />
                </span>
                <span className="postWrap__date">July 15</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="images/add-plus.svg"
              className="postWrap__user__plus"
              alt="img"
            />
            <span className="postWrap__user__follow">
              <a href=""> Follow </a>
            </span>
          </div>
        </div>
        <div className="postWrap__detail">{post?.text}</div>
      </div>
      <div className="cryptoWrap">
        <div className="cryptoWrap__heading">{post?.pollQuestion}</div>
        <div className="cryptoWrap__subheading">
          The author can see how you vote. Learn more
        </div>
        {post?.poll[0].optionA && (
          <div className="crypto__btn">
            <button className="cryptoButton">{post?.poll[0]?.optionA}</button>
          </div>
        )}

        {post?.poll[0].optionB && (
          <div className="crypto__btn">
            <button className="cryptoButton">{post?.poll[0]?.optionB}</button>
          </div>
        )}

        {post?.poll[0].optionC && (
          <div className="crypto__btn">
            <button className="cryptoButton">{post?.poll[0]?.optionC}</button>
          </div>
        )}

        {post?.poll[0].optionD && (
          <div className="crypto__btn">
            <button className="cryptoButton">{post?.poll[0]?.optionD}</button>
          </div>
        )}
      </div>
      <div className="cryptoVote">139 votes • 4d left</div>
      <div className="postUserDetail">
        <div className="postUserDetail__first">
          <span className="postUserDetail_img01">
            <img src="images/like-icon-01.svg" alt="" />
          </span>
          <span className="postUserDetail_img02">
            <img src="images/clap-01.svg" alt="" />
          </span>
          <span className="postUserDetail_value">12</span>
        </div>
        <div className="postUserDetail__sec">
          <span className="postUserDetail_img01">
            <img src="images/comments-01.svg" alt="" />
          </span>
          <span className="postUserDetail_value">34</span>
        </div>
        <div className="postUserDetail__third">
          <span className="postUserDetail_img01">
            <img src="images/eye-icon-01.svg" alt="" />
          </span>
          <span className="postUserDetail_value">56 views</span>
        </div>
        <div className="postUserDetail__fourth">
          <span className="postUserDetail_img01">
            <img src="images/doller-pari.svg" alt="" />
          </span>
          <span className="postUserDetail_value">53</span>
        </div>
      </div>

      <div className="dApp-status-like-comment-share-sect pl-0 pr-0">
        <ul>
          <li>
            <div className="home-post-usr-reaction-wrap">
              <div className="home-post-usr-reaction">
                <span>
                  <img
                    src="images/reaction1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/reaction2.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/reaction3.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/reaction4.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/reaction5.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                <span>
                  <img
                    src="images/reaction6.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
              </div>
            </div>
            <span>
              <img
                src="images/like-icon.png"
                alt="icon"
                className="img-fluid post-like"
              />
              <img
                src="images/like-icon.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#!">Like</a>
          </li>

          <li>
            <span>
              <img src="images/dislike.png" alt="icon" className="img-fluid" />
            </span>
            <a href="#!">Dislike</a>
          </li>

          <li>
            <span>
              <img src="images/gift.png" alt="icon" className="img-fluid" />
            </span>
            <a href="#!">Gift</a>
          </li>

          <li>
            <span>
              <img
                src="images/comment-icon.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <a href="#!">Comment</a>
          </li>

          <li>
            <span>
              <img
                src="images/dApp-Share.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <a href="#!">Share</a>
          </li>

          <li>
            <span>
              <img
                src="images/Paper-Plane.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <a href="#!">Send</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PollFeed;
