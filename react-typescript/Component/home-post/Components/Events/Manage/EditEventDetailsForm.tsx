import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CREATE_EVENT_MUTATION_DETAILS } from "../../../../../graphql/mutations";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../../../../AlertModal"));
const SpeakerOption = dynamic(() => import("../CreateEvent/SpeakerOption"));


interface Props {
  nextStage: any;
}

const EditEventDetailsForm: React.FC<Props> = ({ nextStage }) => {
  const [experienceLevel, setExperienceLevel] = useState("");
  const [eventPlanners, setEventPlanners] = useState("just me");

  const [showExpOptions, setShowExpOptions] = useState(false);
  const [showPlanOptions, setShowPlanOptions] = useState(false);

  const [speakerName, setSpeakerName] = useState("");
  const [speakers, setSpeakers] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);
  const [showSpeakersDropList, setShowSpeakersDropList] = useState(false);
  const router = useRouter();
  const eventId = router.query.eventId;

  const toggleExpOptions = () => {
    setShowExpOptions(!showExpOptions);
  };

  const togglePlanOptions = () => {
    setShowPlanOptions(!showPlanOptions);
  };

  const speakerInputHandler = (e: any) => {
    if (e.target.value.length > 0) {
      setShowSpeakersDropList(true);
    } else {
      setShowSpeakersDropList(false);
    }
    setSpeakerName(e.target.value);
  };

  const addToSpeakersArray = (e: any, user: any) => {
    e.preventDefault();
    setSpeakerName("");
    setShowSpeakersDropList(false);
    if (
      speakers.filter((speaker) => {
        return speaker.name === user.name;
      }).length > 0
    ) {
      setShowAlert(true);
      setMessage("speaker already added");
      setSuccess(false);
    } else {
      setSpeakers((speakers) => {
        return [...speakers, user];
      });
    }
  };

  const removeSpeakerFromArray = (index: number) => {
    setSpeakers([...speakers.slice(0, index), ...speakers.slice(index + 1)]);
  };
  console.log(speakers);

  const createEventsData = useMutation(CREATE_EVENT_MUTATION_DETAILS);

  console.log(createEventsData[0]);
  const createEventDetails = createEventsData[0];

  const createEvent = (e: any) => {
    e.preventDefault();
    createEventDetails({
      variables: {
        createEventDetailsInput: {
          eventId,
          experience_level: experienceLevel,
          number_of_event_planners: eventPlanners,
          speakers: speakers,
        },
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.createEventDetails.success === true) {
          nextStage("e");
        } else {
          setShowAlert(true);
          setMessage(resp.data.createEventDetails.errors[0].message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setShowAlert(true);
        setMessage("something went wrong");
        setSuccess(false);
      });
  };

  return (
    <div className="event-create-right-panel editEvnt-right">
      <AlertModal
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        message={message}
        success={success}
      />
      <div className="create-event-form ">
        <form>
          <div className="event-form-grp">
            <div className="event-form-label">
              What's your level of experience hosting events?
            </div>
            <div
              className={
                showExpOptions
                  ? "event-form-input dropdown open"
                  : "event-form-input dropdown "
              }
            >
              <div
                onClick={toggleExpOptions}
                id="dropdown-boxId2"
                className={
                  experienceLevel.length > 0
                    ? "text-dark font-weight-bold event-dropdown-box-exp"
                    : "event-dropdown-box-exp"
                }
              >
                {experienceLevel.length > 0
                  ? experienceLevel
                  : " Select your experience"}
              </div>
              <div
                id="create-event-dropList2"
                className="dropdown-menu create-drop-list-exp"
              >
                <ul>
                  <li
                    onClick={() => {
                      setExperienceLevel("Newbie - This is my first event");
                      toggleExpOptions();
                    }}
                  >
                    Newbie - This is my first event
                  </li>
                  <li
                    onClick={() => {
                      setExperienceLevel(
                        "Beginner - Not my first time, but i still need experience"
                      );
                      toggleExpOptions();
                    }}
                  >
                    Beginner - Not my first time, but i still need experience
                  </li>
                  <li
                    onClick={() => {
                      setExperienceLevel(
                        "Intermediate - I have some past experience hosting events"
                      );
                      toggleExpOptions();
                    }}
                  >
                    Intermediate - I have some past experience hosting events
                  </li>
                  <li
                    onClick={() => {
                      setExperienceLevel(
                        "Expert - I have plenty of experience hosting events"
                      );
                      toggleExpOptions();
                    }}
                  >
                    Expert - I have plenty of experience hosting events
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">
              How many people help plan your events online?
            </div>
            <div
              className={
                showPlanOptions
                  ? "event-form-input dropdown open"
                  : "event-form-input dropdown"
              }
            >
              <div
                onClick={() => {
                  togglePlanOptions();
                }}
                id="dropdown-boxId3"
                className={
                  eventPlanners.length > 0
                    ? "text-dark font-weight-bold event-dropdown-box-quantity"
                    : "event-dropdown-box-quantity"
                }
              >
                {eventPlanners.length > 0 ? eventPlanners : "Select Quantity"}
              </div>
              <div
                id="create-event-dropList23"
                className="dropdown-menu create-drop-list-quantity"
              >
                <ul>
                  <li
                    onClick={() => {
                      setEventPlanners("1 - 5 People");
                      togglePlanOptions();
                    }}
                  >
                    1 - 5 People
                  </li>
                  <li
                    onClick={() => {
                      setEventPlanners("6 - 10 People");
                      togglePlanOptions();
                    }}
                  >
                    6 - 10 People
                  </li>
                  <li
                    onClick={() => {
                      setEventPlanners("11 - 20 People");
                      togglePlanOptions();
                    }}
                  >
                    11 - 20 People
                  </li>
                  <li
                    onClick={() => {
                      setEventPlanners("More than 20");
                      togglePlanOptions();
                    }}
                  >
                    More than 20
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">Add the speakers</div>
            <div className="event-form-input">
              <div
                id="dropdown-boxIdspeak"
                className="event-dropdown-box-speaker"
              >
                {/* <!-- <ul className="box-speaker-item">
													<li>Steven James<span><img src="/images/dCross.png" className="img-fluid box-close" alt="cross"/></span></li>
												</ul> --> */}
                <input
                  type="text"
                  placeholder=""
                  value={speakerName}
                  onChange={(e) => speakerInputHandler(e)}
                  className="evnt-speaker-add"
                />
              </div>
              <div
                id="create-event-speaker"
                className={
                  showSpeakersDropList
                    ? "dropdown-menu create-drop-list show"
                    : "dropdown-menu create-drop-list"
                }
              >
                <ul
                  className="
                                speaker-drop-list
                                ath-securi-add-user-scrollable
                                custom-h-230
                              "
                >
                  <SpeakerOption
                    user={{
                      name: "LeslyMaria",
                      occupation:
                        "New NFT lady, Crypto Enthusiast, Lifelong Otaku",
                      image: "/images/speaker1.png",
                    }}
                    addToSpeakersArray={addToSpeakersArray}
                  />
                  <SpeakerOption
                    user={{
                      name: "Letta",
                      occupation: "sol & eth NFT maxi and crypto enthusiast",
                      image: "/images/speaker2.png",
                    }}
                    addToSpeakersArray={addToSpeakersArray}
                  />
                  <SpeakerOption
                    user={{
                      name: "LeslyMaria",
                      occupation:
                        "New NFT lady, Crypto Enthusiast, Lifelong Otaku",
                      image: "/images/speaker1.png",
                    }}
                    addToSpeakersArray={addToSpeakersArray}
                  />
                  <SpeakerOption
                    user={{
                      name: "Letta",
                      occupation: "sol & eth NFT maxi and crypto enthusiast",
                      image: "/images/speaker2.png",
                    }}
                    addToSpeakersArray={addToSpeakersArray}
                  />
                </ul>
              </div>
            </div>
            <p className="speaker-bottom-txt">
              Add any of your connections as speakers.
              <br />
              Confirmed speakers will be shown in the event’s Details section.
            </p>
            {speakers.length > 0 && (
              <div className="speaker-listed-bttm">
                <ul>
                  {speakers.map((speaker) => {
                    return (
                      <li>
                        <span className="close-spkr-list">
                          <img
                            src="/images/speakclose.png"
                            className="img-fluid"
                            alt="close"
                          />
                        </span>
                        <div className="evnt-speaker-img">
                          <img
                            src={speaker.image}
                            className="img-fluid"
                            alt="pic"
                          />
                        </div>
                        <div className="speaker-drop-list-right">
                          <h3>{speaker.name}</h3>
                          <p>{speaker.occupation}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div className="event-form-bttn-grp">
            <span className="btn-mr-16">
              <button className="event-form-cancel-btn">Cancel</button>
            </span>
            <span>
              <button
                onClick={(e) => createEvent(e)}
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

export default EditEventDetailsForm;
