import React from "react";

interface Props {
  setNameTag: React.Dispatch<React.SetStateAction<string>>;
  setPrependTag: any;
  setShowTagList: any;
}

const TagList: React.FC<Props> = ({
  setNameTag,
  setPrependTag,
  setShowTagList,
}) => {
  const addTagToMessage = () => {
    setShowTagList(false);
    setNameTag("@JackWilliams");
    setPrependTag(true);
  };
  return (
    <div
      id="onkeypress-textareaList"
      className="timeSetting-content custm-zindex-1 show"
    >
      <ul className="setting-form-drop-scrollable">
        <li onClick={addTagToMessage}>
          <div className="user-dp">
            <img
              src="images/user-ReginaCooper.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="share-ticket-user-name">
              <h5>
                Regina Cooper<span>,</span>
              </h5>
              <h6>Support Desk</h6>
            </div>
          </div>
        </li>

        <li onClick={addTagToMessage} className="last-list">
          <div className="user-dp">
            <img
              src="images/user-JackWilliams.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="share-ticket-user-name">
              <h5>
                Jack WIlliam<span>,</span>
              </h5>
              <h6>KYC desk</h6>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TagList;
