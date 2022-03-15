import React from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/index";
import { useDispatch } from "react-redux";

const CopyLinkAlert = () => {
  const dispatch = useDispatch();

  const { showCopyLinkAlert } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="posting-alert-msg">
      <div className="posting-alert-msg-lft">
        <span className="mr-2">
          <img src="/images/postSucess.png" className="img-fluid" alt="alert" />
        </span>
        Link copied to clipboard.
      </div>
      <div className="posting-alert-msg-right">
        <a href="#">View post</a>
        <span onClick={() => showCopyLinkAlert(false)} className="ml-4">
          <a href="#">
            <img
              src="/images/greencross.png"
              className="img-fluid"
              alt="alert"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default CopyLinkAlert;
