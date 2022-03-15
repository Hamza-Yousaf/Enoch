import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ARTICLE_POST_MUTATION } from "../../../graphql/mutattions/createArticlePost";
import { CREATE_A_POLL_QUESTION } from "../../../graphql/mutattions/CreateApoll";
import { CREATE_A_DOCUMENT_POST } from "../../../graphql/mutattions/createAdocument";
import { CREATE_A_DOCUMENT_POST_OTHER } from "../../../graphql/mutattions/createDocumentPostOther";
import { POSTS_QUERY } from "../../../graphql/Queries/homepostQuery";
import { actionCreators, State } from "../../../state";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const TabButton = dynamic(() => import("./TabButton"));
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

const CreatePostTabs = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const [byetes, setByetes] = useState(0);
  const [extension, setExtension] = useState(0);

  useEffect(() => {
    if (createPostState?.document?.size) {
      setByetes(createPostState?.document?.size);
    } else if (createPostState?.document?.bytes) {
      setByetes(createPostState?.document?.bytes);
    } else if (createPostState?.document?.sizeBytes) {
      setByetes(createPostState?.document?.sizeBytes);
    }
    if (createPostState?.document?.mimeType) {
      setExtension(createPostState?.document?.mimeType);
    }
  }, []);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const createTextPostMutationData = useMutation(ARTICLE_POST_MUTATION, {
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
  const createDocumentPostOther = useMutation(CREATE_A_DOCUMENT_POST_OTHER, {
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

  const createAPollMutation = useMutation(CREATE_A_POLL_QUESTION, {
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

  const CreateADocument = useMutation(CREATE_A_DOCUMENT_POST, {
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

  const createTextPost = createTextPostMutationData[0];
  const sendingTextPost = createTextPostMutationData[1].loading;

  const createPollPost = createAPollMutation[0];
  const sendingPollPost = createAPollMutation[1].loading;

  const createDocumentPost = CreateADocument[0];
  const sendingDocumentPost = CreateADocument[1].loading;

  const createDocPostOther = createDocumentPostOther[0];
  const sendingDocPostOther = CreateADocument[1].loading;

  const createATextPostFunc = () => {
    createTextPost({
      variables: {
        whoCanSeePost: createPostState?.whoCanSeePost,
        postingAs: createPostState?.postingAs,
        articlepostinput: createPostState?.postText,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data?.createPostArticle) {
          setCreatePostState({ ...createPostState, postText: "" });
          router.push("/feeds");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreateDocumentFunc = () => {
    createDocumentPost({
      variables: {
        whoCanSeePost: createPostState?.whoCanSeePost,
        postingAs: createPostState?.postingAs,
        docxSize: byetes,
        text: createPostState?.postText,
        title: createPostState?.documentDescription,
        file: createPostState?.document,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data?.createDocumentPost) {
          setCreatePostState({ ...createPostState, document: "" });
          setCreatePostState({ ...createPostState, postText: "" });
          setCreatePostState({ ...createPostState, documentDescription: "" });
          console.log("document", createPostState.document);

          router.push("/feeds");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreateDocumentFuncOther = () => {
    createDocPostOther({
      variables: {
        whoCanSeePost: createPostState?.whoCanSeePost,
        postingAs: createPostState?.postingAs,
        docxSize: byetes,
        documentUrl:
          createPostState?.document?.url || createPostState?.document?.link,
        title: createPostState?.documentDescription,
        file: createPostState?.document,
        fileExtentions: extension || "pdf",
        filename: createPostState?.document?.name,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data?.createDocumentPostOther) {
          setCreatePostState({ ...createPostState, document: "" });
          setCreatePostState({ ...createPostState, postText: "" });
          setCreatePostState({ ...createPostState, documentDescription: "" });
          console.log("document", createPostState.document);

          router.push("/feeds");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreateApollPostFunc = () => {
    createPollPost({
      variables: {
        pollQuestion: createPostState?.pollQuestion,
        title: createPostState?.postText,
        postingAs: createPostState?.postingAs,
        optionA: createPostState?.OptionA,
        optionB: createPostState?.OptionB,
        optionC: createPostState?.OptionC,
        optionD: createPostState?.OptionD,
        voteDurationTimeLeft: createPostState?.duration,
        whoCanSeePost: createPostState?.whoCanSeePost,
      },
    })
      .then((res) => {
        console.log("xxx", res);
        setCreatePostState({
          ...createPostState,
          pollQuestion: "",
          pollCreationStage: 1,
          optionCAdded: false,
          addOptionC: false,
          addOptionD: false,
          OptionA: "",
          OptionB: "",
          OptionC: "",
          OptionD: "",
          duration: "1 Week",
          whoCanSeePost: "anyone",
          postText: "",
          sendingPost: false,
        });
        router.push("/feeds");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChangeOperationForPoll = () => {
    setCreatePostState({
      ...createPostState,
      pollCreationStage: 2,
    });
  };

  const operation =
    createPostState?.currentCreatePostTab === "text-post" &&
    createPostState?.document === ""
      ? createATextPostFunc
      : createPostState?.currentCreatePostTab === "poll-post" &&
        createPostState?.pollCreationStage === 1
      ? handleOnChangeOperationForPoll
      : createPostState?.currentCreatePostTab === "poll-post" &&
        createPostState?.pollCreationStage === 2
      ? CreateApollPostFunc
      : createPostState?.document != "" &&
        createPostState?.currentCreatePostTab === "text-post" &&
        !createPostState?.document?.url &&
        !createPostState?.document?.link
      ? CreateDocumentFunc
      : createPostState?.document?.url &&
        createPostState?.currentCreatePostTab === "text-post"
      ? CreateDocumentFuncOther
      : createPostState?.document?.link &&
        createPostState?.currentCreatePostTab === "text-post"
      ? CreateDocumentFuncOther
      : () => {};

  const changeTab = (tab: string) => {
    setCreatePostState({
      ...createPostState,
      currentCreatePostTab: tab,
      postText: "",
    });
  };

  const back = () => {
    if (
      createPostState?.isVideoPostScreenOpen === false ||
      createPostState?.isImagePostScreenOpen === false
    ) {
      if (
        createPostState.currentCreatePostTab !== "text-post" &&
        createPostState.pollCreationStage === 2
      ) {
        setCreatePostState({
          ...createPostState,
          pollCreationStage: 1,
        });
      } else if (createPostState.currentCreatePostTab !== "text-post") {
        setCreatePostState({
          ...createPostState,
          currentCreatePostTab: "text-post",
          postText: "",
          pollQuestion: "",
          OptionA: "",
          OptionB: "",
          OptionC: "",
          OptionD: "",
          duration: "1 Week",
          pollCreationStage: 1,
          optionCAdded: false,
          addOptionC: false,
          addOptionD: false,
        });
      } else if (createPostState.currentCreatePostTab === "text-post") {
        router.push("/feeds");
      }
    }
  };

  console.log("statee", createPostState);
  console.log("statee", operation);

  return (
    <div className="posting-steps-bottm-sect">
      <div className="posting-steps-bottm-links">
        <ul>
          <TabButton
            tabIcon="/images/post-icon1.png"
            tabIcon2="/images/post-icon1-hov.png"
            tabName="Photo"
            tabLink="photo-post"
            changeTab={changeTab}
            createPostState={createPostState}
          />

          <TabButton
            tabIcon="/images/post-icon2.png"
            tabIcon2="/images/post-icon2-hov.png"
            tabName="Video"
            tabLink="video-post"
            changeTab={changeTab}
            createPostState={createPostState}
          />

          <TabButton
            tabIcon="/images/post-icon3.png"
            tabIcon2="/images/post-icon3-hov.png"
            tabName="Document"
            tabLink="document-post"
            changeTab={changeTab}
            createPostState={createPostState}
          />
          <TabButton
            tabIcon="/images/post-icon4.png"
            tabIcon2="/images/post-icon4-hov.png"
            tabName="Poll"
            tabLink="poll-post"
            changeTab={changeTab}
            createPostState={createPostState}
          />
          <TabButton
            tabIcon="/images/post-icon5.png"
            tabIcon2="/images/post-icon5-hov.png"
            tabName="Celebrate"
            tabLink="celeb-post"
            changeTab={changeTab}
            createPostState={createPostState}
          />

          <li className="posingtablinks help-title">
            <a href="javascript:void(0)">
              <img
                src="/images/post-icon6.png"
                className="img-fluid"
                alt="/images"
              />
              <span className="posting-hovr">Help</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="posting-steps-btn-links">
        <span className="mr-2">
          <a onClick={back} href="#!" className="btn posting-steps-back-btn">
            Back
          </a>
        </span>
        <span>
          <a
            href="#!"
            id="post-save-btn"
            className={
              createPostState?.postText?.length > 0 ||
              (createPostState?.pollQuestion?.length > 0 &&
                createPostState.OptionA?.length > 0 &&
                createPostState.OptionB?.length > 0)
                ? "btn posting-steps-done-btn active"
                : "btn posting-steps-done-btn disabled"
            }
            onClick={operation}
          >
            {sendingTextPost || sendingPollPost || sendingDocumentPost ? (
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Done"
            )}
          </a>
        </span>
      </div>
    </div>
  );
};

export default withApollo(CreatePostTabs, { getDataFromTree });
