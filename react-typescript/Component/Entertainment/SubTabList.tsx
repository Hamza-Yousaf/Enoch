import React from "react";
import dynamic from "next/dynamic";
const CasinoTabItems = dynamic(() => import("./CasinoTabItems"));
const GamesTabItems = dynamic(() => import("./GamesTabItems"));
const PromotionsTabItems = dynamic(() => import("./PromotionsTabItems"));
const PopularTabItems = dynamic(() => import("./PopularTabItems"));
const SportsTabItems = dynamic(() => import("./SportsTabItems"));

interface Props {
  current_entertainment_tab_value: string;
}

const SubTabList: React.FC<Props> = ({ current_entertainment_tab_value }) => {
  return (
    <>
      {current_entertainment_tab_value === "popular" && <PopularTabItems />}
      {current_entertainment_tab_value === "casino" && <CasinoTabItems />}
      {current_entertainment_tab_value === "sports" && <SportsTabItems />}
      {current_entertainment_tab_value === "games" && <GamesTabItems />}
      {current_entertainment_tab_value === "promotions" && (
        <PromotionsTabItems />
      )}
    </>
  );
};

export default SubTabList;
