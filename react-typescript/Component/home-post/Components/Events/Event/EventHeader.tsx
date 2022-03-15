import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { GET_OTHER_USER_QUERY } from "../../../../../graphql/queries";
import withApollo from "../../../../../lib/withApollo";
import { actionCreators, State } from "../../../../../state/index";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { format, compareAsc, isValid } from "date-fns";

interface Props {
  event?: any;
}

const EventHeader: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();
  const { showInviteAttendeesModal, showShareEventModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showInviteAttendeesModalValue = useSelector(
    (state: State) => state.showInviteAttendeesModal
  );

  const currentEventValue = useSelector((state: State) => state.currentEvent);

  const { data, loading, error } = useQuery(GET_OTHER_USER_QUERY, {
    variables: {
      userId: currentEventValue.organizerId,
    },
  });

  console.log(data);
  console.log(currentEventValue);

  console.log(format(new Date("2021-11-17T22:46:52.000Z"), "PPP"));

  const formatTime = (time: string) => {
    return format(new Date(time), "p");
  };

  const formatDate = (time: string) => {
    return format(new Date(time), "PPP");
  };
  return (
    <div className="your-event-page-left-top">
      <div className="your-event-page-cover-pic">
        <img
          src="/images/event-cover-pic.png"
          alt="Cover-photo"
          className="img-fluid"
        />
      </div>
      <div className="your-event-info">
        <h1>{currentEventValue?.title}</h1>
        <h2>
          Event by{" "}
          {data?.getOtherUserProfile.firstName +
            " " +
            data?.getOtherUserProfile.lastName}
        </h2>
        <div className="your-event-video">
          <div className="your-event-video-icon">
            <img
              src="/images/evnt-Play-Circle.png"
              alt="icon"
              className="img-fluid"
            />
          </div>
          <h3>
            {currentEventValue.venue === "Online"
              ? "Online"
              : currentEventValue.venue === "venue to be announced"
              ? "venue to be announced"
              : `venue:${currentEventValue.venue}`}
          </h3>
        </div>
        <div className="your-event-interested-people-sect">
          <div className="your-event-interested-people-list">
            <ul>
              <li className="ml-0">
                <img
                  src="/images/people-1.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-2.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-3.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-4.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-5.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-6.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <img
                  src="/images/people-7.png"
                  alt="user-img"
                  className="img-fluid"
                />
              </li>
              <li>
                <a href="#">99+</a>
              </li>
            </ul>
          </div>
          <div className="your-event-interested-people-text">
            <a href="#">Emily and 8,200 other attendees</a>
          </div>
        </div>
        <div className="your-event-info-left-sect">
          <div className="Attending-Event-sect">
            <button>
              <span>
                <img
                  src="/images/attend-eventCheckmark.png"
                  alt=""
                  className="img-fluid"
                />
                <a href="#">Attending</a>
              </span>
            </button>
            <div className="leave-event-btn">
              <span>
                <img
                  src="/images/leave-event-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <a href="#">Leave Event</a>
            </div>
          </div>
          <div className="your-event-time-And-Date-sect ">
            <ul>
              <li>
                <img
                  src="/images/event-Calendar.png"
                  alt="calendar"
                  className="img-fluid"
                />
              </li>
              <li>
                <h5>
                  {currentEventValue?.start_date?.length > 0
                    ? formatDate(currentEventValue.start_date)
                    : ""}
                </h5>
              </li>
              <li>
                <h6>
                  {currentEventValue?.start_time?.length > 0
                    ? formatTime(currentEventValue.start_time)
                    : ""}
                </h6>
              </li>
            </ul>
          </div>
          <div className="event-Add-story-btn">
            <button>
              <span>
                <img
                  src="/images/Add-story-btn-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
              <a href="#">Add to your story</a>
            </button>
          </div>
        </div>
        <div className="your-event-btns">
          <button
            onClick={() => showInviteAttendeesModal(true)}
            className="Invite-Attendees"
          >
            <a href="#">Invite Attendees</a>
          </button>
          <button
            className="Share-Event"
            onClick={() => showShareEventModal(true)}
          >
            <a href="#">Share Event</a>
          </button>
          <button className="More">
            <a href="#">More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withApollo(EventHeader, { getDataFromTree });
