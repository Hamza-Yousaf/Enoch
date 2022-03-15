import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_EVENT_MUTATION_EVENT_PAGES } from "../../../../../graphql/mutations";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../../lib/withApollo";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

const EventPageForm = () => {
  const [eventHostingFrequency, setEventHostingFrequency] = useState("");
  const [showFreqOptions, setShowFreqOptions] = useState(false);

  const [eventType, setEventType] = useState("");
  const [showTypeOptions, setShowTypeOptions] = useState(false);

  const [eventCategory, setEventCategory] = useState("");
  const [showCatOptions, setShowCatOptions] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const { currentEventCreationStage, currentEventCreationId } =
    bindActionCreators(actionCreators, dispatch);

  const currentEventCreationStageValue = useSelector(
    (state: State) => state.currentEventCreationStage
  );

  const currentEventCreationIdValue = useSelector(
    (state: State) => state.currentEventCreationId
  );

  const toggleFreq = () => {
    setShowFreqOptions(!showFreqOptions);
  };

  const toggleType = () => {
    setShowTypeOptions(!showTypeOptions);
  };

  const toggleCat = () => {
    setShowCatOptions(!showCatOptions);
  };

  const createEventsData = useMutation(CREATE_EVENT_MUTATION_EVENT_PAGES);

  console.log(createEventsData[0]);
  const createEventEventPages = createEventsData[0];

  const createEvent = (e: any) => {
    e.preventDefault();
    createEventEventPages({
      variables: {
        createEventEventPageInput: {
          eventId: currentEventCreationIdValue,
          event_hosting_frequency: eventHostingFrequency,
          type_of_event: eventType,
          event_category: eventCategory,
        },
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.createEventEventPage.success === true) {
          nextStage("e");
        } else {
          setShowAlert(true);
          setMessage(resp.data.createEventEventPage.errors[0].message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setShowAlert(true);
        setMessage("something went wrong");
        setSuccess(false);
      });
  };

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

  return (
    <div className="event-create-right-panel">
      <div className="create-event-form ">
        <form>
          <div className="event-form-grp">
            <div className="event-form-label">
              How often do you plan to host events?
            </div>
            <div
              className={
                showFreqOptions
                  ? "event-form-input dropdown open"
                  : "event-form-input dropdown"
              }
            >
              <div
                onClick={() => {
                  toggleFreq();
                }}
                id="dropdown-boxId3"
                className={
                  eventHostingFrequency.length > 0
                    ? "font-weight-bold text-dark event-dropdown-box-quantity"
                    : " event-dropdown-box-quantity"
                }
              >
                {eventHostingFrequency.length > 0
                  ? eventHostingFrequency
                  : "Select"}
              </div>
              <div
                id="create-event-dropList23"
                className="dropdown-menu create-drop-list-quantity"
              >
                <ul>
                  <li
                    onClick={() => {
                      setEventHostingFrequency("Everyday");
                      toggleFreq();
                    }}
                  >
                    Everyday
                  </li>
                  <li
                    onClick={() => {
                      setEventHostingFrequency("Weekly");
                      toggleFreq();
                    }}
                  >
                    Weekly
                  </li>
                  <li
                    onClick={() => {
                      setEventHostingFrequency("Monthly");
                      toggleFreq();
                    }}
                  >
                    Monthly
                  </li>
                  <li
                    onClick={() => {
                      setEventHostingFrequency("Yearly");
                      toggleFreq();
                    }}
                  >
                    Yearly
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">
              What type of event are you hosting today?
            </div>
            <div
              className={
                showTypeOptions
                  ? "event-form-input dropdown open"
                  : "event-form-input dropdown"
              }
            >
              <div
                onClick={() => toggleType()}
                id="dropdown-boxId4"
                className={
                  eventType.length > 0
                    ? "font-weight-bold text-dark event-dropdown-box-quantity"
                    : " event-dropdown-box-quantity"
                }
              >
                {eventType.length > 0 ? eventType : "Select type"}
              </div>
              <div
                id="create-event-dropList4"
                className="dropdown-menu create-drop-list-quantity"
              >
                <ul>
                  <li
                    onClick={() => {
                      setEventType("Conference");
                      toggleType();
                    }}
                  >
                    Conference
                  </li>
                  <li
                    onClick={() => {
                      setEventType("seminar or Talk");
                      toggleType();
                    }}
                  >
                    Seminar or Talk
                  </li>
                  <li
                    onClick={() => {
                      setEventType("Meeting or Networking Event");
                      toggleType();
                    }}
                  >
                    Meeting or Networking Event
                  </li>
                  <li
                    onClick={() => {
                      setEventType("Educational");
                      toggleType();
                    }}
                  >
                    Educational
                  </li>
                  <li
                    onClick={() => {
                      setEventType("Party or Social Gathering");
                      toggleType();
                    }}
                  >
                    Party or Social Gathering
                  </li>
                  <li
                    onClick={() => {
                      setEventType("Others");
                      toggleType();
                    }}
                  >
                    Others
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">
              How would you categorize this event?
            </div>
            <div
              className={
                showCatOptions
                  ? "event-form-input dropdown open"
                  : "event-form-input dropdown"
              }
            >
              <div
                onClick={() => toggleCat()}
                id="dropdown-boxId2"
                className={
                  eventCategory.length > 0
                    ? "font-weight-bold text-dark event-dropdown-box-quantity"
                    : " event-dropdown-box-quantity"
                }
              >
                {eventCategory.length > 0 ? eventCategory : "Select category"}
              </div>
              <div
                id="create-event-dropList2"
                className="dropdown-menu create-drop-list-exp"
              >
                <ul>
                  <li
                    onClick={() => {
                      setEventCategory("Sports or Games");
                      toggleCat();
                    }}
                  >
                    Sports or Games
                  </li>
                  <li
                    onClick={() => {
                      setEventCategory("Business & Professional");
                      toggleCat();
                    }}
                  >
                    Business & Professional
                  </li>
                  <li
                    onClick={() => {
                      setEventCategory("Educational");
                      toggleCat();
                    }}
                  >
                    Educational{" "}
                  </li>
                  <li
                    onClick={() => {
                      setEventCategory("finance");
                      toggleCat();
                    }}
                  >
                    Finance
                  </li>
                  <li
                    onClick={() => {
                      setEventCategory("Performing & Visual Arts");
                      toggleCat();
                    }}
                  >
                    Performing & Visual Arts
                  </li>
                  <li
                    onClick={() => {
                      setEventCategory("Film, Media & Entertainment");
                      toggleCat();
                    }}
                  >
                    Film, Media & Entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="event-form-bttn-grp">
            <span className="btn-mr-16">
              <button className="event-form-cancel-btn">Cancel</button>
            </span>
            <span>
              <button
                onClick={(e) => createEvent(e)}
                className="event-form-next-btn"
                disabled={
                  eventCategory.length < 1 ||
                  eventHostingFrequency.length < 1 ||
                  eventType.length < 1
                }
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

export default withApollo(EventPageForm, { getDataFromTree });
