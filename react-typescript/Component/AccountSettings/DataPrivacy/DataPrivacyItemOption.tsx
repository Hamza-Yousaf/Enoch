import React, { useState } from "react";

interface Props {
  title: string;
  description: string;
  defaultValue: string;
  id: string;
}

const DataPrivacyItemOption: React.FC<Props> = ({
  defaultValue,
  id,
  title,
  description,
}) => {
  const [openContents, setOpenContents] = useState(false);
  const toggleOpenContents = () => {
    setOpenContents(!openContents);
  };
  return (
    <div
      className={
        openContents
          ? "enoch-acount-detail acc-active-parent"
          : "enoch-acount-detail"
      }
    >
      <div className="enoch-acount-detail-lft">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div
        className={
          openContents
            ? "enoch-acount-detail-right acc-active"
            : "enoch-acount-detail-right"
        }
      >
        <div className="enoch-acount-detail-bk">
          <span className="enoch-acount-view-btn">
            <a
              href="#"
              className="enoch-acount-view-cls enochaccordion-block"
              onClick={toggleOpenContents}
            >
              Change
            </a>
            <a
              href="#"
              className="
                          enoch-acount-view-cls
                          accordion-block-close
                        "
              onClick={toggleOpenContents}
            >
              close
            </a>
          </span>
        </div>
        <p>{defaultValue}</p>
      </div>
    </div>
  );
};

export default DataPrivacyItemOption;
