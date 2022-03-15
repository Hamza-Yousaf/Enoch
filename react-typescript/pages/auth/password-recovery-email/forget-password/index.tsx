import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import Link from 'next/link'

interface MyFormValues {
    email: string
    password: string
}

const ForgetPassword: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)

    const initialValues: MyFormValues = {
        email: '',
        password: ''
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='sign-up-form custm-sign-padd'>
                        <div className='signup-head2'>
                            <div className='dapp-header-logo2'>
                                <img
                                    src='/images/logo-big.png'
                                    alt='logo'
                                    className='img-fluid'
                                />
                            </div>
                            <p className="sign-para-txt">The world’s largest avatar-based social commerce takes place inside a virtual world powered blockchain metaverse where players play to earn Crypto &amp; NFT through shared experiences, build deeper friendships, creativity counts, and all relationships matter. </p>					
                            <h2>Make the most of your professional life</h2>
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
                                            <div className='input-label'>Email*</div>
                                            <div
                                                className={classnames('sign-form-input', {
                                                    'green-boeder': values.email != '',
                                                    'error-block': errors.email
                                                })}
                                            >
                                                <input
                                                    id='email'
                                                    placeholder='Email id'
                                                    type='email'
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
                                            <div className='input-label'>Password*</div>
                                            <div
                                                className={classnames('sign-form-input', {
                                                    'green-boeder': values.password != '',
                                                    'error-block': errors.password
                                                })}
                                            >
                                                <input
                                                    id='inputpassword1'
                                                    placeholder='Password'
                                                    name='password'
                                                    type={showPassword ? 'text' : 'password'}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                <span
                                                    // toggle='#inputpassword1'
                                                    className='field-icon toggle-password'
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    <img
                                                        src='/images/eye.png'
                                                        alt='eye'
                                                        className='img-fluid eye1'
                                                    />
                                                    <img
                                                        src='/images/eye2.png'
                                                        alt='eye'
                                                        className='img-fluid eye2'
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='signin-check'>
                                                <label className='signcheckbox-container'>
                                                    Remember me
                                                    <input type='checkbox' checked />
                                                    <span className='signcontactcheckmark'></span>
                                                </label>
                                                <span>
                                                    <Link href='/auth/password-recovery-email/recover-password'> Forget Password?</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='signup-btn-grp'>
                                                <Link href='/'>
                                                    <button type='submit' className='sign-up-button'>
                                                        Sign In
                                                    </button>
                                                </Link>
                                                <span>or</span>
                                                <div className='signup-vis-google-btn'>
                                                    {/* <Link href='/auth/signIn-gmail'> */}
                                                    <a href='#'>
                                                        <img
                                                            src='/images/google-icon.png'
                                                            className='img-fluid mr-2'
                                                            alt='google'
                                                        />
                                                        SIGN IN WITH GOOGLE
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <p className='signin-bttm-xt'>
                                                Not Registered yet?{' '}
                                                <Link href='/'>
                                                    <a className='signin-btn'>Create an account</a>
                                                </Link>
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

export default ForgetPassword
