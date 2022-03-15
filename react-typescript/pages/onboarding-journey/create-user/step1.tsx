import React, { useState } from "react";
import Link from "next/link";
import { Formik, FormikErrors } from "formik";
import { Form, Field } from "formik";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { PERSONAL_INFO_MUTATION } from "../../../graphql/userProfileMutations";
import withApollo from "../../../lib/withApollo";
import { useMutation, useQuery } from "@apollo/client";
import * as Yup from "yup";
import classnames from "classnames";

import {
  countryData,
  genderData,
  relationshipData,
  hereData,
} from "../../../lib/contactData";
import { setDate } from "date-fns";
import AlertModal from "../../../Component/AlertModal";

interface MyFormValues {
  gender: string;
  country: string;
  relationShip: string;
  hereFor: string;
  hiderelationshipInProfile: boolean,
  bio: string,
  hideDateOfBirth: boolean,
  website: string,
  hideContry: boolean,
  hideHereFor: boolean,
  fullname: string

}

const CreateUserStep1: React.FC = () => {
  const router = useRouter();
  const [personalInfo, { data, loading }] = useMutation(PERSONAL_INFO_MUTATION);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("personal info not supported");
  const [success, setSuccess] = useState(false);
 
  const initialValues: MyFormValues = {
    gender: "",
    country: "",
    relationShip: "",
    hereFor: "",
    hiderelationshipInProfile: false,
    bio: "",
    hideDateOfBirth: false,
    website: "",
    hideContry: false,
    hideHereFor: false,
    fullname: ""
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="onboarding-new-container container-bg2">
          <div className="onboard-individual-body">
            <div className="onboard-business-logo">
              <img
                src="/images/businessNewLogo.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <div className="onboard-business-bottm-img">
              <img
                src="/images/business-img.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <AlertModal
              showAlert={showAlert}
              setShowAlert={setShowAlert}
              message={message}
              success={success}
            />
            <div className="onboard-individual-innerbody">
              <div className="onboard-business-progressBlock">
                <div className="onboard-business-progressbar">
                  <div className="onboard-business-progressbar-inner"></div>
                </div>
                <div className="onboard-business-bottmVal">
                  <span>
                    <img
                      src="/images/back-arrow.png"
                      className="img-fluid mr-2"
                      alt="back"
                    />
                    GO BACK
                  </span>
                  <span>1/6</span>
                </div>
              </div>
              <div className="onboard-business-hd">
                <h2>Personal information</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  <br />
                  sed do eiusmod tempor
                </p>
              </div>
              <div className="onboard-business-form-block">
                <Formik
                  initialValues={initialValues}
                  validate={(values: MyFormValues) => {
                    let errors: FormikErrors<MyFormValues> = {};
                    return errors;
                  }}
                  onSubmit={(values: MyFormValues, { setSubmitting }) => {
                    console.log("submiting...", values);
                    //due to api not working move next page
                    router.push("/onboarding-journey/create-user/step2");
                    personalInfo({
                      variables: {
                        hiderelationshipInProfile: values.hiderelationshipInProfile,
                        relationShip: values.relationShip,
                        gender: values.gender.toLowerCase(),
                        bio: values.bio,
                        hideDateOfBirth: values.hideDateOfBirth,
                        dateOfBirth: dateOfBirth,
                        website: values.website,
                        hideContry: values.hideContry,
                        country: values.country,
                        hideHereFor: values.hideHereFor,
                        hereFor: values.hereFor,
                        fullname: values.fullname
                      },
                    })
                      .then((res) => {
                        if (res) router.push("/onboarding-journey/create-user/step2");
                      })
                      .catch((err) => {
                        console.log(err.message);
                        setMessage(err.message);
                        setShowAlert(true);
                        setSuccess(false);
                      });
                      
                  }}
                  validationSchema={Yup.object().shape({
                    fullname: Yup.string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Invalid first time"),
                    gender: Yup.string()
                      .required("Please select the gender"),
                    country: Yup.string()
                      .required("Please select the country"),
                    relationShip: Yup.string()
                      .required("Please select the relationship status"),
                    website: Yup.string()
                      .required("Please enter the website"),
                  })}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="onboard-business-edit-form-body">
                        <h3>About You</h3>
                        <div className="onboard-business-input-group">
                          <div
                            className={classnames("onboardfloating-label-edit", {
                              "error-block": errors.fullname,
                            })}
                          >
                            <input
                              className="onboardfloating-edit-input"
                              type="text"
                              placeholder=" "
                              name="fullname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fullname}
                            />
                            <label>
                              Your full name<sup>*</sup>
                            </label>
                          </div>
                          <p className="onboard-loating-edit-txt">
                            We will not show your name in your profile
                          </p>
                        </div>
                        <div className="onboard-business-input-group">

                          <div className="onboardfloating-label-edit">
                            {/* <input
                              className="onboardfloating-edit-input"
                              type="text"
                              name="dateOfBirth"
                              placeholder=" "
                              onChange={handleChange}
                              onBlur={handleBlur}
                              //value={values.dateOfBirth}
                            /> */}
                            <DatePicker
                              name="dateOfBirth"
                              selected={dateOfBirth}
                              onChange={(date) => setDateOfBirth(date as Date)}
                              className="onboardfloating-label-edit date-picker-custom"
                              timeClassName={() => "onboardfloating-label-edit"}
                              placeholderText="Date of birth *"
                            />

                            {/* <label>
                              {dateOfBirth ? dateOfBirth : <>Date of birth <sup>*</sup></>}
                            </label> */}
                            <span className="onboard-edit-cal-btn">
                              <img
                                src="/images/onCalendar.png"
                                className="img-fluid"
                                alt="calender"
                              />
                            </span>
                          </div>
                          <div className="onboard-business-checkbox">
                            <input type="checkbox" id="au_input4"
                            />
                            <label>Hide this in my profie</label>
                          </div>
                        </div>
                        <div className="onboard-business-input-group">
                          <div
                            className={classnames("onboardfloating-label-edit", {
                              "error-block": errors.gender,
                            })}
                          >
                            <div
                              id="edit-input-dropBox"
                              className="onboard-edit-input-dropdownBox"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {values.gender != "" ? values.gender : "Gender"}{" "}
                              <sup>*</sup>
                            </div>
                            <div
                              id="edit-input-dropList"
                              className="dropdown-menu onboardedit-input-dropbox-list"
                            >
                              <ul>
                                {genderData.map((item: any, index: any) => (
                                  <li
                                    onClick={() => {
                                      setFieldValue("gender", item);
                                    }}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="onboard-business-input-group">
                          <div
                            className={classnames("onboardfloating-label-edit", {
                              "error-block": errors.website,
                            })}
                          >
                            <input
                              className="onboardfloating-edit-input"
                              type="text"
                              placeholder=" "
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.website}
                              name="website"
                            />
                            <label>
                              Website<sup>*</sup>
                            </label>
                          </div>
                        </div>
                        <div className="onboard-business-input-group">
                          <div className={classnames("onboardfloating-label-edit", {
                            "error-block": errors.country,
                          })}>
                            <div
                              id="edit-countryinput-dropBox"
                              className="onboard-edit-input-dropdownBox"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {values.country != ""
                                ? values.country
                                : "Country"}
                              <sup>*</sup>
                            </div>
                            <div
                              id="edit-countryinput-dropList"
                              className="dropdown-menu onboardedit-input-dropbox-list"
                            >
                              <ul>
                                {countryData.map((item: any, index: any) => (
                                  <li
                                    onClick={() => {
                                      setFieldValue("country", item);
                                    }}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="onboard-business-bio">
                        <h3>Your Bio</h3>
                        <div className="onboard-business-textarea">
                          <textarea placeholder="Write your bio (160 Letters max.)"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bio}
                            name="bio"
                          ></textarea>
                        </div>
                      </div>
                      <div className="onboard-business-edit-form-body">
                        <h3>AFFINITY</h3>
                        <div className="onboard-business-input-group">
                          <div className={classnames("onboardfloating-label-edit", {
                            "error-block": errors.relationShip,
                          })}>
                            <div
                              id="edit-relationinput-dropBox"
                              className="onboard-edit-input-dropdownBox"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {values.relationShip != ""
                                ? values.relationShip
                                : "Relationship Status"}
                              <sup>*</sup>
                            </div>
                            <div
                              id="edit-relationinput-dropList"
                              className="dropdown-menu onboardedit-input-dropbox-list"
                            >
                              <ul>
                                {relationshipData.map(
                                  (item: any, index: any) => (
                                    <li
                                      onClick={() => {
                                        setFieldValue("relationShip", item);
                                      }}
                                    >
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="onboard-business-checkbox">
                            <input type="checkbox" id="au_input4" />
                            <label>Hide this in my profie</label>
                          </div>
                        </div>
                        <div className="onboard-business-input-group">
                          <div className="onboardfloating-label-edit">
                            <div
                              id="edit-hereinput-dropBox"
                              className="onboard-edit-input-dropdownBox"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {values.hereFor != ""
                                ? values.hereFor
                                : "Here for"}
                            </div>
                            <div
                              id="edit-hereinput-dropList"
                              className="dropdown-menu onboardedit-input-dropbox-list"
                            >
                              <ul>
                                {hereData.map((item: any, index: any) => (
                                  <li
                                    onClick={() => {
                                      setFieldValue("hereFor", item);
                                    }}
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="onboard-business-checkbox">
                            <input type="checkbox" id="au_input4" />
                            <label>Hide this in my profie</label>
                          </div>
                        </div>
                      </div>
                      <div className="onboarding-edit-btngroup">
                        <button type="reset" className="onboarding-rest-bttn">
                          Reset{" "}
                        </button>
                        {/* <Link href="/onboarding-journey/create-user/step2"> */}
                        <button
                          type="submit"
                          className="onboarding-update-bttn"
                        >


                          {loading ? (
                            <div className="spinner-border text-light" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            "Update"
                          )}


                        </button>
                        {/* </Link> */}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(CreateUserStep1, { getDataFromTree });