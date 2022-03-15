import { compareAsc, format } from "date-fns";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  GET_ATTENDEES_QUERY,
  GET_EVENTS_QUERY,
} from "../../../../../graphql/queries";
import {
  CANCEL_EVENT_MUTATION,
  EVENT_DELETE_MUTATION,
} from "../../../../../graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";

interface Props {
  cardEvent: any;
  cancelTheEvent: any;
  deleteTheEvent: any;
  setCardEventId: any;
}

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

export function truncateString(str: any, num: any) {
  if (str?.length > num) {
    return str?.slice(0, num) + "...";
  } else {
    return str;
  }
}

const EventManageCard: React.FC<Props> = ({
  cardEvent,
  cancelTheEvent,
  deleteTheEvent,
  setCardEventId,
}) => {
  const router = useRouter();
  const [processedDescription, setProcessedDescription] = useState([]);
  const [paragraph, setParagraph] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [attendeesWithAvatar, setAttendeesWithAvatar] = useState([]);

  const descRef = useRef(null);

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

  const formatDayOfWeek = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "E");
    }
  };

  const formatDay = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "d");
    }
  };

  useEffect(() => {
    // console.log(descRef.current.childNodes);
    setProcessedDescription(descRef.current.childNodes);
  }, [descRef?.current]);

  useEffect(() => {
    if (processedDescription.length > 0) {
      processedDescription?.forEach((tag) => {
        if (tag.innerText) {
          setParagraph(tag.innerText);
        }
        // console.log();
      });
      for (var i = 0; i < processedDescription.length; i++) {
        if (processedDescription[i]?.innerText?.length > 0) {
          setParagraph(processedDescription[i]?.innerText);
          break;
        }
      }
    }
  }, [processedDescription]);
  // console.log(typeof processedDescription);

  const eventStatus = (eventDate: any) => {
    return compareAsc(new Date(), eventDate);
  };

  const isLive = () => {
    if (
      compareAsc(new Date(), new Date(cardEvent?.start_date)) === 1 ||
      compareAsc(new Date(), new Date(cardEvent?.start_date)) === 0
    ) {
      if (
        compareAsc(new Date(), new Date(cardEvent?.end_date)) === -1 ||
        compareAsc(new Date(), new Date(cardEvent?.end_date)) === 0
      ) {
        return true;
      }
    }
  };

  console.log(new Date(cardEvent?.start_time));
  console.log(cardEvent);

  console.log(new Date(cardEvent?.start_date));

  let date = new Date(cardEvent.start_date);
  let date_2 = new Date(cardEvent.end_date);

  let time = new Date(cardEvent.start_time);
  let time_2 = new Date(cardEvent.end_time);

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

  console.log(eventStatus(eventEndDate));

  const attendeesQuerydata = useQuery(GET_ATTENDEES_QUERY, {
    variables: {
      eventId: cardEvent?.id,
      limit: 50,
    },
  });

  console.log(attendeesQuerydata);

  useEffect(() => {
    setAttendees(attendeesQuerydata?.data?.getEventAttendees?.attendees);
    setAttendeesCount(attendeesQuerydata?.data?.getEventAttendees?.count);
  }, [attendeesQuerydata?.data]);

  return (
    <>
      <div
        style={{ display: "none" }}
        ref={descRef}
        className="your-event-about-sect"
        dangerouslySetInnerHTML={{
          __html: cardEvent?.description,
        }}
      ></div>
      <tr>
        <td>
          <div className="manageevnt-tbl-date">
            {formatDayOfWeek(cardEvent?.start_date)}
            <span> {formatDay(cardEvent?.start_date)}</span>
          </div>
        </td>
        <td>
          <div className="manageevnt-tbl-events">
            <span className="manageevnt-img">
              <img
                src={cardEvent.eventBannerImage || "/images/manage-event2.png"}
                className="img-fluid"
                alt="NFT"
              />
            </span>
            <div className="manageevnt-events-right">
              <h3>{cardEvent?.title}</h3>
              <h4>
                {cardEvent?.is_cancelled
                  ? "Cancelled"
                  : eventStatus(eventEndDate) === -1 &&
                    eventStatus(eventStartDate) === 1
                  ? "Live"
                  : eventStatus(eventEndDate) === -1
                  ? "Upcoming"
                  : eventStatus(eventEndDate) === 1
                  ? "Completed"
                  : ""}
                : {formatDate(cardEvent?.start_date)}{" "}
                {formatTime(cardEvent?.start_time)}
              </h4>
              <p>{truncateString(paragraph, 100)}</p>
            </div>
          </div>
        </td>
        <td>
          <div className="manageevnt-attendees-blk">
            {attendees?.length > 0 && (
              <ul>
                {attendees[0] && (
                  <li>
                    <img
                      src={
                        attendees[0]?.avatar
                          ? attendees[0]?.avatar
                          : "/images/people-2.png"
                      }
                      className="img-fluid"
                      alt="attendees"
                    />
                  </li>
                )}
                {attendees[1] && (
                  <li>
                    <img
                      src={
                        attendees[1]?.avatar
                          ? attendees[1]?.avatar
                          : "/images/people-2.png"
                      }
                      className="img-fluid"
                      alt="attendees"
                    />
                  </li>
                )}
                {attendees[2] && (
                  <li>
                    <img
                      src={
                        attendees[2]?.avatar
                          ? attendees[2]?.avatar
                          : "/images/people-2.png"
                      }
                      className="img-fluid"
                      alt="attendees"
                    />
                  </li>
                )}
                {attendees[3] && (
                  <li>
                    <img
                      src={
                        attendees[3]?.avatar
                          ? attendees[3]?.avatar
                          : "/images/people-2.png"
                      }
                      className="img-fluid"
                      alt="attendees"
                    />
                  </li>
                )}
                {attendees[4] && (
                  <li>
                    <img
                      src={
                        attendees[4]?.avatar
                          ? attendees[4]?.avatar
                          : "/images/people-2.png"
                      }
                      className="img-fluid"
                      alt="attendees"
                    />
                  </li>
                )}

                {attendeesCount > 5 ? <li>{`+${attendeesCount - 5}`}</li> : ""}
              </ul>
            )}
          </div>
        </td>
        <td>
          {cardEvent?.is_cancelled ? (
            <div className="manageevnt-status cancel-clr">CANCELLED</div>
          ) : eventStatus(eventStartDate) === -1 ? (
            <div className="manageevnt-status upcoming-clr">UPCOMING</div>
          ) : eventStatus(eventEndDate) === 1 ? (
            <div className="manageevnt-status completed-clr">COMPLETED</div>
          ) : eventStatus(eventEndDate) === -1 &&
            eventStatus(eventStartDate) === 1 ? (
            <div className="manageevnt-status live-clr">LIVE</div>
          ) : (
            ""
          )}
        </td>
        <td>
          <div>
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
                {cardEvent?.is_cancelled ? (
                  <ul>
                    <li
                      data-toggle="modal"
                      data-target="#eventreactive-modal"
                      onClick={() => {
                        setCardEventId(cardEvent?.id);
                      }}
                    >
                      Reactivate Event
                    </li>
                    <li
                      onClick={() => {
                        setCardEventId(cardEvent?.id);
                      }}
                      data-toggle="modal"
                      data-target="#delete-event-modal"
                    >
                      Delete Event
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li
                      onClick={() => {
                        router.push({
                          pathname: `/events/manage`,
                          query: {
                            tab: "manage-attendees",
                            eventId: cardEvent?.id,
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
                            eventId: cardEvent?.id,
                          },
                        });
                      }}
                    >
                      Edit Event
                    </li>
                    <li
                      data-toggle="modal"
                      data-target={"#cancel-event-modal"}
                      onClick={() => {
                        setCardEventId(cardEvent?.id);
                      }}
                    >
                      Cancel Event
                    </li>
                    <li
                      data-toggle="modal"
                      data-target={
                        eventStatus(eventEndDate) === -1 &&
                        eventStatus(eventStartDate) === 1
                          ? "#delete-eventlive-modal"
                          : "#delete-event-modal"
                      }
                      onClick={() => {
                        setCardEventId(cardEvent?.id);
                      }}
                    >
                      Delete Event
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EventManageCard;
