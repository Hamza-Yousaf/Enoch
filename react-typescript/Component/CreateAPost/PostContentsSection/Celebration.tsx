//@ts-nocheck
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_FOLLOWERS_FOR_CELEBRATION } from "../../../graphql/Queries/followersForCelebration";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const Celebration = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [uploadImg, setUploadImg] = useState("");
  const [text, setText] = useState({
    postTitle:
      "We are excited to have you join our team. Any tips to help them get started?#newhire#welcome",
  });
  const [followers, setFollowers] = useState([]);
  const [searchFollower, setSearchFollower] = useState("");
  const [selectedFollower, setSelectedFollower] = useState([]);
  const [selectCheck, setSelectCheck] = useState(false);
  const handleFileOnChange = (e: any) => {
    const imageFile = e.target.files[0];
    setUploadImg(imageFile);
    console.log(uploadImg);
  };
  const handleRemoveImage = () => {
    setImgUrl("");
    setUploadImg("");
  };
  const handlePostOnChange = (e: any) => {
    const newDummyData = { ...text };
    newDummyData[e.target.name] = e.target.value;
    setText(newDummyData);
  };
  const handleAddHash = () => {
    const newDummyData = { ...text };
    newDummyData.postTitle = text.postTitle + "#";
    setText(newDummyData);
  };

  const queryData = useQuery(GET_FOLLOWERS_FOR_CELEBRATION);

  useEffect(() => {
    if (queryData?.data) {
      setFollowers(queryData?.data.AllMyFloowers);
    }
  }, [followers, queryData?.data]);

  //    linearSearch

  const handleFollowerSelect = (data: any) => {
    if (!selectCheck) {
      for (let i = 0; i <= selectedFollower.length; i++) {
        if (selectedFollower[i]?.userName === data?.follower?.userName) {
          selectedFollower.splice(i, 1);
          break;
        } else {
          setSelectedFollower([
            ...selectedFollower,
            { userName: data?.follower?.userName },
          ]);
          setSelectCheck(true);
        }
      }
      setSelectCheck(true);
    } else if (selectCheck) {
      for (let i = 0; i < selectedFollower.length; i++) {
        if (selectedFollower[i]?.userName === data?.follower?.userName) {
          selectedFollower.splice(i, 1);
        }
      }
      setSelectCheck(false);
    }
  };
  const handlerCloseTag = (data: any) => {
    for (let i = 0; i < selectedFollower.length; i++) {
      if (selectedFollower[i]?.userName === data.userName) {
        selectedFollower.splice(i, 1);
      }
    }

    setSelectCheck(false);
  };

  console.log(followers[0]?.follower.userName);
  console.log(searchFollower);
  console.log(selectedFollower);
  return (
    <div>
      <div className="posting-step-celebrate">
        <ul>
          <li data-toggle="modal" data-target="#Celebrate_Modal">
            <h3>Welcome to the enoch</h3>
            <p>Welcoming your friends and fans to enoch platform</p>
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
      <div className="Celebrate-Modal-sect">
        <div
          className="modal celebrate_Modal fade"
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
                    <div className="Celebrate-modal-Add-photo-sect">
                      {imgUrl != "" ? (
                        <div>
                          <span
                            onClick={handleRemoveImage}
                            style={{
                              cursor: "pointer",
                              background: "#7521e2",
                              borderRadius: "10px",
                              color: "wheat",
                              padding: "1%",
                              position: "fixed",
                            }}
                          >
                            X
                          </span>
                          <img
                            src={imgUrl}
                            alt="img"
                            className="img-fluid"
                            style={{
                              width: "100%",
                            }}
                          />
                        </div>
                      ) : uploadImg != "" ? (
                        <div>
                          <span
                            onClick={handleRemoveImage}
                            style={{
                              cursor: "pointer",
                              background: "#7521e2",
                              borderRadius: "10px",
                              color: "wheat",
                              padding: "1%",
                              position: "fixed",
                            }}
                          >
                            X
                          </span>
                          <img
                            src={URL.createObjectURL(uploadImg)}
                            alt="icon"
                            className="img-fluid"
                            style={{
                              width: "100%",
                            }}
                          />
                        </div>
                      ) : (
                        <div className="Celebrate-modal-Add-photo-upload">
                          <input
                            type="file"
                            id="real-file"
                            hidden="hidden"
                            onChange={handleFileOnChange}
                          />

                          <button type="button" id="custom-button">
                            <label htmlFor="real-file">
                              <img
                                src="images/upload-img-Camera.png"
                                alt="icon"
                                className="img-fluid"
                              />
                            </label>
                            <label htmlFor="real-file">
                              <span id="custom-text">Add a photo</span>
                            </label>
                          </button>
                          <p>or select from below</p>
                        </div>
                      )}
                    </div>
                    <div className="Celebrate-modal-Add-photo-footer">
                      <h3>Welcome to the team</h3>
                    </div>
                  </div>
                  <div className="Celebrate-modal-Add-photo-defult-gallery">
                    <div className="Celebrate-modal-Add-photo-defult-gallery-img-list">
                      <ul className="ml-0">
                        <li onClick={() => setImgUrl("images/add-img-1.png")}>
                          <img
                            src="images/add-img-1.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li onClick={() => setImgUrl("images/add-img-2.png")}>
                          <img
                            src="images/add-img-2.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li onClick={() => setImgUrl("images/add-img-3.png")}>
                          <img
                            src="images/add-img-3.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                      <ul className="mr-0">
                        <li onClick={() => setImgUrl("images/add-img-4.png")}>
                          <img
                            src="images/add-img-4.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li onClick={() => setImgUrl("images/add-img-5.png")}>
                          <img
                            src="images/add-img-5.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </li>
                        <li onClick={() => setImgUrl("images/add-img-6.png")}>
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
                      {selectedFollower.map((data) => (
                        <div className="select-recipient">
                          <h3>{data.userName}</h3>
                          <div
                            className="select-recipient-cancel-btn"
                            onClick={() => handlerCloseTag(data)}
                          >
                            <img
                              src="images/select-recepient-Cross.png"
                              alt="icon"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      ))}
                      {/* <div className="select-recipient">
                                                <h3>Nifty Drops
                                                </h3>
                                                <div className="select-recipient-cancel-btn"><img src="images/select-recepient-Cross.png" alt="icon" className="img-fluid"/></div>
                                            </div> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Search for people"
                      onChange={(e) => setSearchFollower(e.target.value)}
                    />
                  </div>
                  <div className="Select-recipient-list">
                    <ul>
                      {followers
                        .filter((value) => {
                          if (searchFollower === "") {
                            return value;
                          } else if (
                            value?.follower?.userName
                              .toLowerCase()
                              .includes(searchFollower.toLowerCase())
                          ) {
                            return value;
                          } else {
                            console.log("there are no followers on this name");
                          }
                        })
                        .map((data) => (
                          <li>
                            <div className="Select-recipient-left-content">
                              <div className="Select-recipient-dp">
                                <img
                                  src={data?.follower?.profileImage}
                                  alt="img"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="Select-recipient-text">
                                <h3>{data?.follower?.userName}</h3>
                                <p>{data?.follower?.bio}</p>
                              </div>
                            </div>
                            <div className="Select-recipient-checkbox">
                              <label className="container">
                                <input type="checkbox" />
                                <span
                                  className="checkmark"
                                  onClick={() => handleFollowerSelect(data)}
                                ></span>
                              </label>
                            </div>
                          </li>
                        ))}

                      {/* <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/3ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@CroCchazy</h3>
                                                        <p>Highlighting Black #NFT creators from around the world. Reach out on @
                                                            blacknftcreators on Instagram /
                                                            <a href="#">#blockchain</a>
                                                            <a href="#">#nfts</a>
                                                            <a href="#">#blackart</a>
                                                            <a href="#">#crypto</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/2ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@Nifty Drops
                                                        </h3>
                                                        <p>The first #NFTdrop app Helping NFT Collectors find NFT drops across all
                                                            blockchains & NFT Creators MARKET your NFT launches. SUBMIT your NFT drops</p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox" checked="checked"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/4ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@NFT_ CreatorXO</h3>
                                                        <p>I am a Japanese NFT artist. I draw art of nature and animals. I want to make
                                                            the world Smiling face with sunglasses 日本のNFTを世界へ。<a href="#">#NFT</a>
                                                            <a href="#">#nftart</a>
                                                            <a href="#">#NFTcollection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/1ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@NFT_ CreatorXO</h3>
                                                        <p>I am a Japanese NFT artist. I draw art of nature and animals. I want to make
                                                            the world Smiling face with sunglasses 日本のNFTを世界へ。<a href="#">#NFT</a>
                                                            <a href="#">#nftart</a>
                                                            <a href="#">#NFTcollection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/4ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@NFT_ CreatorXO</h3>
                                                        <p>I am a Japanese NFT artist. I draw art of nature and animals. I want to make
                                                            the world Smiling face with sunglasses 日本のNFTを世界へ。<a href="#">#NFT</a>
                                                            <a href="#">#nftart</a>
                                                            <a href="#">#NFTcollection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="Select-recipient-left-content">
                                                    <div className="Select-recipient-dp">
                                                        <img src="images/1ch.png" alt="img" className="img-fluid"/>
                                                    </div>
                                                    <div className="Select-recipient-text">
                                                        <h3>@NFT_ CreatorXO</h3>
                                                        <p>I am a Japanese NFT artist. I draw art of nature and animals. I want to make
                                                            the world Smiling face with sunglasses 日本のNFTを世界へ。<a href="#">#NFT</a>
                                                            <a href="#">#nftart</a>
                                                            <a href="#">#NFTcollection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="Select-recipient-checkbox">
                                                    <label className="container">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li> */}
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
                    <textarea
                      name="postTitle"
                      id=""
                      cols="30"
                      rows="4"
                      value={text.postTitle}
                      onChange={handlePostOnChange}
                    ></textarea>
                    {/* <p>We are excited to have you join our team. Any tips to help them get started? <a href="#">#newhire</a><a href="#">#welcome</a></p> */}
                    <div className="Celebrate-Modal-share-post-img">
                      <div className="Celebrate-post-midImg">
                        {imgUrl != "" ? (
                          <img src={imgUrl} alt="img" className="img-fluid" />
                        ) : uploadImg != "" ? (
                          <img
                            src={URL.createObjectURL(uploadImg)}
                            alt="img"
                            className="img-fluid"
                          />
                        ) : (
                          <span>Insert of select an image</span>
                        )}
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
                    <h3 onClick={handleAddHash}>Add hashtag</h3>
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

export default withApollo(Celebration, { getDataFromTree });
