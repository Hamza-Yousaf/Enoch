import React from "react";

interface Props {
  setSelectedMembers: any;
  setShowNetworkMembersList: any;
  selectedMembers: any;
}

const NetworkMembersList: React.FC<Props> = ({
  setSelectedMembers,
  setShowNetworkMembersList,
  selectedMembers,
}) => {
  return (
    <ul className="setting-form-drop-scrollable">
      <li
        onClick={() => {
          setSelectedMembers([
            ...selectedMembers,
            {
              img: "images/h-DP-1.png",
              name: "Ange lina Eberle",
            },
          ]);
          setShowNetworkMembersList(false);
        }}
      >
        <div className="user-dp">
          <div className="user-dp-after-select">
            <img
              src="images/h-DP-1.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="active-status-dot">
              <img
                src="images/active-status-dot.png"
                alt="dot"
                className="img-fluid"
              />
            </div>
            <div className="share-ticket-user-name">
              <h5>
                Ange lina Eberle<span>,</span>
              </h5>
              <h6>Designer, ABC Technology</h6>
            </div>
          </div>
        </div>
      </li>

      <li
        onClick={() => {
          setSelectedMembers([
            ...selectedMembers,
            {
              img: "images/h-DP-2.png",
              name: "Ange lina Eberle",
            },
          ]);
          setShowNetworkMembersList(false);
        }}
      >
        <div className="user-dp">
          <div className="user-dp-after-select">
            <img
              src="images/h-DP-2.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="share-ticket-user-name">
              <h5>
                Ange lina Eberle<span>,</span>
              </h5>
              <h6>Designer, ABC Technology</h6>
            </div>
          </div>
        </div>
      </li>

      <li
        onClick={() => {
          setSelectedMembers([
            ...selectedMembers,
            {
              img: "images/h-DP-3.png",
              name: "Alex",
            },
          ]);
          setShowNetworkMembersList(false);
        }}
      >
        <div className="user-dp">
          <div className="user-dp-after-select">
            <img
              src="images/h-DP-3.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="share-ticket-user-name">
              <h5>
                Alex<span>,</span>
              </h5>
              <h6>Support Desk, Enoch Technology</h6>
            </div>
          </div>
        </div>
      </li>

      <li
        onClick={() => {
          setSelectedMembers([
            ...selectedMembers,
            {
              img: "images/h-DP-4.png",
              name: "Alena Jason",
            },
          ]);
          setShowNetworkMembersList(false);
        }}
      >
        <div className="user-dp">
          <div className="user-dp-after-select">
            <img
              src="images/h-DP-4.png"
              alt="avatar"
              className="img-fluid dp"
            />
            <div className="share-ticket-user-name">
              <h5>
                Alena Jason<span>,</span>
              </h5>
              <h6>Support Desk, Enoch Technology</h6>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default NetworkMembersList;
