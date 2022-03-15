import React, { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const ConfirmNoAuth: React.FC = () => {
  const [changePhoneNoModel, setChangePhoneNoModel] = useState<boolean>(false)
  const [entryPhoneNoModel, setEntryPhoneNoModel] = useState<boolean>(false)
  const [listPhoneNo, setListPhoneNo] = useState<boolean>(false)
  const [listPhoneValue, setListPhoneValue] = useState<string>('+44')

  const [phoneNoList, setPhoneNoList] = useState<string[]>([
    '+11',
    '+22',
    '+33',
    '+44',
    '+55',
    '+66'
  ])

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
                  <h2>Confirm your phone number</h2>
                  <p>
                    To activate 2-Step verification with an Authenticator app
                    you must validate your phone number . In the event of losing
                    access to your Authrnticator app, you will be able to use
                    your phone number to receive your security code.
                  </p>
                </div>
                <div className='dapp-recovery-block'>
                  <div className='form-input-label'>Recovery Phone Number</div>
                  <div className='sign-form-input'>
                    <input
                      type='email'
                      placeholder='Phone-0044 - (+XX)-XXXXXXXX73 '
                    />
                  </div>
                  <p className='dapp-recovery-block-txt'>
                    Do you want to use the same number or willing to .{' '}
                    <a
                      onClick={() => setChangePhoneNoModel(true)}
                      className='signin-btn color-blue'
                      data-toggle='modal'
                      data-target='enoch-verify-modal'
                    >
                      change{' '}
                    </a>
                    it
                  </p>
                  <div className='enoch-dapp-modal-block'>
                    <div
                      id='enoch-verify-modal'
                      className={classnames('modal fade', {
                        open: changePhoneNoModel == true
                      })}
                    >
                      {/* <!-- Modal content --> */}
                      <div className='modal-content dapp-change-number'>
                        <span
                          className='close'
                          onClick={() => setChangePhoneNoModel(false)}
                        >
                          <img
                            src='/images/popupCross.png'
                            alt='close'
                            className='img-fluid'
                            data-dismiss='modal'
                          />
                        </span>
                        <div className='change-no-header'>
                          Change my phone number
                        </div>
                        <div className='dapp-change-number-nxt'>
                          <p>
                            In order to change your Phone number, we have sent
                            security code on your registered mail id.
                          </p>
                          <div className='change-number-blocks'>
                            <div className='verfication-key browser-num-key m-0'>
                              <ul className='fullwith'>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input1'
                                  />
                                </li>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input2'
                                  />
                                </li>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input3'
                                  />
                                </li>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input4'
                                  />
                                </li>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input5'
                                  />
                                </li>
                                <li>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='user_input6'
                                  />
                                </li>
                              </ul>
                            </div>
                            <div className='d-flex dApp-confirm-btn'>
                              <a
                                onClick={() => {
                                  setChangePhoneNoModel(false),
                                    setEntryPhoneNoModel(true)
                                }}
                                className='btn bttn-primary color-white'
                                // className="btn bttn-primary bttn-disable"
                                id='register'
                                data-toggle='modal'
                                data-target='enoch-verify-modal2'
                              >
                                Confirm
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--2nd popup--> */}
                    <div
                      id='enoch-verify-modal2'
                      className={classnames('modal fade', {
                        open: entryPhoneNoModel == true
                      })}
                    >
                      {/* <!-- Modal content --> */}
                      <div className='modal-content dapp-change-number'>
                        <span
                          className='close'
                          onClick={() => setEntryPhoneNoModel(false)}
                        >
                          <img
                            src='/images/popupCross.png'
                            alt='close'
                            className='img-fluid'
                            data-dismiss='modal'
                          />
                        </span>
                        <div className='change-no-header'>
                          ENTER NEW phone NUMBER
                        </div>
                        <div className='dapp-change-number-nxt'>
                          <p>
                            In order to change your Phone number, we have sent
                            security code on your registered mail id.
                          </p>
                          <div className='change-number-blocks'>
                            <div className='sign-form-input d-flex mb-0'>
                              <div className='position-relative signup-phn'>
                                <div className='sign-form-drop-box2'>
                                  <a
                                    href='javascript:void(0)'
                                    onClick={() => setListPhoneNo(true)}
                                    id='selectphone'
                                    className='sign-form-droplist sign-form-droplist-phn'
                                  >
                                    {listPhoneValue}
                                  </a>
                                </div>
                                <div
                                  id='selectphone-form-DropdownList'
                                  className={classnames(
                                    'sign-form-content signup-poohe-content',
                                    {
                                      show: listPhoneNo == true
                                    }
                                  )}
                                >
                                  <ul className='sign-form-drop-scrollable'>
                                    {phoneNoList.map((v, i) => {
                                      return (
                                        <li
                                          onClick={() => {
                                            setListPhoneNo(false)
                                            setListPhoneValue(v)
                                          }}
                                        >
                                          <div className='contact-inner'>
                                            {v}
                                          </div>
                                        </li>
                                      )
                                    })}

                                    {/* <li>
                                        <div className="contact-inner">+11</div>
                                      </li>
                                      <li>
                                        <div className="contact-inner">+22</div>{' '}
                                      </li>
                                      <li>
                                        <div className="contact-inner">+33</div>
                                      </li>
                                      <li>
                                        <div className="contact-inner"> +44</div>
                                      </li>
                                      <li>
                                        <div className="contact-inner"> +55</div>
                                      </li>
                                      <li>
                                        <div className="contact-inner"> +66</div>
                                      </li> */}
                                  </ul>
                                </div>
                              </div>
                              <div className='signup-number'>
                                <input
                                  type='text'
                                  placeholder='Phone number'
                                  value='7550860088'
                                />
                              </div>
                            </div>
                            <div
                              className='d-flex dApp-confirm-btn'
                              onClick={() => setEntryPhoneNoModel(false)}
                            >
                              <a className='btn bttn-primary color-white'>
                                Confirm
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex dApp-request-btn'>
                  <Link href='/auth/confirm-no-auth1'>
                    <a className='btn bttn-primary'>Requet OTP</a>
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

export default ConfirmNoAuth
