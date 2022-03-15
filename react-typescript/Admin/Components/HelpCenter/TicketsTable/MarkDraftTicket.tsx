import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";

interface Props {
  read: boolean;
  currentTab: string;
  subID: string;
}

const MarkDraftTicket: React.FC<Props> = ({ read, currentTab, subID }) => {
  const markAllDraft = useSelector(
    (state: State) => state.markAllDraft["markAllDraft"]
  );
  const likeAllInDraft = useSelector((state: State) => state.likeAllInDraft);
  const [check, setCheck] = useState(false);
  const [liked, setLiked] = useState(false);

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const dispatch = useDispatch();
  const { addToDraftDeleteList } = bindActionCreators(actionCreators, dispatch);

  const handleCheck = () => {
    if (check === false) {
      setCheck(true);
      addToDraftDeleteList([subID]);
    } else if (check === true) {
      setCheck(false);
      addToDraftDeleteList([subID]);
    }
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    setCheck(markAllDraft);
  }, [markAllDraft]);

  useEffect(() => {
    setLiked(likeAllInDraft);
  }, [likeAllInDraft]);

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

export default MarkDraftTicket;
