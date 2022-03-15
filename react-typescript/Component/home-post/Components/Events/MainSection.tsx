import React, { useState, useEffect } from "react";
import {
  GET_EVENTS_QUERY,
  GET_USER_PROFILE_QUERY,
  GET_OTHER_USER_QUERY,
} from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../lib/withApollo";
import dynamic from "next/dynamic";
const EventCard = dynamic(() => import("./EventCard"));
import router from "next/router";
import { DatePicker } from "antd";
import Cookies from "js-cookie";

const monthNames = [
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

const MainSection = () => {
  const [eventsToShow, setEventsToShow] = useState("all");
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSerchTerm] = useState("");
  const [eventSearchCat, setEventSearchCat] = useState("name");
  const [eventTypeSearchTerm, setEventTypeSearchTerm] = useState("");
  const [dateSearchTerm, setDateSearchTerm] = useState(null);
  const [searching, setSearching] = useState(false);
  const [userId, setUserId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  let user = Cookies.get("loggedInUser");

  useEffect(() => {
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, [user]);

  useEffect(() => {
    if (loggedInUser) {
      setUserId(loggedInUser.id);
    }
  }, [loggedInUser]);

  const { data, loading, error } = useQuery(GET_EVENTS_QUERY);

  const handleDateSearchTerm = (date: any, dateString: any) => {
    setDateSearchTerm(date?._d);
    console.log(date);
  };

  console.log(dateSearchTerm);

  useEffect(() => {
    let result;
    if (data) {
      if (eventsToShow === "all") {
        result = data.getAllEvents.events.filter((event: any) => {
          return true;
        });
      } else if (eventsToShow === "myEvents") {
        result = data.getAllEvents.events.filter((event: any) => {
          return event.organizerId === userId;
        });
      } else if (eventsToShow === "attending") {
        result = data.getAllEvents.events.filter((event: any) => {
          return true;
        });
      } else if (eventsToShow === "draft") {
        result = data.getAllEvents.events.filter((event: any) => {
          return false;
        });
      }
    }
    setEvents(result);
  }, [loading, eventsToShow.length, data]);

  // console.log(events);

  const filterEvents = () => {
    console.log("filtering......");
    let typeSearchRegex = new RegExp(eventTypeSearchTerm, "ig");
    let locationSearchRegex = new RegExp(locationSearchTerm, "ig");
    let nameSearchRegex = new RegExp(searchTerm, "ig");

    let date1 = new Date(dateSearchTerm);
    let searchDate = `${
      monthNames[date1.getMonth()]
    } ${date1.getDate()}, ${date1.getFullYear()}`;

    let dateSearchRegex = new RegExp(searchDate, "ig");

    console.log(searchDate, dateSearchTerm);
    console.log(/NaN/.test(searchDate));
    console.log(searchDate);

    if (dateSearchTerm !== null && searchDate !== "undefined NaN, NaN") {
      let result = events?.filter((event: any) => {
        let date = new Date(event.start_date);
        let eventDate = `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`;

        console.log(eventDate);

        return (
          nameSearchRegex.test(event?.title) &&
          locationSearchRegex.test(event?.address) &&
          typeSearchRegex.test(event?.type_of_event) &&
          dateSearchRegex.test(eventDate)
        );
      });

      console.log(result);

      setFilteredEvents(result);
    } else {
      let result = events?.filter((event: any) => {
        let date = new Date(event.start_date);
        let eventDate = `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`;

        console.log(eventDate);

        return (
          nameSearchRegex.test(event?.title) &&
          locationSearchRegex.test(event?.address) &&
          typeSearchRegex.test(event?.type_of_event)
        );
      });

      console.log(result);

      setFilteredEvents(result);
    }
  };

  useEffect(() => {
    filterEvents();
  }, [locationSearchTerm, searchTerm, eventTypeSearchTerm, dateSearchTerm]);

  console.log(userId);

  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="post-event-catblock">
          <h2>Events</h2>
          <div className="post-event-modal-tab">
            <ul className="postCatTab">
              <li>
                <button
                  className={
                    eventsToShow === "all"
                      ? "postCatlinks active"
                      : "postCatlinks"
                  }
                  onClick={() => setEventsToShow("all")}
                >
                  All Events
                </button>
              </li>
              <li>
                <button
                  className={
                    eventsToShow === "myEvents"
                      ? "postCatlinks active"
                      : "postCatlinks"
                  }
                  onClick={() => setEventsToShow("myEvents")}
                >
                  My Events
                </button>
              </li>
              <li>
                <button
                  className={
                    eventsToShow === "attending"
                      ? "postCatlinks active"
                      : "postCatlinks"
                  }
                  onClick={() => setEventsToShow("attending")}
                >
                  Attending{" "}
                </button>
              </li>
              <li className="Catlinks-draft">
                <button
                  className={
                    eventsToShow === "draft"
                      ? "postCatlinks active"
                      : "postCatlinks"
                  }
                  onClick={() => setEventsToShow("draft")}
                >
                  Draft
                </button>
              </li>
            </ul>
            <span>
              <button
                onClick={() => router.push("/events/create")}
                className="postevent-bttn"
              >
                Post an event{" "}
              </button>
            </span>
          </div>
          <div className="postCatTab-content-block">
            <div className="postCatTab-content-filter">
              <ul>
                <li className="postCatTab-content-search">
                  <div className="postCatTab-inputbox">
                    <span>
                      <img
                        src="/images/event-search.png"
                        className="img-fluid"
                        alt="search"
                      />
                    </span>
                    <input
                      value={searchTerm}
                      onChange={(e) => {
                        setSearching(true);
                        setSearchTerm(e.target.value);
                      }}
                      type="text"
                      placeholder="Search by name or type"
                    />
                  </div>
                </li>
                <li className="postCatTab-content-date">
                  <div className="postCatTab-inputbox">
                    <span>
                      <img
                        src="/images/event-date.png"
                        className="img-fluid"
                        alt="date"
                      />
                    </span>
                    {/* <input type="text" placeholder="Date" /> */}
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
                <li className="postCatTab-content-location">
                  <div className="postCatTab-inputbox">
                    <span>
                      <img
                        src="/images/event-location.png"
                        className="img-fluid"
                        alt="event location"
                      />
                    </span>
                    <input
                      value={locationSearchTerm}
                      onChange={(e) => {
                        setSearching(true);

                        setLocationSerchTerm(e.target.value);
                      }}
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                </li>
                <li className="postCatTab-content-evnt-type">
                  <div className="postCatTab-inputbox">
                    <span>
                      <img
                        src="/images/event-type.png"
                        className="img-fluid"
                        alt="event type"
                      />
                    </span>
                    <input
                      value={eventTypeSearchTerm}
                      onChange={(e) => {
                        setSearching(true);

                        setEventTypeSearchTerm(e.target.value);
                      }}
                      type="text"
                      placeholder="Type of events"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div
              id="allEvents"
              className="postCatTabcontent postCatTabcontent-d-block"
            >
              <div className="event-seminer-dBlock">
                <ul>
                  {searching === true
                    ? filteredEvents?.map((event) => {
                        return <EventCard event={event} userId={userId} />;
                      })
                    : events?.map((event: any) => {
                        return <EventCard event={event} userId={userId} />;
                      })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(MainSection, { getDataFromTree });
