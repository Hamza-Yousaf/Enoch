//@ts-nocheck
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import { useDispatch, useSelector } from "react-redux";

let progressInterval = null;
const DocumentPostStep1 = () => {
  const [prograssBar, setPrograssBar] = useState(0);
  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  const handleOnClickDone = (e: any) => {
    const newFile = { ...createPostState };
    newFile.isDocPostScreenOpen = false;
    newFile.currentCreatePostTab = "text-post";
    setCreatePostState(newFile);
  };
  const handleBackButton = (e: any) => {
    const newFile = { ...createPostState };
    newFile.isDocPostScreenOpen = false;
    newFile.currentCreatePostTab = "document-post";
    newFile.documet = "";
    setCreatePostState(newFile);
  };
  const handleDocumentDescription = (e: any) => {
    const newFile = { ...createPostState };
    newFile[e.target.name] = e.target.value;

    setCreatePostState(newFile);
  };
  useEffect(() => {
    progressInterval = setInterval(() => {
      setPrograssBar((prev) => prev + 1);
    }, 12);
  }, []);

  useEffect(() => {
    if (prograssBar >= 100) {
      clearInterval(progressInterval);
    }
  }, [prograssBar]);
  return (
    <div className="posting-steps-block-left home-img-upload-sect-left">
      <div className="home-img-upload-sect-headings">
        <h3>Share a document</h3>
      </div>
      <div className="home-img-upload-sect-body">
        <form>
          <div className="input-title">
            <input
              type="text"
              placeholder="Add a descriptive title to your document"
              name="documentDescription"
              onChange={handleDocumentDescription}
            />
          </div>
          <div className="upload-pdf-box">
            <div
              className={`${
                prograssBar === 100 ? "upload-pdf" : "upload-pdf uploading"
              }`}
            >
              <img
                src={`${
                  createPostState.document?.sizeBytes
                    ? createPostState.document?.iconUrl
                    : createPostState.document?.bytes
                    ? createPostState.document?.icon
                    : "images/pdf-img.svg"
                }`}
                alt="img"
                className="img-fluid"
              />
            </div>
            {prograssBar === 100 && (
              <div className="upload-pdf-name" style={{ display: "block" }}>
                <h4>{createPostState.document.name}</h4>
                <h5>
                  {createPostState.document?.size}
                  {createPostState.document?.bytes}
                  {createPostState.document?.sizeBytes}kb
                </h5>
              </div>
            )}
            <div
              className="upload-pdf-progress-bar "
              role="progressbar"
              style={{ width: `${prograssBar}%` }}
            ></div>
          </div>
          <p>
            For accessibility purposes, Enoch members who can view your post
            will be able to download your document as a PDF.{" "}
            <a href="#">Learn more</a>
          </p>
        </form>
      </div>
      <div className="home-img-upload-sect-footer">
        <button className="back-btn" onClick={handleBackButton}>
          Back
        </button>
        <button
          className={`${
            createPostState.documentDescription != "" && prograssBar == 100
              ? "done-btn"
              : "done-btn disable"
          }`}
          onClick={handleOnClickDone}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DocumentPostStep1;
