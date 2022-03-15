import React, { useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../../Component/onBoard/header"));
import { HeaderBreadCrumb } from "../../Header/HeaderBreadCrumb";
const PhoneAuthModal = dynamic(() => import("../PhoneAuthModal"));
const OrganisationalDetailsSection = dynamic(() => import("./OrganisationalDetailsSection"));
const UserInfoSection = dynamic(() => import("./UserInfoSection"));
const UserNameSection = dynamic(() => import("./UserNameSection"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state/index";
const AppAuthModal = dynamic(() => import("../AppAuthModal"));
const Activate2faAppPage = dynamic(() => import("../../Activate2faAppPage/Activate2faAppPage"));
const Enabled2faPage = dynamic(() => import("../../Enabled2faPage"));
const BackupCodesPage = dynamic(() => import("../../BackupCodesPage"));

const AdminProfile = () => {
  const [showPhoneAuthModal, setShowPhoneAuthModal] = useState(false);
  const [showBarcodeModal, setShowBarcodeModal] = useState(false);
  const [showEnabledPage, setShowEnabledPage] = useState(false);
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);
  const dispatch = useDispatch();
  const { current_admin_2fa_method } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const current_admin_2fa_method_value = useSelector(
    (state: State) => state.current_admin_2fa_method
  );

  const togglePhoneAuthModal = () => {
    setShowPhoneAuthModal(!PhoneAuthModal);
  };
  return (
    <div className="container-fluid dashboard-body-bg">
      <Header />
      {showBackupCodes && (
        <BackupCodesPage
          setShowBackupCodes={setShowBackupCodes}
          setShowMainPage={setShowMainPage}
        />
      )}

      {showEnabledPage ? (
        <Enabled2faPage
          setShowBackupCodes={setShowBackupCodes}
          setShowEnabledPage={setShowEnabledPage}
          setShowMainPage={setShowMainPage}
        />
      ) : (
        ""
      )}
      {showBarcodeModal ? (
        <Activate2faAppPage
          setShowEnabledPage={setShowEnabledPage}
          setShowBarcodeModal={setShowBarcodeModal}
          setShowMainPage={setShowMainPage}
        />
      ) : showMainPage ? (
        <>
          <HeaderBreadCrumb
            mainPath={"admin"}
            subPath={"profile"}
            innerSubPath={"regina cooper"}
          />
          <div className="row">
            <div className="ezl-dashboard-container">
              <div className="Admin-Profile-body">
                <div className="row custom-row">
                  <UserNameSection
                    setShowPhoneAuthModal={setShowPhoneAuthModal}
                  />
                  <UserInfoSection />
                  <OrganisationalDetailsSection />
                </div>
              </div>
            </div>
          </div>
          {showPhoneAuthModal === true &&
          current_admin_2fa_method_value === "APP AUTHENTICATOR" ? (
            <PhoneAuthModal
              showPhoneAuthModal={showPhoneAuthModal}
              setShowPhoneAuthModal={setShowPhoneAuthModal}
              setShowBarcodeModal={setShowBarcodeModal}
            />
          ) : showPhoneAuthModal === true &&
            current_admin_2fa_method_value === "PHONE - SMS" ? (
            <AppAuthModal
              showPhoneAuthModal={showPhoneAuthModal}
              setShowPhoneAuthModal={setShowPhoneAuthModal}
              setShowBarcodeModal={setShowBarcodeModal}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminProfile;
