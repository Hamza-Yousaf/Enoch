import React, { useState } from "react";

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PostSectionTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="dApp-Posts-tab-heading tab">
      <button
        onClick={() => {
          setActiveTab("posts");
        }}
        className={
          activeTab === "posts"
            ? "tablinks dApp-Posts-tablinks active"
            : "tablinks dApp-Posts-tablinks "
        }
        id="defaultOpen"
      >
        Posts<div className="dApp-Posts-tab-underline"></div>
      </button>

      <button
        onClick={() => {
          setActiveTab("post and replies");
        }}
        className={
          activeTab === "post and replies"
            ? "tablinks dApp-Posts-tablinks active"
            : "tablinks dApp-Posts-tablinks"
        }
      >
        Post and replies <div className="dApp-Posts-tab-underline"></div>
      </button>

      <button
        onClick={() => {
          setActiveTab("media");
        }}
        className={
          activeTab === "media"
            ? "tablinks dApp-Posts-tablinks active"
            : "tablinks dApp-Posts-tablinks "
        }
      >
        Media<div className="dApp-Posts-tab-underline"></div>
      </button>

      <button
        onClick={() => {
          setActiveTab("links");
        }}
        className={
          activeTab === "links"
            ? "tablinks dApp-Posts-tablinks active"
            : "tablinks dApp-Posts-tablinks "
        }
      >
        Likes<div className="dApp-Posts-tab-underline"></div>
      </button>
    </div>
  );
};

export default PostSectionTabs;
