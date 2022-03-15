import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { PHOTO_POST } from "../../../graphql/mutattions/homePost";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const PostPhoto: React.FC = () => {
  const dispatch = useDispatch();
  const { isImageSelected } = bindActionCreators(actionCreators, dispatch);
  const [selectedImage, setSelectedImage] = useState("");

  // This function will be triggered when the file field change
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
      isImageSelected(e.target.files[0]);
    }
  };

  interface files {
    imageFile: any;
  }

  return (
    <>
      <div className="posting-steps-tab-sect">
        <div id="Photo" className="posttabcontent post-d-block">
          <div className="posting-steps-photo">
            {selectedImage ? (
              <img
                height="450px"
                width="700"
                //@ts-ignore
                src={URL.createObjectURL(selectedImage)}
                alt="Thumb"
              />
            ) : (
              <p>
                Drag & drop images hhh or{" "}
                <span>
                  <a href="#" className="btn posting-step-upload-btn">
                    <input onChange={imageChange} type="file" />
                    Upload
                  </a>
                </span>
              </p>
            )}
          </div>
        </div>
        <div id="Video" className="posttabcontent">
          <div className="posting-steps-video">
            <p>
              <a href="#">Select video to share</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(PostPhoto, { getDataFromTree });
