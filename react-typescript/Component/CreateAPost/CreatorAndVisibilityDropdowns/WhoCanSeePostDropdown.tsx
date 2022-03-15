import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import dynamic from "next/dynamic";
const SelectCommunityModal = dynamic(() => import("./SelectCommunityModal"));
const WhoCanSeePostOption = dynamic(() => import("./WhoCanSeePostOption"));

const WhoCanSeePostDropdown = () => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  const toggleDropdown = () => {
    setCreatePostState({
      ...createPostState,
      isWhoCanSeeDropdownOpen: !createPostState?.isWhoCanSeeDropdownOpen,
    });
  };

  const setWhoCanSeePost = (whoCanSeePost: string) => {
    if (whoCanSeePost !== "Community") {
      setCreatePostState({
        ...createPostState,
        whoCanSeePost,
        isWhoCanSeeDropdownOpen: false,
        selectedCommunityName: "",
        selectedCommunityImage: "",
      });
    } else {
      setCreatePostState({
        ...createPostState,
        isWhoCanSeeDropdownOpen: false,
        isCommunitiesModalOpen: true,
        selectedCommunityName: "",
        selectedCommunityImage: "",
      });
    }
  };
  return (
    <div className="posting-steps-dropbox">
      <a
        onClick={toggleDropdown}
        href="#!"
        className="posting-steps-dropbox-input"
      >
        <span>
          <img src="/images/Globe2.png" className="img-fluid" alt="icon" />
        </span>
        {createPostState?.whoCanSeePost}
      </a>
      <div className="post-user-modal-block">
        <div
          id="post-user-modal2"
          className={
            createPostState?.isWhoCanSeeDropdownOpen
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
            <h2>Who can see your post?</h2>
            <p className="mb-4">
              Your post will be visible on feed, on your profile and in search
              results
            </p>
            <div className="post-visible-modal-list">
              <ul>
                <WhoCanSeePostOption
                  optionSelected="Anyone"
                  setWhoCanSeePost={setWhoCanSeePost}
                  createPostState={createPostState}
                  optionDetail="Anyone on or off Enoch"
                  icon="/images/Globe2.png"
                />
                <WhoCanSeePostOption
                  optionSelected="Anyone + Twitter"
                  setWhoCanSeePost={setWhoCanSeePost}
                  createPostState={createPostState}
                  optionDetail="Anyone on or off Linkdien; post to Twitter"
                  icon="/images/Globe2.png"
                />

                <WhoCanSeePostOption
                  optionSelected="Followers Only"
                  setWhoCanSeePost={setWhoCanSeePost}
                  createPostState={createPostState}
                  optionDetail="Followers on Enoch"
                  icon="/images/who-see.png"
                />

                <WhoCanSeePostOption
                  optionSelected="Community"
                  setWhoCanSeePost={setWhoCanSeePost}
                  createPostState={createPostState}
                  optionDetail="Select a Community you are in"
                  icon="/images/who-coomunity.png"
                />
              </ul>
            </div>
          </div>
        </div>
        <SelectCommunityModal />
      </div>
    </div>
  );
};

export default WhoCanSeePostDropdown;
