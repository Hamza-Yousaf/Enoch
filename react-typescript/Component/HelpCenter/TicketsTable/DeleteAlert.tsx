import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

const DeleteAlert = () => {
  const closeAlert = () => {
    setDeleteAlert("");
  };

  const dispatch = useDispatch();
  const { changeMessageTab, setDeleteAlert } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const deleteAlert = useSelector((state: State) => state.deleteAlert);

  if (deleteAlert.length > 0) {
    return (
      <div className="hDelete-alart-sect" style={{ display: "block" }}>
        <div className="hDelete-alart">
          <div className="hDelete-alart-text">
            <p>{deleteAlert}</p>
          </div>
          <div onClick={closeAlert} className="hDelete-alart-close">
            <img src="images/redcross.png" alt="X" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteAlert;
