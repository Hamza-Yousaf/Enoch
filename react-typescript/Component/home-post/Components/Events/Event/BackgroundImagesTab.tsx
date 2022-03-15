import React from "react";

interface Props {
  setCurrentBackgroundsTab: any;
  currentBackgroundsTab: string;
}

const BackgroundImagesTab: React.FC<Props> = ({
  setCurrentBackgroundsTab,
  currentBackgroundsTab,
}) => {
  return (
    <div className="community-modal-tab">
      <ul className="imgGalTab">
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("popular");
            }}
            className={
              currentBackgroundsTab === "popular"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            Popular
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("sports");
            }}
            className={
              currentBackgroundsTab === "sports"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            Sports
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("games");
            }}
            className={
              currentBackgroundsTab === "games"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            GAMES
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("blockchain");
            }}
            className={
              currentBackgroundsTab === "blockchain"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            Blockchain
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("IT");
            }}
            className={
              currentBackgroundsTab === "IT"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            IT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("finance");
            }}
            className={
              currentBackgroundsTab === "finance"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            Finance
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentBackgroundsTab("fashion");
            }}
            className={
              currentBackgroundsTab === "fashion"
                ? "imgGallinks active"
                : "imgGallinks"
            }
          >
            Fashion
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BackgroundImagesTab;
