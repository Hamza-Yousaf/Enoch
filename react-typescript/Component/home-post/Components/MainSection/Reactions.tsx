import React, { useState, useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import { useQuery, useMutation } from "@apollo/client";
import {
  LIKE_REACTION_COUNTER,
  COMMENT_COUNTER,
} from "../../../../graphql/Queries/homepostQuery";
import {
  DISLIKE_REACT,
  CLAP_REACT,
  WOW_REACT,
  BILLIANT_REACT,
  LIKE_REACT,
  CARE_REACT,
  LOVE_REACT,
} from "../../../../graphql/mutattions/homePost";

interface Props {
  postid: any;
  PerPostViewCount: any;
}

const Reactions: React.FC<Props> = ({ postid, PerPostViewCount }: Props) => {
  const [likeCount, setikeCount] = useState("0");
  const [commentCount, setCommentCount] = useState("0");

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

  const likeReactionCounterData = useQuery(LIKE_REACTION_COUNTER, {
    variables: {
      postid: postid,
    },
  });

  const commentCounterData = useQuery(COMMENT_COUNTER, {
    variables: {
      postid: postid,
    },
  });

  const clapM = clapMuation[0];
  const wowM = wowMuation[0];
  const billiantM = billiantMuation[0];
  const likeM = likeMuation[0];
  const careM = careMuation[0];
  const loveM = loveMuation[0];

  useEffect(() => {
    if (likeReactionCounterData?.data) {
      setikeCount(likeReactionCounterData?.data?.LikeReactionCounter);
    }
  }, [likeReactionCounterData?.data]);

  useEffect(() => {
    if (commentCounterData?.data) {
      setCommentCount(commentCounterData?.data?.CommentCounter);
    }
  }, [commentCounterData?.data]);

  return (
    <div className="dApp-status-react-sect mt-4">
      <ul className="daap-homepost-users-view">
        <li className="dApp-status-react-icon">
          <img
            src="/images/like.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              likeM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <img
            src="/images/love.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              loveM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <img
            src="/images/heart.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              careM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <img
            src="/images/clap.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              clapM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <img
            src="/images/light.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              billiantM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <img
            src="/images/wow.png"
            alt="icon"
            className="img-fluid"
            onClick={() => {
              wowM({
                variables: {
                  postId: postid,
                },
              }).then((res) => console.log(res));
            }}
          />
          <span data-toggle="modal" data-target="#reaction-modal">
            {likeCount}
          </span>
        </li>
        <li>
          <span>
            <img
              src="/images/user-view-icon1.png"
              alt="icon"
              className="img-fluid"
            />
          </span>{" "}
          {commentCount} comments
        </li>
        <li>
          <span>
            {" "}
            <img
              src="/images/user-view-icon2.png"
              alt="icon"
              className="img-fluid"
            />{" "}
          </span>
          {PerPostViewCount ? PerPostViewCount : "0"} Views
        </li>
        <li>
          <span>
            <img
              src="/images/user-view-icon4.png"
              alt="icon"
              className="img-fluid"
            />{" "}
          </span>
          $22
        </li>
        <li className="mr-0">
          <span>
            <img
              src="/images/user-view-icon3.png"
              alt="icon"
              className="img-fluid"
            />{" "}
          </span>
          $3
        </li>
      </ul>
    </div>
  );
};

export default withApollo(Reactions, { getDataFromTree });
