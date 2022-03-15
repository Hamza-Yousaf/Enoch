import React, { useState, useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import classnames from "classnames";
import withApollo from "../../../../lib/withApollo";
import { useQuery, useMutation } from "@apollo/client";
import { NEW_COMMENT } from "../../../../graphql/mutattions/homePost";
import {
  COMMENT_REFRESH_QUERY,
  COMMENT_COUNTER,
} from "../../../../graphql/Queries/homepostQuery";
import dynamic from "next/dynamic";
const CommentDetail = dynamic(() => import("./CommentDetail"));
import { GET_USER_PROFILE_QUERY } from "../../../../graphql/queries";

interface Props {
  postid?: any;
  followerCount?:any
  imageurl?:any
}

const CommentBox: React.FC<Props> = ({ postid, followerCount, imageurl }: Props) => {
  const [addComment, setAddComment] = useState("");
  const [userAvater, setUserAvater] = useState("");
  const [comments, setComments] = useState([]);

  const getUserProfileQuery = useQuery(GET_USER_PROFILE_QUERY);
  

  const commentRefreshQuery = useQuery(COMMENT_REFRESH_QUERY, {
    variables: {
      PostId: postid
    },
  });

  
  const newCommentMuation = useMutation(NEW_COMMENT, {
    refetchQueries: [     
      {
        query: COMMENT_COUNTER,
        variables: {
          postid: postid,
        },
      },
      {
        query: COMMENT_REFRESH_QUERY,
        variables: {
          PostId: postid,
        },
      },
    ],
  });

  const newCommentM = newCommentMuation[0];

  const onCommentHandler = (e: any, id: any) => {
    if (e.keyCode === 13) {
      newCommentM({
        variables: {
          id: id,
          CommentInput: addComment,
        },
      })
        .then((res) => {
          setAddComment("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    if (commentRefreshQuery?.data?.CommentRefreshQuery) {
      setComments(commentRefreshQuery?.data?.CommentRefreshQuery);
    }
  }, [commentRefreshQuery?.data]);


  useEffect(() => {
    if (getUserProfileQuery?.data?.getUserProfile) {
      setUserAvater(getUserProfileQuery?.data?.getUserProfile?.profileImage);
    }
  }, [getUserProfileQuery?.data]);

  
  return (
    <div className="dApp-post-comment-box pb-0">
      <div className="dApp-post-comment-writing-sect">
        <div className="dApp-post-comment-input-sect">
          <div className="dApp-post-commenter-img">
            <img              
              src={userAvater !== null ? userAvater : "/images/comm-usr-img5.png"} 
              alt="dp"
              className="img-fluid"
              style={{ borderRadius: '50px', width: "48px", height: "48px" }}        
            />
          </div>
        </div>
        <div className="dApp-post-comment-input-fild">
          <textarea
            name=""
            rows={1}
            id=""
            placeholder="Add a comment"
            value={addComment}
            onChange={(e) => setAddComment(e.target.value)}
            onKeyDown={(e) => onCommentHandler(e, postid)}
          ></textarea>
          <div className="dApp-post-comment-emoje-and-gallery">
            <img src="/images/emoji-icon.png" alt="" className="img-fluid" />
            <img src="/images/dAppgallery.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {comments?.length > 0 && (
        <div className="Most-relevant">
          <a href="#">Most relevant</a>
        </div>
      )}

      {comments?.length > 0
        ? comments?.map((item, index) => {
            return <CommentDetail item={item} followerCount={followerCount} userImageurl={imageurl}/>;
          })
        : ""}
    </div>
  );
};

export default withApollo(CommentBox, { getDataFromTree });
