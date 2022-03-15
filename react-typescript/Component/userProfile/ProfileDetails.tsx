import { Spin } from "antd";
import React from "react";
import { userBirthday, userJoinedDate } from "./EditProfileSection";

interface Props {
  loading: boolean;
  user: any;
  showEditProfileForm: any;
}

const ProfileDetails: React.FC<Props> = ({
  loading,
  user,
  showEditProfileForm,
}) => {
  return (
    <div className="onbording-new-userSect d-none-actiive">
      <div className="onbording-new-userSect-hd">
        <h3>{"@" + user?.userName}</h3>
        <p>{user?.bio}</p>
      </div>
      <div className="onbording-new-userSect-info">
        <ul>
          <li className="mr-18">
            <span>
              <img src="/images/userPin.png" alt="icon" className="img-fluid" />
            </span>
            {user?.country && user?.country}
            {!user?.country && "Not Available"}
          </li>
          <li className="deactive">
            <span>
              <img
                src="/images/userGlobe.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            Not available
          </li>
          <li>
            <span>
              <img
                src="/images/userCalendar.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            Joined {userJoinedDate(user?.createdAt)}
          </li>
          <li className="deactiv mr-18">
            <span>
              <img
                src="/images/userBirthday.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            {userBirthday(user?.dateOfBirth) || "Not Available"}
          </li>
          <li>
            <span>
              <img src="/images/male.png" alt="icon" className="img-fluid" />
            </span>
            {user?.gender || "Not Available"}
          </li>
          <li>
            <span>
              <img
                src="/images/commited.png"
                alt="icon"
                className="img-fluid"
              />
            </span>
            {user?.relationShip || "Not Available"}
          </li>
        </ul>
      </div>
      <div className="onbording-new-userSect-followers">
        <ul>
          <li>
            <span>{loading ? <Spin /> : user ? user?.followingCount : ""}</span>{" "}
            Following
          </li>
          <li>
            <span>{loading ? <Spin /> : user ? user?.followerCount : ""}</span>{" "}
            Followers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
