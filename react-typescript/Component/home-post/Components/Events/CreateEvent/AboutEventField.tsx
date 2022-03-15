import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface Props {
  convertedContent: any;
  setConvertedContent: any;
}

export const imageConfig = {
  toolbar: [
    "imageStyle:inline",
    "imageStyle:wrapText",
    "imageStyle:breakText",
    "|",
    "toggleImageCaption",
    "imageTextAlternative",
  ],
};

export const config = {
  toolbar: [
    "heading",
    "bold",
    "italic",
    "underline",
    "fontSize",
    "imageInsert",
    "imageStyle:inline",
    "imageStyle:wrapText",
    "imageStyle:breakText",
    "|",
    "fontFamily",
    "fontColor",
    "link",
    "bulletedList",
    "numberedList",
    "alignment",
    "|",
    "outdent",
    "indent",
    "|",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
    "pageBreak",
    "removeFormat",
    "specialCharacters",
    "restrictedEditingException",
    "strikethrough",
    "highlight",
    "horizontalLine",
    "codeBlock",
    "findAndReplace",
    "code",
  ],
  language: "en",
  image: imageConfig,
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
};

const AboutEventField: React.FC<Props> = ({
  convertedContent,
  setConvertedContent,
}) => {
  const [aboutEvent, setAboutEvent] = useState("");
  const [showFullEditor, setShowFullEditor] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  // @ts-ignore
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <div className="event-form-grp">
        <div className="event-form-label">About event</div>
        <div className="event-form-inputbox">
          {editorLoaded ? (
            <CKEditor
              config={config}
              editor={Editor}
              data={convertedContent}
              onReady={(editor: any) => {
                console.log("Editor is ready to use!", editor);
              }}
              onFocus={() => {
                setShowFullEditor(true);
              }}
            />
          ) : (
            ""
          )}
          <div
            className={
              showFullEditor
                ? "modal event-about-modalBlock in"
                : "modal event-about-modalBlock"
            }
            style={
              showFullEditor
                ? {
                    display: "block",
                    background: "rgba(0,0,0,0.7)",
                  }
                : { display: "none" }
            }
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content about-modalBlock-content">
                <span
                  onClick={() => setShowFullEditor(false)}
                  className="about-modalBlock-close"
                >
                  <img
                    src="/images/ECross.png"
                    className="img-fluid"
                    alt="close"
                    data-dismiss="modal"
                  />
                </span>
                <div className="about-modalBlock-header">
                  <h3 className="modal-title">About Event</h3>
                </div>
                {editorLoaded ? (
                  <CKEditor
                    onBlur={(event: any, editor: any) => {
                      const data = editor.getData();
                      setConvertedContent(data);
                    }}
                    config={config}
                    editor={Editor}
                    data={convertedContent}
                    onReady={(editor: any) => {
                      console.log("Editor is ready to use!", editor);
                    }}
                  />
                ) : (
                  ""
                )}
                <div className="comm-form-bttn-grp">
                  <span className="btn-mr-16">
                    <button type="button" className="event-form-preview-btn">
                      Preview
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() => setShowFullEditor(false)}
                      type="button"
                      className="event-form-confirm-btn"
                    >
                      Confirm
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="event-form-loghtbox-txt">
          Once you click on it, this will open in a lightbox
        </p>
      </div>
    </>
  );
};

export default AboutEventField;
