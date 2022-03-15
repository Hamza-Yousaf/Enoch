import React from "react";

interface Props {
  handleMarkAll: any;
  markAll: any;
}

const MarkAllSent: React.FC<Props> = ({ handleMarkAll, markAll }) => {
  return (
    <div className="fancycheckbox">
      <label className="filtercheck_container">
        <input
          onChange={handleMarkAll}
          type="checkbox"
          checked={markAll}
          className="buttons cebox"
        />
        <span className="filtercheckmark"></span>
      </label>
    </div>
  );
};

export default MarkAllSent;
