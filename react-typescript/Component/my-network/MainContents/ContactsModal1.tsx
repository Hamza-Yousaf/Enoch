import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const ContactsModal1 = () => {
  return (
    <>
      <div className="modal mynet-messeging-modal" id="demo-1">
        <div className="modal-dialog modal-dialog-centered modal-xl ">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              <i className="icon-xs-o-md"></i>
            </button>
            <div className="modal-header">
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
                Syncing your contacts is the fastest way to grow your network
              </p>
              <p className="description-avex">
                We’ll periodically import and store your contacts to suggest
                connections and show you relevant updates. You control who you
                connect to, and you can manage your contacts anytime. Learn more
              </p>
              <div className="netform-group">
                <div className="input-group-nft">
                  <input
                    type="email"
                    id="emails"
                    name="emails"
                    multiple
                    placeholder="jaishankar.singh@elementzerolabs.com"
                  />
                  <button className="continue-btn" type="submit">
                    {" "}
                    Continue{" "}
                  </button>
                </div>
              </div>
              <p className="oneofthese">Or use one of these:</p>
              <ul className="socialul">
                <li className="socialiconsbox">
                  <div className="box">
                    <div className="center">
                      <img className="mail" src="/images/icon-jaun.png" />
                    </div>
                  </div>
                </li>
                <li className="socialiconsbox">
                  <div className="box">
                    <div className="center">
                      <img className="mail" src="/images/linked-ion.png" />
                    </div>
                  </div>
                </li>
                <li className="socialiconsbox">
                  <div className="box">
                    <div className="center">
                      <img className="mail" src="/images/circletick.png" />
                    </div>
                  </div>
                </li>
                <li className="socialiconsbox">
                  <div className="box">
                    <div className="center">
                      <img className="mail" src="/images/Yahoo.png" />
                    </div>
                  </div>
                </li>
                <li
                  className="socialiconsbox "
                  data-toggle="modal"
                  data-target="#demo-2"
                  data-dismiss="modal"
                >
                  <div className="box">
                    <div className="center">
                      <img className="mail " src="/images/messag-sort.png" />
                    </div>
                  </div>
                </li>
                <li className="socialiconsbox">
                  <div className="box">
                    <div
                      className="center"
                      data-toggle="modal"
                      data-target="#demo-3"
                      data-dismiss="modal"
                    >
                      <img className="mail" src="/images/Download-sort.png" />
                    </div>
                  </div>
                </li>
              </ul>
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

export default withApollo(ContactsModal1, { getDataFromTree });
