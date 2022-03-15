import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const CreatePostTitle = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  return (
    <div>
      {createPostState.currentCreatePostTab === "text-post" && (
        <h2 className="posting-step-hd-title current">Create Post</h2>
      )}
      {createPostState.currentCreatePostTab === "poll-post" && (
        <h2 className="posting-step-hd-title current">Create Poll</h2>
      )}
      {createPostState.currentCreatePostTab === "document-post" && (
        <h2 className="posting-step-hd-title current">Share a document</h2>
      )}
    </div>
  );
};

export default CreatePostTitle;
