import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../state/index";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { bindActionCreators } from "redux";

const LeftSideBar: React.FC = () => {
 
  const dispatch = useDispatch();
  const { changeNetworkContent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const changeNetworkContentHandler = (tabName: string) => {
    changeNetworkContent(tabName);
  };

  return (
    <>
      <div className="col-lg-3 p-0">
        <div className="MyNetworkLeftCol-sect">
          <h2>Manage my network</h2>
          <ul className="ManageMyNetwork-list">
            <li onClick={()=> changeNetworkContentHandler("all-connecttion")}>Connections</li>
            <li onClick={()=> changeNetworkContentHandler("contacts")}>Contacts</li>
            <li>Invitations</li>            
            <li onClick={()=> changeNetworkContentHandler("people-follow")}>People | Follow</li>
            <li>Events</li>
            <li>Live zone</li>
            <li>Spheres</li>
            <li>Newsletters</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default withApollo(LeftSideBar, { getDataFromTree });