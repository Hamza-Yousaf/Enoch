import React, { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const BrowserVerifyGA1: React.FC = () => {
  const [uniqueCode, setUniqueCode] = useState<boolean>(false)
  const [sms, setSms] = useState<boolean>(false)

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
                  <h2>You’ve enabled two-factor authentication</h2>
                </div>
                <div className='signin-authenticator-enable-head'>
                  <h3>Now, add a backup methrod</h3>
                  <p>
                    If you lose access to your default methrod, you can use
                    backup to gain access to your account
                  </p>
                </div>
                <div className='signin-authenticator-enable-options'>
                  <div
                    className={classnames(
                      'signin-authenticator-enable-options-block',
                      {
                        'auth-active': uniqueCode == true
                      }
                    )}
                    onClick={() => {
                      setUniqueCode(true)
                      setSms(false)
                    }}
                  >
                    <input
                      id='Personal-acount'
                      name='b-plan'
                      type='radio'
                      checked={uniqueCode}
                    />
                    <label>
                      Backup codes (recommended)
                    </label>
                    <p className='mb-0'>
                      Generate a set of 20 unique codes to keep on hand.
                    </p>
                  </div>
                  <div
                    className={classnames(
                      'signin-authenticator-enable-options-block mb-0',
                      {
                        'auth-active': sms == true
                      }
                    )}
                    onClick={() => {
                      setUniqueCode(false)
                      setSms(true)
                    }}
                  >
                    <input
                      id='Personal-acount1'
                      name='b-plan'
                      type='radio'
                      checked={sms}
                    />
                    <label>SMS</label>
                    <p className='mb-0'>
                      You will receive a unique code via SMS if you need to use
                      your backup methrod.
                    </p>
                  </div>
                </div>
                <Link href='/auth/browser-verify-ga2'>
                  <div className='d-flex signin-authenticator-request-btn'>
                    <a
                      href='#'
                      className='btn bttn-primary signin-authenticator-next'
                    >
                      Continue
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrowserVerifyGA1
