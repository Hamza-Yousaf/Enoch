import React, { useState } from "react";

interface Props {
  setShowEnabledPage: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBarcodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMainPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Activate2faAppPage: React.FC<Props> = ({
  setShowEnabledPage,
  setShowBarcodeModal,
  setShowMainPage,
}) => {
  const [enableConfirmButton, setEnableConfirmButton] = useState(false);

  const [inputValues, setInputValues] = useState<any>({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
  });

  const setFieldValue = (e: any, position: any) => {
    isInputComplete();
    if (position === 1) {
      setInputValues({ ...inputValues, value1: e.target.value });
    } else if (position === 2) {
      setInputValues({ ...inputValues, value2: e.target.value });
    } else if (position === 3) {
      setInputValues({ ...inputValues, value3: e.target.value });
    } else if (position === 4) {
      setInputValues({ ...inputValues, value4: e.target.value });
    } else if (position === 5) {
      setInputValues({ ...inputValues, value5: e.target.value });
    } else if (position === 6) {
      setInputValues({ ...inputValues, value6: e.target.value });
    }
  };

  let count = 0;

  const isInputComplete = () => {
    for (var i in inputValues) {
      if (inputValues[i].length > 0) {
        count++;
      }
    }
    console.log(count);
    if (count > 4) {
      setEnableConfirmButton(true);
    }
  };

  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="Authenticar-App-body">
          <div className="Authenticar-App-Tittle">
            <h1>
              Activate 2FA verification <br />
              Authenticar App
            </h1>
          </div>
          <div className="Install-Authenticar-App-Sect">
            <h2>
              1. Install an <a href="#">Google Authenticar App</a> on your smart
              device.
            </h2>
            <div className="Play-store-And-App-store-logo">
              <div className="Play-store-logo">
                <a href="#">
                  <img
                    src="/images/Play-store-Logo.png"
                    alt="App Store Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="App-store-logo">
                <a href="#">
                  <img
                    src="/images/App-store-logo.png"
                    alt="App Store Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="Authenticator-app-QR-Code-sect">
            <h2>
              2. Open your Google Authenticator app and
              <a href="#">Scan the QR Code</a> below.
            </h2>
            <div className="Authenticator-app-scan-QR-Code">
              <img
                src="/images/Scan-QR-Code.png"
                alt="QR-Code"
                className="img-fluid"
              />
            </div>
            <div className="Enter-Key-Manually-sect">
              <h3>
                or<a href="#">Enter Key Manually</a>
              </h3>
            </div>
          </div>
          <div className="Enter-6digit-Code-generate-sect">
            <h2>
              3. Enter the <a href="#">6 Digit Code</a> generated in your Google
              Authenticator app.
            </h2>
            <div className="Enter-6digit-Code-input">
              <ul>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 1)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP_input2"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 2)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP_input3"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 3)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP_input4"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 4)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP_input5"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 5)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="form-control"
                    id="OTP_input6"
                    maxLength={1}
                    onChange={(e) => setFieldValue(e, 6)}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="Authenticator-app-Alert-sect">
            <div className="Authenticator-app-Alert-icon">
              <img
                src="/images/2FA-Alert.png"
                alt="Alert"
                className="img-fluid"
              />
            </div>
            <p>
              Make sure the phone’s date and time is synchronized with the its
              cellular network.
            </p>
          </div>
          <div className="Authenticar-App-Continue-btn">
            <button
              onClick={() => {
                setShowEnabledPage(true);
                setShowBarcodeModal(false);
                setShowMainPage(false);
              }}
            >
              <a href="#">Continue</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activate2faAppPage;
