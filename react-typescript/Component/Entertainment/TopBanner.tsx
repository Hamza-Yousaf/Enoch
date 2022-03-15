import React from "react";
import { subMenuProps } from "./MainSection";

const TopBanner: React.FC<subMenuProps> = ({
  current_entertainment_sub_menu_value,
}) => {
  return (
    <div className="enoch-entertainment-header-banner">
      {current_entertainment_sub_menu_value === "bonuses" && (
        <img
          src="/images/bonus-banner.png"
          className="img-fluid"
          alt="banner"
        />
      )}
      {current_entertainment_sub_menu_value === "keno" && (
        <img
          src="images/Entertaintment-web-Banner.png"
          alt="banner"
          className="img-fluid"
        />
      )}
      {current_entertainment_sub_menu_value === "sports-betting" && (
        <img src="images/esports.png" alt="banner" className="img-fluid" />
      )}
      {current_entertainment_sub_menu_value === "gangster-wars" && (
        <img src="images/games-img1.png" alt="banner" className="img-fluid" />
      )}
    </div>
  );
};

export default TopBanner;
