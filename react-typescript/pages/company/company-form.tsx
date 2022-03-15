import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../Component/onBoard/header"));
import router from "next/router";
import { verifyToken } from "../../lib/verifyToken";
const SignIn = dynamic(() => import("../../Component/SignIn"));

const CompanyForm: React.FC = () => {
  if (typeof window !== "undefined") {
    if (!verifyToken()) {
      router.replace("/");
      return <SignIn />;
    }
  }
  return (
    <div className="container-fluid dashboard-body-bg second-body-bg pb-0">
      <Header />
      <div className="row">
        <div className="ezl-dashboard-container">
          <div className="company-create-block">
            <div className="company-create-head">
              <h2>Create a company page</h2>
            </div>
            <div className="company-formBody">
              <div className="compny-form-lft">
                <form>
                  <div className="company-form-group pt-1">
                    <h3>Page identity</h3>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Name*</h4>
                      <div className="company-input-field">
                        <input type="text" placeholder="Steven James" />
                      </div>
                    </div>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Enoch public URL*</h4>
                      <div className="company-input-field">
                        <span className="company-input-txt">
                          enoch.dapp/company/
                        </span>
                        <input type="text" placeholder="zapline" />
                      </div>
                    </div>
                  </div>
                  <div className="company-form-group">
                    <h3>Company details</h3>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Industry*</h4>
                      <div className="company-input-field">
                        <div
                          id="dropdown-boxId1"
                          className="company-form-dropdownBox"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Select industry
                        </div>
                        <div
                          id="company-dropList1"
                          className="dropdown-menu company-drop-list"
                        >
                          <ul>
                            <li>industry1</li>
                            <li>industry2</li>
                            <li>industry3</li>
                            <li>industry4</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Company size *</h4>
                      <div className="company-input-field">
                        <div
                          id="dropdown-boxId2"
                          className="company-form-dropdownBox"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Select industry
                        </div>
                        <div
                          id="company-dropList2"
                          className="dropdown-menu company-drop-list"
                        >
                          <ul>
                            <li>0</li>
                            <li>10</li>
                            <li>50</li>
                            <li>100+</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Company type </h4>
                      <div className="company-input-field">
                        <div
                          id="dropdown-boxId3"
                          className="company-form-dropdownBox"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Select industry
                        </div>
                        <div
                          id="company-dropList3"
                          className="dropdown-menu company-drop-list"
                        >
                          <ul>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="company-form-group  border-0">
                    <h3>Profile details</h3>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Logo</h4>
                      <div className="company-input-field">
                        <div className="company-upload-file">
                          <span> Upload to see preview</span>
                          <div className="company-upload-bttn">
                            <input type="file" />
                            Choose File
                          </div>
                        </div>
                      </div>
                      <p className="company-upload-txt">
                        300 x 300px recommended. JPGs, JPEGs, and PNGs
                        supported.
                      </p>
                    </div>
                    <div className="company-form-group-input">
                      <h4 className="company-input-lable">Tagline*</h4>
                      <div className="company-input-field">
                        <input type="text" placeholder="Tagline" />
                      </div>
                    </div>
                    <div className="company-form-group-input">
                      <label className="profilecheckbox-container">
                        I verify that I am an authorized representative of this
                        organization and have the right to act on its behalf in
                        the creation and management of this page. The
                        organization and I agree to the additional terms for
                        Pages.
                        <input type="checkbox" />
                        <span className="profilecheckmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="create-page-btn-block">
                    <button className="createpage-bttn">Create Page</button>
                  </div>
                </form>
              </div>
              <div className="compny-form-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyForm;
