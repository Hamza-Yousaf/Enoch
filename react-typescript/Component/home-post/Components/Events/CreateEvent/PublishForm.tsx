import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT_MUTATION_PUBLISH } from "../../../../../graphql/mutations";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../../../../lib/withApollo";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";
import router from "next/router";
import { format, isValid } from "date-fns";
import Cookie from "js-cookie";
import { GET_EVENTS_QUERY } from "../../../../../graphql/queries";

const PublishForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);
  const [visibility, setVisibility] = useState("public");

  const dispatch = useDispatch();

  const currentEventCreationIdValue = useSelector(
    (state: State) => state.currentEventCreationId
  );

  const { currentEventCreationStage, currentEvent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const currentEventCreationDataValue = useSelector(
    (state: State) => state.currentEventCreationData
  );

  const createEventsData = useMutation(CREATE_EVENT_MUTATION_PUBLISH, {
    refetchQueries: [{ query: GET_EVENTS_QUERY }],
  });

  const createEventPublish = createEventsData[0];

  const createEvent = (e: any) => {
    e.preventDefault();
    createEventPublish({
      variables: {
        eventId: currentEventCreationIdValue,
        eventVisibility: visibility,
      },
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data.createEventPublish.success === true) {
          console.log(resp.data.createEventPublish.event);
          let event = resp.data.createEventPublish.event;
          // Cookie.set("currentEvent", event);
          currentEvent(event);
          router.push({
            pathname: `/events/${resp.data.createEventPublish.event.id}`,
            // query: {
            //   eventId: resp.data.createEventPublish.event.id,
            // },
          });
        } else {
          setShowAlert(true);
          setMessage(resp.data.createEventPublish.errors[0].message);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setShowAlert(true);
        setMessage("something went wrong");
        setSuccess(false);
      });
  };

  const formatTime = (time: string) => {
    return format(new Date(time), "p");
  };

  const formatDate = (time: string) => {
    return format(new Date(time), "PPP");
  };

  return (
    <div className="event-create-right-panel ath-securi-add-user-scrollable ">
      <div className="create-event-form event-custom-height">
        <form>
          <div className="create-event-publish">
            <h3>Publish your event</h3>
            <div className="event-publish-date">
              <h4>{currentEventCreationDataValue.title}</h4>
              {/* <p>Wednesday, July 28, 2021 at 7:00 PM IST</p> */}
              <p>
                {currentEventCreationDataValue.start_date.length > 0 &&
                  formatDate(currentEventCreationDataValue.start_date)}{" "}
                at{" "}
                {currentEventCreationDataValue.start_time.length > 0 &&
                  formatTime(currentEventCreationDataValue.start_time)}
              </p>
              <p className="mb-0">{currentEventCreationDataValue.venue}</p>
            </div>
            <div className="event-publish-see mb-4">
              <h3>Who can see your event?</h3>
              <div className="publish-cat">
                <input
                  value="public"
                  checked={visibility === "public"}
                  id="publish-select"
                  name="b-plan"
                  type="radio"
                  onChange={(e) => {
                    setVisibility(e.target.value);
                  }}
                />
                <label htmlFor="publish-select">
                  <p className="publish-event-txt1">Public</p>
                  <p className="publish-event-txt2">
                    Shared on Eventbrite and search engines
                  </p>
                </label>
              </div>
              <div className="publish-cat">
                <input
                  checked={visibility === "private"}
                  value="private"
                  id="publish-select2"
                  name="b-plan"
                  type="radio"
                  onChange={(e) => {
                    setVisibility(e.target.value);
                  }}
                />
                <label htmlFor="publish-select2">
                  <p className="publish-event-txt1">Private</p>
                  <p className="publish-event-txt2">
                    Only available to a selected audience
                  </p>
                </label>
              </div>
            </div>
            <div className="event-publish-see">
              <h3>When should we publish your event?</h3>
              <div className="publish-cat">
                <input id="publish-select3" name="publish" type="radio" />
                <label htmlFor="publish-select3">
                  <p className="publish-event-txt1 mb-0">Publish Now</p>
                </label>
              </div>
              <div className="publish-cat">
                <input id="publish-select4" name="publish" type="radio" />
                <label htmlFor="publish-select4">
                  <p className="publish-event-txt1 mb-0">Schedule for later</p>
                </label>
              </div>
            </div>
            <div className="event-form-input-publish">
              <input type="text" placeholder="26/07/2021" />
              <span>
                <img
                  src="/images/eCalendar.png"
                  className="img-fluid"
                  alt="eCalendar"
                />
              </span>
            </div>
            <p className="publish-event-bttm-txt">
              Time zone is the same as your event's
            </p>
          </div>

          <div className="event-form-bttn-grp">
            <span className="btn-mr-16">
              <button className="event-form-cancel-btn">Cancel</button>
            </span>
            <span>
              <button onClick={createEvent} className="event-form-next-btn">
                Create
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withApollo(PublishForm, { getDataFromTree });
