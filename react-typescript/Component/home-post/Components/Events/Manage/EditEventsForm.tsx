import React, { useState } from "react";
import dynamic from "next/dynamic";
const TicketsForm = dynamic(() => import("../CreateEvent/TicketsForm"));
const EditBasicInfoForm = dynamic(() => import("./EditBasicInfoForm"));
const EditEventDetailsForm = dynamic(() => import("./EditEventDetailsForm"));
const EditEventPagesForm = dynamic(() => import("./EditEventPagesForm"));
const EditEventPublishForm = dynamic(() => import("./EditEventPublishForm"));


const EditEventsForm = () => {
  const [currentEventEditingStage, setCurrentEventEditingStage] = useState(1);

  const nextStage = (e: any): any => {
    if (typeof e === "string") {
    } else {
      e.preventDefault();
    }
    if (currentEventEditingStage <= 5) {
      setCurrentEventEditingStage(currentEventEditingStage + 1);
    }
  };
  return (
    <div className="event-create-block">
      <div className="event-create-left-panel editEvnt-lft">
        <ul>
          <li
            className={
              currentEventEditingStage === 1 ? "event-create-active" : ""
            }
          >
            <div>
              <span className="list-item-status">1</span>
              <span className="list-item-status2"></span>
            </div>
            Basic Info
          </li>
          <li
            className={
              currentEventEditingStage === 2 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">2</span>
            <span className="list-item-status2"></span>Details
          </li>
          <li
            className={
              currentEventEditingStage === 3 || currentEventEditingStage === 3.5
                ? "event-create-active"
                : ""
            }
          >
            <span className="list-item-status">3</span>
            <span className="list-item-status2"></span>Event Page
          </li>
          <li
            className={
              currentEventEditingStage === 4 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">4</span>
            <span className="list-item-status2"></span>Tickets
          </li>
          <li
            className={
              currentEventEditingStage === 5 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">5</span>
            <span className="list-item-status2"></span>Publish
          </li>
        </ul>
      </div>
      {currentEventEditingStage === 1 && (
        <EditBasicInfoForm nextStage={nextStage} />
      )}
      {currentEventEditingStage === 2 && (
        <EditEventDetailsForm nextStage={nextStage} />
      )}
      {currentEventEditingStage === 3 && (
        <EditEventPagesForm nextStage={nextStage} />
      )}
      {currentEventEditingStage === 4 && <TicketsForm nextStage={nextStage} />}
      {currentEventEditingStage === 5 && (
        // @ts-ignore
        <EditEventPublishForm nextStage={nextStage} />
      )}
    </div>
  );
};

export default EditEventsForm;
