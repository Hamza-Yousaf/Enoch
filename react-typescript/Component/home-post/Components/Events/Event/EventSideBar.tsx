import React from "react";

const EventSideBar = () => {
  return (
    <div className="col-lg-3 p-0">
      <div className="your-event-page-right-sect">
        <div className="ASK-ABOUT-EVENT-sect">
          <h1>ASK ABOUT EVENT</h1>
          <div className="ASK-ABOUT-EVENT-Graphics">
            <img src="/images/text-icon.png" alt="" className="img-fluid" />
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
