//@ts-nocheck
import React, { useState } from "react";
import dynamic from "next/dynamic";
const FeedsSection = dynamic(() => import("./FeedsSection"));
const LeftSideBar = dynamic(
  () => import("../../../../Component/onBoard/left-sidebar")
);
const RightSideBar = dynamic(() => import("./RightSideBar"));
const FollowSection = dynamic(
  () => import("../../../FollowShowMore/Components/MainSection/FollowSection")
);
const VisibilitySection = dynamic(() => import("../VisibilitySection"));

interface Props {
  showSavedPostModal: boolean;
  setShowSavedPostModal: any;
  showCopiedAlert: boolean;
  setShowCopiedAlert: any;
  showEmbedPostModal: boolean;
  setShowEmbedPostModal: any;
  postState: any;
  setPostState: any;
  blockedPosts: any;
}

const MainSection: React.FC<Props> = ({
  showSavedPostModal,
  setShowSavedPostModal,
  showCopiedAlert,
  setShowCopiedAlert,
  setShowEmbedPostModal,
  showEmbedPostModal,
  postState,
  setPostState,
  blockedPosts,
}) => {
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  console.log("post state", postState);

  return (
    <>
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="dApp-S-Home-body">
            {!postState?.showVisibilitySection && (
              <div className="home-post-block">
                <LeftSideBar />
                {!showMoreSuggestions ? (
                  <FeedsSection
                    showSavedPostModal={showSavedPostModal}
                    setShowSavedPostModal={setShowSavedPostModal}
                    showCopiedAlert={showCopiedAlert}
                    setShowCopiedAlert={setShowCopiedAlert}
                    setShowEmbedPostModal={setShowEmbedPostModal}
                    postState={postState}
                    setPostState={setPostState}
                    blockedPosts={blockedPosts}
                  />
                ) : (
                  <FollowSection
                    setShowMoreSuggestions={setShowMoreSuggestions}
                  />
                )}
                <RightSideBar setShowMoreSuggestions={setShowMoreSuggestions} />
              </div>
            )}

            <VisibilitySection
              postState={postState}
              setPostState={setPostState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
