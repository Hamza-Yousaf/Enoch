import { useRouter } from "next/router";
import React from "react";

interface Props {
  showAuthCodes: boolean;
  setShowAuthCodes: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackupCodesPage: React.FC<Props> = ({
  setShowAuthCodes,
  showAuthCodes,
}) => {
  const handleNextButtonClick = () => {
    setShowAuthCodes(false);
  };
  return (
    <section>
      <div className="container-fluid dashboard-body-bg">
        <div className="row">
          <div className="col-lg-12">
            <div className="authenticator2-form">
              <div className="authenticator2-head">
                <div className="authenticator2-header-logo">
                  <img
                    src="/images/slogo.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
                <h2>Activate 2-Step verification - Authenticator app</h2>
                <div className="authenticator2-recovery-phn">
                  <span>
                    <img
                      src="/images/stick.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </span>
                  2-Step verification with an Authenticator app activated
                </div>
              </div>
              <div className="authenticator2-browser-md">
                <h3>Two factor backup codes </h3>
                <p>
                  Treat this with the same level of attention to your password.
                  Backup codes are used to log in to your account if you lose
                  access to your device and can’t receive authentication codes.
                </p>
              </div>
              <div className="authenticator2-accessible-place">
                <div className="authenticator2-accessible-place-top">
                  <div>
                    <img
                      src="/images/alert-triangle.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <p>
                    Please keep these in a<span>safe ans accessible place</span>
                    . If you lose access to your two-factor device and don’t
                    have backup codes, you will lose access to your account.
                  </p>
                </div>
                <div className="authenticator2-backup-code">
                  <h3>Two-factor backup code</h3>
                  <ul>
                    <li>
                      <span>FGBSPH</span>
                      <span>DUYPAF</span>
                    </li>
                    <li>
                      <span>YSUCWP</span>
                      <span>WGXAYX</span>
                    </li>
                    <li>
                      <span>FSXMAF</span>
                      <span>KNSPFD</span>
                    </li>
                  </ul>
                </div>
                <div className="authenticator2-accessible-bottom">
                  <ul>
                    <li className="ml-0">
                      <a href="#">
                        <img
                          src="/images/sprint.png"
                          alt="print"
                          className="img-fluid mr-2"
                        />
                        Print
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/images/sdownload.png"
                          alt="download"
                          className="img-fluid mr-2"
                        />
                        Download
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/images/ssave.png"
                          alt="save"
                          className="img-fluid mr-2"
                        />
                        Save
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex authenticator-request-btn">
                <a
                  onClick={handleNextButtonClick}
                  href="#"
                  className="btn bttn-primary authenticator-next"
                >
                  NEXT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackupCodesPage;
