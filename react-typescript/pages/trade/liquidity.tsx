import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
const LiquidityPairsBanner = dynamic(() => import("../../Component/trade/liquidity/LiquidityPairsBanner"));
const LiquiditySection = dynamic(() => import("../../Component/trade/liquidity/LiquiditySection"));
const FAQLiquidity = dynamic(() => import("../../Component/trade/liquidity/FAQLiquidity"));
const LiquidityPairsTutorial = dynamic(() => import("../../Component/trade/liquidity/LiquidityPairsTutorial"));
const LiquidityPositionsBanner = dynamic(() => import("../../Component/trade/liquidity/LiquidityPositionsBanner"));
const LiquidityPositionsTutorial = dynamic(() => import("../../Component/trade/liquidity/LiquidityPositionsTutorial"));


const Liquidity: React.FC = () => {
  const [liquidityTab, setLiquidityTab] = useState("top_pairs");

  const liquidityTabHandler = (value: string) => {
    setLiquidityTab(value)
  }

  return (
    <div className="container-fluid pb-0">
      <Header />
      <div className="row trade-bg">
        <div className="ezl-dashboard-container">
          {liquidityTab == 'top_pairs' && <LiquidityPairsBanner />}
          {liquidityTab == 'your_positions' && <LiquidityPositionsBanner />}
          <LiquiditySection liquidityTab={liquidityTab} liquidityTabHandler={liquidityTabHandler} />          
          <FAQLiquidity />
          {liquidityTab == 'top_pairs' && <LiquidityPairsTutorial />}
          {liquidityTab == 'your_positions' && <LiquidityPositionsTutorial />}
        </div>
      </div>
    </div>
  );
};
export default Liquidity;
