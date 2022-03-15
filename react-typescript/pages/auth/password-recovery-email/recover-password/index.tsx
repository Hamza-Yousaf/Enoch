import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import Link from 'next/link'

interface MyFormValues {
  email: string
}

const RecoverPassword: React.FC = () => {
  const initialValues: MyFormValues = {
    email: ''
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='sign-in-form custm-sign-padd'>
            <div className='signin-head'>
              <div className='dapp-header-logo'>
                <img
                  src='/images/logo-big.png'
                  alt='logo'
                  className='img-fluid'
                />
              </div>
              <p className="sign-para-txt">The world’s largest avatar-based social commerce takes place inside a virtual world powered blockchain metaverse where players play to earn Crypto & NFT through shared experiences, build deeper friendships, creativity counts, and all relationships matter. </p>						
              <h2 className="mb-0">Recover Password</h2>
              <p>Don’t worry happen to best of us</p>
              <p className='recovrd-pswrd-txt'>
                Enter your mail id and we’ll send you a link to reset your
                password
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values: MyFormValues, setSubmitting: any) => {
                console.log('Enter in submit function', values)
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2))
                //   setSubmitting(false)
                // }, 500)
              }}
              // validator={() => ({})}

              validate={(values: MyFormValues) => {
                // type Error = {
                //   email: string
                // }
                // var errors = {} as Error
                let errors: FormikErrors<MyFormValues> = {}

                if (!values.email) {
                  errors.email = 'Please enter your mail id'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = 'Invalid email address'
                }
                // else if (
                //   !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //     errors.email
                //   )
                // ) {
                //   errors.email = 'Invalid email address'
                // }
                return errors
              }}
              validationSchema={Yup.object().shape({
                password: Yup.string()
                  .min(2, 'Too Short!')
                  .max(500, 'Too Long!')
                  .required('Please create the password')
              })}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                resetForm
              }: /* and other goodies */
              any) => (
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='input-label font-weight-semibold'>
                        Email address
                      </div>
                      <div
                        className={classnames('sign-form-input', {
                          'green-boeder': values.email != '',
                          'error-block': errors.email
                        })}
                      >
                        <input
                          type='email'
                          placeholder='danbrooks@gmail.com'
                          name='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {values.email != '' && (
                          <span>
                            <img
                              src='/images/Check.png'
                              alt='Check'
                              className='img-fluid'
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='col-md-12'>
                      {' '}
                      <Link href='/auth/password-recovery-email/email-sent-confirm'>
                        <button type='submit' className='bttn-primary'>
                          Send link to email
                        </button>
                      </Link>
                    </div>
                    <div className='col-md-12 mt-4'>
                      <p className='signin-bttm-xt'>
                        Not able to access email?{' '}
                        <a href='#' className='signin-btn'>
                          <Link href='/auth/password-recovery-email/request-otp'>
                            Try diffrent methrod
                          </Link>
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
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

export default RecoverPassword
