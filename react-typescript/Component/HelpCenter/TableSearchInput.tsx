import React from "react";

const TableSearchInput = () => {
  return (
    <div className="help-search-form">
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
          <button className="help-search-form-btn" type="submit">
            <img
              className="search-img"
              src="images/help-Search.png"
              alt="search"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TableSearchInput;
