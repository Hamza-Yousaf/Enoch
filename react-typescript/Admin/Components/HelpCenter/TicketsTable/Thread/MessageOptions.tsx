import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

interface Props {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  message: any;
}

const MessageOptions: React.FC<Props> = ({
  showOptions,
  setShowOptions,
  message,
}) => {
  const dispatch = useDispatch();
  const { quotedMessage } = bindActionCreators(actionCreators, dispatch);
  const quotedMessageValue = useSelector((state: State) => state.quotedMessage);

  return (
    <div
      className={
        showOptions
          ? "chat-block-dropbox dropdown-menu drop-active"
          : "chat-block-dropbox dropdown-menu"
      }
      id="chat-boot1"
    >
      <ul>
        <li
          onClick={() => {
            quotedMessage(message);
          }}
        >
          <a href="#">Quote</a>
        </li>
        <li>
          <a href="#">Share message</a>
        </li>
        <li>
          <a href="#">Forword via mail</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
      </ul>
    </div>
  );
};

export default MessageOptions;
