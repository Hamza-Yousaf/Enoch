import React, { useState } from 'react'
import Link from 'next/link'

const ConfirmNoSMS2: React.FC = () => {
  return (
    <>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='confirm-email-form'>
                <div className='signin-head'>
                  <div className='dapp-header-logo'>
                    <img
                      src='/images/logo-big.png'
                      alt='logo'
                      className='img-fluid'
                    />
                  </div>
                  <h2>Activate 2-Step verification - SMS/Phone request</h2>
                  <div className='dapp-recovery-phn'>
                    <span>
                      <img
                        src='/images/auth-check2.png'
                        alt='logo'
                        className='img-fluid'
                      />
                    </span>
                    2-Step verification with SMS/Phone is activated
                  </div>
                  <p>
                    The one time password Phone (SMS) option has been turned on.
                  </p>
                </div>

                <div className='d-flex dApp-request-btn'>
                  <a href='#' className='btn bttn-primary'>
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfirmNoSMS2
