import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
import {
  GET_ALL_COMMUNITIES,
  GET_ALL_ENOCH_COMMUNITIES,
} from "../../../graphql/queries";
import withApollo from "../../../lib/withApollo";
const MainContents = dynamic(() => import("./MainContents/MainContents"));
import { getDataFromTree } from "@apollo/client/react/ssr";
const CreateCommunityModal = dynamic(() => import("../../CreateCommunityModal"));

const MyCommunities = () => {
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

  const { data, loading, error } = useQuery(GET_ALL_COMMUNITIES);
  const allCommunities = useQuery(GET_ALL_ENOCH_COMMUNITIES);

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
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <MainContents
        loading={loading}
        communities={data?.getAllMyCommunity}
        allCommunities={allCommunities}
      />
      <CreateCommunityModal/>
    </div>
  );
};

export default withApollo(MyCommunities, { getDataFromTree });
