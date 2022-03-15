//@ts-nocheck
import { useMutation } from "@apollo/client";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { REPORT_POST_MUTATION } from "../../../graphql/mutattions/reportPost";
import dynamic from "next/dynamic";
import ShareModal from "./ShareModal";
const AdultModal = dynamic(() => import("./AdultModal"));
const DontWantToSeePostModal = dynamic(
  () => import("./DontWantToSeePostModal")
);
const EmbedPostModal = dynamic(() => import("./EmbedPostModal"));
const HarrasmentModal = dynamic(() => import("./HarrasmentModal"));
const IntelectualModal = dynamic(() => import("./IntelectualModal"));
const MainReportPostModal = dynamic(() => import("./MainReportPostModal"));
const SuspiciousModal = dynamic(() => import("./SuspiciousModal"));
const ViolenceModal = dynamic(() => import("./ViolenceModal"));

interface Props {
  showSavedPostModal: boolean;
  setShowSavedPostModal: any;
  showSharePostModal: any;
  setShowSharePostModal: any;
  showCopiedAlert: boolean;
  setShowCopiedAlert: any;
  showEmbedPostModal: boolean;
  setShowEmbedPostModal: any;
  postState: any;
  setPostState: any;
  blockThePost: any;
}

const HomeModals: React.FC<Props> = ({
  showSavedPostModal,
  setShowSavedPostModal,
  showCopiedAlert,
  setShowCopiedAlert,
  showEmbedPostModal,
  setShowEmbedPostModal,
  postState,
  setPostState,
  blockThePost,
  showSharePostModal,
  setShowSharePostModal,
}) => {
  const [currentPostOnClipBoard, setCurrentPostOnClipBoard] = useState("");
  const [mainReason, setMainReason] = useState("");
  const [detailedReason, setDetailedReason] = useState("");

  const goToPost = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard
        .readText()
        .then((text) => {
          // `text` contains the text read from the clipboard
          router.push(text);
        })
        .catch((err) => {
          // maybe user didn't grant access to read from clipboard
          console.log("Something went wrong", err);
        });
    }
  };

  const reportPostMutationData = useMutation(REPORT_POST_MUTATION);

  const reportPost = () => {
    reportPostMutationData[0]({
      variables: {
        postId: postState?.post?.id,
        detailedReasonForReportingPost: detailedReason,
        mainReasonForReportingPost: mainReason,
      },
    })
      .then((res) => {
        setPostState({
          ...postState,
          showReportedSuccess: true,
          showHarasmentModal: false,
          showViolenceModal: false,
          showSuspiciousModal: false,
          showIntelectualModal: false,
          showAdultModal: false,
        });
      })
      .catch((err) => console.log(err));
  };

  console.log("post state", postState);
  console.log("details", mainReason, detailedReason);
  return (
    <div className="user-homePost-modal-section">
      <div className="post-notification-sect">
        <div
          className="post-notification-box save-post-notification-box"
          style={
            showSavedPostModal
              ? {
                  display: "block",
                  position: "fixed",
                  zIndex: 2,
                  top: 500,
                }
              : {}
          }
        >
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>
                Item saved.
                <a href="/feeds/saved" className="view-all-save-post">
                  View all
                </a>
              </h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button className="save-post-notification-box-close-btn">
              <img
                onClick={() => setShowSavedPostModal(false)}
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
            <p>1 of 2</p>
          </div>
        </div>
        <div
          className="post-notification-box copy-link-post-notification-box"
          style={
            showCopiedAlert
              ? {
                  display: "block",
                  position: "fixed",
                  zIndex: 2,
                  top: 500,
                }
              : {}
          }
        >
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>
                Link copied to clipboard.{" "}
                <a
                  onClick={goToPost}
                  href="#!"
                  className="view-all-copy-link-post"
                >
                  View post
                </a>
              </h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button
              onClick={() => setShowCopiedAlert(false)}
              className="copy-link-post-notification-box-close-btn"
            >
              <img
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
            <p>1 of 2</p>
          </div>
        </div>
        <div
          className="post-notification-box copy-link-post-notification-box"
          style={
            postState?.embedCodeCopied
              ? {
                  display: "block",
                  position: "fixed",
                  zIndex: 2,
                  top: 500,
                }
              : {}
          }
        >
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>Embed Code copied to clipboard</h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button
              onClick={() =>
                setPostState({
                  ...postState,
                  embedCodeCopied: false,
                })
              }
              className="copy-link-post-notification-box-close-btn"
            >
              <img
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
          </div>
        </div>
        <div className="post-notification-box unfllow-user-notification-box">
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>
                Link copied to clipboard.{" "}
                <a href="#!" className="view-unfllowUser-post">
                  View post
                </a>
              </h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button className="unfllow-user-notification-box-close-btn">
              <img
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
            <p>1 of 2</p>
          </div>
        </div>
        <div className="post-notification-box mute-user-notification-box">
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>
                Link copied to clipboard.{" "}
                <a href="#!" className="view-muteUser-post">
                  View post
                </a>
              </h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button className="mute-user-notification-box-close-btn">
              <img
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
            <p>1 of 2</p>
          </div>
        </div>
        <div
          className="post-notification-box save-post-notification-box"
          style={
            postState?.showReportedSuccess
              ? {
                  display: "block",
                  position: "fixed",
                  zIndex: 2,
                  top: 500,
                }
              : {}
          }
        >
          <div className="post-notification-box-left">
            <div className="post-notification-success-icon">
              <img
                src="/images/success-Checked-box.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="post-notification-success-text">
              <h4>Thank you for reporting this post</h4>
              <p>1m</p>
            </div>
          </div>
          <div className="post-notification-box-close-sect">
            <button className="save-post-notification-box-close-btn">
              <img
                onClick={() =>
                  setPostState({
                    ...postState,
                    showReportedSuccess: false,
                  })
                }
                src="/images/notification-close-Cross.png"
                alt="icon"
                className="img-fluid"
              />
            </button>
            <p>1 of 2</p>
          </div>
        </div>
      </div>
      <EmbedPostModal
        showEmbedPostModal={showEmbedPostModal}
        setShowEmbedPostModal={setShowEmbedPostModal}
        postState={postState}
        setPostState={setPostState}
      />
      <ShareModal
        showSharePostModal={showSharePostModal}
        setShowSharePostModal={setShowSharePostModal}
        postState={postState}
        setPostState={setPostState}
      />
      <DontWantToSeePostModal
        postState={postState}
        setPostState={setPostState}
        blockThePost={blockThePost}
      />
      <MainReportPostModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
      <SuspiciousModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        detailedReason={detailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
      <HarrasmentModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        detailedReason={detailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
      <ViolenceModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        detailedReason={detailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
      <AdultModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        detailedReason={detailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
      <IntelectualModal
        mainReason={mainReason}
        setDetailedReason={setDetailedReason}
        detailedReason={detailedReason}
        setMainReason={setMainReason}
        postState={postState}
        setPostState={setPostState}
        reportPost={reportPost}
      />
    </div>
  );
};

export default HomeModals;
