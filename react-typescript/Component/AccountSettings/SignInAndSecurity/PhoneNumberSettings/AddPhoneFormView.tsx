import React from "react";
import dynamic from "next/dynamic";
const CountryInput = dynamic(() => import("../../Inputs/CountryInput"));

interface Props {
  showPhoneAddForm: boolean;
  changeButtonBg: boolean;
  handlePasswordModalShow: () => void;
  setChangeButtonBg: React.Dispatch<React.SetStateAction<boolean>>;
  userPhoneNumbers: {
    primaryNumber: string;
    secondaryNumber: string;
  };
  setUsePhoneNumbers: React.Dispatch<
    React.SetStateAction<{
      primaryNumber: string;
      secondaryNumber: string;
    }>
  >;
  emailInput: string;
  setEmailInput: React.Dispatch<React.SetStateAction<string>>;
}

const AddPhoneFormView: React.FC<Props> = ({
  showPhoneAddForm,
  changeButtonBg,
  setChangeButtonBg,
  handlePasswordModalShow,
  userPhoneNumbers,
  setUsePhoneNumbers,
  emailInput,
  setEmailInput,
}) => {
  const handleEmailInput = (e: any) => {
    setEmailInput(e.target.value);
  };
  return (
    <div
      className="phn-no-add-active-sect"
      style={showPhoneAddForm ? { display: "block" } : {}}
    >
      <div className="Use-Password-ReSet-check-active">
        <input type="checkbox" />
        <label>Use for Password Re-set </label>
      </div>
      <div className="phn-no-add-sect-text pt-2">
        <p className="mb-0">
          You need to add a second phone number and make it primary before
          remove your current phone number
        </p>
      </div>
      <div className="phn-no-add-dropdown-sect">
        <label>Country</label>
        <div className="phn-no-add-country-dropdown">
          <CountryInput />
        </div>
      </div>
      <div className="phn-no-add-input-sect">
        <label>Phone Number</label>
        <br />
        <input
          onInput={() => setChangeButtonBg(true)}
          type="text"
          placeholder="Add New"
          id="new_Num_Add"
          value={emailInput}
          onChange={handleEmailInput}
        />
      </div>
      <div className="phn-no-add-sect-text">
        <p>
          We’ll send a code to this number - you’ll need it for the final step.
        </p>
      </div>
      <div className="phn-no-add-sect-button">
        <button className="btn-1">
          <a href="#">Cancel</a>
        </button>
        <button
          className={changeButtonBg ? " btn-2-active" : "btn-2 btn-2-active"}
          id="Send_Code_btn"
          //   data-toggle="modal"
          //   data-target="#myModal"
          onClick={handlePasswordModalShow}
        >
          <a href="#">Send Code</a>
        </button>
      </div>
      <div className="phn-no-add-sect-text">
        <p className="mb-0">
          Your phone number helps us keep your account secure by adding an
          additional layer of verification. It also helps others, who already
          have your phone number, discover and connect with you. You can always
          decide how you want your phone number used. <a href="#">Learn more</a>
        </p>
      </div>
    </div>
  );
};

export default AddPhoneFormView;
