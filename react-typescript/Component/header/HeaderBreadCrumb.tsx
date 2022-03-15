import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import dynamic from "next/dynamic";
const DeleteAlert = dynamic(() => import("../HelpCenter/TicketsTable/DeleteAlert"));


interface Props {
  mainPath: string;
  subPath: string;
  innerSubPath: string;
}

export const HeaderBreadCrumb: React.FC<Props> = ({
  mainPath,
  subPath,
  innerSubPath,
}) => {
  const dispatch = useDispatch();

  const { changeInnerPath } = bindActionCreators(actionCreators, dispatch);

  const innerPath = useSelector((state: State) => state.innerPath.innerPath);

  return (
    <div className="row">
      <div className="dashboard-header-bredcrumb">
        <div className="ezl-dashboard-container">
          <div className="col-12 p-md-0">
            <ul>
              <li className="mr-2">
                <img
                  src="/images/bd-icon.png"
                  alt="icon"
                  className="img-fluid"
                />
              </li>
              <li className="mr-1">
                <a href="#">
                  {mainPath} {subPath ? "/" : ""}
                </a>
              </li>
              <li>
                <a href="#" className="dsh-active">
                  {subPath} {innerPath ? " / " : ""}
                </a>
              </li>
              <li>
                <a href="#"> {innerPath}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DeleteAlert />
    </div>
  );
};
