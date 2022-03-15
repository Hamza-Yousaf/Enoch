import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";

interface Props {
  read: boolean;
  currentTab: string;
  subID: string;
}

const MarkInboxTicket: React.FC<Props> = ({ read, currentTab, subID }) => {
  const markAllInbox = useSelector(
    (state: State) => state.markAllInbox["markAllInbox"]
  );

  const likeAllInInbox = useSelector((state: State) => state.likeAllInInbox);
  const [check, setCheck] = useState(false);
  const [liked, setLiked] = useState(false);

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const dispatch = useDispatch();
  const { addToDeleteList } = bindActionCreators(actionCreators, dispatch);

  const handleCheck = () => {
    if (check === false) {
      setCheck(true);
      addToDeleteList([subID]);
    } else if (check === true) {
      setCheck(false);
      addToDeleteList([subID]);
    }
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    setCheck(markAllInbox);
  }, [markAllInbox]);

  useEffect(() => {
    setLiked(likeAllInInbox);
  }, [likeAllInInbox]);

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
            src={!read ? "/images/readmail.png" : "/images/hlpmail.png"}
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

export default MarkInboxTicket;
