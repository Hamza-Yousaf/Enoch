import React, { useState } from "react";
import dynamic from "next/dynamic";
const MessageOptions = dynamic(() => import("./MessageOptions"));
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";
const AttachmentsModal = dynamic(() => import("./attachmentsModal"));

interface Props {
  message: any;
  date: any;
}

const RecieverMessage: React.FC<Props> = ({ message, date }) => {
  const [showOptions, setShowOptions] = useState(false);

  const dispatch = useDispatch();
  const { openMessageAttachments } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const openAttachmentsModal = () => {
    openMessageAttachments(true);
  };

  return (
    <div className="chat-block-reciever-block">
      <div className="chat-block-reciever">
        <div className="chat-block-dot">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowOptions(!showOptions)}
          >
            <img src="images/dots-g.png" />
          </span>
          <MessageOptions
            message={message}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
          />
        </div>
        {message}
        <div className="chat-block-bottm">
          <div className="tableCell-image">
            <ul className="">
              <li onClick={openAttachmentsModal}>
                <a href="#">
                  <img src="images/image-icon.png" alt="icon" /> Image...
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="attachment-modal">
                  <img src="images/copyof.png" /> Copy...
                </a>
              </li>
              <li className="tableCell-list-last">
                <a href="#"> +2 </a>
              </li>
            </ul>
          </div>
          <AttachmentsModal />
        </div>
      </div>
      <div className="chat-block-date">{date}</div>
    </div>
  );
};

export default RecieverMessage;
