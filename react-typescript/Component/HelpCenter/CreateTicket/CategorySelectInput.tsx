import React, { useState } from "react";
import { categorySelectOptions } from "../../utilsData/createTicketData";
import dynamic from "next/dynamic";
const SubjectInput = dynamic(() => import("./SubjectInput"));

interface Props {
  ticketCategory: any;
  setTicketCategory: any;
  ticketSubject: any;
  setTicketSubject: any;
}

const CategorySelectInput: React.FC<Props> = ({
  ticketCategory,
  setTicketCategory,
  ticketSubject,
  setTicketSubject,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const setCategory = (category: string) => {
    setTicketCategory(category);
    setShowOptions(false);
  };

  const subjectChangeHandler = (e: any) => {
    setTicketSubject(e.target.value);
  };
  return (
    <div className="Create-Support-dropdown-sect">
      <div className="row">
        <div className="col-lg-6">
          <div className="Create-Support-dropdown-left">
            <div className="position-relative">
              <div className="timeSetting-drop-box">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={toggleShowOptions}
                  id="timeSetting"
                  className={
                    showOptions
                      ? "timeSetting-droplist"
                      : "timeSetting-droplist select-active"
                  }
                >
                  {ticketCategory}
                </span>
              </div>
              <div
                id="timeSetting-DropdownList"
                className={
                  showOptions
                    ? "timeSetting-content custm-zindex-1 show"
                    : "timeSetting-content custm-zindex-1"
                }
              >
                <ul className="setting-form-drop-scrollable">
                  {categorySelectOptions.map((option, key) => {
                    return (
                      <li key={key} onClick={() => setCategory(option)}>
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SubjectInput
          ticketSubject={ticketSubject}
          setTicketSubject={setTicketSubject}
          subjectChangeHandler={subjectChangeHandler}
        />
      </div>
    </div>
  );
};

export default CategorySelectInput;
