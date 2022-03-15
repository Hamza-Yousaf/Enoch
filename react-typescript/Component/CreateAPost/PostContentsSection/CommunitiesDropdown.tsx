import React from "react";
import dynamic from "next/dynamic";
const PostToOption = dynamic(() => import("./PostToOption"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

interface Props {
  formState: any;
  setFormState: any;
}

const CommunitiesDropdown: React.FC<Props> = ({ formState, setFormState }) => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );
  const togglePostToDropdown = (e: any) => {
    console.log("event", e);
    if (
      e.target.className === "upload-img-post-to-dropdown-box" ||
      e.target.parentElement.className === "upload-img-post-to-dropdown-box"
    ) {
      setFormState({
        ...formState,
        showPostToDropdown: !formState.showPostToDropdown,
      });
    }
  };

  return (
    <div id="postToDropdown" className="upload-img-post-to-sect">
      <h4>Posts to</h4>
      <div
        className="upload-img-post-to-dropdown-box"
        onClick={(e) => {
          togglePostToDropdown(e);
        }}
      >
        <h5>{formState?.postTo}</h5>
        <div
          className="upload-img-post-to-dropdown-box-list"
          style={
            formState.showPostToDropdown
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <ul>
            <PostToOption
              createPostState={createPostState}
              formState={formState}
              icon="images/post-to-profile-dp.png"
              setFormState={setFormState}
              setCreatePostState={setCreatePostState}
              selectedOption="DeFi Signal"
            />

            <PostToOption
              createPostState={createPostState}
              formState={formState}
              icon="/images/select-com4.png"
              setFormState={setFormState}
              setCreatePostState={setCreatePostState}
              selectedOption="Spooky Swap"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesDropdown;
