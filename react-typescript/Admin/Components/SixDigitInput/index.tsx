import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

interface Props {
  setShowPhoneAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBarcodeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SixDigitsInput: React.FC<Props> = ({
  setShowPhoneAuthModal,
  setShowBarcodeModal,
}) => {
  const [showBarcode, setShowBarcode] = useState(false);
  const dispatch = useDispatch();
  const { current_admin_2fa_method } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const current_admin_2fa_method_value = useSelector(
    (state: State) => state.current_admin_2fa_method
  );

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

  const changeAuthToPhone = () => {
    current_admin_2fa_method("PHONE - SMS");
  };

  const changeAuthToApp = () => {
    setShowBarcode(true);
  };
  return (
    <div className="setting-number-blocks phone-authenticator-OTP-box">
      <div className="setting-key setting-num-key addPhnNum-key m-0">
        <ul className="fullwith">
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

      <div className="d-flex setting-confirm-btn">
        <a
          href="#"
          className={
            enableConfirmButton
              ? "btn bttn-primary"
              : "btn bttn-primary bttn-disable"
          }
          id="authenticator_OTP_Confirm"
          onClick={
            current_admin_2fa_method_value === "APP AUTHENTICATOR"
              ? () => {
                  changeAuthToPhone();
                  setShowPhoneAuthModal(false);
                }
              : () => {
                  changeAuthToApp();
                  setShowPhoneAuthModal(false);
                  setShowBarcodeModal(true);
                }
          }
        >
          Confirm
        </a>
      </div>
    </div>
  );
};

export default SixDigitsInput;
