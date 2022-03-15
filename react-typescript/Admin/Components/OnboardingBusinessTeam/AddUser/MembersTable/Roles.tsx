import React from "react";
import { TabProps } from ".";
import dynamic from "next/dynamic";
const SuperAdminRole = dynamic(() => import("./SuperAdminRole"));
const AdminRole = dynamic(() => import("./AdminRole"));
const KycDeskRole = dynamic(() => import("./KycDeskRole"));
const SupportDeskRole = dynamic(() => import("./SupportDeskRole"));

const Roles: React.FC<TabProps> = ({ changeTab, currentTab }) => {
  return (
    <div
      id="roles"
      className={
        currentTab === "roles"
          ? "supporttabcontent FILTER-TABLE-content grid-d-block"
          : "supporttabcontent FILTER-TABLE-content"
      }
    >
      <div className="FILTER-TABLE-sect">
        <div className="FILTER-TABLE-icon">
          <img src="/images/Filter-icon.png" alt="icon" className="img-fluid" />
        </div>
        <div className="FILTER-TABLE-headings">
          <h1>FILTER TABLE</h1>
        </div>
      </div>
      <div className="roles_collaps-sect">
        <SuperAdminRole />
        <AdminRole />
        <KycDeskRole />
        <SupportDeskRole />
      </div>
    </div>
  );
};

export default Roles;
