import { format } from "date-fns";
import React from "react";
import ReactPlayer from "react-player";
import { truncateString } from "../Components/Events/Manage/EventManageCard";

interface Props {
  showEmbedPostModal: boolean;
  setShowEmbedPostModal: any;
  postState: any;
  setPostState: any;
}

const EmbedPostModal: React.FC<Props> = ({
  showEmbedPostModal,
  setShowEmbedPostModal,
  postState,
  setPostState,
}) => {
  console.log("embed", postState);
  const datePosted = () => {
    if (postState?.post?.createdAt) {
      return ` ${format(new Date(postState?.post?.createdAt), "LLLL")} ${format(
        new Date(postState?.post?.createdAt),
        "d"
      )}`;
    }
  };
  const copyToClipBoard = async (copyMe: any) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {}
  };
  return (
    <>
      {postState?.post && (
        <div className="Embed-this-post-Modal">
          <div
            className={
              postState.showEmbedPostModal ? "modal fade in" : "modal fade"
            }
            id="Embed_post_Modal"
            role="dialog"
            style={
              postState.showEmbedPostModal
                ? { display: "flex", alignItems: "center", overflowY: "scroll" }
                : { display: "none" }
            }
          >
            <div className="modal-dialog">
              {/* <!-- Modal content--> */}
              <div className="modal-content Embed-this-post-Modal-content">
                <div className="Embed-this-post-Modal-headings">
                  <h2>Embed this post</h2>
                  <button
                    onClick={() =>
                      setPostState({
                        ...postState,
                        showEmbedPostModal: false,
                      })
                    }
                    className="close"
                    data-dismiss="modal"
                  >
                    <img
                      src="/images/create-post-modal-Cross.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </button>
                </div>
                <div className="Embed-this-post-Modal-body">
                  <h3>Copy and paste embed code on your site</h3>
                  <div className="Embed-iframe-tag-post-link">
                    <p>
                      &lt;iframe src=
                      {`https://www.enoch.app/feeds/${postState.post?.id}`}
                      height="597" width="504" frameborder="0"
                      allowfullscreen="" title="Embedded
                      post"&gt;&lt;/iframe&gt;
                    </p>
                  </div>
                  <div className="copy-Embed-post-btn-sect">
                    <div className="copy-Embed-post-btn-left-checkbox">
                      <label className="container">
                        <p>Include full post</p>
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <button
                      onClick={() => {
                        copyToClipBoard(
                          `<iframe src="https://www.enoch.app/feeds/${postState.post?.id}"height="597" width="504" frameborder="0" allowfullscreen=""title="Embedded post"></iframe>`
                        )
                          .then((res) => {
                            setPostState({
                              ...postState,
                              embedCodeCopied: true,
                              showEmbedPostModal: false,
                            });
                          })
                          .catch((err) => console.log(err));
                      }}
                    >
                      Copy Code
                    </button>
                  </div>
                  <div className="Enoch-mbed-Terms-text">
                    <p>
                      By copying the link above, you agree to the{" "}
                      <a href="#!">Enoch Embed Terms of Use.</a>
                    </p>
                  </div>
                  <div className="Embed-this-post-preview-sect">
                    <h5>Preview</h5>
                    <div className="Embed-this-post-preview-status">
                      <div className="Embed-this-post-preview-status-content">
                        <div className="Embed-this-post-preview-status-headings">
                          <div className="Embed-this-post-preview-status-dp">
                            <img
                              src={postState?.post?.user?.profileImage}
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Embed-post-preview-status-user-name">
                            <h4>@{postState?.post?.user?.userName}</h4>
                            <h5>
                              {truncateString(postState?.post?.user?.bio, 100)}
                            </h5>
                            <h6>
                              <span>
                                <img
                                  src="/images/Clock.png"
                                  alt="icon"
                                  className="img-fluid"
                                />
                              </span>
                              {datePosted()}
                            </h6>
                          </div>
                          <div className="Embed-preview-status-3dot">
                            <img
                              src="/images/preview-ThreeDots.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="dApp-post-3dots Embed-preview-status-3dot dropdown">
                            <a
                              href="#!"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src="/images/preview-ThreeDots.png"
                                alt="3dots"
                                className="img-fluid post-threedots"
                              />
                              <img
                                src="/images/preview-ThreeDots.png"
                                alt="3dots"
                                className="img-fluid post-threedots-active"
                              />
                            </a>
                            <div className="dropdown-menu home-drop-postStatus">
                              <ul>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="Embed-this-post-preview-status-body">
                          <div className="Embed-preview-status-caption">
                            <p
                              className="mb-2"
                              dangerouslySetInnerHTML={{
                                __html: postState?.post?.text,
                              }}
                            ></p>
                          </div>
                          {postState?.post?.url?.length > 0 ? (
                            <div className="d-flex flex-row justify-content-center">
                              <ReactPlayer
                                url={postState?.post?.url}
                                muted={true}
                                width={"600px"}
                                height={"400px"}
                                playing={false}
                                controls={true}
                              />
                            </div>
                          ) : postState?.post?.imageurl?.length > 0 ? (
                            <div className="Embed-preview-status-img">
                              <img
                                src={postState?.post?.imageurl}
                                alt="img"
                                className="img-fluid"
                              />
                            </div>
                          ) : (
                            ""
                          )}

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
                                <a href="#!">Like</a>
                              </li>

                              <li>
                                <span>
                                  <img
                                    src="/images/dislike.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </span>
                                <a href="#!">Dislike</a>
                              </li>

                              <li>
                                <span>
                                  <img
                                    src="/images/gift.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </span>{" "}
                                <a href="#!">Gift</a>
                              </li>

                              <li>
                                <span>
                                  <img
                                    src="/images/comment-icon.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </span>
                                <a href="#!">Comment</a>
                              </li>

                              <li>
                                <span>
                                  <img
                                    src="/images/dApp-Share.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </span>
                                <a href="#!">Share</a>
                              </li>

                              <li>
                                <span>
                                  <img
                                    src="/images/Paper-Plane.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                </span>
                                <a href="#!">Send</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmbedPostModal;
