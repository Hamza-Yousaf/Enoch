import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";

interface UserProps {
  user: any;
  userImage: any;
  setUserImage: any;
}

const SelectAvatarFrames: React.FC<UserProps> = ({
  user,
  userImage,
  setUserImage,
}) => {
  const [avatarCard, setAvatarCard] = useState("3");

  console.log(userImage);
  useEffect(() => {
    if (!userImage) setUserImage(user?.profileImage);
  }, [user]);

  useEffect(() => {
    if (user) {
      setAvatarCard(user?.cardAvatar);
    }
  }, [user]);

  return (
    <div className="userchangeAvImg-innerImg-block-lft">
      <div className="userchangeAvImg-inner-block">
        <div className="userchangeAvImg-overFrame">
          <img
            src={
              avatarCard === "1"
                ? "images/use-ava-img.png"
                : avatarCard === "2"
                ? "images/use-ava-img2.png"
                : "images/use-ava-img3.png"
            }
            className="img-fluid"
            alt="avatar"
          />
        </div>
        <span
          className={`userchangeAvImg-avatr ${
            user?.cardAvatar === "1"
              ? "userchangeAvImg-card3-img"
              : user?.cardAvatar === "2"
              ? "userchangeAvImg-card1-img"
              : "userchangeAvImg-card2-img"
          }`}
        >
          <img
            src={userImage || "images/user-Av4.png"}
            className="img-fluid"
            alt="avatar"
          />
        </span>
      </div>
    </div>
  );
};

export default SelectAvatarFrames;
