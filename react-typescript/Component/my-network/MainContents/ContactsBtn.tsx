import React from "react";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const ContactsBtn = () => {
  return (
    <div className="cntct_btns_avex">
      <div className="custon_nft33">
        <button
          className="nft_btn btn-rom btn-primary-avex "
          data-toggle="modal"
          data-target="#demo-1"
        >
          <i>
            <img
              src="/images/Plus_network.png"
              alt=""
              className="nft_icons"
            />
          </i>
          Add more contacts
        </button>
        <button className="nft_btn2">
          <i>
            <img
              src="/images/Download-icon.png"
              alt=""
              className="nft_icons"
            />
          </i>
          Export contacts
        </button>
        <button className="nft_btn3">
          <i>
            <img src="/images/Sync-icon.png" alt="" className="nft_icons" />
          </i>
          Manage synced contacts
        </button>
      </div>
    </div>
  );
};

export default withApollo(ContactsBtn, { getDataFromTree });
