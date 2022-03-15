import React, { useState } from "react";

interface Props {
  nextStage: any;
}

const SelectWhatToCreateForm: React.FC<Props> = ({ nextStage }) => {
  const [action, setAction] = useState("new");

  console.log(action);
  return (
    <>
      <div className="event-create-right-panel">
        <div className="create-event-form">
          <div className="publish-cat mb-40">
            <input
              id="create-post"
              name="b-plan"
              type="radio"
              checked={action === "new"}
              onChange={(e) => {
                setAction(e.target.value);
              }}
              value="new"
            />
            <label htmlFor="create-post">
              <p className="event-posttxt1">Create a new Event</p>
            </label>
          </div>
          <div className="publish-cat posttxt-disabled mb-40">
            <input
              id="create-post2"
              name="b-plan"
              type="radio"
              checked={action === "edit"}
              value="edit"
              onChange={(e) => {
                setAction(e.target.value);
              }}
            />
            <label htmlFor="create-post2">
              <p className="event-posttxt1">Edit an esisting draft</p>
            </label>
          </div>
          <div className="publish-cat posttxt-disabled">
            <input
              value="reuse"
              id="create-post3"
              name="b-plan"
              type="radio"
              checked={action === "reuse"}
              onChange={(e) => {
                setAction(e.target.value);
              }}
            />
            <label htmlFor="create-post3">
              <p className="event-posttxt1">Reuse a previous event post</p>
            </label>
          </div>
        </div>
      </div>
      <div className="event-form-bttn-grp">
        <span className="btn-mr-16">
          <button className="event-form-cancel-btn">Cancel</button>
        </span>
        <span>
          <button
            onClick={(e) => {
              if (action === "new") {
                nextStage(e);
              } else {
                alert("feature not available yet");
              }
            }}
            type="submit"
            className="event-form-next-btn"
          >
            Next
          </button>
        </span>
      </div>
    </>
  );
};

export default SelectWhatToCreateForm;
