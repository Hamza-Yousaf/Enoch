import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_PROFILE_QUERY } from "../../../../../graphql/queries";
import {
  CREATE_EVENT_MUTATION_BASIC_INFO,
  EVENT_DELETE_MUTATION,
  UPLOAD_MUTATION,
} from "../../../../../graphql/mutations";
import withApollo from "../../../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { Formik, FormikErrors } from "formik";
import classnames from "classnames";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../../../Component/AlertModal"));
import "three-dots/dist/three-dots.min.css";
const AboutEventField = dynamic(() => import("./AboutEventField"));
import router from "next/router";

interface MyFormValues {
  title: string;
  description: string;
}

const BasicInfoForm = () => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE_QUERY);
  const [organizer, setOrganizer] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);
  const [convertedContent, setConvertedContent] = useState(null);

  const dispatch = useDispatch();

  const { currentEventCreationStage, currentEventCreationId } =
    bindActionCreators(actionCreators, dispatch);

  const currentEventCreationStageValue = useSelector(
    (state: State) => state.currentEventCreationStage
  );

  const currentEventCreationIdValue = useSelector(
    (state: State) => state.currentEventCreationId
  );

  if (data) {
    console.log(data);
  }

  const initialValues = {
    title: "",
    description: "",
  };

  const createEventsData = useMutation(CREATE_EVENT_MUTATION_BASIC_INFO);
  const deleteEventData = useMutation(EVENT_DELETE_MUTATION);

  console.log(createEventsData[0]);
  const createEvent = createEventsData[0];
  const deleteEvent = deleteEventData[0];

  const nextStage = (e: any): any => {
    if (typeof e === "string") {
    } else {
      e.preventDefault();
    }
    if (currentEventCreationStageValue <= 5) {
      if (currentEventCreationStageValue === 5) {
        currentEventCreationStage(5.5);
      } else {
        currentEventCreationStage(currentEventCreationStageValue + 1);
      }
    }
  };

  // const deleteAnEvent = deleteEvent({
  //   variables: {
  //     id: currentEventCreationIdValue,
  //   },
  // })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const upLoadData = useMutation(UPLOAD_MUTATION);

  const upload = upLoadData[0];

  const onChangeFile = (e: any) => {
    const [file] = e.target.files;
    console.log(file);

    upload({
      variables: {
        picture: file,
      },
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(convertedContent);
  return (
    <div className="event-create-right-panel">
      <div className="create-event-form ath-securi-add-user-scrollable">
        <AlertModal
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          message={message}
          success={success}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={(values: MyFormValues, setSubmitting: any) => {
            createEvent({
              variables: {
                createEventBasicInput: {
                  title: values.title,
                  description: convertedContent,
                },
              },
            })
              .then((res) => {
                console.log(res);
                if (res.data.createEventBasicInfo.success === true) {
                  nextStage("e");
                  currentEventCreationId(
                    res.data.createEventBasicInfo.event.id
                  );
                } else {
                  setShowAlert(true);
                  setMessage(res.data.createEventBasicInfo.errors[0].message);
                  setSuccess(false);
                }
              })
              .catch((err) => {
                setShowAlert(true);
                setMessage("something went wrong");
                setSuccess(false);
              });
          }}
          validate={(values: MyFormValues) => {
            let errors: FormikErrors<MyFormValues> = {};

            if (!values.title) {
              errors.title = "Please enter your event title";
            }

            return errors;
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }: any) => (
            <form onSubmit={handleSubmit}>
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
                    {organizer.length < 1 ? "Select Organizer" : organizer}
                  </div>
                  <div
                    id="create-event-dropList"
                    className="dropdown-menu create-drop-list"
                  >
                    <ul>
                      <li>
                        <img
                          src="/images/postUser1.png"
                          className="img-fluid"
                          alt="pic"
                        />
                        <span>
                          {loading ? (
                            <div className="ml-3 dot-pulse"></div>
                          ) : loading === false &&
                            data?.getUserProfile?.firstName?.length > 0 ? (
                            <span
                              className="ml-2"
                              onClick={() =>
                                setOrganizer(data?.getUserProfile?.userName)
                              }
                            >
                              {data?.getUserProfile?.userName}
                            </span>
                          ) : (
                            <p>failed to load organizer data</p>
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="event-form-grp">
                <div className="event-form-label">Main Event Image</div>
                <div className="event-form-input-upload">
                  <span className="input-upload-lft">1280px X 240px</span>
                  <span>
                    <a href="#" className="btn event-upload-btn">
                      <input onChange={onChangeFile} type="file" />
                      Upload
                    </a>
                  </span>
                </div>
              </div> */}
              <div className="event-form-grp">
                <div className="event-form-label">Event Title</div>
                <div
                  className={classnames("event-form-inputbox", {
                    "green-boeder": values.title != "",
                    "error-block": errors.title,
                  })}
                >
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    type="text"
                    placeholder="Title for your event"
                    name="title"
                  />
                </div>
                <div className="error-msg">{errors.title}</div>
              </div>
              <AboutEventField
                setConvertedContent={setConvertedContent}
                convertedContent={convertedContent}
              />
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
                  <button type="submit" className="event-form-next-btn">
                    Next
                  </button>
                </span>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withApollo(BasicInfoForm, { getDataFromTree });
