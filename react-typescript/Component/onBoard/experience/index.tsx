import React, { useState } from "react";
import classnames from "classnames";
import * as Yup from "yup";

import Link from "next/link";
import { Formik, FormikErrors } from "formik";
interface BoardingExpProfileProps { }

interface BoardingExpProfileState {
  openINT: boolean;
  show: boolean;
  show1: boolean;
  show2: boolean;
  title: "";
  comp: "";
  location: "";
  head: "";
}

class BoardingExpProfile extends React.Component<
  BoardingExpProfileProps,
  BoardingExpProfileState
> {
  constructor(props: BoardingExpProfileProps) {
    super(props);
    this.state = {
      openINT: false,

      show: true,
      show1: false,
      show2: false,
      title: "",
      comp: "",
      location: "",
      head: "",
    };
  }

  render() {
    return (
      <>
        <div className="dApp-home-profile-collaps-content">
          <button
            className={classnames("dApp-home-profile-collapsible", {
              active: this.state.openINT,
            })}
            onClick={() => this.setState({ openINT: !this.state.openINT })}
          >
            <div className="dApp-home-profile-collaps-btn">
              <label>Experince </label>
            </div>
          </button>
          <div
            className={classnames("roles_collaps", {
              "d-block": this.state.openINT,
            })}
          >
            <div className="dApp-Add-Experince-sect">
              <h6>No records availabel</h6>
              <button
                data-toggle="modal"
                data-target="#dApp-Add-Experince-modal"
              >
                <span>
                  <img src="/images/dApp-btn-Plus.png" alt="+" />
                </span>
                <a href="#">Add Experience</a>
              </button>
            </div>

            {/* <!-- Modal --> */}
            <div className="dApp-home-profile-modal-sect dApp-Add-Experince-modal-sect">
              <div
                className="modal fade"
                id="dApp-Add-Experince-modal"
                role="dialog"
              >
                <div className="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div className="modal-content">
                    <div className="dApp-home-profile-modal-header dApp-Add-Experince-modal-header">
                      <h4 className="modal-title">Add experience</h4>
                      <div
                        className="close dApp-home-profile-modal-close"
                        data-dismiss="modal"
                      >
                        <img
                          src="/images/hCross.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="modal-body">
                      <div>
                        <div className="dApp-home-profile-modal-form pb-0 mt-0">
                          <Formik
                            initialValues={{
                              title: "",
                              comp: "",
                              location: "",
                              head: "",
                            }}
                            onSubmit={(
                              values: BoardingExpProfileProps,
                              setSubmitting: any
                            ) => {
                              console.log("Enter in submit function", values);
                              // setTimeout(() => {
                              //   alert(JSON.stringify(values, null, 2))
                              //   setSubmitting(false)
                              // }, 500)
                            }}
                            validationSchema={Yup.object().shape({
                              title: Yup.string()
                                .min(2, "Too Short!")
                                .max(50, "Too Long!")
                                .required("plase enter title"),

                              comp: Yup.string()
                                .min(2, "Too Short!")
                                .max(100, "Too Long!")
                                .required("Please enter your company"),
                              location: Yup.string()
                                .min(2, "Too Short!")
                                .max(100, "Too Long!")
                                .required("Please enter location"),

                              head: Yup.string()
                                .min(2, "Too Short!")
                                .max(500, "Too Long!")
                                .required("Please enter headline"),
                              // enquiry: Yup.string().required("Please select option"),
                              check: Yup.string().required("Please tick"),
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
                              resetForm,
                            }: /* and other goodies */
                              any) => (
                              <form onSubmit={handleSubmit}>
                                <div className="input-Title input-fild">
                                  <label>
                                    Title <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Ex. Retail Sales Manager"
                                    id="au_input1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    className={classnames('', {
                                      'success-block': values.title != '',
                                      'border-error': errors.title
                                    })}
                                  />
                                </div>

                                <div className="Employment-type-dropdown input-fild">
                                  <label>Employment type</label>
                                  <div className="Edit-Employment-input-field">
                                    <div
                                      id="Edit-Employment-type-dropBox"
                                      className="Employment-type-dropdownBox"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      -
                                    </div>
                                    <div
                                      id="Employment-type-dropList"
                                      className="dropdown-menu Employment-type-dropbox-list"
                                    >
                                      <ul>
                                        <li>Full-time</li>
                                        <li>Part-time</li>
                                        <li>Self-employed</li>
                                        <li>Freelance</li>
                                        <li>Interniship</li>
                                        <li>Trainee</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <h6>Country-specific employment types</h6>
                                </div>

                                <div className="Company input-fild">
                                  <label>
                                    Company <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Ex: Cashcoin"
                                    id="au_input2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comp}
                                    className={classnames('', {
                                      'success-block': values.comp != '',
                                      'border-error': errors.comp
                                    })}
                                  />
                                </div>

                                <div className="Location input-fild">
                                  <label>
                                    Location <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Ex: London, United Kingdom"
                                    id="au_input3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                    className={classnames('', {
                                      'success-block': values.location != '',
                                      'border-error': errors.location
                                    })}
                                  />
                                </div>

                                <div className="Location-checkbox">
                                  <input type="checkbox" id="au_input4" />
                                  <label>
                                    I am currently working in this role
                                  </label>
                                </div>

                                <div className="Headline input-fild">
                                  <label>
                                    Headline <span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Type something"
                                    id="au_input5"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.head}
                                    className={classnames('', {
                                      'success-block': values.head != '',
                                      'border-error': errors.head
                                    })}
                                  />
                                </div>
                                <div className="Description input-fild">
                                  <label>Description</label>
                                  <textarea placeholder="Type something"></textarea>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer no-border pt-0 pb-4">
                      <button
                        className="add-exprnc-bttn"
                        id="onboardSavebtn"
                        data-dismiss='modal'
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BoardingExpProfile;
