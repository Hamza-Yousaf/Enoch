import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const ContactsModal2 = () => {
  return (
    <>
      <div className="modal mynet-messeging-modal" id="demo-2">
        <div className="modal-dialog modal-dialog-centered modal-xl ">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              <i className="icon-xs-o-md"></i>
            </button>
            <div className="modal-header">
              <button
                className="btn-goback"
                type="button"
                data-toggle="modal"
                data-target="#demo-1"
                data-dismiss="modal"
              >
                {" "}
                <img className="backimg" src="/images/Arrow-left.png" />
                Go Back
              </button>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="nft_cho_pon" aria-hidden="true">
                  <img className="crossing" src="/images/round-cross.png" />
                </span>
              </button>
            </div>

            <div className="modal-body">
              <img className="bookpng" src="/images/book.png" />
              <h2 className="alreadyknow">
                {" "}
                See who you already know on Enoch
              </h2>
              <p className="syncfast">
                Directly invite your email contacts to connect on LinkedIn
              </p>

              <div className="netform-group">
                <div className="input-group-nft">
                  <input
                    type="email"
                    id="emails-model-2"
                    name="emails"
                    multiple
                    placeholder="Enter email addresses here, separated by comma"
                  />
                </div>
              </div>
              <div className="network-msg-innerblock">
                <p className="invitetxt">
                  How do you want to invite your contacts to Enoch?
                </p>
                <div className="community-type-content_avex_nft1">
                  <div id="radio-group" className="community-type-checkbox">
                    <label className="container">
                      <p>I’d like to add you to my professional network</p>
                      <input id="radio-group" type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      <p>Enoch can help you build a network, like I’m doing</p>
                      <input id="radio-group" type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      <p> Try Enoch if you’re looking to find the right job</p>
                      <input id="radio-group" type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      <p> Let’s use Enoch to keep in touch more often</p>
                      <input id="radio-group" type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      <p>
                        {" "}
                        Enoch keeps me informed, it might give you an edge at
                        work
                      </p>
                      <input id="radio-group" type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <div className="disabled-button">
                      <button
                        id="letsCook"
                        className="continuetobox"
                        disabled={true}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="footerimages">
                <ul className="footerpics">
                  <li className="jhonimage">
                    <img
                      className="circleimage1"
                      src="/images/jhonerambo.png"
                    />
                  </li>
                  <li className="nigimage">
                    <img className="circleimage2" src="/images/jhonnig.png" />
                  </li>
                  <li className="girlimage">
                    <img className="circleimage3" src="/images/jaungrl.png" />
                  </li>
                </ul>
                <span className="Footertext">
                  {" "}
                  Find more connections like David, Sanjiv and Monika.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(ContactsModal2, { getDataFromTree });
