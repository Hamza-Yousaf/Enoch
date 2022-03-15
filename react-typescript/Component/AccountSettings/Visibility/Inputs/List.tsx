import React from "react";

interface Props {
  listItems: any;
}

const List: React.FC<Props> = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item: any, key: any) => {
        return (
          <li key={key}>
            <div className="user-blocking-lft">
              <span>{item.name}</span>
              <span>{item.sinceWhen}</span>
            </div>
            <div className="user-blocking-right">
              <a href="#">Unblock</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
