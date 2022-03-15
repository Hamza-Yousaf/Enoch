import React from "react";

interface Props {
  createPostState: any;
  formState: any;
  icon: any;
  setFormState: any;
  setCreatePostState: any;
  selectedOption: any;
}

const PostToOption: React.FC<Props> = ({
  createPostState,
  formState,
  icon,
  setCreatePostState,
  setFormState,
  selectedOption,
}) => {
  console.log("fstate sel", selectedOption);
  return (
    <li
      onClick={() => {
        setFormState({
          ...formState,
          postTo: selectedOption,
          showPostToDropdown: false,
        });
      }}
    >
      <span>
        <img
          style={{ width: 40, height: 40 }}
          src={icon}
          alt="img"
          className="img-fluid"
        />
      </span>
      <h6>{selectedOption}</h6>
    </li>
  );
};

export default PostToOption;
