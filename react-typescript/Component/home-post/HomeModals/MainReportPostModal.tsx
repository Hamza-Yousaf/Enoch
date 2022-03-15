import React, { useState } from "react";

interface Props {
  postState: any;
  setPostState: any;
  setMainReason: any;
}

const MainReportPostModal: React.FC<Props> = ({
  postState,
  setPostState,
  setMainReason,
}) => {
  return (
    <div className="Report-this-post-Modal">
      <div
        className={
          postState?.showMainReportPostModal ? "modal fade in" : "modal fade"
        }
        style={
          postState?.showMainReportPostModal
            ? {
                display: "flex",
                overflowY: "scroll",
              }
            : { display: "none" }
        }
        id="report_this_post_Modal"
        role="dialog"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content Report-this-post-Modal-content">
            <div className="Report-post-Modal-headings">
              <h2>Report</h2>
              <button
                onClick={() => {
                  setPostState({
                    ...postState,
                    showMainReportPostModal: false,
                  });
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
              <h3>Why are you reporting this?</h3>
              <div className="why-reporting-list">
                <ul>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showSuspiciousModal: true,
                      });
                      setMainReason("Suspicious, spam, or fake");
                    }}
                  >
                    Suspicious, spam, or fake
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showHarasmentModal: true,
                      });
                      setMainReason("Harassment or hateful speech");
                    }}
                  >
                    Harassment or hateful speech
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showViolenceModal: true,
                      });
                      setMainReason("Violence or physical harm");
                    }}
                  >
                    Violence or physical harm{" "}
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showAdultModal: true,
                      });
                      setMainReason("Adult content");
                    }}
                  >
                    Adult content{" "}
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showIntelectualModal: true,
                      });
                      setMainReason(
                        "Intellectual property infrigement or defamation"
                      );
                    }}
                  >
                    Intellectual property infrigement or defamation{" "}
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="pb-0 reporting-reason-none">
                None of the reporting reason apply.
              </h3>
              <div className="why-reporting-list pb-2">
                <ul>
                  <li
                    onClick={() => {
                      setPostState({
                        ...postState,
                        showMainReportPostModal: false,
                        showBlockPostModal: true,
                      });
                      setMainReason("None of the reporting reason apply");
                    }}
                  >
                    I still don’t want to see this{" "}
                    <span>
                      <img
                        src="/images/report-post-arrow-right.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReportPostModal;
