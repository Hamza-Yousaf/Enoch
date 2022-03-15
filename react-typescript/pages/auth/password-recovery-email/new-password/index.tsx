import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import Link from 'next/link'

interface MyFormValues {
    rpassword: string
    password: string
}

const NewPassword: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [repeatPassword, setrepeatPassword] = useState(false)

    const initialValues: MyFormValues = {
        rpassword: '',
        password: ''
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">

                    <div className="sign-in-form custm-sign-padd">
                        <div className="signin-head">
                            <div className="dapp-header-logo"><img src="/images/logo-big.png" alt="logo" className="img-fluid" /></div>
                            <p className="sign-para-txt">The world’s largest avatar-based social commerce takes place inside a virtual world powered blockchain metaverse where players play to earn Crypto & NFT through shared experiences, build deeper friendships, creativity counts, and all relationships matter. </p>						
                            <h2 className="mb-1">New Password</h2>
                            <p className="new-passwrd-change">Use 8 or more characters with a mix of letters, atleast one uppercase, numbers & symbols</p>
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


                            validationSchema={Yup.object().shape({
                                password: Yup.string()
                                    .min(2, 'Too Short!')
                                    .max(10, 'Too Long!')
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
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className={classnames('sign-form-input', {
                                                'green-boeder': values.password != '',
                                                'error-block': errors.password
                                            })}>

                                                <input id="inputpassword1" placeholder="Password" name='password'
                                                    type={showPassword ? 'text' : 'password'}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password} />
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
                                                </span> <div className="error-msg">{errors.password}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div className={classnames('sign-form-input', {
                                                'green-boeder': values.rpassword != '',
                                                'error-block': errors.rpassword
                                            })}>

                                                <input id="inputpassword2" placeholder="Re-type password" name='rpassword'
                                                    type={repeatPassword ? 'text' : 'password'}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.rpassword} />
                                                <span
                                                    // toggle='#inputpassword1'
                                                    className='field-icon toggle-password'
                                                    onClick={() => setrepeatPassword(!repeatPassword)}
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
                                                <div className="error-msg">{errors.rpassword}</div>
                                            </div>
                                        </div>

                                        <div className="col-md-12"><Link href='/auth/password-recovery-email/reset-confirm'><button type="submit" className="bttn-primary">Reset Password</button></Link></div>

                                    </div>
                                </form>)}
                        </Formik>
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

export default NewPassword;
