import React from "react";

interface Props {
  data: string;
  last: boolean;
}

const TableHeadCell: React.FC<Props> = ({ data, last }) => {
  return (
    <div className={last ? "tableCell text-right" : "tableCell"}>{data}</div>
  );
};

export default TableHeadCell;
