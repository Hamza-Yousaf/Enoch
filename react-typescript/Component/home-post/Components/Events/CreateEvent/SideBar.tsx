import React from "react";

const SideBar = () => {
  return (
    <div className="posting-event-create-right">
      <div className="create-event-card">
        <div>
          <img src="/images/event-img1.png" className="img-fluid" />
        </div>
        <h3>Find your members</h3>
        <p>We’ll help you find intrested members and you can approve them to be sure they’ll be a good fit your event.</p>
      </div>
      <div className="create-event-card">
        <div>
          <img src="/images/event-img2.png" className="img-fluid" />
        </div>
        <h3>Schedule events in minutes</h3>
        <p>Organizer tools make it easy to schedule and manage your events. You decide when, where, and how often your event happens.</p>

      </div>
      <div className="create-event-card">
        <div>
          <img src="/images/event-img3.png" className="img-fluid" />
        </div>
        <h3>Have others help you host</h3>
        <p>You don’t have to do it alone. Recruit a
          leadership team to help you host and manage events.</p>
      </div>
    </div>
  );
};

export default SideBar;
