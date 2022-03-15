import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state/index";

export interface Props {
  file: File;
}

const ProfilePicUpload = ({ file }: Props) => {
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const { profilePictureUrl } = bindActionCreators(actionCreators, dispatch);

  const stateObj = useSelector((state: State) => state);

  useEffect(() => {
    async function upload() {
      const url: any = await uploadFile(file, setProgress);
      profilePictureUrl(url);
    }

    upload();
  }, []);

  console.log(stateObj);

  return (
    <div style={{ color: "rgba(0,255,0,0.8)", marginTop: 50 }}>
      {progress > 0 && progress < 100 ? "uploading..." : ""}
    </div>
  );
};

export default ProfilePicUpload;

function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const key = "docs_upload_example_us_preset";

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };

    xhr.onerror = (evt) => rej(evt);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}
