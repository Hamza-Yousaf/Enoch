import React from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";
import { showReportPostAlert } from "../../../state/action-creators";

const ReportPostAlert = () => {
  const dispatch = useDispatch();

  const { showReportPostAlert } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="posting-reported-msg">
      <div className="posting-reported-msg-lft">
        <span className="mr-2">
          <img src="/images/Lightning.png" className="img-fluid" alt="alert" />
        </span>
        Post reported.
      </div>
      <div className="posting-alert-msg-right">
        <span onClick={() => showReportPostAlert(false)} className="ml-4">
          <a href="#">
            <img
              src="/images/reportCross.png"
              className="img-fluid"
              alt="alert"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ReportPostAlert;
