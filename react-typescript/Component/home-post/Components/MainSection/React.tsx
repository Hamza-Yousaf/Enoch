import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import {
  DISLIKE_REACT,
  CLAP_REACT,
  WOW_REACT,
  BILLIANT_REACT,
  LIKE_REACT,
  CARE_REACT,
  LOVE_REACT,
} from "../../../../graphql/mutattions/homePost";

import { LIKE_REACTION_COUNTER } from "../../../../graphql/Queries/homepostQuery";
import { PostContext } from "../..";

interface Props {
  postid?: any;
  setAddAComment: React.Dispatch<React.SetStateAction<boolean>>;
  post: any;
  postState: any;
  setPostState: any;
}

const ReactToPosts: React.FC<Props> = ({
  setAddAComment,
  postid,
  post,
  postState,
  setPostState,
}: Props) => {
  const postContext = useContext(PostContext);
  const setPostModalState = postContext?.setPostModalState;

  // console.log("post state", postState);
  const clapMuation = useMutation(CLAP_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const wowMuation = useMutation(WOW_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const billiantMuation = useMutation(BILLIANT_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const likeMuation = useMutation(LIKE_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const careMuation = useMutation(CARE_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const loveMuation = useMutation(LOVE_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const dislikeMuation = useMutation(DISLIKE_REACT, {
    refetchQueries: [
      {
        query: LIKE_REACTION_COUNTER,
        variables: {
          postid: postid,
        },
      },
    ],
  });

  const clapM = clapMuation[0];
  const wowM = wowMuation[0];
  const billiantM = billiantMuation[0];
  const likeM = likeMuation[0];
  const careM = careMuation[0];
  const loveM = loveMuation[0];
  const dislikeM = dislikeMuation[0];

  return (
    <div className="dApp-status-like-comment-share-sect">
      <ul>
        <li>
          <div className="home-post-usr-reaction-wrap">
            <div className="home-post-usr-reaction">
              <span
                onClick={() => {
                  likeM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction1.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <span
                onClick={() => {
                  loveM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction2.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <span
                onClick={() => {
                  careM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction3.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <span
                onClick={() => {
                  clapM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction4.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <span
                onClick={() => {
                  billiantM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction5.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <span
                onClick={() => {
                  wowM({
                    variables: {
                      postId: postid,
                    },
                  }).then((res) => console.log(res));
                }}
              >
                <img
                  src="/images/reaction6.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </div>
          </div>
          <span>
            <img
              src="/images/like1.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/like-hov1.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>
          <a href="#">Like</a>
        </li>

        <li
          onClick={() => {
            dislikeM({
              variables: {
                postId: postid,
              },
            }).then((res) => console.log(res));
          }}
        >
          <span>
            <img
              src="/images/dislike.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/dislike-hov.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>
          <a>Dislike</a>
        </li>

        <li>
          <span>
            <img
              src="/images/gift.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/gift-hov.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>{" "}
          <a href="#">Gift</a>
        </li>

        <li onClick={() => setAddAComment(true)}>
          <span>
            <img
              src="/images/comment-icon.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/comment-icon-hov.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>
          <a>Comment</a>
        </li>

        <li
          onClick={() => {
            setPostModalState({
              ...postContext.postModalState,
              showSharePostModal: true,
              currentPost: post,
            });
          }}
        >
          <span>
            <img
              src="/images/dApp-Share.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/dApp-Share-hov.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>
          <a href="#">Share</a>
        </li>

        <li>
          <span>
            <img
              src="/images/Paper-Plane.png"
              alt="icon"
              className="img-fluid post-like"
            />
            <img
              src="/images/Paper-Plane-hov.png"
              alt="icon"
              className="img-fluid post-like-hov"
            />
          </span>
          <a href="#">Send</a>
        </li>
      </ul>
    </div>
  );
};

export default ReactToPosts;
