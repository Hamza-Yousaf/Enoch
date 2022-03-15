import React from "react";
import dynamic from "next/dynamic";
const AddHashTagSection = dynamic(() => import("./AddHashTagSection"));
const CreatePostTabs = dynamic(() => import("./CreatePostTabsSection"));
const CreatePostTitle = dynamic(() => import("./CreatePostTitle"));
const CreatorAndVisibilityDropdowns = dynamic(
  () => import("./CreatorAndVisibilityDropdowns/index")
);
const PostContentSection = dynamic(() => import("./PostContentsSection"));
const PhotoPostSection = dynamic(
  () => import("./PostContentsSection/PhotoPostSection")
);
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
const PostVideoScreen = dynamic(
  () => import("./PostContentsSection/PostVideoScreen")
);
const SideBar = dynamic(() => import("./CreateAPostSideBar"));
const DocumentPostStep1 = dynamic(
  () => import("./PostContentsSection/DocumentPostStep1")
);
const DocUpload = dynamic(() => import("./PostContentsSection/DocUpload"));

const CreateAPost = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="posting-steps-block">
          {createPostState?.isPostScreenOpen ? (
            <PostVideoScreen />
          ) : createPostState.isDocPostScreenOpen &&
            createPostState?.document ? (
            <DocumentPostStep1 />
          ) : (
            <div className="posting-steps-block-left">
              <div className="posting-steps-createPost">
                <CreatePostTitle />

                {createPostState.currentCreatePostTab === "text-post" ||
                createPostState.pollCreationStage === 2 ? (
                  <CreatorAndVisibilityDropdowns />
                ) : (
                  ""
                )}
                <PostContentSection />
                {createPostState.currentCreatePostTab === "text-post" &&
                createPostState?.document ? (
                  <DocUpload />
                ) : (
                  <div></div>
                )}
                {createPostState.currentCreatePostTab === "text-post" &&
                  createPostState.currentCreatePostTab !== "poll-post" && (
                    <AddHashTagSection formState={null} setFormState={null} />
                  )}
              </div>
              <div className="posting-steps-content-body">
                <div className="posting-steps-tab-sect">
                  {createPostState?.currentCreatePostTab === "photo-post" && (
                    <PhotoPostSection />
                  )}

                  <div id="Documents" className="posttabcontent">
                    <h2 className="posting-step-hd-title current">
                      Share a document
                    </h2>
                    <div className="posting-steps-document">
                      <div className="step-doc-upld-btn">
                        <a href="#!" className="btn posting-step-upload-btn">
                          <input type="file" />
                          Upload
                        </a>
                      </div>
                      <p className="step-doc-para1">
                        Or upload from the cloud:
                      </p>
                      <div className="document-btn-grp">
                        <span>
                          <a href="#!" className="btn step-savedrive-btn">
                            <img
                              src="/images/dropbox.png"
                              className="img-fluid mr-2"
                            />
                            Dropbox
                          </a>
                        </span>
                        <span>
                          <a href="#!" className="btn step-savedrive-btn">
                            <img
                              src="/images/gdrive.png"
                              className="img-fluid mr-2"
                            />
                            Google Drive
                          </a>
                        </span>
                      </div>
                    </div>
                    <p className="step-doc-para2">
                      For accessibility purposes, Enoch members who can view
                      your post will be able to download your document as a PDF.
                      Learn more
                    </p>
                    <p className="addhash-txt">Add hashtag</p>
                  </div>
                  <div id="Poll" className="posttabcontent">
                    <h2 className="posting-step-hd-title current">
                      Create a poll
                    </h2>
                    <div className="posting-steps-poll">
                      <form>
                        <div className="steps-poll-input-grp">
                          <div className="poll-input-label">Your question</div>
                          <div className="poll-input-field">
                            <input
                              type="text"
                              placeholder="E.g., How do you commute to work?"
                            />
                          </div>
                        </div>
                        <div className="steps-poll-input-grp">
                          <div className="poll-input-label">Option 1*</div>
                          <div className="poll-input-field">
                            <input
                              type="text"
                              placeholder="E.g., Public trasportation"
                            />
                          </div>
                        </div>
                        <div className="steps-poll-input-grp">
                          <div className="poll-input-label">Option 2*</div>
                          <div className="poll-input-field">
                            <input
                              type="text"
                              placeholder="E.g., Drive myself"
                            />
                          </div>
                        </div>
                        <div className="step-poll-addOption">
                          <a href="#!" className="btn poll-addOption-btn">
                            + Add Options
                          </a>
                        </div>
                        <div className="steps-poll-input-grp steps-poll-input-option-extra">
                          <div className="poll-input-label">
                            Option 3*
                            <span className="poll-option-extra-remove">
                              Remove
                            </span>
                          </div>
                          <div className="poll-input-field">
                            <input
                              type="text"
                              placeholder="E.g.,Go with my friends"
                            />
                          </div>
                        </div>
                        <div className="steps-poll-input-grp steps-poll-input-option-extra">
                          <div className="poll-input-label">
                            Option 4*
                            <span className="poll-option-extra-remove">
                              Remove
                            </span>
                          </div>
                          <div className="poll-input-field">
                            <input
                              type="text"
                              placeholder="E.g., by Cyceling"
                            />
                          </div>
                        </div>
                        <div className="steps-poll-input-grp Poll-duration-dropdown">
                          <div className="poll-input-label">Poll duration</div>
                          <div className="event-form-input dropdown">
                            <div
                              id="postPoll-dropdown"
                              className="postPoll-dropdown-input"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              1 Week
                            </div>
                            <div
                              id="postPoll-dropList"
                              className="dropdown-menu Poll-duration-drop-box"
                            >
                              <ul>
                                <li>1 Day</li>
                                <li>3 Days</li>
                                <li>1 Week</li>
                                <li className="no-border">2 Weeks</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p className="poll-bottm-txt">
                          We don’t allow requests for political opinions,
                          medical information or other sensitive data.
                        </p>
                      </form>
                    </div>
                  </div>
                  <div id="Celebrate" className="posttabcontent">
                    <h2 className="posting-step-hd-title current">
                      Select an option
                    </h2>
                    <div className="posting-step-celebrate">
                      <ul>
                        <li data-toggle="modal" data-target="#Celebrate_Modal">
                          <h3>Welcome to the enoch</h3>
                          <p>
                            Welcoming your friends and fans to enoch platform
                          </p>
                        </li>
                        <li data-toggle="modal" data-target="#Celebrate_Modal">
                          <h3>Give Kudos</h3>
                          <p>Show appreciation to your colleague</p>
                        </li>
                        <li data-toggle="modal" data-target="#Celebrate_Modal">
                          <h3>Credit celebration</h3>
                          <p>Share a new project milestone</p>
                        </li>
                        <li data-toggle="modal" data-target="#Celebrate_Modal">
                          <h3>Show appreciation</h3>
                          <p>Show a nice gesture to your friends and fans</p>
                        </li>
                        <li data-toggle="modal" data-target="#Celebrate_Modal">
                          <h3>Get inspired</h3>
                          <p>Tag your buddy</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <CreatePostTabs />
              </div>
            </div>
          )}
          <SideBar />
        </div>
      </div>
      {/* <!--Celebrate-MODAL--> */}
      <div className="Celebrate-Modal-sect">
        <div
          className="modal celebrate_Modal fade"
          id="Celebrate_Modal"
          role="dialog"
        >
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content Celebrate-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Welcome to the team</h2>
                <span className="close">
                  <img
                    src="/images/post-close.png"
                    alt="close"
                    className="img-fluid"
                    data-dismiss="modal"
                  />
                </span>
              </div>
              <div className="Celebrate-modal-body">
                <div className="Welcome-team-content">
                  <div className="Celebrate-modal-Add-photo-content">
                    <div className="Celebrate-modal-Add-photo-sect">
                      {/* <!--Celebrate-modal-Add-photo-uploaded--> */}
                      <div className="Celebrate-modal-Add-photo-uploaded">
                        <img
                          src="/images/add-img-3.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Celebrate-modal-Add-photo-upload">
                        <input type="file" id="real-file" hidden />
                        <button type="button" id="custom-button">
                          <img
                            src="/images/upload-img-Camera.png"
                            alt="icon"
                            className="img-fluid"
                          />
                          <span id="custom-text">Add a photo</span>
                        </button>
                        <p>or select from below</p>
                      </div>
                    </div>
                    <div className="Celebrate-modal-Add-photo-footer">
                      <h3>Welcome to the team</h3>
                    </div>
                  </div>
                  <div className="Celebrate-modal-Add-photo-defult-gallery">
                    <div className="Celebrate-modal-Add-photo-defult-gallery-img-list">
                      <ul className="ml-0">
                        <li>
                          <img
                            src="/images/add-img-1.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/add-img-2.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/add-img-3.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                      <ul className="mr-0">
                        <li>
                          <img
                            src="/images/add-img-4.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/add-img-5.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li>
                          <img
                            src="/images/add-img-6.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Celebrate-Modal-footer">
                <button className="back-btn" data-dismiss="modal">
                  Back
                </button>
                <button
                  className="next-btn"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#Select_recipient_modal"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Celebrate-Modal-sect-2">
        <div
          className="modal fade Select_recipient_modal"
          id="Select_recipient_modal"
          role="dialog"
        >
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content Celebrate-modal-content Celebrate-nxt-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Select recipient</h2>
                <span className="close">
                  <img
                    src="/images/post-close.png"
                    alt="close"
                    className="img-fluid"
                    data-dismiss="modal"
                  />
                </span>
              </div>
              <div className="Celebrate-modal-body">
                <div className="Select-recipient-content">
                  <div className="Select-recipient-search-box">
                    <span>
                      <img
                        src="/images/celebrate-search.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                    <div className="select-recipient-sect">
                      <div className="select-recipient">
                        <h3>NFT_ CreatorXO</h3>
                        <div className="select-recipient-cancel-btn">
                          <img
                            src="/images/select-recepient-Cross.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="select-recipient">
                        <h3>Nifty Drops</h3>
                        <div className="select-recipient-cancel-btn">
                          <img
                            src="/images/select-recepient-Cross.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <input type="text" placeholder="Search for people" />
                  </div>
                  <div className="Select-recipient-list">
                    <ul>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/1ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@NFT_ CreatorXO</h3>
                            <p>
                              I am a Japanese NFT artist. I draw art of nature
                              and animals. I want to make the world Smiling face
                              with sunglasses 日本のNFTを世界へ。
                              <a href="#">#NFT</a>
                              <a href="#">#nftart</a>
                              <a href="#">#NFTcollection</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/3ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@CroCchazy</h3>
                            <p>
                              Highlighting Black #NFT creators from around the
                              world. Reach out on @ blacknftcreators on
                              Instagram / <a href="#">#blockchain</a>
                              <a href="#">#nfts</a> <a href="#">#blackart</a>
                              <a href="#">#crypto</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/2ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@Nifty Drops</h3>
                            <p>
                              The first #NFTdrop app Helping NFT Collectors find
                              NFT drops across all blockchains & NFT Creators
                              MARKET your NFT launches. SUBMIT your NFT drops
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/4ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@NFT_ CreatorXO</h3>
                            <p>
                              I am a Japanese NFT artist. I draw art of nature
                              and animals. I want to make the world Smiling face
                              with sunglasses 日本のNFTを世界へ。
                              <a href="#">#NFT</a>
                              <a href="#">#nftart</a>
                              <a href="#">#NFTcollection</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/1ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@NFT_ CreatorXO</h3>
                            <p>
                              I am a Japanese NFT artist. I draw art of nature
                              and animals. I want to make the world Smiling face
                              with sunglasses 日本のNFTを世界へ。
                              <a href="#">#NFT</a>
                              <a href="#">#nftart</a>
                              <a href="#">#NFTcollection</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/4ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@NFT_ CreatorXO</h3>
                            <p>
                              I am a Japanese NFT artist. I draw art of nature
                              and animals. I want to make the world Smiling face
                              with sunglasses 日本のNFTを世界へ。
                              <a href="#">#NFT</a>
                              <a href="#">#nftart</a>
                              <a href="#">#NFTcollection</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="Select-recipient-left-content">
                          <div className="Select-recipient-dp">
                            <img
                              src="/images/1ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@NFT_ CreatorXO</h3>
                            <p>
                              I am a Japanese NFT artist. I draw art of nature
                              and animals. I want to make the world Smiling face
                              with sunglasses 日本のNFTを世界へ。
                              <a href="#">#NFT</a>
                              <a href="#">#nftart</a>
                              <a href="#">#NFTcollection</a>
                            </p>
                          </div>
                        </div>
                        <div className="Select-recipient-checkbox">
                          <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="Celebrate-Modal-footer">
                <button
                  className="back-btn"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#Celebrate_Modal"
                >
                  Back
                </button>
                <button
                  className="next-btn"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#Celebrate_share_Modal"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Celebrate-Modal-sect-3">
        <div className="modal fade" id="Celebrate_share_Modal" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content Celebrate-modal-content Celebrate-nxt-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Share</h2>
                <span className="close">
                  <img
                    src="/images/post-close.png"
                    alt="close"
                    className="img-fluid"
                    data-dismiss="modal"
                  />
                </span>
              </div>
              <div className="Celebrate-modal-body pt-4">
                <div className="Celebrate-Modal-share-content">
                  <div className="Celebrate-Modal-share-post-headings">
                    <div className="Celebrate-Modal-share-post-dp">
                      <img
                        src="/images/share-post-user-dp.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="Celebrate-Modal-share-post-user-name">
                      <h2>Hulk 88</h2>
                      <div className="Celebrate-Modal-share-post-dropdown">
                        <ul>
                          <li>
                            <span>
                              <img
                                src="/images/share-post-icon-Globe.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Anyone
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="Celebrate-Modal-share-post-body">
                    <p>
                      We are excited to have you join our team. Any tips to help
                      them get started? <a href="#">#newhire</a>
                      <a href="#">#welcome</a>
                    </p>
                    <div className="Celebrate-Modal-share-post-img">
                      <div className="Celebrate-post-midImg">
                        <img
                          src="/images/celebrate-modal-share-post-img.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Celebrate-Modal-share-post-edit-btn">
                        <button>
                          <img
                            src="/images/share-post-img-edit.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </button>
                        <button>
                          <img
                            src="/images/share-post-img-close.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </button>
                      </div>
                    </div>
                    <h3>Add hashtag</h3>
                  </div>
                  <div className="Celebrate-Modal-share-post-icon-list">
                    <ul>
                      <li>
                        <img
                          src="/images/post-icon1-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/post-icon2-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/post-icon3-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/post-icon4-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/post-icon5-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li className="info mr-0">
                        <img
                          src="/images/post-icon6.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                    <button
                      data-dismiss="modal"
                      onClick={() => {
                        setCreatePostState({
                          ...CreateAPost,
                          communitiesPostTriger: true,
                        });
                      }}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAPost;
