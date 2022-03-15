import React, { useState, Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));

interface Profile {

}

class SettingProfile extends React.Component<{}, Profile> {
  constructor(props: any) {
    super(props);
    this.state = {

    }

  }

  render() {
    // this.onImageChange = this.onImageChange.bind(this);
    return (
      <div className="container-fluid dashboard-body-bg">
        <Header />
        <div className="row">
          <div className="dashboard-header-bredcrumb">
            <div className="ezl-dashboard-container">
              <div className="col-12">
                <ul>
                  <li className="mr-2"><img src="/images/bread-crumb-icon-home.png" alt="icon" className="img-fluid" /> </li>
                  <li className="mr-1"><a href="#" className="dsh-active-black"> Setting /</a></li>
                  <li><a href="#"> profile </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="KYC-BODY ezl-dashboard-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="Individual-profile-sect">
                <h1 className="textBlue">Name & D.O.B information</h1>
                <div className="KYC-profile-picture-sect Setting-profile-sect">
                  <div className="KYC-profile-picture-content Setting-profile-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="KYC-profile-picture Setting-profile-picture">
                          <div className="KYC-profile-picture-img Setting-profile-picture-img">
                            <img src="/images/profile-pic.png" alt="profile-picture" className="img-fluid" id="blah" />
                          </div>
                          <input type="file" className="my_file" />
                        </div>
                      </div>

                      <div className="col-md-9">
                        <div className="Setting-profile-picture-text">
                          <ul>
                            <li className="border-bottom-1-gray">
                              <h1>Name</h1>
                              <h2>Robert Miles</h2>
                            </li>
                            <li>
                              <h1>Date of Birth </h1>
                              <h2>11/09/1976</h2>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Personal-Information-sect">
                <ul className="kyc-card-headings">
                  <li className="textBlue">Site prefrence </li>
                  <li className="pencil pencil-active pr-2">    
                  <Link href="/account-and-settings">
                    <img src="/images/KYC-AML/pencil-active.png" alt="pencil" className="img-fluid" />
                  </Link>
                  </li>
                </ul>

                <div className="KYC-Personal-Information Setting-profile-Personal-Information">
                  <ul>
                    <li className="text-gray">Time Zone <span className="list-1">(GMT+01:00) CET</span></li>
                    <li className="text-gray">Language<span className="list-2">English</span></li>
                    <li className="last-list text-gray">Content language  <span className="list-3">English</span></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!---WORKING-PROGRESS----> */}
            <div className="col-lg-6">
              <div className="ACCOUNT-ACCESS">
                <ul className="kyc-card-headings">
                  <li className="textBlue">ACCOUNT ACCESS </li>
                  <li className="pencil pencil-active pr-2">
                  <Link href="/account-and-settings">           
                    <img src="/images/KYC-AML/pencil-active.png" alt="pencil" className="img-fluid" />
                  </Link>
                    </li>
                </ul>

                <div className="Setting-profile-ACCOUNT-ACCESS">
                  <div className="Setting-profile-ACCOUNT-ACCESS-Rows">
                    <div className="ACCOUNT-ACCESS-Row ACCOUNT-ACCESS-Row-1">
                      <div className="ACCOUNT-ACCESS-Row-left">
                        <ul>
                          <li><h1>Phone No.</h1></li>
                          <li><h2>+49 0755******678</h2></li>
                        </ul>
                      </div>
                      <div className="ACCOUNT-ACCESS-Row-right">
                        <ul>
                          <li><h3>Verified</h3></li>
                          <li><h4>Primary</h4></li>
                        </ul>
                      </div>
                    </div>

                    <div className="ACCOUNT-ACCESS-Row ACCOUNT-ACCESS-Row-2">
                      <div className="ACCOUNT-ACCESS-Row-left">
                        <ul>
                          <li><h1>Email</h1></li>
                          <li><h2> r.rose@gmail.com </h2></li>
                        </ul>
                      </div>
                      <div className="ACCOUNT-ACCESS-Row-right">
                        <ul>
                          <li><h3>&nbsp;</h3></li>
                          <li><h4>Primary</h4></li>
                        </ul>
                      </div>
                    </div>

                    <div className="ACCOUNT-ACCESS-Row ACCOUNT-ACCESS-Row-3">
                      <div className="ACCOUNT-ACCESS-Row-3-text">
                        <p>To update an email address, you must have <span>2 Email Address</span> at least on the Account</p>
                      </div>
                    </div>

                    <div className="ACCOUNT-ACCESS-Row ACCOUNT-ACCESS-Row-4">
                      <div className="ACCOUNT-ACCESS-Row-4-left">
                        <h3>Two Step verification</h3>
                      </div>
                      <div className="ACCOUNT-ACCESS-Row-4-right">
                        <h4>ON</h4>
                      </div>
                    </div>

                    <div className="ACCOUNT-ACCESS-Row ACCOUNT-ACCESS-Row-5">
                      <div className="ACCOUNT-ACCESS-Row-4-text">
                        <p>Verification codes will be sent to this number at sign-in:</p>
                        <b>DE +44 755*****67</b>
                        <p>This number cannot be deleted while being used for two-step verification</p>
                        <a href="#">Change verification MOde</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="Change-or-Close-acc-sect">
                <a href="#">Change to business account</a>
                <br />
                <a href="#">Close your account</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Address-information">
                <ul className="kyc-card-headings">
                  <li className="textBlue">Address</li>
                  <li className="pencil pencil-active pr-2">
                  <Link href="/account-and-settings">           
                    <img src="/images/KYC-AML/pencil-active.png" alt="pencil" className="img-fluid" />
                    </Link>
                  </li>
                </ul>

                <div className="KYC-Address-information">
                  <ul>
                    <li className="text-gray">Address 1</li>
                    <li className="text-gray">Address 2</li>
                    <li className="text-gray">City/Town</li>
                    <li className="text-gray">Country</li>
                    <li className="last-list text-gray">Postal code</li>
                  </ul>
                </div>
              </div>

              <div className="Personal-Information-sect Setting-profile-Account-MANAGMENT-sect">
                <ul className="kyc-card-headings">
                  <li className="textBlue">Account MANAGMENT </li>
                </ul>

                <div className="KYC-Personal-Information Setting-profile-Personal-Information Setting-profile-Acc-MANAGMENT">
                  <ul>
                    <li className="text-gray">Account Stats<span className="list-1">Active</span></li>
                    <li className="text-gray">Account Type<span className="list-2">Individual</span></li>
                    <li className="text-gray">Account ID<span className="list-3">EZD/23456789</span></li>
                    <li className="last-list text-gray">KYC Status<span>KYC Completed</span></li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SettingProfile;
