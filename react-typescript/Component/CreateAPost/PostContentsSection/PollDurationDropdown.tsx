import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const PollDurationDropdown = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  return (
    <div className="steps-poll-input-grp Poll-duration-dropdown">
      <div className="poll-input-label">Poll duration</div>
      <div className="event-form-input dropdown">
        <div
          id="postPoll-dropdown"
          className="postPoll-dropdown-input"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {createPostState.duration}
        </div>
        <div
          id="postPoll-dropList"
          className="dropdown-menu Poll-duration-drop-box"
        >
          <ul>
            <li
              onClick={() =>
                setCreatePostState({
                  ...createPostState,
                  duration: "1 Day",
                })
              }
            >
              1 Day
            </li>
            <li
              onClick={() =>
                setCreatePostState({
                  ...createPostState,
                  duration: "3 Day",
                })
              }
            >
              3 Days
            </li>
            <li
              onClick={() =>
                setCreatePostState({
                  ...createPostState,
                  duration: "1 Week",
                })
              }
            >
              1 Week
            </li>
            <li
              className="no-border"
              onClick={() =>
                setCreatePostState({
                  ...createPostState,
                  duration: "2 Week",
                })
              }
            >
              2 Weeks
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PollDurationDropdown;
