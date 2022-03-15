import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ALIEN_AVATARS_QUERY } from "../../graphql/Queries/aliensAvatar";
import { RPG_AVATARS_QUERY } from "../../graphql/Queries/rpgAvatars";
import dynamic from "next/dynamic";
const ChooseCardModal = dynamic(() => import("./ChooseCardModal"));
import { AvOptionsProps } from "./RPGAvatarOptions";
import { BgImagerops } from "./RPGOptions";
const SelectAvatarFrames = dynamic(() => import("./SelectAvatarFrames"));

const AlienAvatarOptions: React.FC<AvOptionsProps> = ({
  setUserImage,
  user,
  userImage,
  userName,
  setShowEditProfileForm,
  setShowAvatarEditModal,
}) => {
  const [avatars, setAvatars] = useState([]);
  const { data, loading, error } = useQuery(ALIEN_AVATARS_QUERY);
  const [showChooseCardModal, setShowChooseCardModal] = useState(false);

  useEffect(() => {
    if (data) {
      setAvatars(data?.AliensAvatar);
    }
  }, [data]);
  return (
    <div id="ALIEN-av" className="changeAvImg_tabcontent changeImg-d-block">
      <div className="changeAvImg-innerImg-block">
        <SelectAvatarFrames
          user={user}
          userImage={userImage}
          setUserImage={setUserImage}
        />
        <div className="changeAvImg-innerImg-block-right">
          {/* <!-- <img src="/images/user-av-imgBlock.png" className="img-fluid" alt="avatar"/> --> */}
          <ul>
            {avatars?.map((avatar, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    setUserImage(avatar?.userprofileavatar);
                    setShowChooseCardModal(true);
                  }}
                >
                  <img
                    src={avatar?.userprofileavatar}
                    className="img-fluid"
                    alt="avatar"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <ChooseCardModal
          showChooseCardModal={showChooseCardModal}
          setShowChooseCardModal={setShowChooseCardModal}
          user={user}
          userImage={userImage}
          userName={userName}
          setShowEditProfileForm={setShowEditProfileForm}
          setShowAvatarEditModal={setShowAvatarEditModal}
        />
      </div>
    </div>
  );
};

export default AlienAvatarOptions;
