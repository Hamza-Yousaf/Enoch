import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const AlienAvatarOptions = dynamic(() => import("./AlienAvatarOptions"));
const ApocalypseAvatarOptions = dynamic(() => import("./ApocalypseAvatarOptions"));
const RPGAvatarOptions = dynamic(() => import("./RPGAvatarOptions"));

interface Props {
  avatarModalTab: any;
  setAvatarModalTab: any;
  user: any;
  setShowAvatarEditModal: any;
  userName: any;
  setShowEditProfileForm: any;
}

const SelectAvatar: React.FC<Props> = ({
  avatarModalTab,
  setAvatarModalTab,
  user,
  setShowAvatarEditModal,
  userName,
  setShowEditProfileForm,
}) => {
  const [currentTab, setCurrentTab] = useState("rpg");
  const [userImage, setUserImage] = useState(user?.profileImage);

  console.log(user);

  return (
    <div
      id="select-av"
      className={
        avatarModalTab === "avatar"
          ? "changeImg_tabcontent changeImg-d-block"
          : "changeImg_tabcontent "
      }
    >
      <div className="changeImg-Innertab-block">
        <div className="changeImg-InnertabLink-block">
          <ul>
            <li>
              <button
                onClick={() => setCurrentTab("rpg")}
                className={
                  currentTab === "rpg"
                    ? "changeImg-Innertablinks-av active"
                    : "changeImg-Innertablinks-av"
                }
              >
                RPG AVATAR
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab("apocalypse")}
                className={
                  currentTab === "apocalypse"
                    ? "changeImg-Innertablinks-av active"
                    : "changeImg-Innertablinks-av"
                }
              >
                APOCALYPSE AVATAR
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab("alien")}
                className={
                  currentTab === "alien"
                    ? "changeImg-Innertablinks-av active"
                    : "changeImg-Innertablinks-av"
                }
              >
                ALIEN AVATAR
              </button>
            </li>
          </ul>
        </div>
        <div className="changeImg-Innertabcontent-block">
          {currentTab === "rpg" && (
            <RPGAvatarOptions
              user={user}
              userImage={userImage}
              setUserImage={setUserImage}
              setShowAvatarEditModal={setShowAvatarEditModal}
              userName={userName}
              setShowEditProfileForm={setShowEditProfileForm}
            />
          )}
          {currentTab === "apocalypse" && (
            <ApocalypseAvatarOptions
              user={user}
              userImage={userImage}
              setUserImage={setUserImage}
              userName={userName}
              setShowAvatarEditModal={setShowAvatarEditModal}
              setShowEditProfileForm={setShowEditProfileForm}
            />
          )}
          {currentTab === "alien" && (
            <AlienAvatarOptions
              user={user}
              userImage={userImage}
              setUserImage={setUserImage}
              userName={userName}
              setShowAvatarEditModal={setShowAvatarEditModal}
              setShowEditProfileForm={setShowEditProfileForm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectAvatar;
