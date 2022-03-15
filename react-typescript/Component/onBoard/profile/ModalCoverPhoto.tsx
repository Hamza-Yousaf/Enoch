import React, { useState, useCallback } from "react";
import classnames from "classnames";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const CoverImageUpload = dynamic(() => import("../../../uploads/CoverImageUpload"));

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

const ModalCoverPhoto = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const profilePictureUrlValue = useSelector(
    (state: State) => state.profilePictureUrl
  );

  const coverImageUrlValue = useSelector((state: State) => state.coverImageUrl);

  return (
    <div
      style={{ cursor: "pointer" }}
      {...getRootProps()}
      className="dApp-home-cover-photo"
    >
      <img
        src={
          coverImageUrlValue.length > 0
            ? coverImageUrlValue
            : "/images/dApp-edit-cover-photo.png"
        }
        alt="cover-photo"
        className="img-fluid h-100"
      />
      <div className="coverPhoto-change-btn">
        <span>
          <img
            src="/images/dApp-Camera.png"
            alt="camera"
            className="img-fluid"
          />
        </span>
        <a href="#">Cover image</a>
      </div>
      <input {...getInputProps()} />
      {files.map((fileWrapper, key) => (
        <CoverImageUpload key={key} file={fileWrapper.file} />
      ))}
    </div>
  );
};

export default ModalCoverPhoto;
