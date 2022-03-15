import React from "react";
import dynamic from "next/dynamic";
const PostingAsDropDown = dynamic(() => import("./PostingAsDropdown"));
const WhoCanSeePostDropdown = dynamic(() => import("./WhoCanSeePostDropdown"));

const CreatorAndVisibilityDropdowns = () => {
  return (
    <div className="posting-steps-dropbox-block">
      <PostingAsDropDown />
      <WhoCanSeePostDropdown />
    </div>
  );
};

export default CreatorAndVisibilityDropdowns;
