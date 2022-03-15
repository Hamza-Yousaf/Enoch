//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const LeftSideBar = dynamic(() => import("../../Component/onBoard/left-sidebar"));
const RightSideBar = dynamic(() => import("../../Component/home-post/Components/MainSection/RightSideBar"));
const FollowSection = dynamic(() => import("../../Component/FollowShowMore/Components/MainSection/FollowSection"));
const MakePost = dynamic(() => import("../../Component/home-post/Components/MainSection/MakePost"));
const SingleFeed = dynamic(() => import("../../Component/home-post/Components/MainSection/SingleFeed"));
import { useMutation, useQuery } from "@apollo/client";
import { getASinglePost } from "../../graphql/singlePost";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
const HomeModals = dynamic(() => import("../../Component/home-post/HomeModals"));
import { POSTS_I_BLOCKED_QUERY } from "../../graphql/Queries/postsIBlocked";
import { BLOCK_POST_MUTATION } from "../../graphql/mutattions/blockPost";
import { POSTS_QUERY } from "../../graphql/Queries/homepostQuery";
import { TOGGLE_FOLLOW_MUTATION } from "../../graphql/userProfileMutations";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import { USERS_I_FOLLOW_QUERY } from "../../graphql/Queries/usersIFollow";
const VisibilitySection = dynamic(() => import("../../Component/home-post/Components/VisibilitySection"));

// export async function getStaticProps({}: GetStaticPropsContext) {
//   return {
//     props: {},
//   };
// }

