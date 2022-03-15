import React from "react";

interface Props {
  nextStage: (e: any) => void;
}

const TicketsForm: React.FC<Props> = ({ nextStage }) => {
  return (
    <div className="event-create-right-panel">
      <div className="create-event-form ">
        <div className="event-create-ticket-sect">
          <h3>Let's create tickets</h3>
          <p>
            Create a section if you want to sell multiple ticket types that
            share the same inventory. i.e. Floor, Mezzanine.
          </p>
          <div className="event-free-paid-block">
            <span className="event-free">Free</span>
            <span className="event-paid">Paid</span>
          </div>
        </div>
        <div className="event-form-bttn-grp">
          <span className="btn-mr-16">
            <button className="event-form-cancel-btn">Cancel</button>
          </span>
          <span>
            <button onClick={nextStage} className="event-form-next-btn">
              Next
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketsForm;
