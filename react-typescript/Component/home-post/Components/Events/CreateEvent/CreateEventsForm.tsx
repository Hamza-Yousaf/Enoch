import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../.../../../../../../state/index";
import dynamic from "next/dynamic";
const BasicInfoForm = dynamic(() => import("./BasicInfoForm"));
const DetailsForm = dynamic(() => import("./DetailsForm"));
const EventsPageForm2 = dynamic(() => import("./EventsPageForm2"));
const PublishForm = dynamic(() => import("./PublishForm"));
const PublishForm2 = dynamic(() => import("./PublishForm2"));
const TicketsForm = dynamic(() => import("./TicketsForm"));
const SelectWhatToCreateForm = dynamic(() => import("./SelectWhatToCreateForm"));

const CreateEventsForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { currentEventCreationStage, currentEventCreationId } =
    bindActionCreators(actionCreators, dispatch);

  const currentEventCreationStageValue = useSelector(
    (state: State) => state.currentEventCreationStage
  );

  const currentEventCreationIdValue = useSelector(
    (state: State) => state.currentEventCreationId
  );

  const nextStage = (e: any): any => {
    if (typeof e === "string") {
    } else {
      e.preventDefault();
    }
    if (currentEventCreationStageValue <= 5) {
      if (currentEventCreationStageValue === 5) {
        currentEventCreationStage(5.5);
      } else {
        currentEventCreationStage(currentEventCreationStageValue + 1);
      }
    }
  };

  useEffect(() => {
    currentEventCreationStage(0);
  }, []);

  const publishEvent = (e: any) => {
    e.preventDefault();
    router.push("events");
  };
  return (
    <div className="event-create-block">
      <div className="event-create-left-panel">
        <h3>
          Let's build <br />
          your first event
        </h3>
        <p>
          Tell us a bit more about yourself so we can help create the perfect
          event
        </p>
        <ul>
          <li
            className={
              currentEventCreationStageValue === 1 ? "event-create-active" : ""
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
              currentEventCreationStageValue === 2 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">2</span>
            <span className="list-item-status2"></span>Details
          </li>
          <li
            className={
              currentEventCreationStageValue === 3 ||
              currentEventCreationStageValue === 3.5
                ? "event-create-active"
                : ""
            }
          >
            <span className="list-item-status">3</span>
            <span className="list-item-status2"></span>Event Page
          </li>
          <li
            className={
              currentEventCreationStageValue === 4 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">4</span>
            <span className="list-item-status2"></span>Tickets
          </li>
          <li
            className={
              currentEventCreationStageValue === 5 ? "event-create-active" : ""
            }
          >
            <span className="list-item-status">5</span>
            <span className="list-item-status2"></span>Publish
          </li>
        </ul>
      </div>

      {currentEventCreationStageValue === 0 ? (
        <SelectWhatToCreateForm nextStage={nextStage} />
      ) : currentEventCreationStageValue === 1 ? (
        <BasicInfoForm />
      ) : currentEventCreationStageValue === 2 ? (
        <DetailsForm />
      ) : currentEventCreationStageValue === 3 ? (
        <EventsPageForm2 />
      ) : currentEventCreationStageValue === 4 ? (
        <TicketsForm nextStage={nextStage} />
      ) : currentEventCreationStageValue === 5 ? (
        <PublishForm />
      ) : currentEventCreationStageValue === 5.5 ? (
        <PublishForm2 publishEvent={publishEvent} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateEventsForm;
