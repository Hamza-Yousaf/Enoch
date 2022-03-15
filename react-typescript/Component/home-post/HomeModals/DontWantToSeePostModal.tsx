import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { BLOCK_POST_MUTATION } from "../../../graphql/mutattions/blockPost";
import { POSTS_QUERY } from "../../../graphql/Queries/homepostQuery";
import { POSTS_I_BLOCKED_QUERY } from "../../../graphql/Queries/postsIBlocked";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";

interface Props {
  postState: any;
  setPostState: any;
  blockThePost: any;
}

const DontWantToSeePostModal: React.FC<Props> = ({
  postState,
  setPostState,
  blockThePost,
}) => {
  const [reason, setReason] = useState("");
  const router = useRouter();

  console.log("reason", reason, postState);
  return (
    <div className="dont-Want-to-See-post-Modal">
      <div
        className={
          postState?.showBlockPostModal ? "modal fade in" : "modal fade"
        }
        id="dont_Want_See_post_Modal"
        role="dialog"
        style={
          postState?.showBlockPostModal
            ? {
                display: "flex",
                alignItems: "center",
                overflowY: "scroll",
                height: "100vh",
              }
            : { display: "none" }
        }
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content dont_Want_See-post-Modal-content">
            <div className="dont_Want_See-Modal-headings">
              <h2>Dont’t want to see this</h2>
              <button
                onClick={() => {
                  setPostState({
                    ...postState,
                    showBlockPostModal: false,
                  });
                }}
                className="close"
                data-dismiss="modal"
              >
                <img
                  src="/images/create-post-modal-Cross.png"
                  alt="icon"
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="dont_Want_See-post-Modal-body">
              <h3>Tell us why you don’t want to see this</h3>
              <h4>Your feedback will help us improve your experience</h4>
              <div className="reason-list">
                <form>
                  <ul>
                    <li>
                      <label className="container">
                        <h5>I’m not intrested in the author</h5>
                        <input
                          type="radio"
                          name="radio"
                          value={"I’m not intrested in the author"}
                          onClick={() => {
                            setReason("I’m not intrested in the author");
                          }}
                          checked={reason === "I’m not intrested in the author"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <h5>I’m not intrested in the topic</h5>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => {
                            setReason("I’m not intrested in the topic");
                          }}
                          checked={reason === "I’m not intrested in the topic"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <h5>I’ve seen too many post on this topic</h5>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => {
                            setReason("I’ve seen too many post on this topic");
                          }}
                          checked={
                            reason === "I’ve seen too many post on this topic"
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <h5>I’ve seen this post before</h5>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => {
                            setReason("I’ve seen this post before");
                          }}
                          checked={reason === "I’ve seen this post before"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <h5>This post is old</h5>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => {
                            setReason("This post is old");
                          }}
                          checked={reason === "This post is old"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <h5>It’s something else</h5>
                        <input
                          type="radio"
                          name="radio"
                          onClick={() => {
                            setReason("It’s something else");
                          }}
                          checked={reason === "It’s something else"}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
              <h6>
                If you think this goes our Professional Community Poicies,
                please let us know.
              </h6>
              <a href="#!">Report this post</a>
            </div>
            <div className="dont_Want_See-post-Modal-footer">
              <button
                onClick={() => blockThePost(postState?.post, reason)}
                className={reason?.length < 1 && "disable"}
                id="dont_Want_See_post_reason_submit_btn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(DontWantToSeePostModal, { getDataFromTree });
