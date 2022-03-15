import React, { useState, useEffect } from "react";
import classnames from "classnames";
import {
  LazyLoadImage,
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import { Formik, FormikErrors } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
const HeaderWebsite = dynamic(() => import("../../Component/Enoch-Website/Header/Header"));
const FooterWebsite = dynamic(() => import("../../Component/Enoch-Website/Footer/Footer"));
import {
  countryContact,
  creatorContact,
  brandsContact,
  investorsContact,
  partnersContact,
  mediaContact,
} from "../../lib/contactData";

interface MyFormValues {
  country: string;
  field: string;
}

const ContactUs: React.FC = () => {
  const [tab, setTab] = useState("creators");
  const [selectDropDown, setSelectDropDown] = useState(creatorContact);

  useEffect(() => {
    if (tab == "creators") {
      setSelectDropDown(creatorContact);
    } else if (tab == "brands") {
      setSelectDropDown(brandsContact);
    } else if (tab == "investors") {
      setSelectDropDown(investorsContact);
    } else if (tab == "partners") {
      setSelectDropDown(partnersContact);
    } else if (tab == "media") {
      setSelectDropDown(mediaContact);
    }
    console.log("field", initialValues);
  }, [tab]);

  const initialValues: MyFormValues = {
    country: "",
    field: "",
  };

  const setTabHandler = (value: string) => {
    setTab(value);
  };

  console.log("field", initialValues);
  return (
    <LazyLoadComponent>
      <div className="enoch-container-fluid">
        <HeaderWebsite>
          <div className="enochweb-header-contact">
            <div className="enochweb-header-contactimg">
              <img
                src="/images/enoch-contact-bg.png"
                className="img-fluid"
                alt="enoch"
              />
            </div>
          </div>
        </HeaderWebsite>
        <div className="enochweb-contact-sect">
          <div className="enochweb-container">
            <div className="enochweb-contact-block">
              <div className="enoch-contactblock-lft">
                <h3>SAY HELLO.</h3>
                <p>
                  If you're interested in working with us, for us or against us,
                  drop us a little message below. Don't be scared - we're a
                  friendly bunch.
                </p>
                <div className="contactblock-tabs">
                  <ul className="contacttab">
                    <li onClick={() => setTabHandler("creators")}>
                      <button
                        className={classnames("contacttablinks", {
                          active: tab == "creators",
                        })}
                        id="defaultOpen"
                      >
                        Creators
                      </button>
                    </li>
                    <li onClick={() => setTabHandler("brands")}>
                      <button
                        className={classnames("contacttablinks", {
                          active: tab == "brands",
                        })}
                      >
                        brands{" "}
                      </button>
                    </li>
                    <li onClick={() => setTabHandler("investors")}>
                      <button
                        className={classnames("contacttablinks", {
                          active: tab == "investors",
                        })}
                      >
                        Investors
                      </button>
                    </li>
                    <li onClick={() => setTabHandler("partners")}>
                      <button
                        className={classnames("contacttablinks", {
                          active: tab == "partners",
                        })}
                      >
                        PARTNERS
                      </button>
                    </li>
                    <li onClick={() => setTabHandler("media")}>
                      <button
                        className={classnames("contacttablinks", {
                          active: tab == "media",
                        })}
                      >
                        MEDIA
                      </button>
                    </li>
                  </ul>

                  <div
                    id="Creators"
                    className="contacttabcontent"
                    style={{ display: "block" }}
                  >
                    <div className="contact-tab-head">
                      This text will explain the selected tab. in one or two
                      lines.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut magna aliqua.{" "}
                    </div>
                    <div className="enoch-contact-form">
                      <div className="enoch-contact-form">
                        <Formik
                          initialValues={initialValues}
                          validate={(values: MyFormValues) => {
                            let errors: FormikErrors<MyFormValues> = {};
                            return errors;
                          }}
                          onSubmit={(
                            values: MyFormValues,
                            { setSubmitting }
                          ) => { }}
                          validationSchema={Yup.object().shape({})}
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
                              <div className="enochweb-floating-form">
                                <div className="contact-enochweb-floating-form-grp">
                                  <div className="enochweb-floating-label">
                                    <input
                                      className="enochweb-floating-input"
                                      type="text"
                                      placeholder=" "
                                    />
                                    <label>
                                      Name<span>*</span>
                                    </label>
                                  </div>
                                </div>
                                <div className="contact-enochweb-floating-form-grp">
                                  <div className="enochweb-floating-label">
                                    <input
                                      className="enochweb-floating-input"
                                      type="text"
                                      placeholder=" "
                                    />

                                    <label>
                                      Business Email<span>*</span>
                                    </label>
                                  </div>
                                </div>
                                <div className="contact-enochweb-floating-form-grp">
                                  <div className="enochweb-floating-label">
                                    <input
                                      className="enochweb-floating-input"
                                      type="text"
                                      placeholder=" "
                                    />

                                    <label>
                                      Phone number<span>*</span>
                                    </label>
                                  </div>
                                </div>
                                <div className="contact-enochweb-floating-form-grp">
                                  <div className="enochweb-floating-label">
                                    <div className="enochweb-contact-dropdown position-relative">
                                      <div
                                        id="contactCountry"
                                        className="contact-drop-box"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {values.country != "" ? (
                                          values.country
                                        ) : (
                                          <>
                                            Country <span>* </span>
                                          </>
                                        )}{" "}
                                      </div>
                                      <div
                                        id="contact-Project-DropdownList"
                                        className="contact-dropdown-content"
                                      >
                                        <ul className="contact-drop-scrollable contact-custom-wd">
                                          {countryContact.map(
                                            (item: any, index: any) => {
                                              const i = index + 1;
                                              return (
                                                <li
                                                  onClick={() => {
                                                    setFieldValue(
                                                      "country",
                                                      item
                                                    );
                                                  }}
                                                >
                                                  <span>
                                                    <img
                                                      src={`/images/country${i}.png`}
                                                      alt="afganistan"
                                                      className="img-fluid mr-2"
                                                    />
                                                  </span>
                                                  <div className="contact-inner">
                                                    {item}
                                                  </div>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="contact-enochweb-floating-form-grp w-100">
                                  <div className="enochweb-floating-label">
                                    <div className="enochweb-contact-dropdown position-relative">
                                      <div
                                        id="Iam"
                                        className="contact-drop-box"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {tab == "creators" ? (
                                          values.field !== "" ? (
                                            values.field
                                          ) : (
                                            <>
                                              I am a<span>* </span>
                                            </>
                                          )
                                        ) : tab == "brands" ? (
                                          values.field !== "" ? (
                                            values.field
                                          ) : (
                                            <>
                                              I am a<span>* </span>
                                            </>
                                          )
                                        ) : tab == "investors" ? (
                                          values.field !== "" ? (
                                            values.field
                                          ) : (
                                            <>
                                              Select Skils<span>* </span>
                                            </>
                                          )
                                        ) : tab == "partners" ? (
                                          values.field !== "" ? (
                                            values.field
                                          ) : (
                                            <>
                                              Select industry<span>* </span>
                                            </>
                                          )
                                        ) : tab == "media" ? (
                                          values.field !== "" ? (
                                            values.field
                                          ) : (
                                            <>
                                              How did you know about us ?
                                              <span>* </span>
                                            </>
                                          )
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                      <div
                                        id="contact-Iam-DropdownList"
                                        className="contact-dropdown-content"
                                      >
                                        <ul className="contact-drop-scrollable contact-custom-wd">
                                          {selectDropDown.map(
                                            (item: any, index: any) => {
                                              return (
                                                <li
                                                  onClick={() => {
                                                    console.log("item", item);
                                                    setFieldValue("field", item);
                                                  }}
                                                >
                                                  {item}
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="contact-enochweb-floating-form-textarea w-100">
                                  <textarea
                                    placeholder="Write your message"
                                    className="enochweb-floating-input"
                                  ></textarea>
                                </div>
                                <div className="contact-enochweb-floating-form-checkbox w-100">
                                  <label className="coontactcheckbox-container">
                                    you agree to receive occasional marketing
                                    emails from Enoch. You also agree that your
                                    personal data will be processed in accordance
                                    with our <a href="#">Privacy Policy.</a>
                                    <input type="checkbox" />
                                    <span className="contactcheckmark"></span>
                                  </label>
                                </div>
                                <div className="contact-enochweb-floating-form-captch w-100">
                                  <div className="contact-gcaptcha">
                                    <img
                                      src="/images/enoch-gcaptcha.png"
                                      alt="g-captcha"
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                                <div className="enochweb-contact-bttn">
                                  <button className="contact-submit-btn">
                                    SUBMIT NOW
                                  </button>
                                </div>
                              </div>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enoch-contactblock-right">
                <div className="enoch-contactblock-right-block1">
                  <h3>Backed by the best</h3>
                  <ul>
                    <li>
                      <LazyLoadImage
                        src="/images/contact-finaxis.png"
                        alt="finaxis"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                  </ul>
                  <h3>Support for major blockchains</h3>
                  <ul>
                    <li>
                      <LazyLoadImage
                        src="/images/conatct-ether.png"
                        alt="etherium"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                    <li>
                      <LazyLoadImage
                        src="/images/contact-polygon.png"
                        alt="polygon"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                    <li className="mr-0">
                      <LazyLoadImage
                        src="/images/contact-binance.png"
                        alt="binance"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                  </ul>
                  <h3>Fungible and non-fungible token support</h3>
                  <ul className="mb-2">
                    <li>
                      <LazyLoadImage
                        src="/images/contact-tokn2.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                    <li>
                      <LazyLoadImage
                        src="/images/contact-tokn1.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </li>
                  </ul>
                </div>
                <div className="enoch-contactblock-right-block2">
                  <div className="contactblock-right-txt">
                    SEE <span>FAQS</span>
                  </div>
                  <div className="contactblock-right-img">
                    <LazyLoadImage
                      src="/images/contact-bg2.png"
                      alt="faq"
                      className="img-fluid"
                      effect="blur"
                    />
                  </div>
                  <p>
                    We Will Not Rest Until 1 Billion People Are Using our
                    products.
                  </p>
                </div>
                <div className="enoch-contactblock-right-block3">
                  <div className="contactblock-help-txt">
                    Help <span>Center</span>
                  </div>
                  <div className="contactblock-help-img">
                    <LazyLoadImage
                      src="/images/contact-bg3.png"
                      alt="help-center"
                      className="img-fluid"
                      effect="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="enochweb-contact-location-sect">
              <div className="enochweb-contact-location-head">
                <h3>Our Locations</h3>
                <p>
                  Our headoffice is in St Peter Port , Guernsey . Globaly ,we have
                  over 20 employess working fully remotely and associated with
                  offices in vibrant cities.
                </p>
              </div>
              <div className="enochweb-locationBlock">
                <ul>
                  <li>
                    <div className="enochwb-location-imgBlock">
                      <LazyLoadImage
                        src="/images/loc-img1.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochwb-location-txtBlock">
                      <h3 className="contact-clr1">London, United Kingdom </h3>
                      <p>Business Operations</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochwb-location-imgBlock">
                      <LazyLoadImage
                        src="/images/loc-img2.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochwb-location-txtBlock">
                      <h3 className="contact-clr2">Cape Town, South Africa </h3>
                      <p>Legal & Compliance</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochwb-location-imgBlock">                     
                       <LazyLoadImage
                        src="/images/loc-img3.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochwb-location-txtBlock">
                      <h3 className="contact-clr3">Pune, India</h3>
                      <p>Engineering</p>
                    </div>
                  </li>
                  <li>
                    <div className="enochwb-location-imgBlock">
                    <LazyLoadImage
                        src="/images/loc-img4.png"
                        alt="logo"
                        className="img-fluid"
                        effect="blur"
                      />
                    </div>
                    <div className="enochwb-location-txtBlock">
                      <h3 className="contact-clr4">ST PETER PORT, Guernsey </h3>
                      <p>Head Office</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterWebsite />
      </div>
    </LazyLoadComponent>
  );
};

export default trackWindowScroll(ContactUs);