const SingleFeedPage = () => {
  const router = useRouter();
  const feedId = router.query.feedId;
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  const [showSavedPostModal, setShowSavedPostModal] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [showEmbedPostModal, setShowEmbedPostModal] = useState(false);
  const [blockedPosts, setBlockedPosts] = useState([]);

  const [post, setPost] = useState(null);
  const [postState, setPostState] = useState({
    post: {},
    embedCodeCopied: false,
    showEmbedPostModal: false,
    showUnFollowedAlert: false,
    showMutedAlert: false,
    showBlockPostModal: false,
    showMainReportPostModal: false,
    showSuspiciousModal: false,
    showHarasmentModal: false,
    showViolenceModal: false,
    showAdultModal: false,
    showIntelectualModal: false,
    showNonReasonModal: false,
    showBlockedSuccess: false,
    showReportedSuccess: false,
    showVisibilitySection: false,
    userToUnFollow: {},
  });

  console.log(router.query);

  const { data, loading, error } = useQuery(getASinglePost, {
    variables: {
      id: feedId,
    },
  });

  console.log(data);

  useEffect(() => {
    if (data) {
      setPost(data?.getOneById);
    }
  }, [data]);

  const blockedPostsData = useQuery(POSTS_I_BLOCKED_QUERY, {
    variables: {
      offset: 0,
      limit: 100000,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (blockedPostsData?.error) {
    console.log("blocked", blockedPostsData.error);
  }

  const refetchThis = blockedPostsData.refetch;

  useEffect(() => {
    if (blockedPostsData?.data)
      setBlockedPosts(blockedPostsData?.data?.getPostsIBlocked);
  }, [blockedPostsData?.data]);

  const [blockPost] = useMutation(BLOCK_POST_MUTATION, {});

  const blockThePost = (post: any, reason: any) => {
    blockPost({
      variables: {
        postId: postState?.post?.id,
        reasonForBlock: reason,
      },
    })
      .then((res) => {
        refetchThis();
        setPostState({
          ...postState,
          showBlockPostModal: false,
          showBlockedSuccess: true,
        });
        console.log("true");
      })
      .catch((err) => console.log(err));
  };

  const [toggleFollowM] = useMutation(TOGGLE_FOLLOW_MUTATION, {
    refetchQueries: [
      {
        query: GET_USER_PROFILE_QUERY,
      },
      {
        query: USERS_I_FOLLOW_QUERY,
      },
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
        },
      },
    ],
  });

  const toggleFollowUser = (user: any) => {
    const userid = user?.id?.toString();
    toggleFollowM({
      variables: {
        userid: userid,
      },
    })
      .then((res) => {
        console.log(res);
        if (/you start following/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setPostState({
            ...postState,
            showUnFollowedAlert: false,
          });
        }
        if (/you cancel follow/.test(res?.data?.FollowerAndUnfollowRequeat)) {
          setPostState({
            ...postState,
            showUnFollowedAlert: true,
          });
        }
      })
      .then((res) => {
        localStorage.setItem("userUnFollowed", JSON.stringify(user));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPostState(JSON.parse(localStorage.getItem("postState")));
    }
  }, []);
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="dApp-S-Home-body">
            {!postState?.showVisibilitySection && (
              <div className="home-post-block">
                <LeftSideBar />
                {!showMoreSuggestions ? (
                  <div className="home-post-mid">
                    <MakePost />
                    <div
                      className="Post-removed-alart-action-box"
                      style={
                        postState?.showUnFollowedAlert
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="Post-removed-alart-action-content">
                        <div className="Post-removed-alart-text">
                          <h3>Post removed</h3>
                          <p>
                            You'll no longer see posts from @
                            {
                              JSON.parse(
                                typeof window !== "undefined" &&
                                  localStorage.getItem("userUnFollowed")
                              )?.userName
                            }{" "}
                            in your feed
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            toggleFollowUser(
                              JSON.parse(localStorage.getItem("userUnFollowed"))
                            )
                          }
                          className="Post-removed-undo-btn"
                        >
                          Undo
                        </button>
                      </div>
                    </div>
                    <div
                      className="Post-removed-alart-action-box"
                      style={
                        postState?.showMutedAlert
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="Post-removed-alart-action-content">
                        <div className="Post-removed-alart-text">
                          <h3>User muted</h3>
                          <p>
                            You'll no longer get notifications when @
                            {
                              JSON.parse(
                                typeof window !== "undefined" &&
                                  localStorage.getItem("userUnFollowed")
                              )?.userName
                            }{" "}
                            makes a post
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setPostState({
                              ...postState,
                              showMutedAlert: false,
                            })
                          }
                          className="Post-removed-undo-btn"
                        >
                          Undo
                        </button>
                      </div>
                    </div>
                    <div
                      className="Post-removed-alart-action-box"
                      style={
                        postState?.showBlockedSuccess
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="Post-removed-alart-action-content">
                        <div className="Post-removed-alart-text">
                          <h3>post blocked</h3>
                          <p>You'll no longer see that post</p>
                        </div>
                        <button
                          onClick={() =>
                            setPostState({
                              ...postState,
                              showBlockedSuccess: false,
                            })
                          }
                          className="Post-removed-undo-btn"
                        >
                          close
                        </button>
                      </div>
                    </div>

                    <SingleFeed
                      //@ts-ignore
                      showSavedPostModal={showSavedPostModal}
                      setShowSavedPostModal={setShowSavedPostModal}
                      showCopiedAlert={showCopiedAlert}
                      setShowCopiedAlert={setShowCopiedAlert}
                      showEmbedPostModal={showEmbedPostModal}
                      setShowEmbedPostModal={setShowEmbedPostModal}
                      post={post}
                      postState={postState}
                      setPostState={setPostState}
                      toggleFollowUser={toggleFollowUser}
                    />
                  </div>
                ) : (
                  <FollowSection
                    //@ts-ignore
                    setShowMoreSuggestions={setShowMoreSuggestions}
                  />
                )}
                <HomeModals
                  showSavedPostModal={showSavedPostModal}
                  setShowSavedPostModal={setShowSavedPostModal}
                  showCopiedAlert={showCopiedAlert}
                  setShowCopiedAlert={setShowCopiedAlert}
                  postState={postState}
                  setPostState={setPostState}
                  showEmbedPostModal={showEmbedPostModal}
                  setShowEmbedPostModal={setShowEmbedPostModal}
                  blockThePost={blockThePost}
                />

                <RightSideBar setShowMoreSuggestions={setShowMoreSuggestions} />
              </div>
            )}

            <VisibilitySection
              postState={postState}
              setPostState={setPostState}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(SingleFeedPage, { getDataFromTree });
