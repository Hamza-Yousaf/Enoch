import React from "react";
import dynamic from "next/dynamic";
const UserInThread = dynamic(() => import("./UserInThread"));
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state/index";

interface Props {
  userThread: any;
}

const UsersSection: React.FC<Props> = ({ userThread }) => {
  const dispatch = useDispatch();

  const { showAddToThreadModal, showTransferTicketModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const showAddToThreadModalValue = useSelector(
    (state: State) => state.showAddToThreadModal
  );

  const toggleAddToThreadModal = () => {
    showAddToThreadModal(true);
  };

  const openTicketTransferModal = () => {
    showTransferTicketModal(true);
  };

  return (
    <div className="tableRow-collapse-block-right">
      <div onClick={toggleAddToThreadModal} className="msg-thread-collapse-btn">
        <img
          src="/images/Add.png"
          alt="add"
          className="img-fluid"
          data-toggle="modal"
          data-target="addthread-modal"
        />
      </div>
      <h3 className="msg-thread-head">
        <span style={{ cursor: "pointer" }} onClick={openTicketTransferModal}>
          Message thread
        </span>
        <span className="paticipants">2 Participents</span>
      </h3>
      <div className="hlpcenter-message-thrd-block">
        <ul>
          {userThread?.map((userOrAction: any, key: any) => {
            if (userOrAction.type === "customer") {
              return (
                <UserInThread
                  key={key}
                  userImg={userOrAction.userImg}
                  date={userOrAction.date}
                  userType={userOrAction.type}
                  role={""}
                  activity={""}
                  userName={"You"}
                  user1Img={null}
                  user1Name={null}
                  user1Role={null}
                  user2Img={null}
                  user2Name={null}
                  user2Role={null}
                />
              );
            } else if (userOrAction.type === "support") {
              return (
                <UserInThread
                  key={key}
                  userImg={userOrAction.userImg}
                  date={userOrAction.date}
                  userType={userOrAction.type}
                  role={userOrAction.role}
                  activity={""}
                  userName={userOrAction.userName}
                  user1Img={null}
                  user1Name={null}
                  user1Role={null}
                  user2Img={null}
                  user2Name={null}
                  user2Role={null}
                />
              );
            } else if (userOrAction.type === "action") {
              return (
                <UserInThread
                  key={key}
                  userType="action"
                  userImg={""}
                  date={""}
                  role={""}
                  activity={userOrAction.activity}
                  userName={""}
                  user1Img={null}
                  user1Name={null}
                  user1Role={null}
                  user2Img={null}
                  user2Name={null}
                  user2Role={null}
                />
              );
            } else if (userOrAction.type === "doubleAction") {
              return (
                <UserInThread
                  key={key}
                  userType="doubleAction"
                  userImg={""}
                  date={""}
                  role={""}
                  activity={userOrAction.activity}
                  userName={""}
                  user1Img={userOrAction.user1Img}
                  user1Name={userOrAction.user1Name}
                  user1Role={userOrAction.user1Role}
                  user2Img={userOrAction.user2Img}
                  user2Name={userOrAction.user2Name}
                  user2Role={userOrAction.user2Role}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersSection;
