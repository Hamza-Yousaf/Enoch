import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../lib/withApollo";

const ContactsModal3 = () => {
  return (
    <>
      <div className="modal mynet-messeging-modal" id="demo-3">
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
              <p className="syncfast">See who you already know on Enoch</p>
              <p className="upldContactfile">Upload your contacts file</p>
              <div className="netform-group">
                <div className="input-group-nft">
                  <div className="artdeco-text-input">
                    <label
                      className="avex_upload_files"
                      aria-label="Select files from your computer in .csv, .txt, or .vcf format"
                      role="button"
                    >
                      Select files from your computer
                      <li aria-hidden="true" className="avex_pl2">
                        <span>
                          <img src="/images/Attachment_avex.png" alt="" />
                        </span>
                      </li>
                    </label>
                    <input
                      id="contacts-file-input"
                      className="mn-abi-form__file-upload-input"
                      type="file"
                    />

                    <button
                      type="submit"
                      id="ember862"
                      className="avex_upload_btn"
                      disabled={true}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <p className="invitetxt2">
                File formats must be .csv, .txt, or .vcf.
              </p>
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

export default withApollo(ContactsModal3, { getDataFromTree });
