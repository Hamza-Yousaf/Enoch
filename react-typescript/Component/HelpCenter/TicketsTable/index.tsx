import React from "react";
import dynamic from "next/dynamic";
const Pagination = dynamic(() => import("./Pagination"));
const TableBody = dynamic(() => import("./TableBody"));
const TableHead = dynamic(() => import("./TableHead"));

interface Props {
  currentMessageTab: string | undefined;
}

const TicketsTable: React.FC<Props> = () => {
  return (
    <>
      <div className="helpCenter-deatails-tbl table-responsive">
        <div className="helpCenter-table">
          <TableHead />
          <TableBody />
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default TicketsTable;
