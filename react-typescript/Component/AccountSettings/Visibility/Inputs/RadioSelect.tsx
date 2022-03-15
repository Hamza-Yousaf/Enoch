import React, { Fragment, useState } from "react";

interface Props {
  inputOptions: {
    id: string;
    title: string;
    icon: boolean;
    value: string;
    valueDescription?: string;
  }[];
}

const RadioSelect: React.FC<Props> = ({ inputOptions }) => {
  const [selected, setSelected] = useState(inputOptions[0].id);

  const selectOption = (id: string) => {
    setSelected(id);
  };
  return (
    <Fragment>
      {inputOptions.map((option, key) => {
        return (
          <div key={key} className="content-visibility-user-block">
            <h3>{option.title}</h3>
            <div className="authenticator-enable-options-block visibility-profile-user">
              <div className="authenticator-enable-options-sel">
                <input
                  type="radio"
                  checked={selected === option.id}
                  onChange={() => selectOption(option.id)}
                />
                <label
                  onClick={() => selectOption(option.id)}
                  htmlFor="user-v1"
                ></label>
              </div>
              <div className="visibility-profile-view">
                <span>
                  {option.icon ? (
                    <img
                      src={"images/avtr.png"}
                      alt="avater"
                      className="img-fluid"
                    />
                  ) : (
                    ""
                  )}
                </span>
                <div>
                  <h3>{option.value}</h3>
                  <p>{option.valueDescription}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="content-visibility-user-block">
        <h3>Private profile characteristics</h3>
        <div className="authenticator-enable-options-block visibility-profile-user"
        >
          <div className="authenticator-enable-options-sel">
            <input id="user-v2" name="b-plan" type="radio" />
            <label htmlFor="user-v2"></label>
          </div>
          <div className="visibility-profile-view">
            <span>
              <img src="images/avtr.png" alt="avater" className="img-fluid" />
            </span>
            <div>
              <h3>Someone at Adobe</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-visibility-user-block">
        <h3>Private mode</h3>
        <div
          className="
                          authenticator-enable-options-block
                          visibility-profile-user
                        "
        >
          <div className="authenticator-enable-options-sel">
            <input id="user-v3" name="b-plan" type="radio" />
            <label htmlFor="user-v3"></label>
          </div>
          <div className="visibility-profile-view">
            <span>
              <img src="images/avtr.png" alt="avater" className="img-fluid" />
            </span>
            <div>
              <h3>Anonymous Enoch Member</h3>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default RadioSelect;
