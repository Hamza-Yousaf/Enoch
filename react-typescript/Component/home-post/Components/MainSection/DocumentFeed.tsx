import React from "react";
import { useRouter } from "next/router";

interface Props {
  post: any;
}

const DocumentFeed: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <div className="dApp-status-block mb-16 status-section save-this-status copy-link-this-status unfllow-user-stutas mute-user-stutas">
      <div className="dApp-status-heading">
        <div className="dApp-status-heading-profile-pic">
          <img src={post?.user?.profileImage} alt="DP" className="img-fluid" />
        </div>
        <div className="dApp-status-heading-text">
          <h1>@{post?.user?.userName}</h1>
          <h2>{post?.user?.bio}</h2>
          <h3>
            <span>
              <img src="/images/Clock.png" alt="icon" className="img-fluid" />
            </span>
            July 15{" "}
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
              src="/images/dApp-ThreeDots.png"
              alt="3dots"
              className="img-fluid post-threedots-active"
            />
          </a>
          <div className="dropdown-menu home-drop-postStatus">
            <ul>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block save-post">
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
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block copy-post-link">
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
              <li className="">
                <a className="" href="#">
                  <div
                    className="drop-postStatus-block"
                    data-toggle="modal"
                    data-target="#Embed_post_Modal"
                  >
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
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block unfllow-user">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/unfollow.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Unfllow @name</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block mute-user">
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/mute.png"
                        alt="embed post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Mute @name</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div
                    className="drop-postStatus-block"
                    data-toggle="modal"
                    data-target="#dont_Want_See_post_Modal"
                  >
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
              <li className="">
                <a className="" href="#">
                  <div
                    className="drop-postStatus-block Report-this-post"
                    data-toggle="modal"
                    data-target="#report_this_post_Modal"
                  >
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
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block whoCanSeeThisPost">
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

      <div className="dApp-status-hastag-txt">
        <div className="dApp-status-link-text">
          <a href={post?.document}>{post?.document}</a>
        </div>
      </div>
      <div className="dApp-status-content-sect">
        <div className="drive-post-content-sect">
          <div
            onClick={() => {
              router.push(post?.document);
            }}
            className="drive-post-content"
          >
            <div className="drive-post-content-text">
              {/* <h4>Debrief Mailer &lt;file name&gt; - Google Drive</h4> */}
              <h4>click to download this document</h4>
              <h5>enoch.app</h5>
            </div>
            <div className="drive-post-content-sect-close">
              <img
                src="/images/uploaded-pdf-cancel-icon.svg"
                alt="icon"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
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
                src="/images/like-icon.png"
                alt="icon"
                className="img-fluid post-like-hov"
              />
            </span>
            <a href="#">Like</a>
          </li>

          <li>
            <span>
              <img src="/images/dislike.png" alt="icon" className="img-fluid" />
            </span>
            <a href="#">Dislike</a>
          </li>

          <li>
            <span>
              <img src="/images/gift.png" alt="icon" className="img-fluid" />
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

          <li data-toggle="modal" data-target="#share_post_Modal">
            <span>
              <img
                src="/images/dApp-Share.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            <a href="#">Share</a>
          </li>

          <li className="post-send-by-Masage">
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
  );
};

export default DocumentFeed;
