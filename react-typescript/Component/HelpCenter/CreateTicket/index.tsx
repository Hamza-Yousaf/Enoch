import React, { useState } from "react";
import dynamic from "next/dynamic";
const CategorySelectInput = dynamic(() => import("./CategorySelectInput"));
const TextEditor = dynamic(() => import("./TextEditor"));
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/index";

const CreateTicket = () => {
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("Select Category");
  const [ticketContent, setTicketContent] = useState("");

  const dispatch = useDispatch();
  const { showCreateTicketInputs } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const closeCreateTicketPage = () => {
    showCreateTicketInputs(false);
  };

  return (
    <div className="row">
      <div
        style={{ cursor: "pointer" }}
        onClick={closeCreateTicketPage}
        className="Create-Support-Ticket-sect-close HelpCenter-body"
      >
        <img src="images/Cross.png" alt="X" className="img-fluid" />
      </div>
      <div className="Create-Support-Ticket-sect HelpCenter-body">
        <div className="Create-Support-Ticket-headings">
          <h1>Create Support Ticket</h1>
        </div>
        <div className="Create-Support-Ticket-text">
          <p>
            Please select the topic write the subject and description below to
            create a support ticket.We aim to ewply aa tickets within 1 hour
            during regular time.
          </p>
        </div>
        <CategorySelectInput
          ticketCategory={ticketCategory}
          setTicketCategory={setTicketCategory}
          ticketSubject={ticketSubject}
          setTicketSubject={setTicketSubject}
        />
        <TextEditor
          ticketContent={ticketContent}
          setTicketContent={setTicketContent}
        />
      </div>
    </div>
  );
};

export default CreateTicket;
