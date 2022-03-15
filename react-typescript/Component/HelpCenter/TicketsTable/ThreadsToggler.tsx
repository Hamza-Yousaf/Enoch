import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../state";

interface Props {
  setOpenThread: React.Dispatch<React.SetStateAction<boolean>>;
  openThread: boolean;
}

const ThreadsToggler: React.FC<Props> = ({ setOpenThread, openThread }) => {
  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const toggleOpenThread = () => {
    setOpenThread(!openThread);
  };
  return (
    <div className="hlp-collapse-bttn">
      <span onClick={toggleOpenThread} className="tableCell-collapse-btn">
        {messageTab !== "DRAFT" && (
          <img
            src="images/Plus.png"
            alt="Plus"
            className="img-fluid collpse-plus"
          />
        )}
        <img
          src="images/Minus.png"
          alt="Minus"
          className="img-fluid collpse-minus"
        />
      </span>
    </div>
  );
};

export default ThreadsToggler;
