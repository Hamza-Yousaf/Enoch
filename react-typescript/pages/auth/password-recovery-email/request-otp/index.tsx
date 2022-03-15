import React, { useState } from 'react'

import Link from 'next/link'


const RequestOtp: React.FC = () => {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">

                    <div className="sign-in-form  daap-request-otp-block custm-sign-padd">
                        <div className="signin-head">
                            <div className="dapp-header-logo"><img src="/images/logo-big.png" alt="logo" className="img-fluid" /></div>                            
                            <h2>Recover Password</h2>
                            <p>Don’t worry happen to best of us</p>
                            <p className="recovrd-pswrd-txt">We will sent the OTP on your registered phone number.</p>
                        </div>
                        <div className="dapp-request-otp">
                            <h3>Phone number</h3>
                            <p>Phone-0044 - (+XX)-XXXXXXXX73 </p>
                        </div>
                        <div className=""><Link href='/auth/password-recovery-email/otp-sent'><button type="submit" className="bttn-primary W-230">Request OTP</button></Link></div>

                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="sign-up-bg-image custm-v-height">
                        <div className="twitwr-img"><a href="#"><img src="/images/twitter.png" alt="twitter" className="img-fluid" /></a></div>
                        <div className="sign-right-img"><img src="/images/signup.png" alt="signup" className="img-fluid" /></div>
                        <div className="top-corner"><img src="/images/img1.png" alt="signup" className="img-fluid" /></div>
                        <div className="bottom-corner"><img src="/images/img2.png" alt="signup" className="img-fluid" /></div>

                        <div className="linkedin-img"><a href="#"><img src="/images/linkedin.png" alt="linkedin" className="img-fluid" /></a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RequestOtp;
