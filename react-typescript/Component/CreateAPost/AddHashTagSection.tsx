import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

interface Props {
  formState: any;
  setFormState: any;
}

const AddHashTagSection: React.FC<Props> = ({ formState, setFormState }) => {
  const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

  console.log("postText", createPostState.postText);

  const addHashTag = () => {
    if (formState) {
      console.log("form state", formState);
      setFormState({ ...formState, text: formState.text + " " + "#" });
      setCreatePostState({ ...createPostState, justAddedHashTag: true });
    } else if (!formState && createPostState.postText.length < 1) {
      setCreatePostState({
        ...createPostState,
        postText: createPostState.postText + "#",
      });
    } else {
      console.log("postText", createPostState.postText);
      let text = createPostState.postText;

      text = text.replace(new RegExp("</p>" + "$"), "");

      text = text + " " + "#";

      text = text + "</p>";

      console.log("postText", text);

      setCreatePostState({
        ...createPostState,
        postText: text,
        justAddedHashTag: true,
      });
    }
  };
  return (
    <p
      style={{ cursor: "pointer" }}
      onClick={addHashTag}
      className="addhash-txt mt-4"
    >
      Add hashtag
    </p>
  );
};

export default AddHashTagSection;
