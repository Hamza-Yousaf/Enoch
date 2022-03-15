import React, { useState } from "react";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

interface SideBarItemProps {
  title: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  contents: {
    title: string;
    link: string;
  }[];
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  activeItem: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  title,
  contents,
  setActiveItem,
  activeItem,
  setCurrentTab,
}) => {
  const dispatch = useDispatch();

  const { changeInnerPath } = bindActionCreators(actionCreators, dispatch);
  const innerPath = useSelector((state: State) => state.innerPath.innerPath);

  const setToActive = (path: string): void => {
    setActiveItem(title);
    setCurrentTab(title);
    changeInnerPath(path);
    Cookie.set("currentTab", title);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index: number): void => {
    setActiveIndex(index);
  };
  return (
    <div
      onClick={() => setToActive(title)}
      className="enoch-setting-acblock-lft-panel"
    >
      <h3
        className={
          activeItem === title
            ? "enoch-setting-accordion accordion-active"
            : "enoch-setting-accordion "
        }
      >
        {/* {title} */}
        <a style={{ color: "#3f434a" }} href={`#${contents[0].link}`}>
          {title}
        </a>
      </h3>
      <ul className="tog-d-block">
        {contents.map((content, key) => {
          return (
            <li
              onClick={() => changeActiveIndex(key)}
              key={key}
              className={`${activeIndex === key ? "setting-list-active" : ""} `}
            >
              <a href={`#${content.link}`}>{content.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
