import React from "react";
import { PostProps } from "./FeedHeader";
import { useRouter } from "next/router";

const FeedDropdown: React.FC<PostProps> = ({
  post,
  openPostOptions,
  setOpenPostOptions,
  togglePostOptions,
  copyToClipBoard,
  muteUser,
  saveAPost,
  setPostState,
  setShowCopiedAlert,
  toggleFollowUser,
  postState,
  user,
}) => {
  const router = useRouter();
  return (
    <div
      className={
        openPostOptions
          ? "dApp-post-3dots dropdown open"
          : "dApp-post-3dots dropdown"
      }
    >
      <a href="#!" onClick={togglePostOptions}>
        {openPostOptions ? (
          <img
            src="/images/ThreeDots-active.png"
            alt="3dots"
            className="img-fluid post-threedots-active"
          />
        ) : (
          <img
            src="/images/dApp-ThreeDots.png"
            alt="3dots"
            className="img-fluid post-threedots"
          />
        )}
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
              copyToClipBoard(`https://enoch.app/feeds/${post?.id}`)
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
  );
};

export default FeedDropdown;
