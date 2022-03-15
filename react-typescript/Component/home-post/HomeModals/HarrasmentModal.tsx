import React from "react";
import { ModalProps } from "./SuspiciousModal";

const HarrasmentModal: React.FC<ModalProps> = ({
  setPostState,
  postState,
  setDetailedReason,
  detailedReason,
  reportPost,
}) => {
  return (
    <div className="Report-this-post-Modal-2">
      <div
        className={
          postState?.showHarasmentModal ? "modal fade in" : "modal fade"
        }
        style={
          postState?.showHarasmentModal
            ? { display: "flex", overflowY: "scroll", alignItems: "center" }
            : {}
        }
        id="report_post_reason_Two_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content-2">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({ ...postState, showHarasmentModal: false });
                }}
                className="close"
                data-dismiss="modal"
              >
                <img
                  src="/images/create-post-modal-Cross.png"
                  alt="icon"
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="Report-post-Modal-body">
              <h3>How is this harassment or hateful speech?</h3>
              <div className="Report-post-Modal-form">
                <form>
                  <ul>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Attacking or intimidating others, or deliberately and repeatedly disrupting conversations"
                        );
                      }}
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Bullying or trolling</h4>
                          <h5>
                            Attacking or intimidating others, or deliberately
                            and repeatedly disrupting conversations
                          </h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Attacking or intimidating others, or deliberately and repeatedly disrupting conversations"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Unwanted romantic advances, requests for sexual favors, or unwelcome sexual remarks"
                        );
                      }}
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Sexual harassment</h4>
                          <h5>
                            Unwanted romantic advances, requests for sexual
                            favors, or unwelcome sexual remarks
                          </h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Unwanted romantic advances, requests for sexual favors, or unwelcome sexual remarks"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Hateful, degrading, or inflammatory speech"
                        );
                      }}
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Hateful or abusive speech</h4>
                          <h5>Hateful, degrading, or inflammatory speech</h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Hateful, degrading, or inflammatory speech"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Hateful, degrading, or inflammatory speech"
                        );
                      }}
                      className="mb-0"
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Spam</h4>
                          <h5>
                            Sharing irrelevant or repeated content to boost
                            visibility or for monetary gain
                          </h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Sharing irrelevant or repeated content to boost visibility or for monetary gain"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="Report-post-Modal-footer">
              <button
                onClick={() => {
                  setPostState({ ...postState, showHarasmentModal: false });
                  reportPost();
                }}
                className={
                  detailedReason?.length < 1
                    ? "submit-btn disable"
                    : "submit-btn"
                }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarrasmentModal;
