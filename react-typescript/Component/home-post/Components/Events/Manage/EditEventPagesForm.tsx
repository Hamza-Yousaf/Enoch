import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_EVENT_MUTATION_DATE_AND_PLACE } from "../../../../../graphql/mutations";
import { useRouter } from "next/router";
import { DatePicker, TimePicker } from "antd";

interface Props {
  nextStage: any;
}

const format = "HH:mm";

const EditEventPagesForm: React.FC<Props> = ({ nextStage }) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [address, setAddress] = useState("");
  const [venue, setVenue] = useState("");
  const [registrationOrBroadcastLink, setRegistrationOrBroadcastLink] =
    useState("");
  const [currentLocationTab, setCurrentLocationTab] = useState("venue");
  const [eventHostingFrequency, setEventHostingFrequency] = useState("");
  const [showFreqOptions, setShowFreqOptions] = useState(false);
  const [eventType, setEventType] = useState("");
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [eventCategory, setEventCategory] = useState("");
  const [showCatOptions, setShowCatOptions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);

  const eventId = router.query.eventId;

  const handleStartDate = (date: any, dateString: any) => {
    setStartDate(date._d);
    console.log(date);
  };

  const handleStartTime = (time: any, timeString: any) => {
    setStartTime(time._d);
  };

  const handleEndDate = (date: any, dateString: any) => {
    setEndDate(date._d);
    console.log(date);
  };

  const handleEndTime = (time: any, timeString: any) => {
    setEndTime(time._d);
  };

  const handleAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const handleVenue = (e: any) => {
    setVenue(e.target.value);
  };

  const handleRegistrationOrBroadcastLink = (e: any) => {
    setRegistrationOrBroadcastLink(e.target.value);
  };

  const switchTabs = (tab: string) => {
    setCurrentLocationTab(tab);
  };

  const createEventsData = useMutation(CREATE_EVENT_MUTATION_DATE_AND_PLACE);

  console.log(createEventsData[0]);
  const createEventDateAndPlace = createEventsData[0];

  const createEvent = (e: any) => {
    e.preventDefault();
    createEventDateAndPlace({
      variables: {
        createEventDateAndPlaceInput: {
          eventId,
          start_date: startDate,
          end_date: endDate,
          start_time: startTime,
          end_time: endTime,
          address,
          broadcast_link: registrationOrBroadcastLink,
          venue,
          type_of_event: eventType,
          event_hosting_frequency: eventHostingFrequency,
          event_category: eventCategory,
        },
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.createEventDateAndPlace.success === true) {
          nextStage("e");
        } else {
          setShowAlert(true);
          setMessage(resp.data.createEventDateAndPlace.errors[0].message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setShowAlert(true);
        setMessage("something went wrong");
        setSuccess(false);
      });
  };

  const toggleFreq = () => {
    setShowFreqOptions(!showFreqOptions);
  };

  const toggleType = () => {
    setShowTypeOptions(!showTypeOptions);
  };

  const toggleCat = () => {
    setShowCatOptions(!showCatOptions);
  };

  return (
    <div className="event-create-right-panel editEvnt-right">
      <div className="create-event-form">
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
          <div className="event-form-grp">
            <div className="event-form-label">Date & time</div>
            <div className="event-form-input">
              <div className="event-form-input-block">
                <ul>
                  <li>
                    <DatePicker
                      className="w-100"
                      bordered={false}
                      onChange={handleStartDate}
                      placeholder="Event Start"
                    />
                  </li>

                  <li>
                    <TimePicker
                      format={format}
                      className="w-100"
                      // placeholder="Start Time"
                      onChange={handleStartTime}
                    />
                  </li>
                  <li>
                    <DatePicker
                      onChange={handleEndDate}
                      placeholder="Event Ends"
                      className="w-100"
                      bordered={false}
                    />
                  </li>

                  <li>
                    <TimePicker
                      format={format}
                      className="w-100"
                      // placeholder="End Time"
                      onChange={handleEndTime}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-form-grp">
            <div className="event-form-label">Location of your event</div>
            <div className="event-form-tag">
              <ul>
                <li
                  onClick={() => switchTabs("venue")}
                  className={
                    currentLocationTab === "venue"
                      ? "eventtablinks event-tab-active"
                      : "eventtablinks"
                  }
                >
                  Venue
                </li>
                <li
                  onClick={() => {
                    setVenue("Online");
                    switchTabs("online");
                  }}
                  className={
                    currentLocationTab === "online"
                      ? "eventtablinks event-tab-active"
                      : "eventtablinks"
                  }
                >
                  Online event
                </li>
              </ul>
            </div>
            <div className="eventLoc-block pb-1">
              <div
                id="Venue"
                className={
                  currentLocationTab === "venue"
                    ? "eventtabcontent event-dblock"
                    : "eventtabcontent"
                }
              >
                <div className="event-form-grp">
                  <div className="event-form-label">Address</div>
                  <div className="event-form-inputbox">
                    <input
                      value={address}
                      onChange={(e) => handleAddress(e)}
                      type="text"
                      placeholder="E.g., Street, City, Pincode, etc.,"
                    />
                  </div>
                </div>
                <div className="event-form-grp">
                  <div className="event-form-label">Venue</div>
                  <div className="event-form-inputbox">
                    <input
                      value={venue}
                      onChange={(e) => handleVenue(e)}
                      type="text"
                      placeholder="Floor number, Room number, Etc.,"
                    />
                  </div>
                </div>
              </div>
              <div
                id="onlineEvent"
                className="eventtabcontent"
                style={
                  currentLocationTab === "online"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="online-broadcast-evnt">
                  <h3>Broadcast link</h3>
                  <div className="your-event-video mt-2">
                    <div className="your-event-video-lft">
                      <img
                        src="/images/event-vdo.png"
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="your-event-video-right">
                      <div>
                        <button className="join-live-btn">
                          Join with Livezone
                        </button>
                      </div>
                      <div className="your-event-video-txt">
                        livezone.enoch.app/ump-bxmd-kyt
                        <span>
                          <img
                            src="/images/MarkCircle.png"
                            className="img-fluid ml-1"
                            alt="icon"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="event-form-bttn-grp">
            <span className="btn-mr-16">
              <button className="event-form-cancel-btn">Cancel</button>
            </span>
            <span>
              <button onClick={createEvent} className="event-form-next-btn">
                Next
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventPagesForm;
