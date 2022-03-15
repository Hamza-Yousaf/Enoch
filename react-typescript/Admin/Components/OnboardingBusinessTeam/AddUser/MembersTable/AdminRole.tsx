import React, { useState } from "react";

const AdminRole = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptionsShow = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="roles_collaps-row roles_collaps-row-2">
      <button
        className={
          showOptions
            ? "roles_collapsible roles_collapsible-4 active"
            : "roles_collapsible roles_collapsible-4"
        }
      >
        <div className="roles_collapsible-btn">
          <div className="filterfancycheckbox">
            <label className="teamfiltercheck_container">
              <input type="checkbox" name="foo" className="cbox" />
              <span className="teamfiltercheckmark"></span>
            </label>
          </div>
          <label>Admin (2)</label>
        </div>
        <div
          onClick={toggleOptionsShow}
          className="Transfer_Ticket_collapsible-icon"
        >
          <img
            src="/images/Arrow-down.png"
            alt="down"
            className="img-fluid Sup-Admin-down-2"
          />
        </div>
      </button>
      <div
        className="roles_collaps"
        style={!showOptions ? {} : { display: "block" }}
      >
        <div
          className="
                    team-deatails-tbl
                    table-responsive
                    roles-collaps-Table-sect
                    pt-0
                  "
        >
          <div className="team-table roles-collaps-Table">
            <div className="TeamtableHeading border-bottom-gray">
              <div className="TeamtableCell pl-0">&nbsp;</div>
              <div className="TeamtableCell no-border">Member</div>
              <div className="TeamtableCell">Name</div>
              <div className="TeamtableCell">Job title</div>
              <div className="TeamtableCell">Role</div>
              <div className="TeamtableCell">Inheritance</div>
              <div className="TeamtableCell">Status</div>
              <div className="TeamtableCell">Action</div>
            </div>
            <div className="tableBody">
              <div className="TeamtableRow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRole;
