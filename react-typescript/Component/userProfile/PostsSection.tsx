//@ts-nocheck
import React, { useState } from "react";
import dynamic from "next/dynamic";
const LinksFeeds = dynamic(() => import("./LinksFeeds"));
const MediaFeeds = dynamic(() => import("./MediaFeeds"));
const PostFeeds = dynamic(() => import("./PostFeeds"));
const PostFeedsWithReplies = dynamic(() => import("./PostFeedsWithReplies"));
const PostSectionTabs = dynamic(() => import("./PostSectionTabs"));

interface Props {
  userId: string;
}

const PostsSection: React.FC<Props> = ({ userId }) => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="dApp-Posts-tab-sect">
      <div className="dApp-Posts-tabs">
        <PostSectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "posts" && <PostFeeds userId={userId} />}

        {activeTab === "post and replies" && <PostFeedsWithReplies />}

        {activeTab === "media" && <MediaFeeds />}

        {activeTab === "links" && <LinksFeeds />}
      </div>
    </div>
  );
};

export default PostsSection;
