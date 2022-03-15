import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import dynamic from "next/dynamic";
const PhotoPostSection = dynamic(() => import("./PhotoPostSection"));
const TextEditor = dynamic(() => import("./TextEditor"));
const VideoPostSection = dynamic(() => import("./VideoPostSection"));
const CreateAPollSection = dynamic(() => import("./CreateApoll"));
const PollReadyComponent = dynamic(() => import("./PollReadyComponent"));
const Celebration = dynamic(() => import("./Celebration"));
const DocumentUpload = dynamic(() => import("./DocumentUpload"));
const PostContentSection = () => {
  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  return (
    <>
      {createPostState?.currentCreatePostTab === "text-post" && (
        <div className="posting-steps-innerbody">
          <TextEditor />
        </div>
      )}

      {createPostState?.currentCreatePostTab === "poll-post" &&
        createPostState?.pollCreationStage === 2 && (
          <div className="posting-steps-innerbody">
            <PollReadyComponent />
          </div>
        )}

      {createPostState?.currentCreatePostTab === "photo-post" && (
        <PhotoPostSection />
      )}

      {createPostState?.currentCreatePostTab === "video-post" && (
        <VideoPostSection />
      )}

      {createPostState?.currentCreatePostTab === "poll-post" &&
        createPostState.pollCreationStage !== 2 && <CreateAPollSection />}
      {createPostState?.currentCreatePostTab === "celeb-post" && (
        <Celebration />
      )}
      {createPostState?.currentCreatePostTab === "document-post" && (
        <DocumentUpload />
      )}
    </>
  );
};

export default PostContentSection;
