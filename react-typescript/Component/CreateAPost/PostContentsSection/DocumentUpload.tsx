//@ts-nocheck

import React, { useState, useEffect } from "react";
import AddHashTagSection from "../AddHashTagSection";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import { useDispatch, useSelector } from "react-redux";
import DropboxChooser from "react-dropbox-chooser";
import useDrivePicker from "react-google-drive-picker";
const api = "ktgx5zq2q245h27";
const DocumentUpload = () => {
  const [openPicker, data, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "681934892671-uuhbi3e5hsp732iodf08fjvhqtngpvlm.apps.googleusercontent.com",
      developerKey: "AIzaSyA7KfR4RzR9BGFOEKJ_ObLo3_vD4jMSKaw",
      viewId: "DOCS",

      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    });
  };

  const [document, setDocument] = useState(null);

  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  const handleDocOnChange = (e: any) => {
    if (e.target.files[0]) {
      const newFile = { ...createPostState };
      newFile.document = e.target.files[0];
      newFile.isDocPostScreenOpen = true;
      setCreatePostState(newFile);
      console.log(createPostState.document);
    }
  };

  const handleSuccess = (files) => {
    if (files) {
      const newFile = { ...createPostState };
      newFile.document = files[0];
      newFile.isDocPostScreenOpen = true;
      setCreatePostState(newFile);
      console.log(createPostState.document);
    }
    console.log(files);
  };

  useEffect(() => {
    // do anything with the selected/uploaded files
    if (data) {
      const newFile = { ...createPostState };
      newFile.document = data.docs[0];
      newFile.isDocPostScreenOpen = true;
      setCreatePostState(newFile);
      console.log(createPostState.document);
    }
  }, [data, setCreatePostState, createPostState]);
  return (
    <div>
      <div className="posting-steps-document">
        <div className="step-doc-upld-btn">
          <a href="#!" className="btn posting-step-upload-btn">
            <input type="file" onChange={handleDocOnChange} />
            Upload
          </a>
        </div>
        <p className="step-doc-para1">Or upload from the cloud:</p>
        <div className="document-btn-grp" style={{ display: "flex" }}>
          <span>
            <DropboxChooser appKey={api} success={handleSuccess}>
              <a href="#!" className="btn step-savedrive-btn">
                <img src="images/dropbox.png" className="img-fluid mr-2" />
                Dropbox
              </a>
            </DropboxChooser>
          </span>
          <span>
            <a
              href="#!"
              className="btn step-savedrive-btn"
              onClick={() => handleOpenPicker()}
            >
              <img src="images/gdrive.png" className="img-fluid mr-2" />
              Google Drive
            </a>
          </span>
        </div>
      </div>
      <p className="step-doc-para2">
        For accessibility purposes, Enoch members who can view your post will be
        able to download your document as a PDF.
        <u>Learn more</u>
      </p>
      <AddHashTagSection />
    </div>
  );
};

export default DocumentUpload;
