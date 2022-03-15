import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useRef, useEffect } from "react";
import {
  ATTEND_EVENT_MUTATION,
  CANCEL_EVENT_MUTATION,
  EVENT_DELETE_MUTATION,
  EVENT_HEADER_MUTATION,
} from "../../../../../graphql/mutations";
import {
  CHECK_ATTENDING_QUERY,
  GET_ATTENDEES_QUERY,
  GET_EVENTS_QUERY,
  GET_OTHER_USER_QUERY,
} from "../../../../../graphql/queries";
import dynamic from "next/dynamic";
const BackgroundBannerEdit = dynamic(() => import("./BackgroundBannerEdit"));
const AlertModal = dynamic(() => import("../../../../AlertModal"));
import { format } from "date-fns";
import router from "next/router";
const AttendeeAvatar = dynamic(() => import("./AttendeeAvatar"));
const AttendeeAlias = dynamic(() => import("./AttendeeAlias"));

interface Props {
  currentEvent?: any;
  userId: string;
}

const EventHeaderSection: React.FC<Props> = ({ currentEvent, userId }) => {
  const [editHeaderText, setEditHeaderText] = useState(false);
  const [backgroundBanner, setBackgroundBanner] = useState(
    "/images/event-cover-pic.png"
  );
  const [showComponentBanner, setShowComponentBanner] = useState(false);
  const [showBackgroundEditModal, setShowBackgroundEditModal] = useState(false);
  const headerTextRef = useRef(null);
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [organizer, setOrganizer] = useState(null);
  const [attending, setAttending] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [attendeesWithAvatar, setAttendeesWithAvatar] = useState([]);
  const [organizerAvatar, setOrganizerAvatar] = useState("");

  const toggleEditHeaderText = () => {
    setEditHeaderText(!editHeaderText);
  };

  const [updateEventHeader, { data, loading, error }] = useMutation(
    EVENT_HEADER_MUTATION,
    {
      refetchQueries: [{ query: GET_EVENTS_QUERY }],
    }
  );

  const otherUserData = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: currentEvent?.organizerId,
    },
  });

  const changeEventHeader = () => {
    updateEventHeader({
      variables: {
        eventId: currentEvent?.id,
        headerText: headerTextRef?.current?.innerText,
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp?.data?.updateEventHeader?.success === true) {
          console.log(resp?.data?.updateEventHeader?.event);
          toggleEditHeaderText();
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("failed to update the event header");
        setSuccess(false);
      });
  };

  useEffect(() => {
    console.log(otherUserData.data);
    let firstName = otherUserData?.data?.getOtherUserProfile.firstName
      ? otherUserData?.data?.getOtherUserProfile.firstName
      : "";

    let lastName = otherUserData?.data?.getOtherUserProfile.lastName
      ? otherUserData?.data?.getOtherUserProfile.lastName
      : "";

    let userName = otherUserData?.data?.getOtherUserProfile.userName;
    // setOrganizer(firstName + " " + lastName);

    let organizerAvatar = otherUserData?.data?.getOtherUserProfile.profileImage;

    setOrganizerAvatar(organizerAvatar);
    setOrganizer(userName);
  }, [otherUserData.data]);

  const formatTime = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "p");
    }
  };

  const formatDate = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "PPP");
    }
  };

  let checkUserStatusQuery: any;

  checkUserStatusQuery = useQuery(CHECK_ATTENDING_QUERY, {
    variables: {
      userId,
      eventId: currentEvent?.id,
    },
  });

  const attendEventMutationdata = useMutation(ATTEND_EVENT_MUTATION, {
    refetchQueries: [
      {
        query: CHECK_ATTENDING_QUERY,
        variables: {
          eventId: currentEvent?.id,
          userId,
        },
      },
      {
        query: GET_ATTENDEES_QUERY,
        variables: {
          eventId: currentEvent?.id,
          limit: 50,
        },
      },
    ],
  });

  let attendEvent = attendEventMutationdata[0];
  console.log(attendEvent);

  const attendTheEvent = () => {
    attendEvent({
      variables: {
        attendEventInputs: {
          eventId: currentEvent?.id,
          userId,
        },
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const attendeesQuerydata = useQuery(GET_ATTENDEES_QUERY, {
    variables: {
      eventId: currentEvent?.id,
      limit: 50,
    },
  });

  console.log(attendeesQuerydata);

  useEffect(() => {
    setAttendees(attendeesQuerydata?.data?.getEventAttendees?.attendees);
    setAttendeesCount(attendeesQuerydata?.data?.getEventAttendees?.count);
  }, [attendeesQuerydata?.data, attendeesQuerydata?.loading]);

  console.log(checkUserStatusQuery);

  console.log(userId);

  console.log(currentEvent);
  useEffect(() => {
    setAttending(checkUserStatusQuery?.data?.isUserAttendingEvent);
  }, [checkUserStatusQuery?.data]);

  console.log(attendees);

  useEffect(() => {
    if (attendees?.length > 0) {
      for (let i = 0; i < 7; i++) {
        setAttendeesWithAvatar([...attendeesWithAvatar, attendees[i]]);
      }
    }
  }, [attendees?.length, attendeesQuerydata?.data]);

  console.log(attendeesWithAvatar);

  const cancelEventMutationData = useMutation(CANCEL_EVENT_MUTATION, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const cancelEvent = cancelEventMutationData[0];

  const cancelTheEvent = () => {
    cancelEvent({
      variables: {
        EventId: currentEvent?.id,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.cancelEvent === "successfully cancelled the event") {
          router.push({
            pathname: "/events/manage",
            query: {
              tab: "allEvents",
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEventMutationData = useMutation(EVENT_DELETE_MUTATION, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const deleteEvent = deleteEventMutationData[0];

  const deleteTheEvent = () => {
    deleteEvent({
      variables: {
        id: currentEvent?.id,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.deleteEvent) {
          router.push("/events");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("atten", attendees);

  return (
    <div className="your-event-page-left-top">
      <div className="your-event-page-cover-pic">
        <img
          src={
            currentEvent?.eventBannerImage?.length > 0 &&
            showComponentBanner === false
              ? currentEvent?.eventBannerImage
              : backgroundBanner
          }
          alt="Cover-photo"
          className="img-fluid your-event-cover-img"
        />
        <span
          className={
            editHeaderText
              ? "enoch-community-BGedit-btn deefi-BGedit-active"
              : "enoch-community-BGedit-btn"
          }
          data-toggle="modal"
          data-target="#community-head-bg"
        >
          <img
            onClick={() => {
              setShowBackgroundEditModal(true);
            }}
            src="/images/communityEdit.png"
            className="img-fluid"
            alt="edit"
          />
        </span>
        <AlertModal
          message={message}
          setShowAlert={setShowAlert}
          showAlert={showAlert}
          success={success}
        />
        <BackgroundBannerEdit
          backgroundBanner={backgroundBanner}
          setBackgroundBanner={setBackgroundBanner}
          eventHeader={currentEvent?.eventHeader}
          event={currentEvent}
          setShowComponentBanner={setShowComponentBanner}
          showComponentBanner={showComponentBanner}
          showBackgroundEditModal={showBackgroundEditModal}
          setShowBackgroundEditModal={setShowBackgroundEditModal}
        />
        <div
          className={
            editHeaderText
              ? "enoch-community-header-content paranteditable"
              : "enoch-community-header-content"
          }
        >
          <div className="event-hd-banner-txt">
            <h2
              ref={headerTextRef}
              contentEditable={editHeaderText}
              className={editHeaderText ? "editable" : ""}
            >
              {currentEvent?.eventHeader?.length > 0
                ? currentEvent?.eventHeader
                : currentEvent?.title}
            </h2>
          </div>
          {userId?.length > 0 && currentEvent?.organizerId === userId ? (
            <div className="enoch-community-edit-head">
              {editHeaderText === true ? (
                <span
                  onClick={() => {
                    changeEventHeader();
                  }}
                  className="communityEdit-txt2"
                >
                  <img
                    src="/images/savepage.png"
                    className="img-fluid mr-1"
                    alt="edit"
                  />
                  Save Page
                </span>
              ) : (
                <span
                  onClick={toggleEditHeaderText}
                  className="communityEdit-txt1"
                >
                  <img
                    src="/images/communityEdit.png"
                    className="img-fluid mr-1"
                    alt="edit"
                  />
                  Edit Page
                </span>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="your-event-info">
        <div className="your-event-info-block">
          <div className="your-event-info-lft">
            {/* <button onClick={printText}>check...</button> */}
            <h2>{currentEvent?.title}</h2>
            <h3>
              Event by{" "}
              {!otherUserData?.loading ? (
                <div className="ml-3 dot-pulse"></div>
              ) : organizer?.length > 0 ? (
                organizer
              ) : (
                // <p>failed to load organizer data</p>
                "anonymous"
              )}
            </h3>
          </div>
          {userId === currentEvent?.organizerId ? (
            <div className="your-event-info-right">
              <div className="event-3dots dropdown">
                <span
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/images/event-dots.png"
                    alt="3dots"
                    className="img-fluid"
                  />
                </span>
                <div className="dropdown-menu event-info-droplist">
                  <ul>
                    <li
                      onClick={() => {
                        router.push({
                          pathname: `/events/manage`,
                          query: {
                            tab: "manage-attendees",
                            eventId: currentEvent?.id,
                          },
                        });
                      }}
                    >
                      Manage Attendees
                    </li>
                    <li
                      onClick={() => {
                        router.push({
                          pathname: `/events/manage`,
                          query: {
                            tab: "edit",
                            eventId: currentEvent?.id,
                          },
                        });
                      }}
                    >
                      Edit Event
                    </li>
                    <li
                      onClick={() => {
                        cancelTheEvent();
                      }}
                    >
                      Cancel Event
                    </li>
                    <li
                      onClick={() => {
                        deleteTheEvent();
                      }}
                    >
                      Delete Event
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {currentEvent?.venue === "Online" ? (
          <div className="your-event-video">
            <div className="your-event-video-lft">
              <img
                src="/images/event-vdo.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <div className="your-event-video-right">
              <div>
                <a href={currentEvent?.broadcast_link}>
                  <button className="join-live-btn">Join with Livezone</button>
                </a>
              </div>
              <div className="your-event-video-txt">
                {currentEvent?.broadcast_link}
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
        ) : (
          // <h3>
          //   {currentEvent?.venue + "," + " "}
          //   {currentEvent?.address}
          // </h3>
          <div className="d-flex flex-row align-items-center">
            <span>
              <img
                src="/images/seminer-loc.png"
                className="img-fluid"
                alt="seminer"
              />
            </span>
            <div className="seminer-addrss-right">
              {currentEvent?.venue?.length > 0 &&
              currentEvent?.address?.length > 0
                ? currentEvent?.venue + "," + " " + currentEvent?.address
                : currentEvent?.venue?.length > 0 &&
                  currentEvent?.address?.length < 1
                ? currentEvent?.venue
                : ""}
            </div>
          </div>
        )}

        <div className="your-event-interested-people-sect">
          <div className="your-event-interested-people-list">
            {attendees?.length > 0 && (
              <ul>
                {attendees[0] && (
                  <AttendeeAvatar user_id={attendees[0]?.user_id} />
                )}
                {attendees[1] && (
                  <AttendeeAvatar user_id={attendees[1]?.user_id} />
                )}
                {attendees[2] && (
                  <AttendeeAvatar user_id={attendees[2]?.user_id} />
                )}
                {attendees[3] && (
                  <AttendeeAvatar user_id={attendees[3]?.user_id} />
                )}
                {attendees[4] && (
                  <AttendeeAvatar user_id={attendees[4]?.user_id} />
                )}

                {attendees[5] && (
                  <AttendeeAvatar user_id={attendees[5]?.user_id} />
                )}
                {attendees[6] && (
                  <AttendeeAvatar user_id={attendees[6]?.user_id} />
                )}

                {attendeesCount > 5 ? (
                  <li
                    onClick={() => {
                      router.push({
                        pathname: `/events/manage`,
                        query: {
                          tab: "manage-attendees",
                          eventId: currentEvent?.id,
                        },
                      });
                    }}
                  >
                    <a href="#">{`${attendeesCount - 7}`}+</a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            )}
            {attendees?.length < 1 && (
              <li>
                <img
                  style={{ width: 30, height: 30 }}
                  src={
                    organizerAvatar?.length > 0
                      ? organizerAvatar
                      : "/images/people-2.png"
                  }
                  className="img-fluid"
                  alt="attendees"
                />
              </li>
            )}
          </div>
          <div className="your-event-interested-people-text">
            {attendees?.length > 0 ? (
              <AttendeeAlias
                attendeesCount={attendeesCount}
                user_id={attendees[0]?.user_id}
              />
            ) : (
              <a href="#">1 attendee</a>
            )}
          </div>
        </div>
        <div className="your-event-info-left-sect">
          <div className="Attending-Event-sect"></div>

          <div className="your-event-time-And-Date-sect">
            <ul>
              <li>
                <img
                  src="/images/evntCalendar.png"
                  alt="calendar"
                  className="img-fluid"
                />
              </li>
              <li>
                <h5>
                  {" "}
                  {currentEvent?.start_date?.length > 0
                    ? formatDate(currentEvent.start_date)
                    : "date not set"}
                </h5>
              </li>
              <li>
                <h6>
                  {" "}
                  {currentEvent?.start_time?.length > 0
                    ? formatTime(currentEvent.start_time)
                    : "time not set"}
                </h6>
              </li>
            </ul>
          </div>
          {/* <!--
                          <div className="event-Add-story-btn">
                              <button><span><img src="/images/Add-story-btn-icon.png" alt="icon" className="img-fluid" /></span><a href="#">Add to your story</a></button>
                          </div>
                          --> */}
        </div>
        <div className="your-event-btns">
          {userId === currentEvent?.organizerId ? (
            <button className="evnt-Invite-bttn">Invite Attendees</button>
          ) : (
            <button
              onClick={
                attending
                  ? () => {}
                  : () => {
                      attendTheEvent();
                    }
              }
              className={attending ? "evnt-Attendng-bttn" : "evnt-Attend-bttn"}
            >
              {attending ? "Attending" : " Attend Event"}
            </button>
          )}
          <button
            className="Share-Event"
            data-toggle="modal"
            data-target="#ShareEvent-Modal"
          >
            Share Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHeaderSection;
