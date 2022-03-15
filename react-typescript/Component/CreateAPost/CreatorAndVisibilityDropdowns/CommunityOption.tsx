import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

interface Props {
  selectedCommunity: any;
  communityIcon: any;
  setTemperalComState: any;
  temperalComState: any;
}

const CommunityOption: React.FC<Props> = ({
  selectedCommunity,
  communityIcon,
  setTemperalComState,
  temperalComState,
}) => {
  const dispatch = useDispatch();
  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  const chooseCommunity = (community: string) => {
    setTemperalComState({
      ...temperalComState,
      selectedCommunityName: selectedCommunity,
      selectedCommunityImage: communityIcon,
      whoCanSeePost: selectedCommunity,
    });
  };

  return (
    <li onClick={() => chooseCommunity(selectedCommunity)}>
      <div className="post-visible-left align-items-center">
        <div className="post-seclComm-img mr-2">
          <img src={communityIcon} className="img-fluid" alt="pic" />
        </div>
        <div>
          <h3>{selectedCommunity}</h3>
        </div>
      </div>
      <div className="post-visible-right">
        <div className="post-visible-options-sel">
          <input
            id="user-v11"
            name="b-plan"
            type="radio"
            checked={temperalComState.whoCanSeePost === selectedCommunity}
          />
          <label htmlFor="user-v11"></label>
        </div>
      </div>
    </li>
  );
};

export default CommunityOption;
