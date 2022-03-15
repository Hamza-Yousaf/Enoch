import React from "react";

interface Props {
  inputsValue: {
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
  };
  setInputsValue: React.Dispatch<
    React.SetStateAction<{
      field1: string;
      field2: string;
      field3: string;
      field4: string;
      field5: string;
      field6: string;
    }>
  >;

  setChangeConfirmButtonBg: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecurityCodeInput: React.FC<Props> = ({
  inputsValue,
  setInputsValue,
  setChangeConfirmButtonBg,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (
      inputsValue.field1.length > 0 &&
      inputsValue.field2.length > 0 &&
      inputsValue.field3.length > 0 &&
      inputsValue.field4.length > 0 &&
      inputsValue.field5.length > 0
    ) {
      setChangeConfirmButtonBg(true);
    }
    setInputsValue({
      ...inputsValue,
      [field]: e.target.value,
    });
  };

  return (
    <ul className="fullwith">
      <li>
        <input
          value={inputsValue.field1}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field1")}
        />
      </li>
      <li>
        <input
          value={inputsValue.field2}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field2")}
        />
      </li>
      <li>
        <input
          value={inputsValue.field3}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field3")}
        />
      </li>
      <li>
        <input
          value={inputsValue.field4}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field4")}
        />
      </li>
      <li>
        <input
          value={inputsValue.field5}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field5")}
        />
      </li>
      <li>
        <input
          value={inputsValue.field6}
          type="text"
          className="form-control"
          maxLength={1}
          onChange={(e) => handleInputChange(e, "field6")}
        />
      </li>
    </ul>
  );
};

export default SecurityCodeInput;
