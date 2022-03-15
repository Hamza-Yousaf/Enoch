import React, { createContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const MainSection = dynamic(() => import("./Components/MainSection"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
import { useRouter } from "next/router";
const CreateCommunityModal = dynamic(() => import("../CreateCommunityModal"));
const CreateFirstPostModal = dynamic(() => import("../CreateFirstPostModal"));
import { useMutation, useQuery } from "@apollo/client";
import withApollo from "../../lib/withApollo";
const HomeModals = dynamic(() => import("./HomeModals"));
import { BLOCK_POST_MUTATION } from "../../graphql/mutattions/blockPost";
import { POSTS_QUERY } from "../../graphql/Queries/homepostQuery";
import { POSTS_I_BLOCKED_QUERY } from "../../graphql/Queries/postsIBlocked";
import { getDataFromTree } from "@apollo/client/react/ssr";

export const PostContext = createContext(null);

const HomePost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showCreateCommModal, setCreateCommModal] = useState(
    router.query.showCreateCommunityModal
  );
  const [showSavedPostModal, setShowSavedPostModal] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [showEmbedPostModal, setShowEmbedPostModal] = useState(false);
  const [showSharePostModal, setShowSharePostModal] = useState(false);
  const [blockedPosts, setBlockedPosts] = useState([]);

  const [postModalState, setPostModalState] = useState({
    showSharePostModal: false,
    currentPost: {},
  });

  const [postState, setPostState] = useState({
    post: null,
    embedCodeCopied: false,
    showEmbedPostModal: false,
    showSharePostModal: false,
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

  const { showCreateCommunityModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (showCreateCommModal) {
      showCreateCommunityModal(true);
    }
  }, [showCreateCommModal]);

  console.log("state", postState);

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

  const [blockPost] = useMutation(BLOCK_POST_MUTATION, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
        },
      },
      {
        query: POSTS_I_BLOCKED_QUERY,
        variables: {
          offset: 0,
          limit: 500,
        },
      },
    ],
  });

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
      })
      .catch((err) => console.log(err));
  };
  return (
    <PostContext.Provider value={{ postModalState, setPostModalState }}>
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <MainSection
          showSavedPostModal={showSavedPostModal}
          setShowSavedPostModal={setShowSavedPostModal}
          showCopiedAlert={showCopiedAlert}
          setShowCopiedAlert={setShowCopiedAlert}
          showEmbedPostModal={showEmbedPostModal}
          setShowEmbedPostModal={setShowEmbedPostModal}
          postState={postState}
          setPostState={setPostState}
          blockedPosts={blockedPosts}
        />
        <HomeModals
          showSavedPostModal={showSavedPostModal}
          setShowSavedPostModal={setShowSavedPostModal}
          showSharePostModal={showSharePostModal}
          setShowSharePostModal={setShowSharePostModal}
          showCopiedAlert={showCopiedAlert}
          setShowCopiedAlert={setShowCopiedAlert}
          showEmbedPostModal={showEmbedPostModal}
          setShowEmbedPostModal={setShowEmbedPostModal}
          postState={postState}
          setPostState={setPostState}
          blockThePost={blockThePost}
        />
      </div>
      <CreateCommunityModal />
      <CreateFirstPostModal />
    </PostContext.Provider>
  );
};

export default withApollo(HomePost, { getDataFromTree });
