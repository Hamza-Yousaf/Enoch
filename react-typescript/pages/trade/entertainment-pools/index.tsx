import React, { useState } from "react";
import classnames from "classnames";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
const EPBanner = dynamic(() => import("../../../Component/trade/entertainment-pools/EPBanner"));
const EPPostContainer = dynamic(() => import("../../../Component/trade/entertainment-pools/EPPostContainer"));
const EPFAQ = dynamic(() => import("../../../Component/trade/entertainment-pools/EPFAQ"));
const EPTutorial = dynamic(() => import("../../../Component/trade/entertainment-pools/EPTutorial"));


const EntertainmentPools: React.FC = () => {
  const [lpModel, setLPModel] = useState(false);
  
  const setLPModelHandler = (value: boolean) => {
    console.log('setLPModelHandler')
    setLPModel(value);
  };

  return (
    <>
      <div className="container-fluid pb-0">
        <Header />
        <div className="row trade-bg">
          <div className="ezl-dashboard-container">
            <EPBanner />
            <EPPostContainer lpModel={lpModel} setLPModelHandler={setLPModelHandler} />
            <EPFAQ />
            <EPTutorial />
          </div>
        </div>
      </div>
      {/* <!--LP rule modal popup--> */}
      <div className="LPrules-modalBlock">
        <div id="LPrules-modal" className={classnames("modal fade", {
          open: lpModel == true,
        })}>
          {/* <!-- Modal content --> */}
          <div className="modal-content LPrules-modal-content ">
            <span className="close" onClick={() => setLPModel(false)}><img src="/images/LpCross.png" alt="close" className="img-fluid" data-dismiss="modal" /></span>
            <div className="LPrules-content-header">
              <img src="/images/LPrule-header.png" className="img-fluid" alt="LP rules" />
            </div>
            <div className="LPrules-body-content">
              <h2>Keno Liquidity Providers Rules</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h3>Sub Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default EntertainmentPools;
