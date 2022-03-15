import React from "react";
import dynamic from "next/dynamic";
const CreateEventsForm = dynamic(() => import("./CreateEventsForm"));
const SideBar = dynamic(() => import("./SideBar"));


const MainSection = () => {
  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="posting-event-block">
          <div className="posting-event-create-left">
            <div className="posting-eventList-head">
              <span>
                <a href="#">Create Event</a>
              </span>
            </div>
            <CreateEventsForm />
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
