import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import { FileRejection, useDropzone } from "react-dropzone";
import { UploadableFile } from "../../onBoard/profile/ModalCoverPhoto";

const PhotoPostSection = () => {
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    setCreatePostState({
      ...createPostState,
      postImageFile: accFiles[0],
      isPostScreenOpen: true,
      postType: "photo",
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

  const uploadImageFromComputer = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setCreatePostState({
        ...createPostState,
        postImageFile: e.target.files[0],
        isPostScreenOpen: true,
        postType: "photo",
      });
    }
  };

  console.log("state", createPostState);
  return (
    <div
      {...getRootProps()}
      id="Photo"
      className="posttabcontent"
      style={{ display: "block" }}
    >
      <h2 className="posting-step-hd-title current">Share a photo</h2>
      <div className="posting-steps-photo">
        <p>
          Drag & drop images or
          <span>
            <a href="#!" className="btn posting-step-upload-btn">
              <div>
                <input
                  {...getInputProps()}
                  type="file"
                  onChange={uploadImageFromComputer}
                />
                Upload
              </div>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PhotoPostSection;
