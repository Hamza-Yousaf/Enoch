import React from "react";
import { ModalProps } from "./SuspiciousModal";

const IntelectualModal: React.FC<ModalProps> = ({
  setPostState,
  postState,
  setDetailedReason,
  detailedReason,
  reportPost,
}) => {
  return (
    <div className="Report-this-post-Modal-5">
      <div
        className={
          postState?.showIntelectualModal ? "modal fade in" : "modal fade"
        }
        style={
          postState?.showIntelectualModal
            ? { display: "flex", overflowY: "scroll", alignItems: "center" }
            : {}
        }
        id="report_post_reason_Five_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content-5">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({ ...postState, showIntelectualModal: false });
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
              <h3>
                How is this intellectual property infringement or defamation?
              </h3>
              <div className="Report-post-Modal-form">
                <ul>
                  <li
                    onClick={() => {
                      setDetailedReason(
                        "Using your copyrighted work without your permission"
                      );
                    }}
                  >
                    <div className="Report-post-Modal-form-label">
                      <h4>Copyright infringement</h4>
                      <h5>
                        Using your copyrighted work without your permission
                      </h5>
                      <span>
                        <img
                          src="/images/arrow-top-right-r.svg"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      setDetailedReason(
                        "Using your copyrighted work without your permission"
                      );
                    }}
                  >
                    <div className="Report-post-Modal-form-label">
                      <h4>Trademark infringement</h4>
                      <h5>Using your trademark without your permission</h5>
                      <span>
                        <img
                          src="/images/arrow-top-right-r.svg"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      setDetailedReason(
                        "Sharing falsehoods about you that could harm your reputation"
                      );
                    }}
                    className="mb-0"
                  >
                    <div className="Report-post-Modal-form-label">
                      <h4>Defamation</h4>
                      <h5>
                        Sharing falsehoods about you that could harm your
                        reputation
                      </h5>
                      <span>
                        <img
                          src="/images/arrow-top-right-r.svg"
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Report-post-Modal-footer">
              <button
                onClick={() => {
                  reportPost();
                  setPostState({ ...postState, showIntelectualModal: false });
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

export default IntelectualModal;
