import React from "react";

export interface ModalProps {
  setPostState: any;
  postState: any;
  setDetailedReason: any;
  detailedReason: any;
  reportPost: any;
}

const SuspiciousModal: React.FC<ModalProps> = ({
  setPostState,
  postState,
  setDetailedReason,
  detailedReason,
  reportPost,
}) => {
  return (
    <div className="Report-this-post-Modal-1">
      <div
        className={
          postState?.showSuspiciousModal ? "modal fade in" : "modal fade"
        }
        style={
          postState?.showSuspiciousModal
            ? { display: "flex", overflowY: "scroll", alignItems: "center" }
            : {}
        }
        id="report_post_reason_One_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content-1">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({ ...postState, showSuspiciousModal: false });
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
              <h3>How is this suspicious, spam, or fake?</h3>
              <div className="Report-post-Modal-form">
                <form>
                  <ul>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Spreading false or misleading information as if it were factual"
                        );
                      }}
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Misinformation</h4>
                          <h5>
                            Spreading false or misleading information as if it
                            were factual
                          </h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Spreading false or misleading information as if it were factual"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Deceiving others to obtain money or access private information"
                        );
                      }}
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Fraud or scam</h4>
                          <h5>
                            Deceiving others to obtain money or access private
                            information
                          </h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Deceiving others to obtain money or access private information"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Sharing irrelevant or repeated content to boost visibility or for monetary gain"
                        );
                      }}
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
                    <li
                      onClick={() => {
                        setDetailedReason(
                          "Inaccurate or misleading representation"
                        );
                      }}
                      className="mb-0"
                    >
                      <label className="container">
                        <div className="Report-post-Modal-form-label">
                          <h4>Fake account</h4>
                          <h5>Inaccurate or misleading representation</h5>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            detailedReason ===
                            "Inaccurate or misleading representation"
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
                  setPostState({ ...postState, showSuspiciousModal: false });
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  reportPost();
                  setPostState({ ...postState, showSuspiciousModal: false });
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

export default SuspiciousModal;
