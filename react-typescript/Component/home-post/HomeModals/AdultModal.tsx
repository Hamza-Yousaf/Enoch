import React from "react";
import ReportReason from "./ReportReason";
import { ModalProps } from "./SuspiciousModal";

const AdultModal: React.FC<ModalProps> = ({
  setPostState,
  postState,
  setDetailedReason,
  detailedReason,
  reportPost,
}) => {
  return (
    <div className="Report-this-post-Modal-4">
      <div
        className={postState?.showAdultModal ? "modal fade in" : "modal fade"}
        style={
          postState?.showAdultModal
            ? { display: "flex", overflowY: "scroll", alignItems: "center" }
            : {}
        }
        id="report_post_reason_Four_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content-4">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({ ...postState, showAdultModal: false });
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
              <h3>How is this adult content?</h3>
              <div className="Report-post-Modal-form">
                <form>
                  <ul>
                    <ReportReason
                      reason={
                        "Nudity, sexual scenes or language, or sex trafficking"
                      }
                      detailedReason={detailedReason}
                      title={"Nudity or sexual content"}
                      setDetailedReason={setDetailedReason}
                    />

                    <ReportReason
                      reason={"Shocking or graphic content"}
                      detailedReason={detailedReason}
                      title={"Shocking or gory"}
                      setDetailedReason={setDetailedReason}
                    />

                    <ReportReason
                      reason={
                        "Unwanted romantic advances, requests for sexual favors, or unwelcome sexual remarks"
                      }
                      detailedReason={detailedReason}
                      title={"Sexual harassment"}
                      setDetailedReason={setDetailedReason}
                    />
                  </ul>
                </form>
              </div>
            </div>
            <div className="Report-post-Modal-footer">
              <button
                onClick={() => {
                  setPostState({ ...postState, showAdultModal: false });
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  reportPost();
                  setPostState({ ...postState, showAdultModal: false });
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

export default AdultModal;
