import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state";

interface Props {
  name: string;
  count: string;
  changeTab: (name: string) => void;
}

const TabItem: React.FC<Props> = ({ name, count, changeTab }) => {
  const messageTab = useSelector(
    (state: State) => state.messageTab["messageTab"]
  );
  return (
    <li
      onClick={() => changeTab(name)}
      className={
        messageTab === name
          ? "helptablinks h-active enable-click-btn"
          : "helptablinks enable-click-btn"
      }
    >
      <a href="#">{name}</a>
      {count.length > 0 ? <span className="inbox-msg-count">{count}</span> : ""}
    </li>
  );
};

export default TabItem;
