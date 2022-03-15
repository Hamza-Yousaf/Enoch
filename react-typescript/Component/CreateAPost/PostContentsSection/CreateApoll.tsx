import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import dynamic from "next/dynamic";
const PollDurationDropdown = dynamic(() => import("./PollDurationDropdown"));

const CreateApoll = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const handleOnClick = (e: any) => {
    if (createPostState.optionCAdded === false) {
      if (
        createPostState.pollQuestion.length > 0 &&
        createPostState.OptionA.length > 0 &&
        createPostState.OptionB.length > 0
      ) {
        setCreatePostState({
          ...createPostState,
          addOptionC: true,
          optionCAdded: true,
        });
      }
    } else {
      if (
        createPostState.pollQuestion.length > 0 &&
        createPostState.OptionA.length > 0 &&
        createPostState.OptionB.length > 0 &&
        createPostState.OptionC.length > 0
      ) {
        setCreatePostState({ ...createPostState, addOptionD: true });
      }
    }
  };

  const handleOnChange = (e: any) => {
    const newData = { ...createPostState };
    //@ts-ignore
    newData[e.target.name] = e.target.value;
    setCreatePostState(newData);
  };
  console.log("xxx", createPostState);

  return (
    <div className="posting-steps-poll">
      <form>
        <div className="steps-poll-input-grp">
          <div className="poll-input-label">Your question</div>
          <div className="poll-input-field">
            <input
              type="text"
              placeholder="E.g., How do you commute to work?"
              name="pollQuestion"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="steps-poll-input-grp">
          <div className="poll-input-label">Option 1*</div>
          <div className="poll-input-field">
            <input
              type="text"
              placeholder="E.g., Public trasportation"
              name="OptionA"
              onChange={handleOnChange}
              value={createPostState.OptionA}
            />
          </div>
        </div>
        <div className="steps-poll-input-grp">
          <div className="poll-input-label">Option 2*</div>
          <div className="poll-input-field">
            <input
              type="text"
              placeholder="E.g., Drive myself"
              name="OptionB"
              onChange={handleOnChange}
              value={createPostState.OptionB}
            />
          </div>
        </div>

        {createPostState.addOptionC === true && (
          <div
            className="steps-poll-input-grp steps-poll-input-option-extra"
            style={{ display: "block" }}
          >
            <div className="poll-input-label d-flex justiyf-content-between">
              <span>Option 3*</span>
              {/* <span className="poll-option-extra-remove">Remove</span> */}
            </div>
            <div className="poll-input-field">
              <input
                type="text"
                placeholder="E.g.,Go with my friends"
                name="OptionC"
                onChange={handleOnChange}
                value={createPostState.OptionC}
              />
            </div>
          </div>
        )}
        {createPostState.addOptionD === true && (
          <div
            className="steps-poll-input-grp steps-poll-input-option-extra"
            style={{ display: "block" }}
          >
            <div className="poll-input-label d-flex justiyf-content-between">
              <span>Option 4*</span>
              {/* <span className="poll-option-extra-remove">Remove</span> */}
            </div>
            <div className="poll-input-field">
              <input
                type="text"
                placeholder="E.g., by Cyceling"
                name="OptionD"
                onChange={handleOnChange}
                value={createPostState.OptionD}
              />
            </div>
          </div>
        )}
        {createPostState.addOptionC === true &&
        createPostState.addOptionD === true ? (
          ""
        ) : (
          <div className="step-poll-addOption">
            <a
              onClick={handleOnClick}
              href="#!"
              className="btn poll-addOption-btn"
            >
              + Add Options
            </a>
          </div>
        )}
        <PollDurationDropdown />
        <p className="poll-bottm-txt">
          We don’t allow requests for political opinions, medical information or
          other sensitive data.
        </p>
      </form>
    </div>
  );
};

export default CreateApoll;
