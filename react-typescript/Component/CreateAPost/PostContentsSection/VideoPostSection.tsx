import React, { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const VideoPostSection = () => {
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    setCreatePostState({
      ...createPostState,
      postVideoFile: accFiles[0],
      isPostScreenOpen: true,
      postType: "video",
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const uploadVideoFromComputer = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);

      setCreatePostState({
        ...createPostState,
        postVideoFile: e.target.files[0],
        isPostScreenOpen: true,
        postType: "video",
      });
    }
  };
  return (
    <div
      {...getRootProps()}
      id="Video"
      className="posttabcontent"
      style={{ display: "block" }}
    >
      <h2 className="posting-step-hd-title current">Select/Edit your video</h2>
      <div className="posting-steps-video">
        <p>
          <span>
            <a href="#" className="video-posting-step-upload-btn">
              <input
                {...getInputProps()}
                onChange={uploadVideoFromComputer}
                type="file"
                id="videoSharing"
                style={{ display: "none" }}
              />
              <label
                htmlFor="videoSharing"
                style={{
                  textDecoration: "Underline",
                  cursor: "pointer",
                }}
              >
                select a video to share
              </label>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoPostSection;
