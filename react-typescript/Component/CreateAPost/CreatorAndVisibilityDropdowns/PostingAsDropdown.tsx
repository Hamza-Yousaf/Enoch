import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const PostingAsDropDown = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const toggleDropdown = () => {
    setCreatePostState({
      ...createPostState,
      isPostingAsDropdownOpen: !createPostState?.isPostingAsDropdownOpen,
    });
  };

  const setPostingAs = (postingAs: any) => {
    setCreatePostState({
      ...createPostState,
      postingAs,
      isPostingAsDropdownOpen: false,
    });
  };

  return (
    <div className="posting-steps-dropbox">
      <a
        onClick={toggleDropdown}
        href="#!"
        className="posting-steps-dropbox-input"
      >
        <span>
          <img src="/images/postInfo.png" className="img-fluid" alt="icon" />
        </span>
        {createPostState?.postingAs}
      </a>
      <div className="post-user-modal-block">
        <div
          id="post-user-modal"
          className={
            createPostState?.isPostingAsDropdownOpen
              ? "modal fade open"
              : "modal fade"
          }
        >
          {/* <!-- Modal content --> */}
          <div className="modal-content post-user-modal-content">
            <span onClick={toggleDropdown} className="close">
              <img
                src="/images/post-close.png"
                alt="close"
                className="img-fluid"
                data-dismiss="modal"
              />
            </span>
            <h2>Posting as a</h2>
            <div className="post-user-modal-list">
              <ul>
                <li
                  onClick={() => {
                    setPostingAs(createPostState?.userName);
                  }}
                >
                  <span>
                    <img
                      src={createPostState?.userProfileImage}
                      className="img-fluid"
                      alt="pic"
                    />
                  </span>
                  {createPostState?.userName}
                </li>
                <li
                  onClick={() => {
                    setPostingAs(createPostState?.usersCommunity);
                  }}
                >
                  <span>
                    <img
                      src="/images/community-icon4.png"
                      className="img-fluid"
                      alt="pic"
                    />
                  </span>
                  {createPostState?.usersCommunity}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingAsDropDown;
