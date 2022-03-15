import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state/index";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { bindActionCreators } from "redux";

const NoPendingInvitations = () => {
  const networkContentValue = useSelector(
    (state: State) => state.networkState.activeContent
  );
  const dispatch = useDispatch();
  const { changeNetworkContent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const changeNetworkContentHandler = (tabName: string) => {
    changeNetworkContent(tabName);
  };
  return (
    <div className="No-pending-invitations-sect">
      <h2>No pending invitations</h2>
      <button onClick={()=> changeNetworkContentHandler("manage-invitations")}>Manage</button>
    </div>
  );
};


export default withApollo(NoPendingInvitations, { getDataFromTree });
