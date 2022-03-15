import React, { useState } from 'react'

const BrowserVerifyGA2: React.FC = () => {
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
                  <h2>Activate 2-Step verification - Authenticator app</h2>
                  <div className='dapp-recovery-phn'>
                    <span>
                      <img
                        src='/images/auth-check2.png'
                        alt='logo'
                        className='img-fluid'
                      />
                    </span>
                    2-Step verification with an Authenticator app activated
                  </div>
                </div>
                <div className='dapp-browser-md'>
                  <h3>Two factor backup codes </h3>
                  <p>
                    Treat this with the same level of attention to your
                    password. Backup codes are used to log in to your account if
                    you lose access to your device and can’t receive
                    authentication codes.
                  </p>
                </div>
                <div className='dapp-accessible-place'>
                  <div className='dapp-accessible-place-top'>
                    <div>
                      <img
                        src='/images/alert-triangle.png'
                        alt='logo'
                        className='img-fluid'
                      />
                    </div>
                    <p>
                      Please keep these in a{' '}
                      <span>safe ans accessible place</span>. If you lose access
                      to your two-factor device and don’t have backup codes, you
                      will lose access to your account.
                    </p>
                  </div>
                  <div className='dapp-backup-code'>
                    <h3>Two-factor backup code</h3>
                    <ul>
                      <li>
                        <span>FGBSPH</span>
                        <span>DUYPAF</span>
                      </li>
                      <li>
                        <span>YSUCWP</span>
                        <span>WGXAYX</span>
                      </li>
                      <li>
                        <span>FSXMAF</span>
                        <span>KNSPFD</span>
                      </li>
                    </ul>
                  </div>
                  <div className='dapp-accessible-bottom'>
                    <ul>
                      <li className='ml-0'>
                        <a href='#'>
                          <img
                            src='/images/print.png'
                            alt='print'
                            className='img-fluid mr-2'
                          />
                          Print
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src='/images/download.png'
                            alt='download'
                            className='img-fluid mr-2'
                          />
                          Download
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src='/images/save.png'
                            alt='save'
                            className='img-fluid mr-2'
                          />
                          Save
                        </a>
                      </li>
                    </ul>
                  </div>
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

export default BrowserVerifyGA2
