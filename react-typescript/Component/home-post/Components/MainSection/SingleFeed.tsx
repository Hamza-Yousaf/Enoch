//@ts-nocheck

import React, { useContext, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import dynamic from "next/dynamic";
const CommentBox = dynamic(() => import("./CommentBox"));
const ReactToPosts = dynamic(() => import("./React"));
const Reactions = dynamic(() => import("./Reactions"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import ReactPlayer from "react-player";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import { format, formatDistance } from "date-fns";
import { useRouter } from "next/router";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { POST_VIEW_COUNTS } from "../../../../graphql/mutattions/homePost";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { savePostMutation } from "../../../../graphql/mutattions/savePost";
import { muteUserMutation } from "../../../../graphql/mutattions/muteUser";

const FeedHeader = dynamic(() => import("./FeedHeader"));
import { COUNTING_POLL_RESULT } from "../../../../graphql/mutattions/countPollResult";
import { UNDO_POLL } from "../../../../graphql/mutattions/undoPoll";
import { POSTS_QUERY } from "./../../../../graphql/Queries/homepostQuery";
import RenderSmoothImage from "render-smooth-image-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fetchSinglePoll } from "../../../../graphql/Queries/refreshASinglePoll";
import { PostContext } from "../..";

function nextWeek(startDate) {
  var today = new Date(startDate);
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  return nextweek;
}

function next3Days(startDate) {
  var today = new Date(startDate);
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 3
  );
  return nextweek;
}

function nextDay(startDate) {
  var today = new Date(startDate);
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  return nextweek;
}

function next2Weeks(startDate) {
  var today = new Date(startDate);
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 14
  );
  return nextweek;
}

export const getTimeLeft = (startDate, duration: string) => {
  if (duration === "1 Week") {
    return formatDistance(new Date(), nextWeek(startDate));
  } else if (duration === "1 Day") {
    return formatDistance(new Date(), nextDay(startDate));
  } else if (duration === "3 Day") {
    return formatDistance(new Date(), next3Days(startDate));
  } else if (duration === "2 Week") {
    return formatDistance(new Date(), next2Weeks(startDate));
  }
};

interface Props {
  post: any;
  showSavedPostModal: boolean;
  setShowSavedPostModal: any;
  showCopiedAlert: boolean;
  setShowCopiedAlert: any;
  showEmbedPostModal: boolean;
  setShowEmbedPostModal: any;
  postState: any;
  setPostState: any;
  toggleFollowUser: any;
}

const SingleFeed: React.FC<Props> = ({
  post,
  showSavedPostModal,
  setShowSavedPostModal,
  showCopiedAlert,
  setShowCopiedAlert,
  showEmbedPostModal,
  setShowEmbedPostModal,
  postState,
  setPostState,
  toggleFollowUser,
}) => {
  const [pollResult, setPollResult] = useState(null);
  const [voteOptions, setVoteOptions] = useState({
    userSelectedOption: "",
    postid: "",
  });
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  // console.log(post);
  const [addAComment, setAddAComment] = useState(false);
  const [openPostOptions, setOpenPostOptions] = useState(false);
  const [user, setUser] = useState(null);
  const [pollResult1, setPollResult1] = useState(false);
  const [showPollResults, setShowPollResults] = useState(false);

  const userQuerydata = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (userQuerydata?.data) {
      setUser(userQuerydata?.data?.getUserProfile);
    }
  }, [userQuerydata?.data]);

  useEffect(() => {
    if (poll?.poll && poll?.poll[0]?.PollCheckUser?.hasTheLoginUserVote) {
      setPollResult1(poll?.poll[0]?.PollCheckUser?.hasTheLoginUserVote);
    }
  }, [poll?.poll]);
  const [postViewCountsM, { data, loading, error }] =
    useMutation(POST_VIEW_COUNTS);

  const togglePostOptions = () => {
    setOpenPostOptions(!openPostOptions);
  };

  const { showSavedPostAlert, showCopyLinkAlert, showReportPostAlert } =
    bindActionCreators(actionCreators, dispatch);

  const router = useRouter();

  const savePost = () => {
    showSavedPostAlert(true);
    setOpenPostOptions(false);
  };

  const copyPostLink = () => {
    showCopyLinkAlert(true);
    setOpenPostOptions(false);
  };

  const reportPost = () => {
    showReportPostAlert(true);
    setOpenPostOptions(false);
  };

  const postViewCountsHandler = (id) => {
    postViewCountsM({
      variables: {
        postId: id,
      },
    })
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const savePostMutationData = useMutation(savePostMutation);

  const saveAPost = () => {
    togglePostOptions();
    savePostMutationData[0]({
      variables: {
        postId: post?.id,
      },
    })
      .then((res) => {
        console.log(res);
        setShowSavedPostModal(true);
      })
      .catch((err) => console.log(err));
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {}
  };

  const muteUserMutationData = useMutation(muteUserMutation);

  const muteUser = () => {
    togglePostOptions();
    muteUserMutationData[0]({
      variables: {
        userId: post?.user?.id,
      },
    })
      .then((res) => {
        setPostState({
          ...postState,
          showMutedAlert: true,
        });
        // router.push("#");
      })
      .catch((err) => console.log(err));
  };

  const voteQueryData = useMutation(COUNTING_POLL_RESULT);
  const UndoVotePoll = useMutation(UNDO_POLL);

  const undoAPoll = UndoVotePoll[0];
  const undoing = UndoVotePoll[1].loading;

  const handleUndoAPoll = (e: any) => {
    undoAPoll({
      variables: {
        postid: post.id,
      },
    })
      .then((res) => {
        console.log("vote", res);
        refetchPoll();
        if (res?.data?.UndopollingVote) {
          // setPollResult1(false);
        }
      })
      .catch((err) => {
        console.log("undo", err);
      });
  };

  const vote = voteQueryData[0];
  const voting = voteQueryData[1].loading;

  const voteOnPoll = (option) => {
    vote({
      variables: {
        userSelectedOption: option,
        postid: post.id,
      },
    })
      .then((res) => {
        console.log("vote", res);
        refetchPoll();
        setShowPollResults(true);
      })
      .catch((err) => {
        console.log("vote", err);
      });
  };

  const [poll, setPoll] = useState({});

  const singlePollQueryData = useQuery(fetchSinglePoll, {
    variables: {
      PostId: post?.id,
    },
  });

  useEffect(() => {
    if (singlePollQueryData?.data) {
      setPoll(singlePollQueryData?.data?.PollRefreshQuery);
    }
  }, [singlePollQueryData?.data]);

  const refetchPoll = singlePollQueryData?.refetch;

  console.log("xxx", poll);

  return (
    <>
      <InView
        as="div"
        onChange={(inView, entry) => inView && postViewCountsHandler(post?.id)}
      >
        <div className="dApp-status-block mb-16">
          <FeedHeader
            post={post}
            openPostOptions={openPostOptions}
            setOpenPostOptions={setOpenPostOptions}
            togglePostOptions={togglePostOptions}
            saveAPost={saveAPost}
            copyToClipBoard={copyToClipBoard}
            setShowCopiedAlert={setShowCopiedAlert}
            setPostState={setPostState}
            setPostState={setPostState}
            user={user}
            toggleFollowUser={toggleFollowUser}
            muteUser={muteUser}
            postState={postState}
          />

          {post && post?.url?.length > 0 ? (
            <div className="dApp-status-caption-sect">
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: post.text,
                }}
              ></p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ReactPlayer url={post?.url} controls playing={false} />
              </div>
            </div>
          ) : post && post?.document?.length > 0 ? (
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
                        {post.documentProps && post?.documentProps[0] ? (
                          <h4>
                            {post?.documentProps[0]?.filename}
                            {post?.documentProps[0]?.fileExtentions}
                          </h4>
                        ) : (
                          <h4>Debrief Mailer &lt;&gt; - Google Drive</h4>
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
          ) : post && post?.imageurl?.length > 0 ? (
            <div className="dApp-status-caption-sect">
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: post.text,
                }}
              ></p>
              <LazyLoadImage
                src={post.imageurl}
                alt="image"
                className="img-fluid"
                // width={500}
                // height={500}
                effect="blur"
              />
            </div>
          ) : poll && poll?.pollQuestion?.length > 0 ? (
            <>
              <div className="postWrap">
                {post?.title?.length > 0 && (
                  <div
                    className="postWrap__detail"
                    dangerouslySetInnerHTML={{ __html: post?.title }}
                  ></div>
                )}

                <div className="cryptoWrap">
                  <div className="cryptoWrap__heading">
                    {poll?.pollQuestion}
                  </div>
                  <div
                    style={{ opacity: 0.5 }}
                    className="cryptoWrap__subheading"
                  >
                    The author can see how you vote. Learn more
                  </div>

                  {poll.poll &&
                  poll?.poll[0].PollCheckUser?.voteStatus === true ? (
                    <div className="awareness-cls2">
                      <div className="crypto__ProgWraper">
                        <div
                          style={{
                            width: `${poll?.poll[0]?.optionAPercent}% `,
                            background: "#f8f8f8",
                            border: "1px solid #d4d8dd",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "50px",
                            paddingLeft: "8px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                            }}
                            className="crypto__ProgValue"
                          >
                            {poll.poll[0] && poll?.poll[0]?.optionA}
                            {poll.poll[0] &&
                              poll?.poll[0].PollCheckUser?.userSelectOption ===
                                "A" && (
                                <img
                                  className="crypto__ProgValueTickImg"
                                  src="/images/tick-circle.svg"
                                  alt=""
                                />
                              )}
                          </span>
                        </div>
                        <div className="crypto__ProgValuePercentage">
                          {poll.poll[0] && poll?.poll[0]?.optionAPercent}%
                        </div>
                      </div>
                      <div className="crypto__ProgWraper">
                        <div
                          style={{
                            width: `${poll?.poll[0]?.optionBPercent}% `,
                            background: "#f8f8f8",
                            border: "1px solid #d4d8dd",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            height: "50px",
                            paddingLeft: "8px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                            }}
                            className="crypto__ProgValue"
                          >
                            {poll.poll[0] && poll?.poll[0]?.optionB}
                            {poll.poll[0] &&
                              poll?.poll[0].PollCheckUser?.userSelectOption ===
                                "B" && (
                                <img
                                  className="crypto__ProgValueTickImg"
                                  src="/images/tick-circle.svg"
                                  alt=""
                                />
                              )}
                          </span>
                        </div>
                        <div className="crypto__ProgValuePercentage">
                          {poll.poll[0] && poll?.poll[0]?.optionBPercent}%
                        </div>
                      </div>
                      {poll.poll[0] && poll?.poll[0]?.optionC && (
                        <div className="crypto__ProgWraper">
                          <div
                            style={{
                              width: `${
                                poll.poll[0] && poll?.poll[0]?.optionCPercent
                              }% `,
                              background: "#f8f8f8",
                              border: "1px solid #d4d8dd",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              height: "50px",
                              paddingLeft: "8px",
                              position: "relative",
                            }}
                          >
                            <p
                              style={{
                                position: "absolute",
                              }}
                              className="crypto__ProgValue"
                            >
                              {poll.poll[0] && poll?.poll[0]?.optionC}
                              {poll.poll[0] &&
                                poll?.poll[0].PollCheckUser
                                  ?.userSelectOption === "C" && (
                                  <img
                                    className="crypto__ProgValueTickImg"
                                    src="/images/tick-circle.svg"
                                    alt=""
                                  />
                                )}
                            </p>
                          </div>
                          <div className="crypto__ProgValuePercentage">
                            {poll.poll[0] && poll?.poll[0]?.optionCPercent}%
                          </div>
                        </div>
                      )}
                      {poll.poll[0] && poll?.poll[0]?.optionD && (
                        <div className="crypto__ProgWraper">
                          <div
                            style={{
                              width: `${
                                poll.poll[0] && poll?.poll[0]?.optionDPercent
                              }% `,
                              background: "#f8f8f8",
                              border: "1px solid #d4d8dd",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              height: "50px",
                              paddingLeft: "8px",
                              position: "relative",
                            }}
                          >
                            <p
                              style={{
                                position: "absolute",
                              }}
                              className="crypto__ProgValue"
                            >
                              {poll.poll[0] && poll?.poll[0]?.optionD}
                              {poll.poll[0] &&
                                poll?.poll[0].PollCheckUser
                                  ?.userSelectOption === "D" && (
                                  <img
                                    className="crypto__ProgValueTickImg"
                                    src="/images/tick-circle.svg"
                                    alt=""
                                  />
                                )}
                            </p>
                          </div>

                          <div className="crypto__ProgValuePercentage">
                            {poll.poll[0] && poll?.poll[0]?.optionDPercent}%
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <>
                        {poll.poll && poll?.poll[0]?.optionA && (
                          <div
                            onClick={() => {
                              voteOnPoll("A");
                            }}
                            className="crypto__btn"
                          >
                            <button className="cryptoButton">
                              {poll?.poll[0]?.optionA}
                            </button>
                          </div>
                        )}

                        {poll.poll && poll?.poll[0]?.optionB && (
                          <div
                            onClick={() => {
                              voteOnPoll("B");
                            }}
                            className="crypto__btn"
                          >
                            <button className="cryptoButton">
                              {poll?.poll[0]?.optionB}
                            </button>
                          </div>
                        )}

                        {poll.poll && poll?.poll[0]?.optionC && (
                          <div
                            onClick={() => {
                              voteOnPoll("C");
                            }}
                            className="crypto__btn"
                          >
                            <button className="cryptoButton">
                              {poll?.poll[0]?.optionC}
                            </button>
                          </div>
                        )}

                        {poll.poll && poll?.poll[0]?.optionD && (
                          <div
                            onClick={() => {
                              voteOnPoll("D");
                            }}
                            className="crypto__btn"
                          >
                            <button className="cryptoButton">
                              {poll?.poll[0]?.optionD}
                            </button>
                          </div>
                        )}
                      </>
                    </>
                  )}

                  <div className="cryptoVote">
                    {poll.poll && poll.poll[0]?.totalVoteCount} votes •{" "}
                    {poll.poll &&
                      getTimeLeft(
                        post.createdAt,
                        poll?.poll[0]?.voteDurationTimeLeft
                      )}
                    left
                    {poll.poll &&
                      poll?.poll[0].PollCheckUser?.voteStatus === true && (
                        <span
                          className="cryptoVoteUndo"
                          onClick={handleUndoAPoll}
                        >
                          undo
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="dApp-status-caption-sect">
              <p
                dangerouslySetInnerHTML={{
                  __html: post?.text,
                }}
              ></p>
            </div>
          )}
          {post && (
            <Reactions
              //@ts-ignore
              postid={post?.id}
              PerPostViewCount={post?.perPostViewCount}
            />
          )}
          {post && (
            <ReactToPosts
              //@ts-ignore
              setAddAComment={setAddAComment}
              postid={post?.id}
              post={post}
              postState={postState}
              setPostState={setPostState}
            />
          )}

          {addAComment && post && (
            <CommentBox
              postid={post?.id}
              followerCount={post?.user?.followerCount}
              imageurl={post?.user?.profileImage}
            />
          )}
        </div>
      </InView>
    </>
  );
};

export default withApollo(SingleFeed, { getDataFromTree });
