import React from "react";

interface Props {
  publishEvent: (e: any) => void;
}

const PublishForm2: React.FC<Props> = ({ publishEvent }) => {
  return (
    <div
      className="
          event-create-right-panel
          ath-securi-add-user-scrollable
        "
    >
      <div className="create-event-form event-custom-height">
        <form>
          <div className="create-event-publish">
            <h3>Publish your event</h3>

            <div className="event-publish-see mb-4">
              <div className="publish-cat">
                <input id="publish-select" name="b-plan" type="radio" checked />
                <label htmlFor="publish-select">
                  <p className="publish-event-txt1">Private</p>
                  <p className="publish-event-txt2">
                    Only available to a selected audience
                  </p>
                </label>
              </div>
              <div className="publish-cat">
                <input id="publish-check" name="b-plan" type="checkbox" />
                <label htmlFor="publish-check">
                  <p className="publish-event-txt1">
                    Allow attendies to invite their followers
                  </p>
                  <p className="publish-event-txt2 pub-gray-clr">
                    The people they invite will not need your approval to
                    attend.
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
              <button onClick={publishEvent} className="event-form-next-btn">
                Create
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishForm2;
