import React from "react";

const EventSideBar = () => {
  return (
    <div className="col-lg-3 p-0">
      <div className="your-event-page-right-sect">
        <div className="Manage-Events-sect">
          <div className="Manage-Events-sect-headings">
            <h1>Manage Events</h1>
          </div>
          <div className="Manage-Events-list">
            <ul>
              <li>
                <a href="#">Edit events</a>
              </li>
              <li>
                <a href="#">Manage Attendee</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Cancel event</a>
              </li>
              <li>
                <a href="#">Delete Event</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Sponsored-banner-Section">
          <div className="Sponsored-banner-bg h-240">
            <div className="Sponsored-banner-img">
              <img
                src="/images/Sponsored-img.png"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="img-resulation">
              <h1>324PX /240PX</h1>
            </div>
          </div>
          <div className="Sponsored-text">
            <h6>
              Sponsored
              <span>
                <img
                  src="/images/Sponsored-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>

        <div className="Sponsored-banner-Section">
          <div className="Sponsored-banner-bg h-360">
            <div className="Sponsored-banner-img">
              <img
                src="/images/Sponsored-img.png"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="img-resulation">
              <h1>324PX /360PX</h1>
            </div>
          </div>
          <div className="Sponsored-text">
            <h6>
              Sponsored
              <span>
                <img
                  src="/images/Sponsored-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>

        <div className="Sponsored-banner-Section">
          <div className="Sponsored-banner-bg h-480">
            <div className="Sponsored-banner-img">
              <img
                src="/images/Sponsored-img.png"
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="img-resulation">
              <h1>324PX /480PX</h1>
            </div>
          </div>
          <div className="Sponsored-text">
            <h6>
              Sponsored
              <span>
                <img
                  src="/images/Sponsored-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSideBar;
