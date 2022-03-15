import React, { useState, useCallback } from "react";
import classnames from "classnames";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import dynamic from "next/dynamic";
const ProfilePicUpload = dynamic(() => import("../../../uploads/ProfilePicUpload"));

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

const ModalProfilePic = () => {
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
    <div className="dApp-home-profile-pic">
      <div
        style={{ cursor: "pointer" }}
        {...getRootProps()}
        className="dApp-profile-picture"
      >
        <div className="dApp-profile-picture-img">
          <img
            src={
              profilePictureUrlValue.length > 0
                ? profilePictureUrlValue
                : "/images/dApp-progile-pic.png"
            }
            alt="profile-picture"
            className="profile-image"
          />
        </div>
        <input
          {...getInputProps()}
          // type="file"
          className="my_file update-profile"
        />
      </div>
      {files.map((fileWrapper, key) => (
        <ProfilePicUpload key={key} file={fileWrapper.file} />
      ))}
    </div>
  );
};

export default ModalProfilePic;
