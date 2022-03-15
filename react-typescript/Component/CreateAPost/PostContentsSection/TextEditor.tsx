//@ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const TextEditor = () => {
  const [focusEditor, setFocusEditor] = useState(false);
  const dispatch = useDispatch();
  const editorRef = useRef();

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
      setFocusEditor(true);
      setCreatePostState({ ...createPostState, justAddedHashTag: false });
    }
  }, [createPostState.justAddedHashTag]);

  return (
    <>
      <div className="posting-steps-textBody">
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
              if (focusEditor) {
                editor.focus();
              }
              editor?.editing?.view?.change((writer: any) => {
                writer.setStyle(
                  "height",
                  "150px",
                  editor.editing.view.document.getRoot()
                );
              });
            }}
          />
        ) : (
          "Loading Editor..."
        )}
      </div>
    </>
  );
};

export default TextEditor;
