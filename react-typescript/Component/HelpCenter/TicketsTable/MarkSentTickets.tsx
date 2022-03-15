import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, actionCreators } from "../../../state";
import { bindActionCreators } from "redux";

interface Props {
  read: boolean;
  currentTab: string;
  subID: string;
}

const MarkSentTicket: React.FC<Props> = ({ read, currentTab, subID }) => {
  const markAllSent = useSelector(
    (state: State) => state.markAllSent["markAllSent"]
  );
  const likeAllInSent = useSelector((state: State) => state.likeAllInSent);
  const [check, setCheck] = useState(false);
  const [liked, setLiked] = useState(false);

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const sentDeleteList = useSelector((state: State) => state.sentDeleteList);

  const dispatch = useDispatch();
  const { addToSentDeleteList, likeAllInInbox } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleCheck = () => {
    if (check === false) {
      setCheck(true);
      addToSentDeleteList([subID]);
    } else if (check === true) {
      setCheck(false);
      addToSentDeleteList([subID]);
    }
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    setCheck(markAllSent);
  }, [markAllSent]);

  useEffect(() => {
    setLiked(likeAllInSent);
  }, [likeAllInSent]);

  return (
    <div className="helpCenter-select pl-4">
      <div className="filterfancycheckbox">
        <label className="filtercheck_container">
          <input
            onChange={handleCheck}
            type="checkbox"
            checked={check}
            name="foo"
            className="cbox"
          />
          <span className="filtercheckmark"></span>
        </label>
      </div>
      <div
        onClick={toggleLiked}
        className={liked ? "helpCenter-star start-color" : "helpCenter-star "}
      >
        <i className="fa fa-star-o ratingstart" aria-hidden="true"></i>
        <i className="fa fa-star ratingstart2" aria-hidden="true"></i>
      </div>
      {messageTab === "INBOX" ? (
        <div className="helpCenter-mailbox">
          <img
            src={!read ? "images/readmail.png" : "images/hlpmail.png"}
            alt="icon"
            className="img-fluid"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MarkSentTicket;
