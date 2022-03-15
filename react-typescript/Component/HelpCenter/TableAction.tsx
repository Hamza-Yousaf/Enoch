import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

interface Props {
  name: string;
  itemClass: string;
  images: any;
  liClass: any;
}

const TableAction: React.FC<Props> = ({ name, itemClass, images, liClass }) => {
  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const dispatch = useDispatch();
  const {
    deleteInboxTickets,
    deleteSentTickets,
    deleteDraftTickets,
    showShareTicketModal,
    showForwardTicketModal,
  } = bindActionCreators(actionCreators, dispatch);

  const deleteMarkedInboxTickets = () => {
    if (messageTab === "INBOX") {
      deleteInboxTickets(true);
    } else if (messageTab === "SENT") {
      deleteSentTickets(true);
    } else if (messageTab === "DRAFT") {
      deleteDraftTickets(true);
    }
  };

  const shareTicket = () => {
    showShareTicketModal(true);
  };

  const forwardTicket = () => {
    showForwardTicketModal(true);
  };

  return (
    <li
      onClick={
        name === "Delete"
          ? deleteMarkedInboxTickets
          : name === "Share"
          ? shareTicket
          : name === "Forward"
          ? forwardTicket
          : () => {
              return;
            }
      }
      className={liClass}
    >
      <span className="help-btn-popover">{name}</span>
      <a href="#" className={itemClass}>
        {images.map((image: any, key: any) => {
          return (
            <img
              key={key}
              src={image.imgSrc}
              alt="delete"
              className={image.imgClass}
            />
          );
        })}
      </a>
    </li>
  );
};

export default TableAction;
