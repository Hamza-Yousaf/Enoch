import React, { useState } from "react";

const Celebrationstep1 = () => {
  const [modalStep1, setModalStep1] = useState(false);
  const [modalStep2, setModalStep2] = useState(false);
  const [imageDefault, setImageDefault] = useState("");
  const [uploadImage, setUploadImage] = useState(null)

  const handleCelebrationImageChanger = (e:any) => {
    const newImage = e.target.files[0];
    setUploadImage(newImage)
  }

  const handleModalControl = (e: any) => {
    setModalStep1(true);
  };
  const handleModalStep2 = () => {};
  return (
    <div>
      <div className="posting-step-celebrate">
        <ul>
          <li
            data-toggle="modal"
            data-target="#Celebrate_Modal"
            onClick={handleModalControl}
          >
            <h3>Welcome to the enoch</h3>
            <p>Welcoming your friends and fans to enoch platform</p>
          </li>
          <li
            data-toggle="modal"
            data-target="#Celebrate_Modal"
            onClick={handleModalControl}
          >
            <h3>Give Kudos</h3>
            <p>Show appreciation to your colleague</p>
          </li>
          <li
            data-toggle="modal"
            data-target="#Celebrate_Modal"
            onClick={handleModalControl}
          >
            <h3>Credit celebration</h3>
            <p>Share a new project milestone</p>
          </li>
          <li
            data-toggle="modal"
            data-target="#Celebrate_Modal"
            onClick={handleModalControl}
          >
            <h3>Show appreciation</h3>
            <p>Show a nice gesture to your friends and fans</p>
          </li>
          <li
            data-toggle="modal"
            data-target="#Celebrate_Modal"
            onClick={handleModalControl}
          >
            <h3>Get inspired </h3>
            <p>Tag your buddy </p>
          </li>
        </ul>
      </div>

      {/* modal stage 1 */}

      <div className="Celebrate-Modal-sect">
        <div
          className={`${
            modalStep1
              ? "modal celebrate_Modal fade in"
              : "modal celebrate_Modal fade"
          }`}
          id="Celebrate_Modal"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content Celebrate-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Welcome to the team</h2>
                <span className="close">
                  <img
                    src="images/post-close.png"
                    alt="close"
                    className="img-fluid"
                    data-dismiss="modal"
                  />
                </span>
              </div>
              <div className="Celebrate-modal-body">
                <div className="Welcome-team-content">
                  <div className="Celebrate-modal-Add-photo-content">
                    {imageDefault === "" && !uploadImage && (
                      <div className="Celebrate-modal-Add-photo-sect">
                        <div className="Celebrate-modal-Add-photo-uploaded">
                          <img
                            src="images/add-img-3.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="Celebrate-modal-Add-photo-upload">
                          <input type="file" id="real-file" hidden onChange={handleCelebrationImageChanger}/>
                          <button type="button" id="custom-button">
                            <label htmlFor="real-file">
                              <img
                                src="images/upload-img-Camera.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </label>
                            <span id="custom-text">Add a photo</span>
                          </button>
                          <p>or select from below</p>
                        </div>
                      </div>
                    )}
                    
                    {imageDefault != "" && !uploadImage && <img
                      src={imageDefault}
                      alt="icon"
                      className="img-fluid"
                      style={{ width: "100%" }}
                    />}
                    {uploadImage && <img
                      src={URL.createObjectURL(uploadImage)}
                      alt="icon"
                      className="img-fluid"
                      style={{ width: "100%" }}
                    />}
                    <div className="Celebrate-modal-Add-photo-footer">
                      <h3>Welcome to the team</h3>
                    </div>
                  </div>
                  <div className="Celebrate-modal-Add-photo-defult-gallery">
                    <div className="Celebrate-modal-Add-photo-defult-gallery-img-list">
                      <ul className="ml-0">
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-1.png")
                          }
                        >
                          <img
                            src="images/add-img-1.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-2.png")
                          }
                        >
                          <img
                            src="images/add-img-2.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-3.png")
                          }
                        >
                          <img
                            src="images/add-img-3.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                      <ul className="mr-0">
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-4.png")
                          }
                        >
                          <img
                            src="images/add-img-4.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-5.png")
                          }
                        >
                          <img
                            src="images/add-img-5.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li
                          onClick={() =>
                            setImageDefault("images/add-img-6.png")
                          }
                        >
                          <img
                            src="images/add-img-6.png"
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
                  onClick={handleModalStep2}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal step -2 */}
      <div className="Celebrate-Modal-sect-2">
        <div
          className="modal fade Select_recipient_modal"
          id="Select_recipient_modal"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content Celebrate-modal-content Celebrate-nxt-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Select recipient</h2>
                <span className="close">
                  <img
                    src="images/post-close.png"
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
                        src="images/celebrate-search.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                    <div className="select-recipient-sect">
                      <div className="select-recipient">
                        <h3>NFT_ CreatorXO</h3>
                        <div className="select-recipient-cancel-btn">
                          <img
                            src="images/select-recepient-Cross.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="select-recipient">
                        <h3>Nifty Drops </h3>
                        <div className="select-recipient-cancel-btn">
                          <img
                            src="images/select-recepient-Cross.png"
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
                              src="images/1ch.png"
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
                              <a href="#">#NFT</a> <a href="#">#nftart</a>{" "}
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
                              src="images/3ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@CroCchazy</h3>
                            <p>
                              Highlighting Black #NFT creators from around the
                              world. Reach out on @ blacknftcreators on
                              Instagram / <a href="#">#blockchain</a>{" "}
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
                              src="images/2ch.png"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                          <div className="Select-recipient-text">
                            <h3>@Nifty Drops </h3>
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
                              src="images/4ch.png"
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
                              <a href="#">#NFT</a> <a href="#">#nftart</a>{" "}
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
                              src="images/1ch.png"
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
                              <a href="#">#NFT</a> <a href="#">#nftart</a>{" "}
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
                              src="images/4ch.png"
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
                              <a href="#">#NFT</a> <a href="#">#nftart</a>{" "}
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
                              src="images/1ch.png"
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
                              <a href="#">#NFT</a> <a href="#">#nftart</a>{" "}
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
      {/* modal step 3 */}
      <div className="Celebrate-Modal-sect-3">
        <div className="modal fade" id="Celebrate_share_Modal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content Celebrate-modal-content Celebrate-nxt-modal-content">
              <div className="Celebrate-Modal-header">
                <h2>Share</h2>
                <span className="close">
                  <img
                    src="images/post-close.png"
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
                        src="images/share-post-user-dp.png"
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
                                src="images/share-post-icon-Globe.png"
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
                          src="images/celebrate-modal-share-post-img.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Celebrate-Modal-share-post-edit-btn">
                        <button>
                          <img
                            src="images/share-post-img-edit.png"
                            alt="icon"
                            className="img-fluid"
                          />
                        </button>
                        <button>
                          <img
                            src="images/share-post-img-close.png"
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
                          src="images/post-icon1-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="images/post-icon2-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="images/post-icon3-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="images/post-icon4-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li>
                        <img
                          src="images/post-icon5-hov.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                      <li className="info mr-0">
                        <img
                          src="images/post-icon6.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                    <button data-dismiss="modal">Post</button>
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

export default Celebrationstep1;
