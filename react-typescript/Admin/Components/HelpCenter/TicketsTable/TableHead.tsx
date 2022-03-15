import React, { useState } from "react";
import {
  MarkData,
  TableHeadCellData,
  TableHeadCellDataDraft,
  TicketsInDraft,
  TicketsInInbox,
  TicketsInSent,
} from "../../../utilsData/TicketsTableData";
import TableHeadCell from "./TableHeadCell";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state";
import dynamic from "next/dynamic";
const MarkAllInbox = dynamic(() => import("./MarkAllInbox"));
const MarkAllSent = dynamic(() => import("./MarkAllSent"));
const MarkAllDraft = dynamic(() => import("./markAllDraft"));
import { changeMarkControlFunction } from "../utilsFunctions/changeMarkControl";
import { markAllInboxFunction } from "../utilsFunctions/markAllInbox";
import { markAllInSentFunction } from "../utilsFunctions/markAllInSent";
import { markAllInDraftFunction } from "../utilsFunctions/markAllInDraftFunction";

const TableHead = () => {
  const [showMarkOptions, setShowMarkOptions] = useState(false);
  const [markAllInboxMsg, setMarkAllInboxMsg] = useState(false);
  const [markAllSentMsg, setMarkAllSentMsg] = useState(false);
  const [markAllDraftMsg, setMarkAllDraftMsg] = useState(false);
  const [likeAllInboxMsg, setLikeAllInboxMsg] = useState(false);
  const [likeAllSentMsg, setLikeAllSentMsg] = useState(false);
  const [likeAllDraftMsg, setLikeAllDraftMsg] = useState(false);

  const dispatch = useDispatch();

  const {
    markAllInbox,
    markAllSent,
    markAllDraft,
    addToDeleteList,
    addToSentDeleteList,
    addToDraftDeleteList,
    likeAllInInbox,
    likeAllInSent,
    likeAllInDraft,
    currentMarkAllControl,
  } = bindActionCreators(actionCreators, dispatch);

  const toggleMarkOptionsShow = () => {
    setShowMarkOptions(!showMarkOptions);
  };

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const likeAllInInboxValue = useSelector(
    (state: State) => state.likeAllInInbox
  );

  const likeAllInSentValue = useSelector((state: State) => state.likeAllInSent);

  const likeAllInDraftValue = useSelector(
    (state: State) => state.likeAllInDraft
  );

  const markAllInboxValue = useSelector(
    (state: State) => state.markAllInbox["markAllInbox"]
  );
  const markAllSentValue = useSelector(
    (state: State) => state.markAllSent["markAllSent"]
  );
  const markAllDraftValue = useSelector(
    (state: State) => state.markAllDraft["markAllDraft"]
  );
  const currentMarkAllControlValue = useSelector(
    (state: State) => state.currentMarkAllControl
  );

  const changeMarkControl = (control: string) => {
    changeMarkControlFunction(
      toggleMarkOptionsShow,
      messageTab,
      control,
      markAllSent,
      likeAllInSent,
      setLikeAllSentMsg,
      setMarkAllSentMsg,
      TicketsInSent,
      addToSentDeleteList,
      markAllInbox,
      likeAllInInbox,
      setLikeAllInboxMsg,
      setMarkAllInboxMsg,
      TicketsInInbox,
      addToDeleteList,
      markAllDraft,
      likeAllInDraft,
      setLikeAllDraftMsg,
      setMarkAllDraftMsg,
      currentMarkAllControl
    );
  };

  const handleMarkAll_In_Inbox = () => {
    markAllInboxFunction(
      currentMarkAllControlValue,
      likeAllInboxMsg,
      setLikeAllInboxMsg,
      likeAllInInbox,
      likeAllInInboxValue,
      markAllInboxMsg,
      setMarkAllInboxMsg,
      markAllInbox,
      markAllInboxValue,
      addToDeleteList,
      TicketsInInbox
    );
  };

  const handleMarkAll_In_Sent = () => {
    markAllInSentFunction(
      currentMarkAllControlValue,
      likeAllSentMsg,
      setLikeAllSentMsg,
      likeAllInSent,
      likeAllInSentValue,
      markAllSent,
      markAllSentMsg,
      setMarkAllSentMsg,
      markAllSentValue,
      addToSentDeleteList,
      TicketsInSent
    );
  };

  const handleMarkAll_In_Draft = () => {
    markAllInDraftFunction(
      currentMarkAllControlValue,
      likeAllDraftMsg,
      setLikeAllDraftMsg,
      likeAllInDraft,
      likeAllInDraftValue,
      markAllDraft,
      markAllDraftMsg,
      setMarkAllDraftMsg,
      markAllDraftValue,
      addToDraftDeleteList,
      TicketsInDraft
    );
  };

  return (
    <div className="tableHeading enable">
      <div className="tableCell pl-0">
        <div className="hlp-filter-dropbox">
          <div className="dropdown">
            {messageTab === "INBOX" ? (
              <MarkAllInbox
                handleMarkAll={handleMarkAll_In_Inbox}
                markAll={
                  currentMarkAllControlValue === "Starred"
                    ? likeAllInboxMsg
                    : markAllInboxMsg
                }
              />
            ) : messageTab === "SENT" ? (
              <MarkAllSent
                handleMarkAll={handleMarkAll_In_Sent}
                markAll={
                  currentMarkAllControlValue === "Starred"
                    ? likeAllSentMsg
                    : markAllSentMsg
                }
              />
            ) : (
              <MarkAllDraft
                handleMarkAll={handleMarkAll_In_Draft}
                markAll={
                  currentMarkAllControlValue === "Starred"
                    ? likeAllDraftMsg
                    : markAllDraftMsg
                }
              />
            )}

            <div className="filter-dropbttn">
              <img
                src="/images/Polygon-drop.png"
                alt="icon"
                className="pl-4"
                onClick={toggleMarkOptionsShow}
              />
            </div>
            <div
              className={
                showMarkOptions
                  ? "drop-active dropdown-menu option-menu "
                  : "dropdown-menu option-menu"
              }
              //   id="filterdiv"
            >
              <div className="filteration">
                <ul>
                  {MarkData.map((data, key) => (
                    <li
                      onClick={() => {
                        changeMarkControl(data);
                      }}
                      key={key}
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <span className="refresh-tbl">
            <a href="#">
              <img src="/images/hupdate.png" alt="icon" className="img-fluid" />
            </a>
          </span>
        </div>
      </div>
      {messageTab !== "DRAFT"
        ? TableHeadCellData.map((data, key) => (
            <TableHeadCell
              key={key}
              data={data}
              last={key === TableHeadCellData.length - 1}
            />
          ))
        : TableHeadCellDataDraft.map((data, key) => {
            return (
              <TableHeadCell
                key={key}
                data={data}
                last={key === TableHeadCellData.length - 1}
              />
            );
          })}
    </div>
  );
};

export default TableHead;
