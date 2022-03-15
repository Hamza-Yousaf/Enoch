import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../../Component/onBoard/header"));
import { HeaderBreadCrumb } from "../Header/HeaderBreadCrumb";
const TicketsTable = dynamic(() => import("./TicketsTable"));
const ToolKit = dynamic(() => import("./ToolKit"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
const CreateTicket = dynamic(() => import("./CreateTicket/index"));
const DeleteConfirmModal = dynamic(() => import("./TicketsTable/deleteConfirmModal"));
const ShareTicketModal = dynamic(() => import("./TicketsTable/ShareTicketModal"));
const SharedSuccessModal = dynamic(() => import("./TicketsTable/SharedSuccessModal"));
const ForwardTicketModal = dynamic(() => import("./TicketsTable/ForwardTicketModal"));
const AddToThreadModal = dynamic(() => import("./TicketsTable/Thread/AddToThreadModal"));
const TransferTicketModal = dynamic(() => import("./TicketsTable/Thread/TransferTicketModal"));

interface Props {
  currentMessageTab: string | undefined;
}

const AdminHelpCenter: React.FC<Props> = ({ currentMessageTab }) => {
  const [mainPath, setMainPath] = useState("helpcenter");
  const [subPath, setSubPath] = useState("inbox");
  const [innerSubPath, setInnerSubPath] = useState("");

  const dispatch = useDispatch();
  const { changeMessageTab, setDeleteAlert, showAddToThreadModal } =
    bindActionCreators(actionCreators, dispatch);

  const showCreateTicketInputs = useSelector(
    (state: State) => state.showCreateTicketInputs["showCreateTicketInputs"]
  );

  const showAddToThreadModalValue = useSelector(
    (state: State) => state.showAddToThreadModal
  );

  const showTransferTicketModalValue = useSelector(
    (state: State) => state.showTransferTicketModal
  );

  const stateObj = useSelector((state: State) => state);

  return (
    <>
      <div
        className="container-fluid dashboard-body-bg"
        style={showTransferTicketModalValue ? { overflow: "hidden" } : {}}
      >
        <Header />
        <HeaderBreadCrumb
          mainPath={mainPath}
          subPath={subPath}
          innerSubPath={innerSubPath}
        />

        {showCreateTicketInputs ? (
          <div className="ezl-dashboard-container">
            <CreateTicket />
          </div>
        ) : (
          <>
            <div className="row">
              <div className="ezl-dashboard-container">
                <ToolKit />
                <DeleteConfirmModal />
                <ShareTicketModal />
                <SharedSuccessModal />
                <ForwardTicketModal />
                <div className="help-center-content-block">
                  <div id="inbox" className="supporttabcontent grid-d-block">
                    <TicketsTable currentMessageTab={currentMessageTab} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showAddToThreadModalValue && <AddToThreadModal />}
      </div>
      {showTransferTicketModalValue ? <TransferTicketModal /> : ""}
    </>
  );
};

export default AdminHelpCenter;
