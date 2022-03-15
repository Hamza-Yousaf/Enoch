import { useMutation, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { EDIT_EVENT_MUTATION_BASIC_INFO } from "../../../../../graphql/mutations";
import {
  GET_EVENTS_QUERY,
  GET_USER_PROFILE_QUERY,
} from "../../../../../graphql/queries";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../../AlertModal"));


interface Props {
  nextStage: any;
}

const config = {
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

const EditBasicInfoForm: React.FC<Props> = ({ nextStage }) => {
  const [organizer, setOrganizer] = useState("");
  const [title, setTitle] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [convertedContent, setConvertedContent] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const eventId = router.query.eventId;

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

  console.log(convertedContent);

  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const createEventsData = useMutation(EDIT_EVENT_MUTATION_BASIC_INFO, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const createEvent = createEventsData[0];

  const editBasicInfo = () => {
    createEvent({
      variables: {
        createEventBasicInput: {
          title: title,
          description: convertedContent,
        },
        eventId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.editEventBasicInfo.success === true) {
          nextStage("e");
        } else {
          setShowAlert(true);
          setMessage(res.data.editEventBasicInfo.errors[0].message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setShowAlert(true);
        setMessage("something went wrong");
        setSuccess(false);
      });
  };

  console.log(title);
  return (
    <div className="event-create-right-panel editEvnt-right">
      <div className="create-event-form">
        <AlertModal
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          message={message}
          success={success}
        />
        <form>
          <div className="event-form-grp">
            <div className="event-form-label">Organizer*</div>
            <div className="event-form-input dropdown">
              <div
                id="dropdown-boxId"
                className="event-dropdown-box"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {data?.getUserProfile?.firstName +
                  " " +
                  data?.getUserProfile?.lastName}
              </div>
            </div>
          </div>
          {/* <!-- <div className="event-form-grp">
												<div className="event-form-label">
													Main Event Image
												</div>
												<div className="event-form-input-upload">
													<span className="input-upload-lft">1280px  X  240px</span>
													<span><a href="#" className="btn event-upload-btn"><input type="file">Upload</a></span>
												</div>
											</div> --> */}
          <div className="event-form-grp">
            <div className="event-form-label">Event Title</div>
            <div className="event-form-inputbox maxwidth-506">
              <input
                value={title}
                onChange={handleTitle}
                type="text"
                placeholder="Title for your event"
              />
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">About event</div>
            <div className="event-form-inputbox">
              {editorLoaded ? (
                <CKEditor
                  onChange={(event: any, editor: any) => {
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
            </div>
          </div>
          <div className="event-form-bttn-grp">
            <span className="btn-mr-16">
              <button
                onClick={() => {
                  router.back();
                }}
                className="event-form-cancel-btn"
              >
                Cancel
              </button>
            </span>
            <span>
              <button
                onClick={editBasicInfo}
                type="button"
                className="event-form-next-btn"
              >
                Next
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBasicInfoForm;
