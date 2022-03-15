import React, { useState, useEffect } from "react";

interface Props {
  item: any;
  followerCount: any
}

const getWordCount = (v: String) => {
  var matches = v.match(/[\w\d\’\'-]+/gi);
  console.log("word", matches.length);
  return matches ? matches.length : 0;
};

const shorten = (text: String, max: number) => {
  return text && getWordCount(text) > max
    ? text.split(" ").slice(0, max).join(" ")
    : text;
};

const ReplyDetail: React.FC<Props> = ({ item, followerCount }) => {
  const [toggleShowMore, setToggleShowMore] = useState(false);

  return (
    <>
      <div className="dApp-post-comment-writing-sect2 mb-2">
        <div className="dApp-post-comment-input-sect">
          <div className="dApp-post-commenter-img">
            <img
              src={item?.profileImage !== null ? item?.profileImage : "/images/comm-usr-img5.png"}
              alt="dp"
              className="img-fluid"
              style={{ borderRadius: '50px', width: "48px", height: "48px" }}
            />
          </div>
        </div>
        <div className="daap-home-post-commnt">
          <div className="dApp-post-comment-text">
            <h1> {item?.userName}</h1>
            <h2>{followerCount ? followerCount : '0'} followers</h2>
            {toggleShowMore == false && getWordCount(item?.text) > 25 ? (
              <p>
                {shorten(item?.text, 20)} ...
                <a
                  className="blue-color"
                  onClick={() => setToggleShowMore(true)}
                >
                  see more
                </a>
              </p>
            ) : (
              <p>{item?.text}</p>
            )}
            <div className="dApp-post-3dots dropdown">
              <a
                href="#!"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="/images/dApp-ThreeDots.png"
                  alt="3dots"
                  className="img-fluid post-threedots"
                />
                <img
                  src="/images/dApp-ThreeDots.png"
                  alt="3dots"
                  className="img-fluid post-threedots-active"
                />
              </a>
              <div className="dropdown-menu home-drop-postStatus">
                <ul>
                  <li className="">
                    <a className="" href="#!">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft">
                          <img
                            src="/images/copy.png"
                            alt="copy"
                            className="img-fluid"
                          />
                        </div>
                        <div className="drop-postStatus-block-right">
                          <h4>Copy link to comment</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="#!">
                      <div className="drop-postStatus-block">
                        <div className="drop-postStatus-block-lft">
                          <img
                            src="images/report.png"
                            alt="report"
                            className="img-fluid"
                          />
                        </div>
                        <div className="drop-postStatus-block-right">
                          <h3>Report this post</h3>
                          <p>
                            This comment is offensive or the account is hacked
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dApp-like-and-reply-btn daap-home-post-cmnt-btn">
            <ul>
              <li className="like">Like </li>
              <li className="reply active">Reply </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplyDetail;
