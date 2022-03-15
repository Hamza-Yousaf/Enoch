import React from "react";
import { useRouter } from "next/router";
import { truncateString } from "../Events/Manage/EventManageCard";
import { format } from "date-fns";
import dynamic from "next/dynamic";
const FeedDropdown = dynamic(() => import("./FeedDropdown"));

export interface PostProps {
  post: any;
  openPostOptions: any;
  setOpenPostOptions: any;
  togglePostOptions: any;
  saveAPost: any;
  copyToClipBoard: any;
  setShowCopiedAlert: any;
  setPostState: any;
  user: any;
  toggleFollowUser: any;
  muteUser: any;
  postState: any;
}

const FeedHeader: React.FC<PostProps> = ({
  post,
  openPostOptions,
  setOpenPostOptions,
  togglePostOptions,
  copyToClipBoard,
  muteUser,
  saveAPost,
  setPostState,
  setShowCopiedAlert,
  toggleFollowUser,
  user,
  postState,
}) => {
  const router = useRouter();

  const datePosted = () => {
    if (post?.createdAt) {
      return ` ${format(new Date(post?.createdAt), "LLLL")} ${format(
        new Date(post?.createdAt),
        "d"
      )}`;
    }
  };
  return (
    <div className="dApp-status-heading">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.push(`/user/${post?.user?.id}`);
        }}
        className="dApp-status-heading-profile-pic"
      >
        <img
          src={post?.user?.profileImage}
          alt="DP"
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="dApp-status-heading-text">
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push(`/user/${post?.user?.id}`);
          }}
        >
          {post?.user?.userName}
        </h1>
        <h2> {truncateString(post?.user?.bio, 85)}</h2>
        <h3>
          <span>
            <img src="/images/Clock.png" alt="icon" className="img-fluid" />
          </span>
          {datePosted()}
        </h3>
      </div>
      <FeedDropdown
        openPostOptions={openPostOptions}
        setOpenPostOptions={setOpenPostOptions}
        post={post}
        togglePostOptions={togglePostOptions}
        saveAPost={saveAPost}
        copyToClipBoard={copyToClipBoard}
        setShowCopiedAlert={setShowCopiedAlert}
        setPostState={setPostState}
        user={user}
        toggleFollowUser={toggleFollowUser}
        muteUser={muteUser}
        postState={postState}
      />
    </div>
  );
};

export default FeedHeader;
