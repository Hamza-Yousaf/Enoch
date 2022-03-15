import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

const EventHeader = () => {
  const dispatch = useDispatch();
  const { showInviteAttendeesModal, showShareEventModal } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showInviteAttendeesModalValue = useSelector(
    (state: State) => state.showInviteAttendeesModal
  );
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
        <h1>Users can instantly transfer tokens</h1>
        <h2>Event by 88mph</h2>
        <div className="your-event-video">
          <div className="your-event-video-icon">
            <img
              src="/images/evnt-Play-Circle.png"
              alt="icon"
              className="img-fluid"
            />
          </div>
          <h3>Online</h3>
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
          <div className="your-event-time-And-Date-sect mt-md-5">
            <ul>
              <li>
                <img
                  src="/images/event-Calendar.png"
                  alt="calendar"
                  className="img-fluid"
                />
              </li>
              <li>
                <h5>Sun, Aug 27</h5>
              </li>
              <li>
                <h6>12:00 AM</h6>
              </li>
            </ul>
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

export default EventHeader;
