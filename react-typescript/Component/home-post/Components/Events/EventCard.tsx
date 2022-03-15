import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import router from "next/router";
import React, { useState, useEffect } from "react";
import {
  CHECK_ATTENDING_QUERY,
  GET_OTHER_USER_QUERY,
} from "../../../../graphql/queries";
import { truncateString } from "./Manage/EventManageCard";

interface Props {
  event: any;
  userId: string;
}

const EventCard: React.FC<Props> = ({ event, userId }) => {
  // console.log(event);
  const [organizer, setOrganizer] = useState(null);
  const [attending, setAttending] = useState(false);

  const otherUserData = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: event.organizerId,
    },
  });

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
    setOrganizer(userName);
  }, [otherUserData.data, otherUserData.loading]);

  const formatTime = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "p");
    }
  };

  const formatDate = (time: string) => {
    if (time.length > 0) {
      return format(new Date(time), "PPP");
    } else {
      console.log("err");
    }
  };

  const viewEvent = (event: any, eventId: string) => {
    router.push({
      pathname: `events/${eventId}`,
    });
  };

  let checkUserStatusQuery: any;

  checkUserStatusQuery = useQuery(CHECK_ATTENDING_QUERY, {
    variables: {
      userId,
      eventId: event?.id,
    },
  });

  useEffect(() => {
    setAttending(checkUserStatusQuery?.data?.isUserAttendingEvent);
  }, [checkUserStatusQuery?.data]);

  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        //   @ts-ignore
        if (e.target?.nodeName !== "BUTTON") {
          viewEvent(event, event.id);
        }
      }}
    >
      <div
        className="eSeminer-details"
        style={{
          backgroundImage: `url(${
            event.eventBannerImage || "/images/event-cover-pic.png"
          })`,
        }}
      >
        {userId === event.organizerId ? (
          <span className="eseminer-myevent-btn">My Event</span>
        ) : attending ? (
          <span className="eseminer-attend-btn">Attending</span>
        ) : (
          ""
        )}

        <div className="eseminer-innerblock">
          <h2>
            {event?.title?.length < 0 ? (
              <div className="ml-3 dot-pulse"></div>
            ) : event?.title?.length > 0 ? (
              truncateString(event?.title, 50)
            ) : (
              <p>failed to load event data</p>
            )}
          </h2>
          <h3>
            <span>By</span>{" "}
            {otherUserData?.loading ? (
              <div className="ml-3 dot-pulse"></div>
            ) : organizer?.length > 0 ? (
              organizer
            ) : (
              // <p>failed to load organizer data</p>
              "anonymous"
            )}
          </h3>
          <h4>{formatDate(event.start_date)}</h4>
          {event.venue === "Online" ? (
            <div className="seminer-addrss">
              <span>
                <img
                  src="/images/event-vdo.png"
                  className="img-fluid"
                  alt="seminer"
                />
              </span>
              <div className="seminer-addrss-right">
                <button className="seminer-livezone-btn">
                  Join with Livezone
                </button>
              </div>
            </div>
          ) : (
            <div className="seminer-addrss">
              <span>
                <img
                  src="/images/seminer-loc.png"
                  className="img-fluid"
                  alt="seminer"
                />
              </span>
              <div className="seminer-addrss-right">
                {event.venue}
                {event?.address?.length > 0 ? "," + event?.address : ""}
              </div>
            </div>
          )}

          <div className="seminer-joined-mem">
            <ul>
              <li>
                <img
                  src="/images/people-7.png"
                  className="img-fluid"
                  alt="member"
                />
              </li>
              <li>
                <img
                  src="/images/people-3.png"
                  className="img-fluid"
                  alt="member"
                />
              </li>
              <li>
                <img
                  src="/images/people-2.png"
                  className="img-fluid"
                  alt="member"
                />
              </li>
            </ul>
            <span>+50 others are joining</span>
          </div>
          <div>
            {userId === event.organizerId ? (
              <div>
                <button
                  onClick={() => console.log("hello")}
                  className="seminer-editevnt-btn"
                >
                  Edit Event
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  //   @ts-ignore
                  if (e.target?.nodeName === "BUTTON") {
                    viewEvent(event, event.id);
                  }
                }}
                className="seminer-jointevnt-btn"
              >
                Join Event
              </button>
            )}

            {/* <div>
              <button class="seminer-editevnt-btn attend-clr">Attending</button>
            </div> */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
