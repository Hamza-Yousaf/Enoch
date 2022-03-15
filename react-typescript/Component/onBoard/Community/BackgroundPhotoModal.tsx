import React, { useState } from "react";
import classnames from "classnames";

const BackgroundPhotoModal = () => {
  const [tab, setTab] = useState("popular");

  return (
    <div
      id="community-head-bg"
      className="modal community-headbg-modal"
      role="dialog"
    >
      <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content community-hd-content">
          <div className="community-header">
            <h3 className="modal-title">Background Photo</h3>
          </div>
          <div className="community-hd-modal-body">
            <div className="community-modal-imgBlock">
              <img
                src="/images/event-bg-img1.png"
                className="img-fluid community-coverimg"
                alt="community"
              />
              <div className="community-modal-innerimgBlock">
                <h3>DeFi Signal</h3>
              </div>
            </div>
            <div className="community-modal-imgGal">
              <h4>Select the background banner</h4>
              <div className="community-modal-tab">
                <ul className="imgGalTab">
                  <li onClick={() => setTab("popular")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "popular",
                      })}
                    >
                      Popular
                    </button>
                  </li>
                  <li onClick={() => setTab("sports")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "sports",
                      })}
                    >
                      Sports{" "}
                    </button>
                  </li>
                  <li onClick={() => setTab("games")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "games",
                      })}
                    >
                      GAMES{" "}
                    </button>
                  </li>
                  <li onClick={() => setTab("blockchain")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "blockchain",
                      })}
                    >
                      Blockchain
                    </button>
                  </li>
                  <li onClick={() => setTab("it")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "it",
                      })}
                    >
                      IT{" "}
                    </button>
                  </li>
                  <li onClick={() => setTab("finance")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "finance",
                      })}
                    >
                      Finance{" "}
                    </button>
                  </li>
                  <li onClick={() => setTab("fashion")}>
                    <button
                      className={classnames("imgGallinks", {
                        active: tab == "fashion",
                      })}
                    >
                      Fashion{" "}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="imgGalTab-content-block">
                <div
                  id="popular"
                  className="imgGaltabcontent imgGaltabcontent-d-block"
                >
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/event-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="Sports" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="games" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="Blockchain" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="It" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="Finance" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="Fashion" className="imgGaltabcontent">
                  <ul>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img2.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img3.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img4.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active imageSelected">
                      <img
                        src="/images/community-bg-img5.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img6.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img7.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img8.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img9.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img10.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                    <li className="community-imgGal-active">
                      <img
                        src="/images/community-bg-img11.png"
                        className="img-fluid"
                        alt="community"
                      />
                      <div className="community-imgGal-selected">
                        <img
                          src="/images/imageCheck.png"
                          className="img-fluid"
                          alt="community"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="community-bottom-bttngrp">
              <div className="community-bottom-bttnlft">Delete Photo</div>
              <div className="community-bottom-bttnright">
                <button
                  className="community-bttnright-cancel"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="community-bttnright-apply"
                  data-dismiss="modal"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPhotoModal;
