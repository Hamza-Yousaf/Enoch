import React from "react";

const PollFinal = (props: any) => {
  const {
    pollQuestion,
    OptionA,
    OptionB,
    OptionC,
    OptionD,
    voteDurationTimeLeft,
  } = props.data;
  return (
    <div className="mt-5 mb-5">
      <div className="createApoll-option">
        <h3>{pollQuestion}</h3>
        <h4>
          You can see how people vote.
          <a href="#">Learn More</a>
        </h4>
        <div className="createApoll-option-btn">
          <button>{OptionA}</button>
          <button>{OptionB}</button>
          {OptionC != "" && <button>{OptionC}</button>}
          {OptionD != "" && <button>{OptionD}</button>}
        </div>
        <h5>
          0 votes
          <span>• {voteDurationTimeLeft}w left •</span>
          View results
        </h5>
      </div>
    </div>
  );
};

export default PollFinal;
