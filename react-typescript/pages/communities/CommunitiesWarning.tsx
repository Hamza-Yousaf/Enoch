import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));



interface BoardingJourProps { }

interface BoardingJourState { }


const CommunitiesWarning: React.FC = () => {
  

  return (
    <div className="container-fluid dashboard-body-bg second-body-bg">
      <Header />
      <div className="row">	
		<div className="ezl-dashboard-container">			
			<div className="Community-18Warning-body">
			    <div className="Community-18Warning-content">
			        <div className="Community-18Warning-logo">
			            <img src="/images/18+Warning-logo.png" alt="Warning Icon" className="img-fluid" />
			        </div>
			        <div className="Community-18Warning-text">
			            <h3>You must be 18+ to view this community</h3>
			            <h4>You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?</h4>
			            <div className="Community-18Warning-btn">
			                <button className="no-btn">No</button>
			                <button className="yes-btn">YES</button>
			            </div>
			            <p>Use of this site constitutes acceptance of our User Agreement and Privacy Policy . ©2021 enoch inc. All rights reserved. Enoch and the ALIEN Logo are registered trademarks of enoch inc.</p>
			        </div>
			    </div>
			</div>
		</div>
	</div>
    </div>
  );
}

export default CommunitiesWarning;
