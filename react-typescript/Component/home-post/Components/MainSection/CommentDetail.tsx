import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { COMMENT_LIKE_COUNTER, COMMENT_REPLY } from "../../../../graphql/mutattions/homePost";
import { TOGGLE_COMMENT_LIKE } from "../../../../graphql/mutattions/homePost";
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";

import {
  COMMENT_REPLY_REFRESH_QUERY,
} from "../../../../graphql/Queries/homepostQuery";
import dynamic from "next/dynamic";
const ReplyDetail = dynamic(() => import("./ReplyDetail"));


interface Props {
  item: any;
  followerCount?: any;
  userImageurl?: any
}

const CommentDetail: React.FC<Props> = ({ item, followerCount, userImageurl }) => {
  const [commentAction, setCommentAction] = useState("");
  const [reply, setReply] = useState([]);
  const [addReply, setAddReply] = useState("");
  const [toggleShowMore, setToggleShowMore] = useState(false);
  const [CommentLikeCounter, setCommentLikeCounter] = useState("0");
  const [userAvater, setUserAvater] = useState("");
 
  const getUserProfileQuery = useQuery(GET_USER_PROFILE_QUERY);


  const commentLikeCounterData = useQuery(COMMENT_LIKE_COUNTER, {
    variables: {
      commentId: item?.id
    },
  });


  const toggleCommentMuation = useMutation(TOGGLE_COMMENT_LIKE, {
    refetchQueries: [
      {
        query: COMMENT_LIKE_COUNTER,
        variables: {
          commentId: item?.id,
        },
      },
    ],
  });

  const commentReplyRefreshQuery = useQuery(COMMENT_REPLY_REFRESH_QUERY, {
    variables: {
      commentid: item?.id
    },
  });


  const commentReplyMuation = useMutation(COMMENT_REPLY, {
    refetchQueries: [
      {
        query: COMMENT_REPLY_REFRESH_QUERY,
        variables: {
          commentid: item?.id,
        },
      },
    ],
  });

  const commentReplyM = commentReplyMuation[0];
  const toggleCommentM = toggleCommentMuation[0];

  useEffect(() => {
    if (commentLikeCounterData?.data?.CommentLikeCounter) {
      setCommentLikeCounter(commentLikeCounterData?.data?.CommentLikeCounter);
    }
  }, [commentLikeCounterData?.data?.CommentLikeCounter]);

  useEffect(() => {
    if (commentReplyRefreshQuery?.data?.CommentReplyRefreshQuery) {
      setReply(commentReplyRefreshQuery?.data?.CommentReplyRefreshQuery);
    }
  }, [commentReplyRefreshQuery?.data]);

  const getWordCount = (v: String) => {
    var matches = v.match(/[\w\d\’\'-]+/gi);
    console.log('word', matches.length);
    return matches ? matches.length : 0;
  }

  const shorten = (text: String, max: number) => {
    return text && getWordCount(text) > max ? text.split(' ').slice(0, max).join(' ') : text
  }

  const onCommentLikeHandler = (id: any) => {
    toggleCommentM({
      variables: {
        commendid: id,
      },
    })
      .then((res) => {
        setCommentAction("like")

      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const onCommentReplyHandler = (e: any, id: any) => {
    if (e.keyCode === 13) {
      commentReplyM({
        variables: {
          id: id,
          CommentInput: addReply,
        },
      })
        .then((res) => {
          setAddReply("");
          setCommentAction("")
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    if (getUserProfileQuery?.data?.getUserProfile) {
      setUserAvater(getUserProfileQuery?.data?.getUserProfile?.profileImage);
    }
  }, [getUserProfileQuery?.data]);

  return (
    <>
      <div className="dApp-post-comment-sect">
        <div className="dApp-post-commenter-img">
          <img
            src={item?.profileImage !== null ? item?.profileImage : "/images/comm-usr-img5.png"}
            alt="dp"
            className="img-fluid"
            style={{ borderRadius: '50px', width: "48px", height: "48px" }}
          />
        </div>
        <div className="dApp-post-comment-right">
          <div className="daap-home-post-commnt">
            <div className="dApp-post-comment-text">
              <h1>{item?.userName}</h1>
              <h2>{followerCount ? followerCount : '0'} followers</h2>
              {toggleShowMore == false && getWordCount(item?.text) > 25 ?
                <p>
                  {shorten(item?.text, 20)} ...<a className="blue-color" onClick={() => setToggleShowMore(true)}>see more</a>
                </p>
                :
                <p>
                  {item?.text}
                </p>

              }

              <div className="dApp-post-3dots dropdown">
                <a
                  href="#"
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
                    src="/images/ThreeDots-active.png"
                    alt="3dots"
                    className="img-fluid post-threedots-active"
                  />
                </a>
                <div className="dropdown-menu home-drop-postStatus">
                  <ul>
                    <li className="">
                      <a className="" href="#">
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
                      <a className="" href="#">
                        <div className="drop-postStatus-block">
                          <div className="drop-postStatus-block-lft">
                            <img
                              src="/images/report.png"
                              alt="report"
                              className="img-fluid"
                            />
                          </div>
                          <div className="drop-postStatus-block-right">
                            <h3>Report this post</h3>
                            <p>
                              This comment is offensive or the account
                              is hacked
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
                <li
                  className="like"

                  onClick={() => onCommentLikeHandler(item?.id)}>
                  Like
                  <div className="dApp-status-react-icon">
                    <span>
                      <img
                        src="/images/like.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <span className="dapp-home-post-like-count">{CommentLikeCounter}</span>
                </li>
                <li
                  className="reply active"
                  onClick={() => setCommentAction("reply")}>
                  Reply{" "}
                  {/* <span className="dapp-home-post-like-count">
                          1 reply
                        </span> */}
                </li>
              </ul>
            </div>
          </div>
          {commentAction == "reply" &&
            <div className="dApp-post-comment-writing-sect">
              <div className="dApp-post-comment-input-sect">
                <div className="dApp-post-commenter-img">
                  <img
                    src={userAvater !== null ? userAvater : "/images/comm-usr-img5.png"}            
                    alt="dp" className="img-fluid" 
                    style={{ borderRadius: '50px', width: "48px", height: "48px" }}      
                    />
                </div>
              </div>
              <div className="dApp-post-comment-input-fild">
                <textarea value={addReply}
                  className="add-comment-box"
                  onChange={(e) => setAddReply(e.target.value)}
                  onKeyDown={(e) => onCommentReplyHandler(e, item?.id)}
                  id="" placeholder="Add a comment">

                </textarea>
                <div className="dApp-post-comment-emoje-and-gallery">
                  <img src="images/emoji-icon.png" alt="" className="img-fluid" />
                  <span className="position-relative"><input type="file" className="home-post-file-uplod" /><img src="/images/dAppgallery.png" alt="" className="img-fluid" /></span>
                </div>
              </div>
            </div>
          }


          {reply?.length > 0
            ? reply?.map((item, index) => {
              return <ReplyDetail item={item} followerCount={followerCount} />;
            })
            : ""}
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
