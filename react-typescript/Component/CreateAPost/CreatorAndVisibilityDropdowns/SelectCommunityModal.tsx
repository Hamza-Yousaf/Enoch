import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import dynamic from "next/dynamic";
const CommunityOption = dynamic(() => import("./CommunityOption"));

const SelectCommunityModal = () => {
  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
  const [temperalComState, setTemperalComState] = useState({
    whoCanSeePost: "",
    selectedCommunityName: "",
    selectedCommunityImage: "",
  });

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const save = () => {
    setCreatePostState({
      ...createPostState,
      whoCanSeePost: temperalComState.whoCanSeePost,
      selectedCommunityName: temperalComState.selectedCommunityName,
      selectedCommunityImage: temperalComState.selectedCommunityImage,
      isCommunitiesModalOpen: false,
    });
  };

  const back = () => {
    setCreatePostState({
      ...createPostState,
      isCommunitiesModalOpen: false,
    });
  };
  const toggleDropdown = () => {
    setCreatePostState({
      ...createPostState,
      isCommunitiesModalOpen: !createPostState?.isCommunitiesModalOpen,
    });
  };
  return (
    <div
      id="select-community-modal"
      className={
        createPostState?.isCommunitiesModalOpen
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
        <h2>Select a Community</h2>
        <p className="mb-4">
          Only visible to members of this community and will appear on community
          page
        </p>
        <div className="post-visible-modal-list">
          <ul>
            <CommunityOption
              selectedCommunity="Ethereum Development and DApps"
              communityIcon={"/images/select-com1.png"}
              setTemperalComState={setTemperalComState}
              temperalComState={temperalComState}
            />

            <CommunityOption
              selectedCommunity="Ethereum"
              communityIcon={"/images/select-com2.png"}
              setTemperalComState={setTemperalComState}
              temperalComState={temperalComState}
            />

            <CommunityOption
              selectedCommunity="Citizen Finance"
              communityIcon={"/images/select-com3.png"}
              setTemperalComState={setTemperalComState}
              temperalComState={temperalComState}
            />
            <CommunityOption
              selectedCommunity="Spooky Swap"
              communityIcon={"/images/select-com4.png"}
              setTemperalComState={setTemperalComState}
              temperalComState={temperalComState}
            />
          </ul>
          <div className="post-visible-buttn-grp">
            <span className="mr-2">
              <a onClick={back} href="#!" className="btn post-visible-back-btn">
                Back
              </a>
            </span>
            <span>
              <a
                href="#!"
                id="post-save-btn"
                className="btn post-visible-save-btn"
                onClick={save}
              >
                save
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCommunityModal;
