import { useRouter } from "next/router";
import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import {
  GET_EVENTS_QUERY,
  GET_USER_PROFILE_QUERY,
} from "../../../../graphql/queries";
import withApollo from "../../../../lib/withApollo";
import { format, isValid } from "date-fns";
import Cookie from "js-cookie";

interface Props {
  allEvents: any;
  userId: string;
  searchEvents: any;
  sortedEvents: any;
  searchSorted: any;
}

const Events: React.FC<Props> = ({
  allEvents,
  userId,
  searchEvents,
  sortedEvents,
  searchSorted,
}) => {
  console.log(allEvents);
  const [searchTerm, setSearchterm] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const { currentEvent } = bindActionCreators(actionCreators, dispatch);

  console.log(allEvents);

  console.log(userId);

  const viewEvent = (event: any, eventId: string) => {
    router.push({
      pathname: `events/${eventId}`,
      query: event,
    });
  };

  const formatTime = (time: string) => {
    return format(new Date(time), "p");
  };

  const formatDate = (time: string) => {
    return format(new Date(time), "PPP");
  };

  console.log(sortedEvents);

  return (
    <>
      <div className="posting-events-search">
        <input
          onChange={(e) => {
            searchEvents(allEvents, e.target.value);
          }}
          type="text"
          placeholder="Search Events"
        />
        <button className="posting-search-bttn">
          <img
            src="/images/postingsearch.png"
            className="img-fluid"
            alt="search"
          />
        </button>
      </div>

      <div className="postign-eventList-item">
        <ul>
          {sortedEvents.length > 0
            ? sortedEvents.map((event: any, key: any) => {
                return (
                  <li
                    key={key}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      currentEvent(event);
                      // Cookie.set("currentEvent", event);
                      viewEvent(event, event.id);
                    }}
                  >
                    <div className="postign-eventList-item-lft">
                      <span>
                        <img
                          src="images/event-pic.png"
                          className="img-fluid"
                          alt="event"
                        />
                      </span>
                      <div className="postign-eventList-detail">
                        <h3>{event.title} </h3>
                        {/* <p>
                      <span className="event-upcome-clr">Upcoming.</span> Sun,
                      Oct 03. 1:00 PM
                    </p> */}
                        <p>
                          <span className="event-upcome-clr">Upcoming.</span>{" "}
                          {event?.start_date?.length > 0 &&
                            formatDate(event.start_date)}{" "}
                          {event?.start_time?.length > 0 &&
                            formatTime(event.start_time)}
                        </p>
                        <p className="post-eventlist-status">
                          {event.venue === "Online"
                            ? "Online"
                            : event.venue === "venue to be announced"
                            ? "venue to be announced"
                            : `venue:${event.venue}`}
                        </p>
                      </div>
                    </div>
                    <div className="postign-eventList-item-right">
                      {event.organizerId === userId ? (
                        <span className="eventList-myevnt-color">My Event</span>
                      ) : (
                        // <span>Attending</span>
                        ""
                      )}
                    </div>
                  </li>
                );
              })
            : allEvents?.length > 0 &&
              allEvents.map((event: any, key: any) => {
                return (
                  <li
                    key={key}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      currentEvent(event);
                      // Cookie.set("currentEvent", event);
                      viewEvent(event, event.id);
                    }}
                  >
                    <div className="postign-eventList-item-lft">
                      <span>
                        <img
                          src="images/event-pic.png"
                          className="img-fluid"
                          alt="event"
                        />
                      </span>
                      <div className="postign-eventList-detail">
                        <h3>{event.title} </h3>
                        {/* <p>
                      <span className="event-upcome-clr">Upcoming.</span> Sun,
                      Oct 03. 1:00 PM
                    </p> */}
                        <p>
                          <span className="event-upcome-clr">Upcoming.</span>{" "}
                          {event?.start_date?.length > 0 &&
                            formatDate(event.start_date)}{" "}
                          {event?.start_time?.length > 0 &&
                            formatTime(event.start_time)}
                        </p>
                        <p className="post-eventlist-status">
                          {event.venue === "Online"
                            ? "Online"
                            : event.venue === "venue to be announced"
                            ? "venue to be announced"
                            : `venue:${event.venue}`}
                        </p>
                      </div>
                    </div>
                    <div className="postign-eventList-item-right">
                      {event.organizerId === userId ? (
                        <span className="eventList-myevnt-color">My Event</span>
                      ) : (
                        // <span>Attending</span>
                        ""
                      )}
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default withApollo(Events, { getDataFromTree });
