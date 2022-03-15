import React from "react";

interface Props {
  userType: any;
  userImg: any;
  userName: any;
  role: any;
  date: any;
  activity: any;
  user1Img: any;
  user2Img: any;
  user1Name: any;
  user2Name: any;
  user1Role: any;
  user2Role: any;
}

const UserInThread: React.FC<Props> = ({
  userType,
  userImg,
  userName,
  role,
  date,
  activity,
  user1Img,
  user1Name,
  user1Role,
  user2Img,
  user2Name,
  user2Role,
}) => {
  if (userType === "support") {
    return (
      <li>
        <div className="message-thrd-block-user">
          <div className="thread-usr-img">
            <img src={userImg} alt="user" className="img-fluid" />
          </div>
          <p className="thread-usr-txt">{userName}</p>
          <p className="thread-usr-txt1">{role}</p>
          <p className="message-thrd-date">{date}</p>
        </div>
      </li>
    );
  } else if (userType === "customer") {
    return (
      <li>
        <div className="message-thrd-block-user">
          <div className="thread-usr-img">
            <img src={userImg} alt="user" className="img-fluid" />
          </div>
          <h2>You</h2>
          <p className="message-thrd-date">{date}</p>
        </div>
      </li>
    );
  } else if (userType === "action") {
    return (
      <li className="thread-bottom">
        <div className="message-thrd-block-user">
          <p className="thread-usr-txt2">{activity}</p>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <div className="thread-split-block">
          <div className="message-thrd-block-user">
            <div className="thread-usr-img">
              <img src={user1Img} alt="user" className="img-fluid" />
            </div>
            <p className="thread-usr-txt">{user1Name}</p>
            <p className="thread-usr-txt1">{user1Role}</p>
            <p className="message-thrd-date">{date}</p>
          </div>
          <div className="message-thrd-block-user">
            <div className="thread-usr-img">
              <img src={user2Img} alt="user" className="img-fluid" />
            </div>
            <p className="thread-usr-txt">{user2Name}</p>
            <p className="thread-usr-txt1">{user2Role}</p>
            <p className="message-thrd-date">{date}</p>
          </div>
        </div>
      </li>
    );
  }
};

export default UserInThread;
