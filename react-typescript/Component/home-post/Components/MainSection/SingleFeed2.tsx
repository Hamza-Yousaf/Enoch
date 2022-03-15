//@ts-nocheck
import React, { useState } from "react";
import dynamic from "next/dynamic";
const CommentBox = dynamic(() => import("./CommentBox"));
const ReactToPosts = dynamic(() => import("./React"));
const Reactions = dynamic(() => import("./Reactions"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";

const SingleFeed2 = () => {
  const [addAComment, setAddAComment] = useState(false);

  const [openPostOptions, setOpenPostOptions] = useState(false);

  const togglePostOptions = () => {
    setOpenPostOptions(!openPostOptions);
  };

  const dispatch = useDispatch();

  const { showSavedPostAlert, showCopyLinkAlert, showReportPostAlert } =
    bindActionCreators(actionCreators, dispatch);

  const showSavedPostAlertValue = useSelector(
    (state: State) => state.showSavedPostAlert
  );

  const savePost = () => {
    showSavedPostAlert(true);
    setOpenPostOptions(false);
  };

  const copyPostLink = () => {
    showCopyLinkAlert(true);
    setOpenPostOptions(false);
  };

  const reportPost = () => {
    showReportPostAlert(true);
    setOpenPostOptions(false);
  };

  return (
    <div className="dApp-status-block">
      <div className="dApp-status-heading">
        <div className="dApp-status-heading-profile-pic">
          <img src="/images/userAvatar1.png" alt="DP" className="img-fluid" />
        </div>
        <div className="dApp-status-heading-text">
          <h1>@Hulk66</h1>
          <h2>3 followers</h2>
          <h3>
            <span>
              <img src="/images/Clock.png" alt="icon" className="img-fluid" />
            </span>
            July 15
          </h3>
        </div>
        <div
          className={
            openPostOptions
              ? "dApp-post-3dots dropdown open"
              : "dApp-post-3dots dropdown"
          }
        >
          <a href="#" onClick={togglePostOptions}>
            {openPostOptions ? (
              <img
                src="/images/ThreeDots-active.png"
                alt="3dots"
                className="img-fluid post-threedots-active"
              />
            ) : (
              <img
                src="/images/dApp-ThreeDots.png"
                alt="3dots"
                className="img-fluid post-threedots"
              />
            )}
          </a>
          <div className="dropdown-menu home-drop-postStatus">
            <ul>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block" onClick={savePost}>
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/post-save.png"
                        alt="save"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Save</h3>
                      <p>Save for later</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block" onClick={copyPostLink}>
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/copy.png"
                        alt="copy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h4>Copy link to post</h4>
                    </div>
                  </div>
                </a>
              </li>
              <li className="">
                <a className="" href="#">
                  <div className="drop-postStatus-block" onClick={reportPost}>
                    <div className="drop-postStatus-block-lft">
                      <img
                        src="/images/report.png"
                        alt="report"
                        className="img-fluid"
                      />
                    </div>
                    <div className="drop-postStatus-block-right">
                      <h3>Report this post</h3>
                      <p>This post is offensive or the account is hacked</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dApp-status-caption-sect">
        <p>
          Our hhh interactive session on "Happiness at the Workplace" with the
          renowned communication speaker Mukund Trivedy was an eye-opener on
          various challenges faced by employees across the country. …
          <a href="#">see more</a>
        </p>
      </div>
      <Reactions />
      
      <ReactToPosts setAddAComment={setAddAComment} />
      {addAComment && <CommentBox />}
    </div>
  );
};

export default SingleFeed2;
