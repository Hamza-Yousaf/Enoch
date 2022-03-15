import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { BG_IMAGES_QUERY } from "../../graphql/Queries/bgImages";
import dynamic from "next/dynamic";
const AlienOptions = dynamic(() => import("./AlienOptions"));
const ApocalypseOptions = dynamic(() => import("./ApocalypseOptions"));
const RPGOptions = dynamic(() => import("./RPGOptions"));

interface Props {
  avatarModalTab: any;
  setAvatarModalTab: any;
  setShowAvatarEditModal: any;
}

const SelectBg: React.FC<Props> = ({
  avatarModalTab,
  setAvatarModalTab,
  setShowAvatarEditModal,
}) => {
  const [currentTab, setCurrentTab] = useState("rpg");
  const [bgImages, setBgImages] = useState([]);

  const { data, loading, error } = useQuery(BG_IMAGES_QUERY);

  useEffect(() => {
    if (data) {
      setBgImages(data?.BGAvatar);
    }
  }, [data]);

  console.log(bgImages);
  return (
    <div
      id="select-bg"
      className={
        avatarModalTab === "bg"
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
                    ? "changeImg-Innertablinks-bg active"
                    : "changeImg-Innertablinks-bg"
                }
              >
                RPG BG
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab("apocalypse")}
                className={
                  currentTab === "apocalypse"
                    ? "changeImg-Innertablinks-bg active"
                    : "changeImg-Innertablinks-bg"
                }
              >
                APOCALYPSE BG
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentTab("alien")}
                className={
                  currentTab === "alien"
                    ? "changeImg-Innertablinks-bg active"
                    : "changeImg-Innertablinks-bg"
                }
              >
                ALIEN BG
              </button>
            </li>
          </ul>
        </div>
        <div className="changeImg-Innertabcontent-block mt-4">
          {currentTab === "rpg" && (
            <RPGOptions
              bgImages={bgImages}
              setShowAvatarEditModal={setShowAvatarEditModal}
            />
          )}
          {currentTab === "apocalypse" && (
            <ApocalypseOptions
              bgImages={bgImages}
              setShowAvatarEditModal={setShowAvatarEditModal}
            />
          )}
          {currentTab === "alien" && (
            <AlienOptions
              bgImages={bgImages}
              setShowAvatarEditModal={setShowAvatarEditModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectBg;
