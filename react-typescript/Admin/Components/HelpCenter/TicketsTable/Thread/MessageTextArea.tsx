import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const TagList = dynamic(() => import("../../CreateTicket/TagList"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

interface Props {
  setThreadMessages: React.Dispatch<any>;
  threadMessages: any;
  usersInvolved: any;
  setUsersInvolved: any;
}

const MessageTextArea: React.FC<Props> = ({
  threadMessages,
  setThreadMessages,
  usersInvolved,
  setUsersInvolved,
}) => {
  const [message, setMessage] = useState("");
  const [showTagList, setShowTagList] = useState(false);
  const dispatch = useDispatch();
  const { showNameTags, quotedMessage } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const showNameTagsValue = useSelector((state: State) => state.showNameTags);
  const quotedMessageValue = useSelector((state: State) => state.quotedMessage);
  const inputRef = useRef();

  const [nameTag, setNameTag] = useState("");
  const [prependTag, setPrependTag] = useState(false);

  const getTodaysDate = () => {
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const addMessage = (e: any) => {
    setNameTag("");
    if (e.target.value === "@" && e.target.value.length === 1) {
      showNameTags(true);
      if (prependTag && e.target.value > 1) {
        setMessage(nameTag + e.target.value);
        setPrependTag(false);
      } else {
        setMessage(e.target.value);
        setPrependTag(false);
      }
    } else {
      showNameTags(false);
      setMessage(e.target.value);
    }
  };

  const sendMessage = () => {
    if (quotedMessageValue !== "") {
      quotedMessage("");
      setThreadMessages([
        ...threadMessages,
        {
          type: "receiver",
          message: (
            // <>
            //   {quotedMessageValue} <br /> {message}
            // </>
            <div className="chat-block-reciever hlp-qout-message pt-0 pl-0">
              <h2>
                <img
                  src="/images/qout.png"
                  alt="qout"
                  className="img-fluid mr-2"
                />
                @Robertrose
              </h2>
              {/* <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
            <h4>Regina Cooper, Support Desk</h4> */}
              {quotedMessageValue}
              <div className="qout-bottm-txt"> {message}</div>
            </div>
          ),
        },
      ]);
      setMessage("");
    } else {
      setThreadMessages([
        ...threadMessages,
        {
          type: "receiver",
          message: (
            <>
              <p>{message}</p>
            </>
          ),
          date: getTodaysDate(),
        },
      ]);
      setUsersInvolved([
        ...usersInvolved,
        {
          type: "customer",
          userImg: "/images/avtr.png",
          date: "10/05/2021",
        },
      ]);
      setMessage("");
    }
  };

  useEffect(() => {
    setShowTagList(showNameTagsValue);
  }, [showNameTagsValue]);

  return (
    <div className="chat-block-text-editor">
      <div className="chat-block-editor-header">
        <div className="editor-font">
          <img src="/images/Textarea/Font.png" alt="font" />
          <img src="/images/Textarea/arrow.png" alt="font" className="ml-1" />
        </div>
        <ul>
          <li>
            <img src="/images/Textarea/Bold.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Italic.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Underline.png" alt="font" />
          </li>
        </ul>
        <ul>
          <li>
            <img src="/images/Textarea/Link.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Smile.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Image.png" alt="font" />
          </li>
        </ul>
        <ul className="border-right-0">
          <li>
            <img src="/images/Textarea/List.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Numbered List.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Align-Left.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Align-Center.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Align-Right.png" alt="font" />
          </li>
          <li>
            <img src="/images/Textarea/Align-Justify.png" alt="font" />
          </li>
        </ul>
      </div>
      <div className="chat-block-txteditor">
        <div className="chat-block-txteditor-scroll">
          <div className="chat-block-editor-txtarea">
            {quotedMessageValue === "" ? (
              <textarea
                value={nameTag.length > 1 ? `${nameTag}, ` : message}
                onChange={addMessage}
                placeholder="Type something"
              ></textarea>
            ) : (
              <div className="chat-block-reciever hlp-qout-message pt-0 pl-0">
                <h2>
                  <img
                    src="/images/qout.png"
                    alt="qout"
                    className="img-fluid mr-2"
                  />
                  @Robertrose
                </h2>
                {/* <p>Thank you, I will include KYC desk</p>
                <p>Thanks ,</p>
                <h4>Regina Cooper, Support Desk</h4> */}
                {quotedMessageValue}
                <div className="qout-bottm-txt">
                  <input
                    autoFocus
                    type="text"
                    value={message}
                    onChange={addMessage}
                    style={{ outline: "none", border: "none" }}
                  />
                </div>
              </div>
            )}
          </div>
          {showTagList && (
            <TagList
              setShowTagList={setShowTagList}
              setNameTag={setNameTag}
              setPrependTag={setPrependTag}
            />
          )}
          <div className="chat-block-btn">
            <span className="btn chat-send-btn">
              <span onClick={sendMessage} className="chat-send-btn-lft">
                Send
              </span>
              <span className="chat-send-btn-right">
                <img src="/images/timed.png" alt="time" className="img-fluid" />
              </span>
            </span>
            <div className="chat-attached">
              <a href="#">
                <img
                  src="/images/hattachment.png"
                  alt="hattachment"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTextArea;
