import React, { useState } from "react";
import dynamic from "next/dynamic";
const MarkInboxTicket = dynamic(() => import("./TicketsTable/MarkInboxTicket"));
const ThreadsToggler = dynamic(() => import("./TicketsTable/ThreadsToggler"));
import { useSelector, useDispatch } from "react-redux";
import { State, actionCreators } from "../../../state";
import { bindActionCreators } from "redux";
const MarkSentTicket = dynamic(() => import("./TicketsTable/MarkSentTickets"));
const MarkDraftTicket = dynamic(() => import("./TicketsTable/MarkDraftTicket"));
const InboxTicketThread = dynamic(() => import("./TicketsTable/Thread/InboxTicketThread"));
const SentTicketThread = dynamic(() => import("./TicketsTable/Thread/SentTicketThread"));
import { deleteSingleTicketFunction } from "./utilsFunctions/deleteSingleTicket";

interface Props {
  userImg: string;
  userName: string;
  mainID: string;
  subID: string;
  Category: string;
  Subject: string;
  Status: string;
  dateAndTime: string;
  read: any;
  images: any | undefined;
  message: any;
  tab: string;
  messages?: any;
  userThread: any;
  inboxTickets: any;
  sentTickets: any;
}

const Ticket: React.FC<Props> = ({
  userName,
  Category,
  Status,
  Subject,
  dateAndTime,
  images,
  mainID,
  subID,
  userImg,
  read,
  message,
  tab,
  messages,
  userThread,
  inboxTickets,
  sentTickets,
}) => {
  const [openThread, setOpenThread] = useState(false);

  const dispatch = useDispatch();
  const {
    deleteInboxTickets,
    deleteSentTickets,
    deleteDraftTickets,
    addToDeleteList,
    addToDraftDeleteList,
    addToSentDeleteList,
  } = bindActionCreators(actionCreators, dispatch);

  const deleteList = useSelector((state: State) => state.deleteList);
  const sentDeleteList = useSelector((state: State) => state.sentDeleteList);

  const deleteSingleTicket = () => {
    deleteSingleTicketFunction(
      tab,
      inboxTickets,
      deleteList,
      addToDraftDeleteList,
      addToDeleteList,
      deleteInboxTickets,
      subID,
      sentTickets,
      sentDeleteList,
      addToSentDeleteList,
      deleteSentTickets,
      deleteDraftTickets
    );
  };

  return (
    <div
      className={
        openThread ? "tableRow tableRow-active" : "tableRow tableRow-inactive"
      }
    >
      <ThreadsToggler openThread={openThread} setOpenThread={setOpenThread} />
      <div
        className={
          read
            ? "tableRowHeader helpcenter-read-mail"
            : "tableRowHeader unread-mail"
        }
      >
        <div className="tableCell">
          {tab === "INBOX" ? (
            <MarkInboxTicket read={read} currentTab={tab} subID={subID} />
          ) : tab === "SENT" ? (
            <MarkSentTicket read={read} currentTab={tab} subID={subID} />
          ) : (
            <MarkDraftTicket read={read} currentTab={tab} subID={subID} />
          )}
        </div>
        {userName ? (
          <div className="tableCell">
            <div className="tableCell-lead">
              <img src={userImg} alt="user" className="img-fluid mr-2" />
              {userName}
            </div>
          </div>
        ) : (
          <div className="tableCell">
            <div className="tableCell-lead">
              <img src={userImg} alt="user" className="img-fluid mr-2" />
            </div>
          </div>
        )}
        {mainID && (
          <div className="tableCell">
            <div className="tableCell-ticket">
              {mainID}/<span>{subID}</span>
            </div>
          </div>
        )}

        <div className="tableCell">
          <div className="tableCell-cat">{Category}</div>
        </div>
        <div className="tableCell">
          <div className="tableCell-sub">{Subject} </div>
        </div>
        {message && (
          <div className="tableCell">
            <div className="tableCell-text">{message}</div>
          </div>
        )}
        {images && (
          <div className="tableCell">
            <div className="tableCell-image">
              <ul className="">
                {images?.map((image: any, key: number) => {
                  if (key < 2) {
                    return (
                      <li key={key}>
                        <a href="#">
                          <img src={image.src} alt="icon" />
                          {key === 0 ? "Image..." : "Copy..."}
                        </a>
                      </li>
                    );
                  }
                })}
                {images?.length > 2 ? (
                  <li className="tableCell-list-last">
                    <a href="#"> {images.length - 2}+ </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        )}
        {Status && (
          <div className="tableCell">
            <div
              className={
                Status === "In-Progress"
                  ? "tableCell-status in-progress"
                  : Status === "solved"
                  ? "tableCell-status in-solved"
                  : "tableCell-status"
              }
            >
              {Status}
            </div>
          </div>
        )}
        <div className="tableCell">
          <div className="tableCell-date-time">{dateAndTime}</div>
        </div>
        <div className="tableCell">
          <div
            onClick={deleteSingleTicket}
            className="tableCell-collapse-block"
          >
            <span>
              <img
                style={{ cursor: "pointer" }}
                src="/images/Delete.png"
                alt="Delete"
                className="img-fluid"
              />
            </span>
          </div>
        </div>
      </div>
      {tab === "INBOX" ? (
        <InboxTicketThread
          subject={Subject}
          messages={messages}
          userThread={userThread}
        />
      ) : tab === "SENT" ? (
        <SentTicketThread
          subject={Subject}
          messages={messages}
          userThread={userThread}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Ticket;
