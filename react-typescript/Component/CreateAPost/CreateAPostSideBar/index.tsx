import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const SideBar = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  return (
    <div className="posting-steps-block-right">
      {createPostState.selectedCommunityName.length > 0 && (
        <div className="posting-steps-spooky">
          <div className="posting-steps-spooky-hd">
            <span>
              <img
                src={createPostState.selectedCommunityImage}
                className="img-fluid"
                alt="spooky"
              />
            </span>
            {createPostState.selectedCommunityName}
          </div>
          <div className="posting-steps-spooky-content">
            Spooky utilizes the Fantom network to deliver top speed, security,
            and scalable transactions. Your swaps will cost a fraction of a
            penny.
          </div>
          <div className="posting-steps-membrs-online">
            <div className="posting-steps-membrs-online-lft">
              <h3>Members</h3>
              <p>3.2m</p>
            </div>
            <div className="posting-steps-membrs-online-right">
              <h3>Online</h3>
              <p>5.7k</p>
            </div>
          </div>
          <div className="posting-steps-created">
            <span>
              <img
                src="/images/Birthday.png"
                className="img-fluid"
                alt="Birthday"
              />
            </span>
            Created on 10 july 2021
          </div>
          <div className="posting-steps-tribe-dropbox dropdown">
            <a
              href="#!"
              id="tribe-dropbox-list-input"
              className="posting-step-tribe-box"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community Options
            </a>
            <div
              id="tribe-dropbox-list"
              className="dropdown-menu posting-steps-tribe-dropbox-list"
            >
              <ul>
                <li>Community Options</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="posting-steps-block-list">
        <h2>Posting on Enoch</h2>
        <ul>
          <li>1. Remember the human</li>
          <li>2. Behave like you would in real life</li>
          <li>3. Look for the original source of content</li>
          <li>4. Search for duplicates before posting</li>
          <li>5. Read the community’s rules</li>
        </ul>
      </div>
      <p>
        Please be mindful of Enoch's <a href="#!">content policy</a> and
        practice good reddiquette.
      </p>
    </div>
  );
};

export default SideBar;
