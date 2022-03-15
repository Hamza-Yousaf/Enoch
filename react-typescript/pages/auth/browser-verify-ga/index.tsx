import React, { useState } from 'react'
import Link from 'next/link'

const BrowserVerifyGA: React.FC = () => {
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
                </div>
                <div className='browser-recovery-block'>
                  <h3>
                    Install an <span>Google Authenticar app</span> on your{' '}
                    <span>smart</span> device.
                  </h3>
                  <div className='browser-app-block'>
                    <span className='mr-16'>
                      <img
                        src='/images/dapp-gplay.png'
                        alt='logo'
                        className='img-fluid'
                      />
                    </span>
                    <span>
                      <img
                        src='/images/dapp-appstore.png'
                        alt='logo'
                        className='img-fluid'
                      />
                    </span>
                  </div>
                </div>
                <div className='browser-recovery-block mt-0'>
                  <h3>
                    <span>Open</span> your <span>Google Authenticator</span> app
                    and scan the <span>QR code</span> below.
                  </h3>
                  <div className='browser-app-block'>
                    <img
                      src='/images/qr-code.png'
                      alt='logo'
                      className='img-fluid'
                    />
                  </div>
                  <p className='browser-bttm-txt'>Or enter Key Manually</p>
                </div>
                <div className='browser-recovery-block mt-0 mb-4'>
                  <h3 className='mb-4'>
                    Enter the <span>6-digit code</span> generated in your{' '}
                    <span>Google Authenticator</span> app.
                  </h3>
                  <div className='verfication-key browser-num-key'>
                    <ul className='fullwith'>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='0'
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
                          value='6'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='6'
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
                          value='0'
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='browser-alert'>
                  <span>
                    <img
                      src='/images/Alert2.png'
                      alt='logo'
                      className='img-fluid'
                    />
                  </span>
                  Make sure the phone’s date and time is synchronized with the
                  its cellular network.
                </div>
                <div className='d-flex dApp-request-btn'>
                  <Link href='/auth/browser-verify-ga1'>
                    <a className='btn bttn-primary browser-next'>NEXT</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrowserVerifyGA

