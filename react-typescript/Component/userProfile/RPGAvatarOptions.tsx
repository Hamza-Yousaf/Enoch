import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";
import { RPG_AVATARS_QUERY } from "../../graphql/Queries/rpgAvatars";
import dynamic from "next/dynamic";
const ChooseCardModal = dynamic(() => import("./ChooseCardModal"));
const SelectAvatarFrames = dynamic(() => import("./SelectAvatarFrames"));

export interface AvOptionsProps {
  user: any;
  userImage: any;
  setUserImage: any;
  setShowAvatarEditModal: any;
  userName: any;
  setShowEditProfileForm: any;
}

const RPGAvatarOptions: React.FC<AvOptionsProps> = ({
  user,
  userImage,
  setUserImage,
  setShowAvatarEditModal,
  userName,
  setShowEditProfileForm,
}) => {
  const [avatars, setAvatars] = useState([]);
  const { data, loading, error } = useQuery(RPG_AVATARS_QUERY);
  const [showChooseCardModal, setShowChooseCardModal] = useState(false);

  useEffect(() => {
    if (data) {
      setAvatars(data?.RpgAvatar);
    }
  }, [data]);

  return (
    <div id="RPG-av" className="changeAvImg_tabcontent changeImg-d-block">
      <div className="changeAvImg-innerImg-block">
        <SelectAvatarFrames
          user={user}
          userImage={userImage}
          setUserImage={setUserImage}
        />
        <div className="changeAvImg-innerImg-block-right">
          <ul>
            {avatars?.map((avatar, key) => {
              return (
                <li
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
          setShowAvatarEditModal={setShowAvatarEditModal}
          setShowEditProfileForm={setShowEditProfileForm}
        />
      </div>
    </div>
  );
};

export default RPGAvatarOptions;
