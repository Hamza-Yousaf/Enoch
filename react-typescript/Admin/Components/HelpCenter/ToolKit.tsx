import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const TabItem = dynamic(() => import("./TabItem"));
const TableSearchInput = dynamic(() => import("./TableSearchInput"));
import { TableActionData } from "../../utilsData/TicketsTableData";
const TableAction = dynamic(() => import("./TableAction"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";

const ToolKit = () => {
  const dispatch = useDispatch();

  const { changeMessageTab, showCreateTicketInputs } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const changeTab = (tab: string) => {
    changeMessageTab(tab);
  };

  const showTicketCreateInputs = () => {
    showCreateTicketInputs(!showCreateTicketInputsValue);
  };

  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );

  const showCreateTicketInputsValue = useSelector(
    (state: State) => state.showCreateTicketInputs["showCreateTicketInputs"]
  );

  return (
    <div className="help-center-inbox">
      <div className="help-center-inbox-lft">
        <ul>
          <TabItem changeTab={changeTab} name={"INBOX"} count={"5"} />
          <TabItem changeTab={changeTab} name={"SENT"} count={""} />
          <TabItem changeTab={changeTab} name={"DRAFT"} count={""} />
        </ul>
      </div>
      <div className="help-center-inbox-right">
        <TableSearchInput />
        <div
          className={
            messageTab !== "DRAFT"
              ? "help-option-group"
              : "help-option-group disable-rest-btn"
          }
        >
          <ul>
            {TableActionData.map((data, key) => {
              return (
                <TableAction
                  key={key}
                  name={data.name}
                  images={data.images}
                  itemClass={data.itemClass}
                  liClass={data.liClass}
                />
              );
            })}
          </ul>
        </div>
        <div onClick={showTicketCreateInputs} className="help-create-tckt">
          <span className="btn create-tckt-btn">CREATE TICKET</span>
        </div>
      </div>
    </div>
  );
};

export default ToolKit;
