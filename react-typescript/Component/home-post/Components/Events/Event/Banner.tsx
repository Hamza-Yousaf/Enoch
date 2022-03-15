import React from "react";

interface Props {
  setBackground: (bg: string) => void;
  backgroundImg: string;
  backgroundImage: string;
  setShowComponentBanner: any;
  setBgToSet: any;
  setBackgroundBanner: any;
}

const Banner: React.FC<Props> = ({
  setBackground,
  backgroundImg,
  backgroundImage,
  setShowComponentBanner,
  setBgToSet,
  setBackgroundBanner,
}) => {
  return (
    <li
      onClick={() => {
        // setBackground(backgroundImg);
        setBackgroundBanner(backgroundImg);
        setBgToSet(backgroundImg);
        setShowComponentBanner(true);
      }}
      className={
        backgroundImage === backgroundImg
          ? "community-imgGal-active imageSelected"
          : "community-imgGal-active"
      }
    >
      <img src={backgroundImg} className="img-fluid" alt="community" />
      <div className="community-imgGal-selected">
        <img
          src="/images/imageCheck.png"
          className="img-fluid"
          alt="community"
        />
      </div>
    </li>
  );
};

export default Banner;
