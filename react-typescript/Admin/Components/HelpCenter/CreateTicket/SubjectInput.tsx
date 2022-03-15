import React from "react";

interface Props {
  ticketSubject: any;
  setTicketSubject: any;
  subjectChangeHandler: any;
}

const SubjectInput: React.FC<Props> = ({
  setTicketSubject,
  subjectChangeHandler,
  ticketSubject,
}) => {
  return (
    <div className="col-lg-6">
      <div className="Create-Support-dropdown-right">
        <input
          value={ticketSubject}
          type="text"
          placeholder="Write a subject"
          onChange={subjectChangeHandler}
        />
      </div>
    </div>
  );
};

export default SubjectInput;
