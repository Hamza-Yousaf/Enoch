import React, { useState, useEffect } from "react";
import {
  TicketsInDraft,
  TicketsInInbox,
  TicketsInSent,
} from "../../../utilsData/TicketsTableData";
import dynamic from "next/dynamic";
const Ticket = dynamic(() => import("../Ticket"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
import { deleteInboxTicketsFunction } from "../utilsFunctions/deleteInboxTickets";
import { deleteSentTicketsFunction } from "../utilsFunctions/deleteSentTickets";
import { deleteDraftTicketsFunction } from "../utilsFunctions/deleteDraftTickets";

const TableBody: React.FC = () => {
  const [inboxTickets, setInboxTickets] = useState(TicketsInInbox);
  const [sentTickets, setSentTickets] = useState(TicketsInSent);
  const [draftTickets, setDraftTickets] = useState(TicketsInDraft);
  const dispatch = useDispatch();
  const {
    deleteInboxTickets,
    deleteSentTickets,
    deleteDraftTickets,
    addToDeleteList,
    setDeleteAlert,
    addToSentDeleteList,
    addToDraftDeleteList,
    showDeleteConfirmModal,
  } = bindActionCreators(actionCreators, dispatch);

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const deleteList = useSelector((state: State) => state.deleteList);
  const sentDeleteList = useSelector((state: State) => state.sentDeleteList);
  const draftDeleteList = useSelector((state: State) => state.draftDeleteList);

  const isDeleteInboxTickets = useSelector(
    (state: State) => state.deleteInboxTicket
  );

  const isDeleteSentTickets = useSelector(
    (state: State) => state.deleteSentTickets
  );

  const isDeleteDraftTickets = useSelector(
    (state: State) => state.deleteDraftTickets
  );
  const showDeleteConfirmModalValue = useSelector(
    (state: State) => state.showDeleteConfirmModal
  );

  useEffect(() => {
    deleteInboxTicketsFunction(
      isDeleteInboxTickets,
      deleteList,
      inboxTickets,
      setDeleteAlert,
      setInboxTickets,
      deleteInboxTickets,
      addToDeleteList,
      showDeleteConfirmModal,
      showDeleteConfirmModalValue
    );
  }, [deleteInboxTickets]);

  useEffect(() => {
    deleteSentTicketsFunction(
      isDeleteSentTickets,
      sentDeleteList,
      sentTickets,
      setDeleteAlert,
      setSentTickets,
      deleteSentTickets,
      addToSentDeleteList,
      showDeleteConfirmModal,
      showDeleteConfirmModalValue
    );
  }, [deleteSentTickets]);

  useEffect(() => {
    deleteDraftTicketsFunction(
      isDeleteDraftTickets,
      setDraftTickets,
      draftTickets,
      draftDeleteList,
      addToDraftDeleteList,
      deleteDraftTickets,
      showDeleteConfirmModal,
      showDeleteConfirmModalValue
    );
  }, [deleteDraftTickets]);

  return (
    <div className="tableBody">
      {messageTab === "INBOX"
        ? inboxTickets.map((ticket) => {
            return (
              <Ticket
                key={ticket.subID}
                userName={ticket.userName}
                userImg={ticket.userImg}
                mainID={ticket.mainID}
                subID={ticket.subID}
                Subject={ticket.Subject}
                Category={ticket.Category}
                images={ticket.images}
                dateAndTime={ticket.dateAndTime}
                Status={ticket.Status}
                read={ticket.read}
                tab="INBOX"
                messages={ticket.messageThread}
                userThread={ticket.usersAndActionsInThread}
                inboxTickets={inboxTickets}
                sentTickets={null}
                message={null}
              />
            );
          })
        : messageTab === "SENT"
        ? sentTickets.map((ticket, key) => {
            return (
              <Ticket
                key={ticket.subID}
                userName={ticket.userName}
                userImg={ticket.userImg}
                mainID={ticket.mainID}
                subID={ticket.subID}
                Subject={ticket.Subject}
                Category={ticket.Category}
                images={ticket.images}
                dateAndTime={ticket.dateAndTime}
                Status={ticket.Status}
                read={ticket.read}
                tab="SENT"
                messages={ticket.messageThread}
                userThread={ticket.usersAndActionsInThread}
                sentTickets={sentTickets}
                message={null}
                inboxTickets={null}
              />
            );
          })
        : draftTickets.map((ticket, key) => {
            return (
              <Ticket
                key={ticket.subID}
                userName={""}
                userImg={ticket.userImg}
                mainID={""}
                subID={ticket.subID}
                Subject={ticket.Subject}
                Category={ticket.Category}
                dateAndTime={ticket.dateAndTime}
                Status={""}
                message={ticket.message}
                read={ticket.read}
                tab="DRAFT"
                images={null}
                userThread={null}
                inboxTickets={null}
                sentTickets={null}
              />
            );
          })}
    </div>
  );
};

export default TableBody;
