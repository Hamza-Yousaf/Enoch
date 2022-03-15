import React from "react";
import dynamic from "next/dynamic";
const ReportReason = dynamic(() => import("./ReportReason"));
import { ModalProps } from "./SuspiciousModal";

const ViolenceModal: React.FC<ModalProps> = ({
  setPostState,
  postState,
  setDetailedReason,
  detailedReason,
  reportPost,
}) => {
  return (
    <div className="Report-this-post-Modal-3">
      <div
        className={
          postState?.showViolenceModal ? "modal fade in" : "modal fade"
        }
        style={
          postState?.showViolenceModal
            ? { display: "flex", overflowY: "scroll", alignItems: "center" }
            : {}
        }
        id="report_post_reason_Three_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content-3">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({ ...postState, showViolenceModal: false });
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
                    <ReportReason
                      reason={
                        "Encouraging violent acts or threatening physical harm"
                      }
                      detailedReason={detailedReason}
                      title={"Self-harm"}
                      setDetailedReason={setDetailedReason}
                    />
                    <ReportReason
                      reason={"Suicidal remarks or threatening to harm oneself"}
                      detailedReason={detailedReason}
                      title={"Inciting violence or is a threat"}
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
                        "Depicting or encouraging terrorist acts or severe harm"
                      }
                      detailedReason={detailedReason}
                      title={"Terrorism or act of extreme violence"}
                      setDetailedReason={setDetailedReason}
                    />
                  </ul>
                </form>
              </div>
            </div>
            <div className="Report-post-Modal-footer">
              <button
                onClick={() => {
                  setPostState({ ...postState, showViolenceModal: false });
                }}
              >
                Back
              </button>
              <button
                onClick={() => {
                  reportPost();
                  setPostState({ ...postState, showViolenceModal: false });
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

export default ViolenceModal;
