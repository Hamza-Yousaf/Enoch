import React from "react";

interface Props {
  setWhoCanSeePost: any;
  createPostState: any;
  optionSelected: any;
  optionDetail: any;
  icon: any;
}

const WhoCanSeePostOption: React.FC<Props> = ({
  setWhoCanSeePost,
  createPostState,
  optionSelected,
  optionDetail,
  icon,
}) => {
  return (
    <li onClick={() => setWhoCanSeePost(optionSelected)}>
      <div className="post-visible-left">
        <div className="mr-2">
          <img src={icon} className="img-fluid" alt="pic" />
        </div>
        <div>
          <h3>
            {optionSelected === "Community" ? "Community >" : optionSelected}
          </h3>
          <p>{optionDetail}</p>
        </div>
      </div>
      <div className="post-visible-right">
        <div className="post-visible-options-sel">
          <input
            id="user-v21"
            name="b-plan"
            type="radio"
            checked={createPostState?.whoCanSeePost === optionSelected}
          />
          <label htmlFor="user-v21"></label>
        </div>
      </div>
    </li>
  );
};

export default WhoCanSeePostOption;
