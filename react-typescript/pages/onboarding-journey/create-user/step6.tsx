import React, { useState } from 'react'
import Link from 'next/link'


const CreateUserStep6: React.FC = () => {
  return (
    <div className="container-fluid">
	
    <div className="row">	
      <div className="onboarding-new-container container-bg2">
        <div className="onboard-individual-body">
          <div className="onboard-business-logo"><img src="/images/businessNewLogo.png" className="img-fluid" alt="logo"/></div>
          <div className="onboard-business-bottm-img"><img src="/images/business-img.png" className="img-fluid" alt="logo"/></div>
          
          <div className="onboard-business-innerbody">
            <div className="onboard-business-progressBlock">
              <div className="onboard-business-progressbar">
                <div className="onboard-business-progressbar-inner progress-100">
                
                </div>
              </div>
              <div className="onboard-business-bottmVal">
              <Link href='/onboarding-journey/create-user/step5'> 
                <span><img src="/images/back-arrow.png" className="img-fluid mr-2" alt="back"/>GO BACK</span>
                </Link>
                <span>6/6</span>
              </div>
            </div>
            
            <div className="onboard-business-chooseAv-block">
              <div className="onboard-business-chooseAv-left">
                <div className="onboard-business-hd">
                  <h2>Choose your avatar</h2>
                  <p>Create mind blowing profile in a flash!</p>
                </div>
                <h3>Create mind blowing profile in a flash!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="business-avatar-gal">
                <ul>
                  <li><img src="/images/avatr-pic1.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic6.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic11.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic16.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic2.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic7.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic12.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic17.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic3.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic8.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic13.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic18.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic4.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic9.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic14.png" className="img-fluid" alt="avatar"/></li>
                  <li><img src="/images/avatr-pic19.png" className="img-fluid" alt="avatar"/></li>
                  <li className="mb-0"><img src="/images/avatr-pic5.png" className="img-fluid" alt="avatar"/></li>
                  <li className="mb-0"><img src="/images/avatr-pic10.png" className="img-fluid" alt="avatar"/></li>
                  <li className="mb-0"><img src="/images/avatr-pic15.png" className="img-fluid" alt="avatar"/></li>
                  <li className="mb-0"><img src="/images/avatr-pic20.png" className="img-fluid" alt="avatar"/></li>
                </ul>
                <div className="avatar-gal-overlay">
                  HELLO<br/> GET YOUR<br/> AVATAR
                </div>
              </div>
            </div>
            <Link href='/onboarding-journey/select-avatar'>          
            <div className="onboard-busines-nxt"><button id="selectothers-cont-btn" className="bunsinss-nxt-bttn">Next</button></div>
          </Link>
          </div>
          
        </div>
      </div>
      
    
    </div>
  
    </div>

  )
}
export default CreateUserStep6
