import React from "react";

interface Props {
  tabName: any;
  tabLink: any;
  tabIcon: any;
  changeTab: any;
  createPostState: any;
  tabIcon2: any;
}

const TabButton: React.FC<Props> = ({
  tabIcon,
  tabName,
  tabLink,
  changeTab,
  createPostState,
  tabIcon2,
}) => {
  return (
    <li
      onClick={() => changeTab(tabLink)}
      className={
        createPostState?.currentCreatePostTab === tabLink
          ? `posingtablinks ${
              tabLink === "photo-post" ? "photo-title" : ""
            } posting-active`
          : `posingtablinks ${tabLink === "photo-post" ? "photo-title" : ""} `
      }
    >
      <a href="#!">
        <img
          src={tabIcon}
          className="img-fluid posting-link-img"
          alt="/images"
        />
        <img
          src={tabIcon2}
          className="img-fluid posting-link-img-hov"
          alt="/images"
        />
        <span className="posting-hovr">{tabName}</span>
      </a>
    </li>
  );
};

export default TabButton;
