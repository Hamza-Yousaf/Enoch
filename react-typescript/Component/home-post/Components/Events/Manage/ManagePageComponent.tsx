import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../../Component/onBoard/header"));
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ATTENDEES_QUERY,
  GET_EVENTS_QUERY,
  GET_USER_PROFILE_QUERY,
} from "../../../../../graphql/queries";
import withApollo from "../../../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
const EventManageCard = dynamic(() => import("./EventManageCard"));
const EventEdit = dynamic(() => import("../Edit"));
const ManageAttendees = dynamic(() => import("./ManageAttendees"));
import { useRouter } from "next/router";
import {
  CANCEL_EVENT_MUTATION,
  DECLINE_ATTENDEE,
  EVENT_DELETE_MUTATION,
  MULTIPLE_ATTENDEE_DECLINE_MUTATION,
  REACTIVATE_EVENT_MUTATION,
} from "../../../../../graphql/mutations";
const AlertModal = dynamic(() => import("../../../../AlertModal"));
import { DatePicker } from "antd";
import { compareAsc, format } from "date-fns";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const eventStatus = (eventDate: any) => {
  return compareAsc(new Date(), eventDate);
};

const Manageevent: React.FC = () => {
  const router = useRouter();
  console.log(router);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [events, setEvents] = useState(null);
  const [userId, setUserId] = useState("");
  const [currentTab1View, setCurrentTab1View] = useState<any>("");
  const [cardEventId, setCardEventId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);
  const [attendeeId, setAttendeId] = useState("");
  const [attendeesToActOn, setAttendeesToActOn] = useState([]);
  const [nameSearchTerm, setNameSearchTerm] = useState("");
  const [dateSearchTerm, setDateSearchTerm] = useState(null);
  const [searching, setSearching] = useState(false);
  const [eventStatusFilterValue, setEventStatusFilterValue] = useState("all");
  const [liveEvents, setLiveEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [endedEvents, setEndedEvents] = useState([]);
  const [cancelledEvents, setCancelledEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const eventId = router.query.eventId;

  const userProfile = useQuery(GET_USER_PROFILE_QUERY);

  useEffect(() => {
    if (userProfile?.data) {
      setUserId(userProfile?.data?.getUserProfile.id);
    }
  }, [userProfile?.data, userProfile?.loading]);

  const { data, loading, error } = useQuery(GET_EVENTS_QUERY);
  console.log(data);

  useEffect(() => {
    console.log(userId);
    let result;
    if (data) {
      result = data?.getAllEvents?.events.filter((event: any) => {
        return userId === event.organizerId;
      });
    }
    setEvents(result);
  }, [data, loading, userId]);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  console.log(currentTab1View);

  useEffect(() => {
    setCurrentTab1View(router.query.tab);
  }, [router.query]);

  const cancelEventMutationData = useMutation(CANCEL_EVENT_MUTATION, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const cancelEvent = cancelEventMutationData[0];

  const cancelTheEvent = () => {
    cancelEvent({
      variables: {
        EventId: cardEventId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.cancelEvent === "successfully cancelled the event") {
        } else {
          setShowAlert(true);
          setMessage("event cancel not successfull");
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("event cancel not successfull");
        setSuccess(false);
      });
  };

  const deleteEventMutationData = useMutation(EVENT_DELETE_MUTATION, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const deleteEvent = deleteEventMutationData[0];

  const deleteTheEvent = () => {
    deleteEvent({
      variables: {
        id: cardEventId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.deleteEvent) {
        } else {
          setShowAlert(true);
          setMessage("event cancel not successfull");
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("event cancel not successfull");
        setSuccess(false);
      });
  };

  const reactivateEventMutationData = useMutation(REACTIVATE_EVENT_MUTATION, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const reactivateEvent = reactivateEventMutationData[0];

  const reactivateTheEvent = () => {
    reactivateEvent({
      variables: {
        EventId: cardEventId,
      },
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.reactivateEvent) {
        } else {
          setShowAlert(true);
          setMessage("event reactivation not successfull");
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("event reactivation not successfull");
        setSuccess(false);
      });
  };

  const declineAttendeeMutationData = useMutation(DECLINE_ATTENDEE, {
    refetchQueries: [
      {
        query: GET_ATTENDEES_QUERY,
        variables: {
          eventId: cardEventId,
          limit: 100,
        },
      },
    ],
  });

  const declineAttendee = declineAttendeeMutationData[0];

  const declineTheAttendee = () => {
    declineAttendee({
      variables: {
        EventId: cardEventId,
        AttendeeId: attendeeId,
      },
    })
      .then((res) => {
        console.log(res);
        if (
          res?.data?.declineAttendeeParticipation ===
          "successfully set user permission"
        ) {
        } else {
          setShowAlert(true);
          setMessage("attendee decline not successfull");
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("attendee decline not successfull");
        setSuccess(false);
      });
  };

  const declineMultipleAttendeeMutationData = useMutation(
    MULTIPLE_ATTENDEE_DECLINE_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_ATTENDEES_QUERY,
          variables: {
            eventId: cardEventId,
            limit: 100,
          },
        },
      ],
    }
  );

  const declineMultipleAttendees = declineMultipleAttendeeMutationData[0];

  const declineTheAttendees = () => {
    console.log("AID", attendeeId);
    declineMultipleAttendees({
      variables: {
        MultipleAttendeesInput: {
          eventId: cardEventId,
          attendees: attendeesToActOn,
        },
      },
    })
      .then((res) => {
        console.log(res);
        if (
          res?.data?.declineMultipleAttendeeParticipation ===
          "successfully set users permissions"
        ) {
        } else {
          setShowAlert(true);
          setMessage("attendees decline not successfull");
          setSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowAlert(true);
        setMessage("attendees decline not successfull");
        setSuccess(false);
      });
  };

  useEffect(() => {
    let liveEventsResult = events?.filter((event: any) => {
      let date = new Date(event.start_date);
      let date_2 = new Date(event.end_date);

      let time = new Date(event.start_time);
      let time_2 = new Date(event.end_time);

      let eventStartDate = new Date(
        `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
      );

      let eventEndDate = new Date(
        `${
          monthNames[date_2.getMonth()]
        } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
      );

      return (
        event?.is_cancelled !== true &&
        eventStatus(eventEndDate) === -1 &&
        eventStatus(eventStartDate) === 1
      );
    });
    setLiveEvents(liveEventsResult);

    let upcomingEventsResult = events?.filter((event: any) => {
      let date = new Date(event.start_date);
      let date_2 = new Date(event.end_date);

      let time = new Date(event.start_time);
      let time_2 = new Date(event.end_time);

      let eventStartDate = new Date(
        `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
      );

      let eventEndDate = new Date(
        `${
          monthNames[date_2.getMonth()]
        } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
      );
      return event?.is_cancelled !== true && eventStatus(eventStartDate) === -1;
    });

    console.log(upcomingEventsResult);
    setUpcomingEvents(upcomingEventsResult);

    let endedEventsResult = events?.filter((event: any) => {
      let date = new Date(event.start_date);
      let date_2 = new Date(event.end_date);

      let time = new Date(event.start_time);
      let time_2 = new Date(event.end_time);

      let eventStartDate = new Date(
        `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
      );

      let eventEndDate = new Date(
        `${
          monthNames[date_2.getMonth()]
        } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
      );
      return event?.is_cancelled !== true && eventStatus(eventEndDate) === 1;
    });
    console.log(endedEventsResult);
    setEndedEvents(endedEventsResult);

    let cancelledEventsResult = events?.filter((event: any) => {
      let date = new Date(event.start_date);
      let date_2 = new Date(event.end_date);

      let time = new Date(event.start_time);
      let time_2 = new Date(event.end_time);

      let eventStartDate = new Date(
        `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}:00`
      );

      let eventEndDate = new Date(
        `${
          monthNames[date_2.getMonth()]
        } ${date_2.getDate()}, ${date_2.getFullYear()} ${time_2.getHours()}:${time_2.getMinutes()}:00`
      );
      return event.is_cancelled;
    });
    console.log(cancelledEventsResult);
    setCancelledEvents(cancelledEventsResult);
  }, [events, events?.length]);

  const handleDateSearchTerm = (date: any, dateString: any) => {
    setDateSearchTerm(date?._d);
    console.log(date);
  };

  const filterEvents = () => {
    let nameSearchRegex = new RegExp(nameSearchTerm, "ig");
    let date1 = new Date(dateSearchTerm);
    let searchDate = `${
      monthNames[date1.getMonth()]
    } ${date1.getDate()}, ${date1.getFullYear()}`;

    let dateSearchRegex = new RegExp(searchDate, "ig");

    console.log("searchDate", searchDate);

    let result = events?.filter((event: any) => {
      let date = new Date(event.start_date);
      let eventDate = `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
      console.log("event date", eventDate);
      if (
        searchDate !== "January 1, 1970" &&
        searchDate !== "undefined NaN, NaN"
      ) {
        console.log("filtered result 2", event.title.match(nameSearchRegex));
        let eventsThatMatchName = event.title.match(nameSearchRegex);
        let eventsThatMatchDate = eventDate.match(dateSearchRegex);
        console.log(eventsThatMatchDate);
        return (
          eventsThatMatchName?.length > 0 && eventsThatMatchDate?.length > 0
        );
      } else {
        console.log("filtered result 2", event.title.match(nameSearchRegex));
        let eventsThatMatchName = event.title.match(nameSearchRegex);
        let eventsThatMatchDate = eventDate.match(dateSearchRegex);
        console.log(eventsThatMatchDate);
        return eventsThatMatchName?.length > 0;
      }
    });

    console.log(result);

    setFilteredEvents(result);
  };

  useEffect(() => {
    filterEvents();
  }, [nameSearchTerm, dateSearchTerm]);

  function containsEvent(event: any, arrayOfEvents: any) {
    let i;
    for (i = 0; i < arrayOfEvents.length; i++) {
      if (arrayOfEvents[i].id === event.id) {
        return true;
      }
    }

    return false;
  }

  console.log(filteredEvents);

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <AlertModal
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        message={message}
        success={success}
      />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="post-event-catblock">
            <h2>My Events </h2>
            <div className="post-event-modal-tab">
              <ul className="manageEventsTab">
                <li>
                  <button
                    className={`postCatlinks tab1 ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={handleTab1}
                  >
                    Manage Events
                  </button>
                </li>
                <li>
                  <button
                    className={`postCatlinks tab2 ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={handleTab2}
                  >
                    Analytics
                  </button>
                </li>
              </ul>
              <span>
                <button
                  onClick={() => router.push("/events/create")}
                  className="postevent-bttn"
                >
                  Create New Event
                </button>
              </span>
            </div>
            <div className="postCatTab-content-block">
              {activeTab === "tab1" ? (
                currentTab1View === "allEvents" ? (
                  <div
                    id="manageEvents"
                    className="postCatTabcontent tab1 postCatTabcontent-d-block "
                  >
                    <div className="manageevent-content-filter">
                      <h2>All Events </h2>
                      <ul className="d-flex flex-row justify-content-start">
                        <li className="manageevent-content-search">
                          <div className="manageevent-inputbox">
                            <span>
                              <img
                                src="/images/event-search.png"
                                className="img-fluid"
                                alt="search"
                              />
                            </span>
                            <input
                              value={nameSearchTerm}
                              onChange={(e) => {
                                setSearching(true);
                                setNameSearchTerm(e.target.value);
                              }}
                              type="text"
                              placeholder="Search events and attendees"
                            />
                          </div>
                        </li>
                        <li className="manageevent-content-date ml-3">
                          <div className="manageevent-inputbox">
                            <span>
                              <img
                                src="/images/event-date.png"
                                className="img-fluid"
                                alt="date"
                              />
                            </span>
                            {/* <input type="text" placeholder="Search by date" /> */}
                            <DatePicker
                              className="w-100"
                              bordered={false}
                              onChange={(date, dateString) => {
                                setSearching(true);
                                handleDateSearchTerm(date, dateString);
                              }}
                              placeholder="Date"
                            />
                          </div>
                        </li>
                        <li
                          className={
                            showFilterDropdown
                              ? "manageevent-content-location dropdown ml-3 open"
                              : "manageevent-content-location dropdown ml-3"
                          }
                        >
                          <div className="filterby-inputbox">
                            <label>Filter by</label>

                            <div
                              id="manageevent-filter"
                              className="filterby-live"
                              onClick={() =>
                                setShowFilterDropdown(!showFilterDropdown)
                              }
                            >
                              {eventStatusFilterValue === "live" &&
                                ` Live(${liveEvents?.length})`}
                              {eventStatusFilterValue === "upcoming" &&
                                ` Upcoming(${upcomingEvents?.length})`}
                              {eventStatusFilterValue === "ended" &&
                                ` Ended(${endedEvents?.length})`}
                              {eventStatusFilterValue === "cancelled" &&
                                ` Cancelled(${cancelledEvents?.length})`}
                              {eventStatusFilterValue === "all" && `All Events`}
                            </div>
                            {showFilterDropdown && (
                              <div
                                onClick={() =>
                                  setShowFilterDropdown(!showFilterDropdown)
                                }
                                id="create-filter-dropList"
                                className="dropdown-menu manageevent-filter-dropList"
                              >
                                <ul>
                                  <li
                                    onClick={() =>
                                      setEventStatusFilterValue("all")
                                    }
                                  >
                                    All Events
                                  </li>
                                  <li
                                    onClick={() => {
                                      setEventStatusFilterValue("live");
                                    }}
                                  >
                                    Live({liveEvents?.length})
                                  </li>
                                  <li
                                    onClick={() => {
                                      setEventStatusFilterValue("ended");
                                    }}
                                  >
                                    Ended({endedEvents?.length})
                                  </li>
                                  <li
                                    onClick={() => {
                                      setEventStatusFilterValue("upcoming");
                                    }}
                                  >
                                    Upcoming({upcomingEvents?.length})
                                  </li>
                                  <li
                                    onClick={() => {
                                      setEventStatusFilterValue("cancelled");
                                    }}
                                  >
                                    Cancelled({cancelledEvents?.length})
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </li>
                        {/* <li className="manageevent-content-evnt-type dropdown">
                          <div
                            className="filterby-inputbox"
                            data-toggle="dropdown"
                            onClick={() => setDropDown(!dropDown)}
                          >
                            <label>Filter by</label>

                            <div
                              id="manageevent-filter2"
                              className="filterby-live"
                            >
                              All Events
                            </div>
                            {dropDown && (
                              <div
                                id="create-filter-dropList2"
                                className="dropdown-menu manageevent-filter-dropList"
                              >
                                <ul>
                                  <li>All Events</li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="event-seminer-table-block manageevnt-table-responsive">
                      <table className="table manageevnt-tbl">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Event</th>
                            <th scope="col">Attendees</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {searching
                            ? filteredEvents?.map((event) => {
                                if (eventStatusFilterValue === "all") {
                                  return (
                                    <EventManageCard
                                      cancelTheEvent={cancelTheEvent}
                                      deleteTheEvent={deleteTheEvent}
                                      cardEvent={event}
                                      setCardEventId={setCardEventId}
                                    />
                                  );
                                } else if (
                                  eventStatusFilterValue === "upcoming"
                                ) {
                                  if (containsEvent(event, upcomingEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (eventStatusFilterValue === "live") {
                                  if (containsEvent(event, liveEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (
                                  eventStatusFilterValue === "cancelled"
                                ) {
                                  if (containsEvent(event, cancelledEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (eventStatusFilterValue === "ended") {
                                  if (containsEvent(event, endedEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                }
                              })
                            : events?.map((event: any) => {
                                if (eventStatusFilterValue === "all") {
                                  return (
                                    <EventManageCard
                                      cancelTheEvent={cancelTheEvent}
                                      deleteTheEvent={deleteTheEvent}
                                      cardEvent={event}
                                      setCardEventId={setCardEventId}
                                    />
                                  );
                                } else if (
                                  eventStatusFilterValue === "upcoming"
                                ) {
                                  if (containsEvent(event, upcomingEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (eventStatusFilterValue === "live") {
                                  if (containsEvent(event, liveEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (
                                  eventStatusFilterValue === "cancelled"
                                ) {
                                  if (containsEvent(event, cancelledEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                } else if (eventStatusFilterValue === "ended") {
                                  if (containsEvent(event, endedEvents)) {
                                    return (
                                      <EventManageCard
                                        cancelTheEvent={cancelTheEvent}
                                        deleteTheEvent={deleteTheEvent}
                                        cardEvent={event}
                                        setCardEventId={setCardEventId}
                                      />
                                    );
                                  }
                                }
                              })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : currentTab1View === "edit" ? (
                  <EventEdit eventId={eventId} />
                ) : currentTab1View === "manage-attendees" ? (
                  <ManageAttendees
                    attendeesToActOn={attendeesToActOn}
                    setAttendeesToActOn={setAttendeesToActOn}
                    setCardEventId={setCardEventId}
                    setAttendeId={setAttendeId}
                    eventId={eventId}
                  />
                ) : (
                  ""
                )
              ) : (
                <div id="analytics" className="postCatTabcontent tab2"></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* cancen modal popup */}
      <div id="cancel-event-modal" className="modal cancelEvent-modal-block">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">Cancel Event?</h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>Are you sure you want to cancel this event?</p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No, cancel!
                </button>
                <button
                  data-dismiss="modal"
                  onClick={() => {
                    cancelTheEvent();
                  }}
                  className="cancelEvent-yes-btn"
                >
                  Yes, cancel it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal popup */}
      <div id="delete-event-modal" className="modal cancelEvent-modal-block">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">Delete Event?</h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>Are you sure you want to delete this event?</p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No, delete!
                </button>
                <button
                  data-dismiss="modal"
                  onClick={() => {
                    deleteTheEvent();
                  }}
                  className="cancelEvent-yes-btn "
                >
                  Yes, delete it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete event live modal popup */}
      <div
        id="delete-eventlive-modal"
        className="modal cancelEvent-modal-block"
      >
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">Delete Event?</h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>
                Are you sure you want to delete this event? As this event is
                already Live.
              </p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No, delete!
                </button>
                <button
                  onClick={() => deleteTheEvent()}
                  data-dismiss="modal"
                  className="cancelEvent-yes-btn"
                >
                  Yes, delete it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="delete-participation-modal"
        className="modal cancelEvent-modal-block"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">Delete Participation ?</h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>Are you sure you want to delete this participation?</p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No!
                </button>
                <button
                  onClick={() => {
                    declineTheAttendee();
                  }}
                  data-dismiss="modal"
                  className="cancelEvent-yes-btn"
                >
                  Yes, decline!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="eventreactive-modal" className="modal cancelEvent-modal-block">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">Reactivate Event?</h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>Are you sure you want to reactivate this event?</p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No!
                </button>
                <button
                  onClick={() => reactivateTheEvent()}
                  data-dismiss="modal"
                  className="cancelEvent-yes-btn"
                >
                  Yes, reactivate it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="delete-multiple-participation-modal"
        className="modal cancelEvent-modal-block"
      >
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content cancelEvent-modalBlock-content">
            <span className="cancelEvent-modalBlock-close">
              <img
                src="/images/selecetd-closeCross.png"
                className="img-fluid"
                alt="close"
                data-dismiss="modal"
              />
            </span>
            <div className="cancelEvent-modalBlock-header">
              <h3 className="modal-title">
                Delete Marked Attendees Participation ?
              </h3>
            </div>
            <div className="cancel-modalBlock-body">
              <p>
                Are you sure you want to decline these Marked Attendees
                participation?
              </p>
              <div className="cancelEvent-btn-grp">
                <button className="cancelEvent-no-btn" data-dismiss="modal">
                  No!
                </button>
                <button
                  onClick={() => {
                    declineTheAttendees();
                  }}
                  data-dismiss="modal"
                  className="cancelEvent-yes-btn"
                >
                  Yes, decline!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(Manageevent, { getDataFromTree });
function item(
  item: any
):
  | string
  | number
  | boolean
  | {}
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactNodeArray
  | React.ReactPortal {
  throw new Error("Function not implemented.");
}
