import React from "react";

interface Props {
  reason: any;
  title: any;
  detailedReason: any;
  setDetailedReason: any;
}

const ReportReason: React.FC<Props> = ({
  reason,
  title,
  detailedReason,
  setDetailedReason,
}) => {
  return (
    <li
      onClick={() => {
        setDetailedReason(reason);
      }}
    >
      <label className="container">
        <div className="Report-post-Modal-form-label">
          <h4>{title}</h4>
          <h5>{reason}</h5>
        </div>
        <input type="radio" name="radio" checked={detailedReason === reason} />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default ReportReason;
