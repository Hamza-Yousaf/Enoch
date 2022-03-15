import React, { useState } from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state/index";
import { bindActionCreators } from "redux";
import { getDataFromTree } from "@apollo/client/react/ssr";
import ManageInvitationsReceived from "./ManageInvitationsReceived";
import ManageInvitationsSent from "./ManageInvitationsSent";
import { ReceivedContactData } from "../../../lib/receivedContactData";
import withApollo from "../../../lib/withApollo";

const ManageInvitations = () => {
  const [activeTab, setActiveTab] = useState("Received");
  const [toggleMenu, setToggleMenu] = useState(false);

  const dispatch = useDispatch();
  const { receivedNetworkConnect } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const receivedNetworkHandler = () => {
    receivedNetworkConnect(ReceivedContactData)
    setToggleMenu(false)
  }

  return (
    <div className="Manage-invitations-sect">
      <div className="Manage-invitations-headings">
        <h2>Manage invitations</h2>
        <span
          className="Manage-invitations-settingsBtn"
          onClick={() => setToggleMenu(true)}
        >
          <img src="/images/Settings.svg" alt="img" className="img-fluid" />
        </span>
        <div
          className={classnames("Choose-who-connect-popUp", {
            'd-block': toggleMenu,
            'd-none': !toggleMenu,
          })}
          onClick={()=> receivedNetworkHandler()}
        >
          <h3>Choose who can connect with you</h3>
          <div className="Choose-who-connect-popUp-text">
            <h4>Choose what invitations to receive</h4>
            <p>People you are following who are not connections</p>
          </div>
        </div>
      </div>
      <div className="Manage-invitations-tab-sect">
        <div className="Manage_invitations_tabs">
          <button
            id="manage_Invititation_Tab_defaultOpen"
            onClick={() => setActiveTab("Received")}
            className={classnames("Manage_invitations_tablinks", {
              active: activeTab == "Received",
            })}
          >
            Received
          </button>
          <button
            className={classnames("Manage_invitations_tablinks", {
              active: activeTab == "Sent",
            })}
            onClick={() => setActiveTab("Sent")}
          >
            Sent
          </button>
        </div>
        {activeTab == "Received" && <ManageInvitationsReceived />}
        {activeTab == "Sent" && <ManageInvitationsSent />}
      </div>
    </div>
  );
};

export default withApollo(ManageInvitations, { getDataFromTree });
