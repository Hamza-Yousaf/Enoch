import React from "react";

const Pagination = () => {
  return (
    <div className="helpCenterpagination mt-4">
      <ul className="">
        <li>
          <a href="#" className="helpCenter-arow-link-lft">
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-arow-link-lft">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
        </li>
        <li className="pagi-active">
          <a href="#" className="helpCenter-page-link">
            1
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-page-link">
            2
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-page-link">
            3
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-page-link">
            ...
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-page-link">
            5
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-arow-link-right">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" className="helpCenter-arow-link-right">
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
