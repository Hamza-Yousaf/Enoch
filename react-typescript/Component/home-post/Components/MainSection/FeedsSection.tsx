//@ts-nocheck
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const MakePost = dynamic(() => import("./MakePost"));
import { Skeleton, Spin } from "antd";
const SingleFeed = dynamic(() => import("./SingleFeed"));
import { POSTS_QUERY } from "../../../../graphql/Queries/homepostQuery";
import { useMutation, useQuery } from "@apollo/client";
import withApollo from "../../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { ALL_POSTS_COUNT_QUERY } from "../../../../graphql/Queries/postsCount";
import { USERS_I_FOLLOW_QUERY } from "../../../../graphql/Queries/usersIFollow";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";
import { TOGGLE_FOLLOW_MUTATION } from "../../../../graphql/userProfileMutations";
const InfiniteScroll = dynamic(() => import("react-infinite-scroll-component"));

interface Props {
  showSavedPostModal: boolean;
  setShowSavedPostModal: any;
  showCopiedAlert: boolean;
  setShowCopiedAlert: any;
  showEmbedPostModal: boolean;
  setShowEmbedPostModal: any;
  postState: any;
  setPostState: any;
  blockedPosts: any;
}

const FeedsSection: React.FC<Props> = ({
  showSavedPostModal,
  setShowSavedPostModal,
  showCopiedAlert,
  setShowCopiedAlert,
  showEmbedPostModal,
  setShowEmbedPostModal,
  postState,
  setPostState,
  blockedPosts,
}) => {
  console.log("post state", postState);

  const [Posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [usersIFollow, setUsersIFollow] = useState([]);
  const [user, setUser] = useState(null);

  const userQuerydata = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (userQuerydata?.data) {
      setUser(userQuerydata?.data?.getUserProfile);
    }
  }, [userQuerydata?.data]);

  const usersIFollowQuery = useQuery(USERS_I_FOLLOW_QUERY);

  useEffect(() => {
    if (usersIFollowQuery?.data) {
      setUsersIFollow(usersIFollowQuery?.data?.UsersIFollowerd);
    }
  }, [usersIFollowQuery?.data]);

  console.log("i follow", usersIFollow);

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

  const postsCountQueryData = useQuery(ALL_POSTS_COUNT_QUERY);

  useEffect(() => {
    if (postsCountQueryData?.data) {
      setPostCount(postsCountQueryData?.data?.getAllPostCount);
    }
  }, [postsCountQueryData?.data]);

  const postData = useQuery(POSTS_QUERY, {
    variables: {
      offset: offset,
      limit: 150,
    },
    notifyOnNetworkStatusChange: true,
  });
  const { data, loading, error, fetchMore } = postData;

  useEffect(() => {
    if (postData) {
      setPosts(postData?.data?.getAllPost);
    }
  }, [postData.data]);

  const compareFunc = (a: any, b: any) => {
    let date1: any = /T/.test(a.updatedAt)
      ? new Date(a.updatedAt)
      : new Date(Number(a.updatedAt));

    let date2: any = /T/.test(a.updatedAt)
      ? new Date(b.updatedAt)
      : new Date(Number(b.updatedAt));

    return date2 - date1;
  };

  console.log("theee posts", Posts);

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
        variables: {},
      },
    ],
  });

  const toggleFollowUser = (user: any) => {
    console.log("userrr", postState);
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

  console.log("blocked", blockedPosts);

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

  // console.log("the posts", Posts);
  console.log("hey...", postState, "pstate");
  return (
    <div className="home-post-mid">
      <MakePost />

      {Posts?.length < 1 || Posts === undefined ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : (
        <>
          <InfiniteScroll
            scrollThreshold={1}
            dataLength={data?.getAllPost?.length}
            next={() => {
              fetchMore({
                variables: {
                  offset: data.getAllPost?.length,
                },
              })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            }}
            hasMore={data.getAllPost?.length < postCount}
            loader={
              <div className="d-flex flex-row justify-content-center">
                <Spin />
              </div>
            }
            style={{
              overflow: "hidden",
              minHeight: "100vh",
            }}
            s
          >
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
                      JSON.parse(localStorage.getItem("userUnFollowed"))
                        ?.userName
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
                      JSON.parse(localStorage.getItem("userUnFollowed"))
                        ?.userName
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
            {Posts?.map((post: any, index: any) => {
              // console.log("checking...", checkIfIFollowUser(post.user));
              //@ts-ignore
              // if (post?.user?.id === user?.id) {
              if (checkIfPostIsBlocked(post) === false) {
                return (
                  <SingleFeed
                    showSavedPostModal={showSavedPostModal}
                    setShowSavedPostModal={setShowSavedPostModal}
                    showCopiedAlert={showCopiedAlert}
                    setShowCopiedAlert={setShowCopiedAlert}
                    showEmbedPostModal={showEmbedPostModal}
                    setShowEmbedPostModal={setShowEmbedPostModal}
                    postState={postState}
                    setPostState={setPostState}
                    toggleFollowUser={toggleFollowUser}
                    key={index}
                    post={post}
                  />
                );
              }
            })}
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default withApollo(FeedsSection, { getDataFromTree });
