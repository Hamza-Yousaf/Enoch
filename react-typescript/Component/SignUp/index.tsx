import React, { useState } from "react";
import * as Yup from "yup";
import classnames from "classnames";
import Link from "next/link";
import { Formik, FormikErrors } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { SIGN_UP_MUTATION } from "../../graphql/mutations";
import withApollo from "../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";
import "react-day-picker/lib/style.css";
import dynamic from "next/dynamic";
const AlertModal = dynamic(() => import("../AlertModal"));


// import classnames from 'classnames';
interface MyFormValues {
  email: string;
  password: string;
  rpassword: string;
  fname: string;
  lname: string;
}

const responseGoogle = () => {};

const SignUpEmail: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setrepeatPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("username not supported");
  const [success, setSuccess] = useState(false);
  const [receivedEmail, setReceivedEmail] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const [signUp, { data, loading }] = useMutation(SIGN_UP_MUTATION);

  const initialValues: MyFormValues = {
    email: "",
    password: "",
    rpassword: "",
    fname: "",
    lname: "",
  };

  if (data) {
    router.push("/SignIn");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="sign-up-form custm-sign-padd">
            <div className="signup-head2">
              <div className="dapp-header-logo2">
                <img
                  src="/images/logo-big.png"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
              <AlertModal
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                message={message}
                success={success}
              />
              <p className="sign-para-txt">
                The world’s largest avatar-based social commerce takes place
                inside a virtual world powered blockchain metaverse where
                players play to earn Crypto & NFT through shared experiences,
                build deeper friendships, creativity counts, and all
                relationships matter.{" "}
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              validate={(values: MyFormValues) => {
                let errors: FormikErrors<MyFormValues> = {};

                if (!values.email) {
                  errors.email = "Please enter your mail id";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values: MyFormValues, { setSubmitting }) => {
                console.log("submiting...");
                signUp({
                  variables: {
                    data: {
                      firstName: values.fname,
                      lastName: values.lname,
                      email: values.email,
                      password: values.password,
                    },
                  },
                }).catch((err) => {
                  console.log(err.message);
                  setMessage(err.message);
                  setShowAlert(true);
                  setSuccess(false);
                });
              }}
              validationSchema={Yup.object().shape({
                fname: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("Invalid first time"),
                lname: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("Please enter your last name"),
                rpassword: Yup.string()
                  .min(2, "Too Short!")
                  .max(100, "Too Long!")
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Please create the password"),
                password: Yup.string()
                  .min(2, "Too Short!")
                  .max(500, "Too Long!")
                  .required("Please create the password"),
              })}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className={classnames("sign-form-input", {
                          "green-boeder": values.fname != "",
                          "error-block": errors.fname,
                        })}
                      >
                        <input
                          type="text"
                          placeholder="First name"
                          name="fname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fname}
                        />
                        {values.fname != "" && (
                          <span>
                            <img
                              src="/images/Check.png"
                              alt="Check"
                              className="img-fluid"
                            />
                          </span>
                        )}

                        <div className="error-msg">{errors.fname}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={classnames("sign-form-input", {
                          "green-boeder": values.lname != "",
                          "error-block": errors.lname,
                        })}
                      >
                        <input
                          type="text"
                          placeholder="Last name"
                          name="lname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lname}
                        />
                        {values.lname != "" && (
                          <span>
                            <img
                              src="/images/Check.png"
                              alt="Check"
                              className="img-fluid"
                            />
                          </span>
                        )}
                        <div className="error-msg">{errors.lname}</div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div
                        className={classnames("sign-form-input", {
                          "green-boeder": values.email != "",
                          "error-block": errors.email,
                        })}
                      >
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {values.email != "" && (
                          <span>
                            <img
                              src="/images/Check.png"
                              alt="Check"
                              className="img-fluid"
                            />
                          </span>
                        )}
                        <div className="error-msg">{errors.email}</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className={classnames("sign-form-input", {
                          "green-boeder": values.password != "",
                          "error-block": errors.password,
                        })}
                      >
                        <input
                          id="inputpassword1"
                          placeholder="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <span
                          // toggle='#inputpassword1'
                          className="field-icon toggle-password"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <img
                            src="/images/eye.png"
                            alt="eye"
                            className="img-fluid eye1"
                          />
                          <img
                            src="/images/eye2.png"
                            alt="eye"
                            className="img-fluid eye2"
                          />
                        </span>
                        <div className="error-msg">{errors.password}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={classnames("sign-form-input mb-md-0", {
                          "green-boeder": values.rpassword != "",
                          "error-block": errors.rpassword,
                        })}
                      >
                        <input
                          type={repeatPassword ? "text" : "password"}
                          id="inputpassword2"
                          placeholder="Repeat password"
                          name="rpassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.rpassword}
                        />
                        <span
                          className="field-icon toggle-password"
                          onClick={() => setrepeatPassword(!repeatPassword)}
                        >
                          <img
                            src="/images/eye.png"
                            alt="eye"
                            className="img-fluid eye1"
                          />
                          <img
                            src="/images/eye2.png"
                            alt="eye"
                            className="img-fluid eye2"
                          />
                        </span>
                        <div className="error-msg">{errors.rpassword}</div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="signup-form-bttm-xt mt-0">
                        Use 8 or more characters with a mix of letters, atleast
                        one uppercase, numbers & symbols
                      </p>
                    </div>
                    <div className="col-md-12">
                      <div className="signup-check">
                        <div>
                          <label className="signcheckbox-container">
                            I want to receive the emails from Enoch
                            <input
                              type="checkbox"
                              checked={receivedEmail}
                              onClick={() => setReceivedEmail(!receivedEmail)}
                            />
                            <span className="signcontactcheckmark"></span>
                          </label>
                        </div>
                        <div>
                          <label className="signcheckbox-container">
                            I agree to the{" "}
                            <a href="#" className="sign-blue-clr">
                              Privacy & Terms of service
                            </a>
                            and {"  "}
                            <a href="#" className="sign-blue-clr">
                              {"  "} fee
                            </a>
                            <input
                              type="checkbox"
                              checked={privacy}
                              onClick={() => setPrivacy(!privacy)}
                            />
                            <span className="signcontactcheckmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="signup-btn-grp">
                        <button
                          type="submit"
                          className="sign-up-button"
                          // disabled={isSubmitting}
                        >
                          {loading ? (
                            <div
                              className="spinner-border text-light"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            " Sign Up"
                          )}
                        </button>

                        <span>or</span>
                        <div className="signup-vis-google-btn">
                          {/* <Link href='/auth/signIn-gmail'> */}
                          <a href="#">
                            <img
                              src="/images/google-icon.png"
                              className="img-fluid mr-2"
                              alt="google"
                            />
                            SIGN UP WITH GOOGLE
                          </a>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="signup-bttm-xt">
                        Already have an account?
                        <Link href="/SignIn"> Sign in</Link>
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="sign-up-bg-image custm-v-height">
            <div className="twitwr-img">
              <a href="#">
                <img
                  src="/images/twitter.png"
                  alt="twitter"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="sign-right-img">
              <img
                src="/images/signup.png"
                alt="signup"
                className="img-fluid"
              />
            </div>
            <div className="top-corner">
              <img src="/images/img1.png" alt="signup" className="img-fluid" />
            </div>
            <div className="bottom-corner">
              <img src="/images/img2.png" alt="signup" className="img-fluid" />
            </div>

            <div className="linkedin-img">
              <a href="#">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(SignUpEmail, { getDataFromTree });
