//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
const AddHashTagSection = dynamic(() => import("../AddHashTagSection"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const PollReadyComponent = () => {
  const editorRef = useRef();
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const { CKEditor, Editor } = editorRef.current || {};

  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (createPostState.justAddedHashTag) {
      setCreatePostState({ ...createPostState, justAddedHashTag: false });
    }
  }, [createPostState.justAddedHashTag]);

  console.log("xxx", createPostState);

  return (
    <>
      <div className="posting-steps-textBody mb-4">
        {editorLoaded ? (
          <CKEditor
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              setCreatePostState({
                ...createPostState,
                postText: data,
              });
            }}
            config={{
              placeholder: "What do you want to talk about ?",
            }}
            editor={Editor}
            data={createPostState?.postText}
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
              editor?.editing?.view?.change((writer: any) => {
                writer.setStyle(
                  "height",
                  "80px",
                  editor.editing.view.document.getRoot()
                );
              });
            }}
          />
        ) : (
          "Loading Editor..."
        )}
      </div>

      <div className="createApoll-option mb-3">
        <h3>{createPostState.pollQuestion}</h3>
        <h4>
          You can see how people vote.
          <a href="#">Learn More</a>
        </h4>
        <div className="createApoll-option-btn">
          <button>{createPostState.OptionA}</button>
          <button>{createPostState.OptionB}</button>
          {createPostState.OptionC != "" && (
            <button>{createPostState.OptionC}</button>
          )}
          {createPostState.OptionC != "" && (
            <button>{createPostState.OptionD}</button>
          )}
        </div>
        <h5>
          0 votes
          <span>• {createPostState.duration} left •</span>
          View results
        </h5>
      </div>

      <AddHashTagSection formState={null} setFormState={null} />
    </>
  );
};

export default PollReadyComponent;
