import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { SET_BACKGROUND_MUTATION } from "../../graphql/mutattions/setBackground";
import { GET_USER_PROFILE_QUERY } from "../../graphql/queries";

export interface BgImagerops {
  bgImages: any;
  setShowAvatarEditModal: any;
}

const RPGOptions: React.FC<BgImagerops> = ({
  bgImages,
  setShowAvatarEditModal,
}) => {
  const [setBackground, { data, loading, error }] = useMutation(
    SET_BACKGROUND_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_USER_PROFILE_QUERY,
        },
      ],
    }
  );

  const setUserProfileBackground = (image: string) => {
    setShowAvatarEditModal(false);
    setBackground({
      variables: {
        addAvatar: image,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="RPG-bg" className="changebgImg_tabcontent changeImg-d-block">
      <div className="changeImg-bg-block">
        <ul>
          {bgImages?.map((image: any, key: any) => {
            return (
              <li
                key={key}
                onClick={() => {
                  setUserProfileBackground(image?.bgRpgSrc);
                }}
              >
                <img src={image?.bgRpgSrc} className="img-fluid" alt="avatar" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RPGOptions;
