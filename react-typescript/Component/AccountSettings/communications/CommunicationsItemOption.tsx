import React, { useState } from "react";

interface Props {
  title: string;
  description: string;
  defaultValue: string;
  id: string;
}

const CommunicationsItemOption: React.FC<Props> = ({
  title,
  description,
  defaultValue,
  id,
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
      <div className="enoch-acount-detail-block">
        <div className="enoch-acount-detail-lft">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        {id === "get-notification" ? (
          <div
            className={
              openContents
                ? "enoch-acount-detail-right acc-active"
                : "enoch-acount-detail-right"
            }
          >
            <div className="enoch-acount-detail-bk">
              <span className="enoch-acount-view-btn">
                <a href="#" className="enoch-acount-view-cls">
                  <img
                    src="images/communicate.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </a>
              </span>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default CommunicationsItemOption;
