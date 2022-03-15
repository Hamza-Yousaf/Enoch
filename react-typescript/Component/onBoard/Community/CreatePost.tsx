import React from "react";

const CreatePost = () => {
  return (
    <div className="enoch-community-creat-post">
      <div className="enoch-community-creat-post-lft">
        <span>
          <img src="/images/post-user.png" className="img-fluid" alt="user" />
        </span>
        <div className="home-post-input">Share </div>
      </div>
      <div className="enoch-community-creat-post-right">
        <ul>
          <li>
            <img
              src="/images/post-Image.png"
              className="img-fluid"
              alt="Photo"
            />
          </li>
          <li>
            <img
              src="/images/post-Video.png"
              className="img-fluid"
              alt="Video"
            />
          </li>
          <li>
            <img
              src="/images/post-Event.png"
              className="img-fluid"
              alt="Event"
            />
          </li>
          <li>
            <img
              src="/images/post-Article.png"
              className="img-fluid"
              alt="Write Article"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreatePost;
