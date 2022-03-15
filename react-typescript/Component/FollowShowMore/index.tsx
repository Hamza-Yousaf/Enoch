import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const MainSection = dynamic(() => import("./Components/MainSection"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";
const SavedAlert = dynamic(() => import("../home-post/Components/SavedAlert"));
const CopyLinkAlert = dynamic(() => import("../home-post/Components/CopyLinkAlert"));
const ReportPostAlert = dynamic(() => import("../home-post/Components/ReportPostAlert"));
import { useRouter } from "next/router";
const CreateCommunityModal = dynamic(() => import("../CreateCommunityModal"));
const CreateFirstPostModal = dynamic(() => import("../CreateFirstPostModal"));
import { useQuery } from "@apollo/client";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import withApollo from "../../lib/withApollo";

const HomePost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showCreateCommModal, setCreateCommModal] = useState(
    router.query.showCreateCommunityModal
  );

  const {
    showSavedPostAlert,
    showCreateCommunityModal,
    currentLoggedInUser,
    get_all_users_posts,
  } = bindActionCreators(actionCreators, dispatch);

  const showSavedPostAlertValue = useSelector(
    (state: State) => state.showSavedPostAlert
  );
  const showReportPostAlertValue = useSelector(
    (state: State) => state.showReportPostAlert
  );
  const showCopyLinkAlertValue = useSelector(
    (state: State) => state.showCopyLinkAlert
  );

  const posts = useSelector((state: State) => state.getAllPosts);
  console.log(posts);

  useEffect(() => {
    if (showCreateCommModal) {
      showCreateCommunityModal(true);
    }
  }, [showCreateCommModal]);

  return (
    <>
      <div className="container-fluid dashboard-body-bg second-body-bg">
        <Header />
        <MainSection />
        {showSavedPostAlertValue && <SavedAlert />}
        {showCopyLinkAlertValue && <CopyLinkAlert />}
        {showReportPostAlertValue && <ReportPostAlert />}
      </div>
      <CreateCommunityModal />
      <CreateFirstPostModal />
    </>
  );
};

export default HomePost;
