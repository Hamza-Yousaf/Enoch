import { useMutation } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { PHOTO_POST, VIDEO_POST } from "../../../graphql/mutattions/homePost";
import { POSTS_QUERY } from "../../../graphql/Queries/homepostQuery";
import { actionCreators, State } from "../../../state";
import { useRouter } from "next/router";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import dynamic from "next/dynamic";
const CommunitiesDropdown = dynamic(() => import("./CommunitiesDropdown"));
const AddHashTagSection = dynamic(() => import("../AddHashTagSection"));


interface Props {
  uploadType: string;
}

const PostVideoScreen: React.FC<Props> = ({ uploadType }) => {
  const [titleChecked, setTitleChecked] = useState(false);
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    postTo: "Your Communities",
    showPostToDropdown: false,
  });
  const textAreaRef = useRef();
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const upLoadVideoMuationData = useMutation(VIDEO_POST, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 150,
        },
      },
    ],
  });

  const uploadVideo = upLoadVideoMuationData[0];
  const sendingVideo = upLoadVideoMuationData[1].loading;

  const handleVideoSubmit = () => {
    uploadVideo({
      variables: {
        file: createPostState?.postVideoFile,
        whoCanSeePost: createPostState?.whoCanSeePost,
        postingAs: createPostState?.postingAs,
        title: formState.title,
        text: formState.text,
      },
    })
      .then((resp) => {
        console.log(resp);
        setCreatePostState({
          ...createPostState,
          // postVideoFile: "",
          isVideoPostScreenOpen: false,
        });
        router.push("/feeds");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const upLoadDataMuationData = useMutation(PHOTO_POST, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 150,
        },
      },
    ],
  });

  const postPhoto = upLoadDataMuationData[0];
  const sendingPhoto = upLoadDataMuationData[1].loading;

  const PostAPhoto = () => {
    setTitleChecked(true);
    if (formState.title.length > 2) {
      postPhoto({
        variables: {
          file: createPostState?.postImageFile,
          whoCanSeePost: createPostState?.whoCanSeePost,
          postingAs: createPostState?.postingAs,
          title: formState.title,
          text: formState.text,
        },
      })
        .then((resp) => {
          console.log("response", resp);
          setCreatePostState({
            ...createPostState,
            // postImageFile: "",
            isImagePostScreenOpen: false,
          });
          router.push("/feeds");
        })
        .catch((err) => {
          console.log("response", err);
        });
    }
  };

  const cancel = () => {
    setCreatePostState({
      ...createPostState,
      postVideoFile: "",
      postImageFile: "",
      isPostScreenOpen: false,
    });
    setFormState({
      title: "",
      text: "",
      postTo: "Your Communities",
      showPostToDropdown: false,
    });
  };

  console.log("state current", formState);
  console.log("state current", createPostState);
  console.log("state current", createPostState.postImageFile);

  useEffect(() => {
    if (
      createPostState?.postType === "photo" &&
      !createPostState.postImageFile.name
    ) {
      setCreatePostState({
        ...createPostState,
        postVideoFile: "",
        postImageFile: "",
        isPostScreenOpen: false,
      });
    }
  }, [createPostState.postImageFile]);

  useEffect(() => {
    if (
      createPostState?.postType === "video" &&
      !createPostState.postVideoFile.name
    ) {
      setCreatePostState({
        ...createPostState,
        postVideoFile: "",
        postImageFile: "",
        isPostScreenOpen: false,
      });
    }
  }, [createPostState.postVideoFiVideo]);

  useEffect(() => {
    if (createPostState.justAddedHashTag) {
      //@ts-ignore
      textAreaRef.current.focus();
      setCreatePostState({
        ...createPostState,
        justAddedHashTag: false,
      });
    }
  }, [createPostState.justAddedHashTag]);

  return (
    <div className="posting-steps-block-left home-img-upload-sect-left">
      <div className="home-img-upload-sect-headings">
        <h3>
          {createPostState.postType === "photo"
            ? "Share A Photo"
            : "Share a Video"}
        </h3>
      </div>
      <div className="home-img-upload-sect-body">
        <form>
          <div
            className={
              titleChecked && formState.title.length < 2
                ? "input-title border border-danger"
                : "input-title"
            }
          >
            <input
              value={formState.title}
              type="text"
              placeholder="Title*"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="input-message">
            <textarea
              ref={textAreaRef}
              maxLength={500}
              value={formState.text}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  text: e.target.value,
                });
              }}
              placeholder="Write a Message max(500 characters)"
            ></textarea>
          </div>
          <div className="upload-img">
            <ul>
              {createPostState.postType === "photo" && (
                <li>
                  <span>
                    <img
                      src={
                        createPostState.postImageFile.name
                          ? URL.createObjectURL(createPostState.postImageFile)
                          : "/images/thumbnail.png"
                      }
                      alt="img"
                      className="img-fluid"
                    />
                  </span>
                </li>
              )}
              {createPostState.postType === "video" && (
                <li>
                  <span>
                    <video
                      src={
                        createPostState?.postVideoFile.name
                          ? URL.createObjectURL(createPostState?.postVideoFile)
                          : "/images/vidThumbnail.png"
                      }
                      className="img-fluid"
                      //@ts-ignore
                      type="video/mp4"
                    ></video>
                  </span>
                  <div className="upload-video-play-btn">
                    <img
                      src="images/play-button-o.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                </li>
              )}
            </ul>
          </div>
          <CommunitiesDropdown
            formState={formState}
            setFormState={setFormState}
          />
        </form>
      </div>
      <div className="home-img-upload-sect-footer">
        <button onClick={cancel} className="cancel-btn">
          Cancel
        </button>
        <button
          onClick={
            createPostState.postType === "video"
              ? handleVideoSubmit
              : PostAPhoto
          }
          className={
            formState?.title?.length > 0
              ? "post-btn posting-steps-done-btn"
              : "post-btn disable"
          }
        >
          {sendingVideo || sendingPhoto ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Post"
          )}
        </button>
      </div>
      <AddHashTagSection formState={formState} setFormState={setFormState} />
    </div>
  );
};

export default withApollo(PostVideoScreen, { getDataFromTree });
