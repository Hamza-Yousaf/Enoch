import { useMutation, useQuery } from "@apollo/client";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { PostContext } from "..";
//@ts-ignore
import { sharePostMutation } from "../../../graphql/mutattions/sharePost";
import { GET_USER_PROFILE_QUERY } from "../../../graphql/queries";
import { POSTS_QUERY } from "../../../graphql/Queries/homepostQuery";
import AlertModal from "../../AlertModal";
import WhoCanSeePostDropdown from "../../CreateAPost/CreatorAndVisibilityDropdowns/WhoCanSeePostDropdown";
interface Props {
  ps: any;
}

const ShareModal: React.FC<Props> = ({ ps }) => {
  const [alertState, setAlertState] = useState({
    message: "",
    success: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const sharePostMutationData = useMutation(sharePostMutation, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 150,
        },
      },
    ],
  });
  const sharePostFunc = sharePostMutationData[0];
  const sharePostLoading = sharePostMutationData[1].loading;
  const [currentUser, setCurrentUser] = useState(null);
  const [sharedPoststate, setSharedPostState] = useState({
    text: "",
  });

  const { data, error, loading } = useQuery(GET_USER_PROFILE_QUERY);
  const postContext = useContext(PostContext);
  console.log("context...", postContext);

  const post = postContext?.postModalState?.currentPost;

  useEffect(() => {
    if (data) {
      setCurrentUser(data?.getUserProfile);
    }
  }, [data]);

  const datePosted = () => {
    if (postContext?.postModalState?.currentPost?.createdAt) {
      return ` ${format(
        new Date(postContext?.postModalState?.currentPost?.createdAt),
        "LLLL"
      )} ${format(
        new Date(postContext?.postModalState?.currentPost?.createdAt),
        "d"
      )}`;
    }
  };

  const sharePost = () => {
    sharePostFunc({
      variables: {
        id: post.id,
      },
    })
      .then((res) => {
        console.log(res);
        setAlertState({
          ...alertState,
          message: "post shared successfully",
          success: true,
        });
        postContext.setPostModalState({
          ...postContext.postModalState,
          showSharePostModal: false,
        });
        setShowAlert(true);
      })
      .catch((err) => {
        console.log(err);
        setAlertState({
          ...alertState,
          message: "something went wrong please try again later",
          success: false,
        });
        postContext.setPostModalState({
          ...postContext.postModalState,
          showSharePostModal: false,
        });
        setShowAlert(true);
      });
  };
  return (
    <>
      <AlertModal
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        message={alertState.message}
        success={alertState.success}
      />
      <div>
        <div className="SharePost-Modal-sect">
          <div
            className={
              postContext?.postModalState?.showSharePostModal === true
                ? "modal fade in"
                : "modal fade "
            }
            id="share_post_Modal"
            role="dialog"
            style={
              postContext?.postModalState?.showSharePostModal === true
                ? { display: "block" }
                : {}
            }
          >
            <div className="modal-dialog">
              <div className="modal-content Celebrate-modal-content Celebrate-nxt-modal-content">
                <div className="Celebrate-Modal-header">
                  <h2>Share</h2>
                  <span
                    onClick={() => {
                      postContext.setPostModalState({
                        ...postContext.postModalState,
                        showSharePostModal: false,
                      });
                    }}
                    className="close"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#SharePostDiscardDraftModal"
                  >
                    <img
                      src="images/create-post-modal-Cross.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                </div>
                <div className="Celebrate-modal-body pt-4 share-post-modal-body-content">
                  <div className="Celebrate-Modal-share-content">
                    <div className="Celebrate-Modal-share-post-headings">
                      <div className="Celebrate-Modal-share-post-dp">
                        <img
                          src={currentUser?.profileImage}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Celebrate-Modal-share-post-user-name">
                        <h2>{currentUser?.userName}</h2>
                        {/* <div className="Celebrate-Modal-share-post-dropdown">
                        <ul>
                          <li>
                            <span>
                              <img
                                src="images/share-post-icon-Globe.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Anyone
                          </li>
                        </ul>
                      </div> */}
                        <WhoCanSeePostDropdown />
                      </div>
                    </div>
                    <div className="Celebrate-Modal-share-post-body">
                      <textarea
                        value={sharedPoststate.text}
                        placeholder=" Start writing or use @ to mention people, companies"
                        onChange={(e) => {
                          setSharedPostState({
                            ...sharedPoststate,
                            text: e.target.value,
                          });
                        }}
                      ></textarea>
                      <div className="share-post-preview-status">
                        {/* <div className="dApp-status-topBar">
                        <div className="dApp-status-topBar-dp">
                          <img
                            src="images/post-topbar-dp.svg"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <h4>
                          @Holp09<span>like this </span>
                        </h4>
                      </div> */}
                        <div className="share-this-post-preview-status-headings">
                          <div className="share-this-post-preview-status-dp">
                            <img
                              src={
                                postContext?.postModalState?.currentPost?.user
                                  ?.profileImage
                              }
                              alt="img"
                              className="img-fluid"
                            />
                            <span>
                              <img
                                src="images/share-post-peview-follow-icon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                          </div>
                          <div className="share-post-preview-status-user-name">
                            <h4>
                              {
                                postContext?.postModalState?.currentPost?.user
                                  ?.userName
                              }
                            </h4>
                            <h5>
                              {
                                postContext?.postModalState?.currentPost?.user
                                  ?.bio
                              }
                            </h5>
                            <h6>
                              <span>
                                <img
                                  src="images/Clock.png"
                                  alt="icon"
                                  className="img-fluid"
                                />
                              </span>
                              {datePosted()}
                            </h6>
                          </div>
                          <div className="share-preview-status-3dot">
                            <img
                              src="images/preview-ThreeDots.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="dApp-post-3dots share-preview-status-3dot dropdown">
                            <a
                              href="#!"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src="images/preview-ThreeDots.png"
                                alt="3dots"
                                className="img-fluid post-threedots"
                              />
                              <img
                                src="images/preview-ThreeDots.png"
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
                          <div className="user-follow-btn">
                            <button>
                              <span>
                                <img
                                  src="images/follow-add.svg"
                                  alt="icon"
                                  className="img-fluid"
                                />
                              </span>
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="share-this-post-preview-status-body">
                          <div className="share-this-post-preview-status-caption">
                            <p
                              className="mb-2"
                              dangerouslySetInnerHTML={{
                                __html:
                                  postContext?.postModalState?.currentPost
                                    ?.text,
                              }}
                            ></p>
                          </div>

                          {postContext?.postModalState?.currentPost?.url
                            ?.length > 0 ? (
                            <div className="d-flex flex-row justify-content-center">
                              <ReactPlayer
                                url={
                                  postContext?.postModalState?.currentPost?.url
                                }
                                muted={true}
                                width={"600px"}
                                height={"400px"}
                                playing={false}
                                controls={true}
                              />
                            </div>
                          ) : postContext?.postModalState?.currentPost?.imageurl
                              ?.length > 0 ? (
                            <div className="Embed-preview-status-img">
                              <img
                                src={
                                  postContext?.postModalState?.currentPost
                                    ?.imageurl
                                }
                                alt="img"
                                className="img-fluid"
                              />
                            </div>
                          ) : postContext?.postModalState?.currentPost.document
                              ?.length > 0 ? (
                            <div>
                              <div className="dApp-status-link-text p-4">
                                <a href={post?.document} target="_">
                                  {post?.document}
                                </a>
                              </div>
                              <div className="dApp-status-content-sect">
                                <div className="drive-post-content-sect">
                                  <div className="drive-post-content">
                                    <a href={post?.document} target="_">
                                      <div className="drive-post-content-text">
                                        {post.documentProps &&
                                        post?.documentProps[0] ? (
                                          <h4>
                                            {post?.documentProps[0]?.filename}
                                            {
                                              post?.documentProps[0]
                                                ?.fileExtentions
                                            }
                                          </h4>
                                        ) : (
                                          <h4>
                                            Debrief Mailer &lt;&gt; - Google
                                            Drive
                                          </h4>
                                        )}
                                        {/* {post?.documentProps[0]?(<h5>{post?.documentProps[0]?.fileExtentions} </h5>):(<h5></h5>)} */}
                                      </div>
                                    </a>
                                    <div className="drive-post-content-sect-close">
                                      <img
                                        src="images/uploaded-pdf-cancel-icon.svg"
                                        alt="icon"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : post?.pollQuestion?.length > 0 ? (
                            <div className="postWrap">
                              {post?.title?.length > 0 && (
                                <div
                                  className="postWrap__detail"
                                  dangerouslySetInnerHTML={{
                                    __html: post?.title,
                                  }}
                                ></div>
                              )}

                              <div className="cryptoWrap">
                                <div className="cryptoWrap__heading">
                                  {post?.pollQuestion}
                                </div>
                                <div
                                  style={{ opacity: 0.5 }}
                                  className="cryptoWrap__subheading"
                                >
                                  The author can see how you vote. Learn more
                                </div>

                                <>
                                  <>
                                    {post?.poll && post?.poll[0]?.optionA && (
                                      <div
                                        onClick={() => {
                                          // voteOnPoll("A");
                                        }}
                                        className="crypto__btn"
                                      >
                                        <button className="cryptoButton">
                                          {post?.poll[0]?.optionA}
                                        </button>
                                      </div>
                                    )}

                                    {post?.poll && post?.poll[0]?.optionB && (
                                      <div
                                        onClick={() => {
                                          // voteOnPoll("B");
                                        }}
                                        className="crypto__btn"
                                      >
                                        <button className="cryptoButton">
                                          {post?.poll[0]?.optionB}
                                        </button>
                                      </div>
                                    )}

                                    {post?.poll && post?.poll[0]?.optionC && (
                                      <div
                                        onClick={() => {
                                          // voteOnPoll("C");
                                        }}
                                        className="crypto__btn"
                                      >
                                        <button className="cryptoButton">
                                          {post?.poll[0]?.optionC}
                                        </button>
                                      </div>
                                    )}

                                    {post?.poll && post?.poll[0]?.optionD && (
                                      <div
                                        onClick={() => {
                                          // voteOnPoll("D");
                                        }}
                                        className="crypto__btn"
                                      >
                                        <button className="cryptoButton">
                                          {post?.poll[0]?.optionD}
                                        </button>
                                      </div>
                                    )}
                                  </>
                                </>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="share-this-post-modal-footer">
                  <h3>Add hashtag</h3>
                  <div className="Celebrate-Modal-share-post-icon-list">
                    <button onClick={sharePost} data-dismiss="modal">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
