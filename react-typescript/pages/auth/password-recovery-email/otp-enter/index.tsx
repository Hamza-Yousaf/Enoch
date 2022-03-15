import React, { useState } from 'react'

import Link from 'next/link'

const OtpEnter: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='sign-in-form  daap-request-otp-block custm-sign-padd'>
            <div className='signin-head'>
              <div className='dapp-header-logo'>
                <img
                  src='/images/logo-big.png'
                  alt='logo'
                  className='img-fluid'
                />
              </div>
              <h2 className='mb-0'>Enter OTP</h2>

              <p className='recovrd-pswrd-txt font-weight-semibold'>
                Use the OTP sent over your phone
              </p>
            </div>
            <div className='verfication-key confirm-num-key'>
              <ul className='fullwith'>
                <li>
                  <input type='text' className='form-control' value='1' />
                </li>
                <li>
                  <input
                    type='text'
                    className='form-control'
                    value='1'
                  />
                </li>
                <li>
                  <input
                    type='text'
                    className='form-control'
                    value='2'
                  />
                </li>
                <li>
                  <input
                    type='text'
                    className='form-control'
                    value='9'
                  />
                </li>
                <li>
                  <input
                    type='text'
                    className='form-control'
                    value='5'
                  />
                </li>
                <li>
                  <input
                    type='text'
                    className='form-control'
                    value='3'
                  />
                </li>
              </ul>
            </div>
            <div className=''>
              <Link href='/auth/password-recovery-email/new-password'>
                <button type='submit' className='bttn-primary W-230'>
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-6 p-0'>
          <div className='sign-up-bg-image custm-v-height'>
            <div className='twitwr-img'>
              <a href='#'>
                <img
                  src='/images/twitter.png'
                  alt='twitter'
                  className='img-fluid'
                />
              </a>
            </div>
            <div className="sign-right-img">
              <img
                src='/images/signup.png'
                alt='signup'
                className='img-fluid'
              />
            </div>
            <div className='top-corner'>
              <img src='/images/img1.png' alt='signup' className='img-fluid' />
            </div>
            <div className='bottom-corner'>
              <img src='/images/img2.png' alt='signup' className='img-fluid' />
            </div>

            <div className='linkedin-img'>
              <a href='#'>
                <img
                  src='/images/linkedin.png'
                  alt='linkedin'
                  className='img-fluid'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpEnter
