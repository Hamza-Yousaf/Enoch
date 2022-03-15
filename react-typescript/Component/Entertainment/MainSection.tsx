import React from "react";
import dynamic from "next/dynamic";
const BonusesSection = dynamic(() => import("./BonusesSection"));
const GamesSection = dynamic(() => import("./GamesSection"));
const KenoSection = dynamic(() => import("./KenoSection"));
const SportsSection = dynamic(() => import("./SportsSection"));

export interface subMenuProps {
  current_entertainment_sub_menu_value: string;
}

const MainSection: React.FC<subMenuProps> = ({
  current_entertainment_sub_menu_value,
}) => {
  return (
    <>
      {current_entertainment_sub_menu_value === "bonuses" && <BonusesSection />}
      {current_entertainment_sub_menu_value === "keno" && <KenoSection />}
      {current_entertainment_sub_menu_value === "sports-betting" && (
        <SportsSection />
      )}
      {current_entertainment_sub_menu_value === "gangster-wars" && (
        <GamesSection />
      )}
      {/* {current_entertainment_sub_menu_value === "bonuses" && <BonusesSection />} */}
    </>
  );
};

export default MainSection;
