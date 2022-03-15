import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const ManageInvitationsNoReceived = () => {
  return (
    <div className="Manage_invitations_Received_tab_sect">
      <div className="Manage_invitations_Received_tab_headings">
        <button>
          All <span>(0)</span>
        </button>
      </div>
      <div className="Manage_invitations_Received_tab_body">
        <img
          src="/images/No_invitations_img.png"
          alt="img"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default withApollo(ManageInvitationsNoReceived, { getDataFromTree });
