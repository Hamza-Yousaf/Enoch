//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const LeftSideBar = dynamic(
  () => import("../../Component/onBoard/left-sidebar")
);
const RightSideBar = dynamic(
  () => import("../../Component/home-post/Components/MainSection/RightSideBar")
);
const FollowSection = dynamic(
  () =>
    import(
      "../../Component/FollowShowMore/Components/MainSection/FollowSection"
    )
);
const MakePost = dynamic(
  () => import("../../Component/home-post/Components/MainSection/MakePost")
);
const SingleFeed = dynamic(
  () => import("../../Component/home-post/Components/MainSection/SingleFeed")
);
import { useMutation, useQuery } from "@apollo/client";
import { getASinglePost } from "../../graphql/singlePost";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
const HomeModals = dynamic(
  () => import("../../Component/home-post/HomeModals")
);
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import { savedPostsQuery } from "../../graphql/Queries/savedPosts";
import { POSTS_I_BLOCKED_QUERY } from "../../graphql/Queries/postsIBlocked";
import { BLOCK_POST_MUTATION } from "../../graphql/mutattions/blockPost";
import { TOGGLE_FOLLOW_MUTATION } from "../../graphql/userProfileMutations";
import { USERS_I_FOLLOW_QUERY } from "../../graphql/Queries/usersIFollow";
import { POSTS_QUERY } from "../../graphql/Queries/homepostQuery";
const VisibilitySection = dynamic(
  () => import("../../Component/home-post/Components/VisibilitySection")
);
import { GetStaticPropsContext } from "next";

// export async function getStaticProps({}: GetStaticPropsContext) {
//   return {
//     props: {},
//   };
// }

const SavedFeedsPage = () => {
  const router = useRouter();
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  const [showSavedPostModal, setShowSavedPostModal] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [blockedPosts, setBlockedPosts] = useState([]);
  const [posts, setPosts] = useState(null);
  const [offset, setOffset] = useState(0);
  const [post, setPost] = useState(null);
  const [usersIFollow, setUsersIFollow] = useState([]);
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

  const { data, loading, error } = useQuery(savedPostsQuery, {
    variables: {
      offset,
      limit: 150,
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log(data);

  useEffect(() => {
    if (data) {
      setPosts(data?.getSavedPost);
    }
  }, [data]);

  console.log("postss", posts);

  const usersIFollowQuery = useQuery(USERS_I_FOLLOW_QUERY);

  useEffect(() => {
    if (usersIFollowQuery?.data) {
      setUsersIFollow(usersIFollowQuery?.data?.UsersIFollowerd);
    }
  }, [usersIFollowQuery?.data]);

  console.log(posts);

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
        //@ts-ignore
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

  const checkIfPostIsBlocked = (post: any) => {
    let result = blockedPosts.filter((blockPost) => {
      return blockPost?.id === post?.id;
    });

    if (result?.length > 0) {
      return true;
    }
    if (result?.length < 1) {
      return false;
    }
  };

  const checkIfIFollowUser = (user: any) => {
    let result = usersIFollow.filter((userIFollow) => {
      return user.id === userIFollow?.followinguserid;
    });

    if (result?.length > 0) {
      return true;
    }
    if (result?.length < 1) {
      return false;
    }
  };

  const [user, setUser] = useState(null);

  const userQuerydata = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (userQuerydata?.data) {
      setUser(userQuerydata?.data?.getUserProfile);
    }
  }, [userQuerydata?.data]);

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
                    {posts?.map((post: any, index: any) => {
                      if (
                        checkIfIFollowUser(post.user) ||
                        post?.user?.id === user?.id
                      ) {
                        if (checkIfPostIsBlocked(post) === false) {
                          return (
                            <SingleFeed
                              showSavedPostModal={showSavedPostModal}
                              setShowSavedPostModal={setShowSavedPostModal}
                              showCopiedAlert={showCopiedAlert}
                              setShowCopiedAlert={setShowCopiedAlert}
                              postState={postState}
                              setPostState={setPostState}
                              toggleFollowUser={toggleFollowUser}
                              key={index}
                              post={post}
                              toggleFollowUser={toggleFollowUser}
                            />
                          );
                        }
                      }
                    })}
                  </div>
                ) : (
                  <FollowSection
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

export default withApollo(SavedFeedsPage, { getDataFromTree });
