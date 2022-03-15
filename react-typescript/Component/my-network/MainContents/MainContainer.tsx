import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state/index";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import FollowContainer from "./FollowContainer";
import NoPendingInvitations from "./NoPendingInvitations";
import ManageInvitations from "./ManageInvitations";
import ContactsContainer from "./ContactsContainer";
import PeopleFollowContainer from "./PeopleFollowContainer";

const MainContainer = () => {
  const networkContentValue = useSelector(
    (state: State) => state.networkState.activeContent
  );

  return (
    <>
      {networkContentValue == "all-connecttion" ? (
        <>
          <NoPendingInvitations />
          <FollowContainer />
        </>
      ) : networkContentValue == "manage-invitations" ? (
        <>
          <ManageInvitations />
          <FollowContainer />
        </>
      ) : networkContentValue == "contacts" ? (
        <ContactsContainer />
      ) :
        networkContentValue == "people-follow" ? (
          <PeopleFollowContainer />
        ) :
          (
            ""
          )}
    </>
  );
};

export default withApollo(MainContainer, { getDataFromTree });
