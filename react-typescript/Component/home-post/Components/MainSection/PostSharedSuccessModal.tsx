import router from "next/router";
import React from "react";
interface Props {
  success: boolean;
  setSuccess: any;
}

const PostSharedSuccessModal: React.FC<Props> = ({ success, setSuccess }) => {
  return (
    <div
      id="post-successful-modal"
      className={
        success
          ? "modal postsuccess-modal-block in"
          : "modal postsuccess-modal-block"
      }
    >
      <div className="modal-dialog">
        <div className="modal-content cancelEvent-modalBlock-content">
          <span
            onClick={() => {
              setSuccess(false);
              router.push("/feeds");
            }}
            className="cancelEvent-modalBlock-close"
          >
            <img
              src="images/selecetd-closeCross.png"
              className="img-fluid"
              alt="close"
              data-dismiss="modal"
            />
          </span>
          <div className="cancelEvent-modalBlock-header">
            <h3 className="modal-title">Post successfull</h3>
          </div>
          <div className="cancel-modalBlock-body">
            <div className="postSuccess-mid">
              <div>
                <img
                  src="images/postsuccess.png"
                  className="img-fluid"
                  alt="success"
                />
              </div>
              <p>Post successful. View</p>
            </div>
            <div className="postSuccess-bottom">
              <h3>Share the post on your profile</h3>
              <p>Increase engagement by sharing your personal connections</p>
            </div>
            <div className="cancelEvent-btn-grp">
              <button className="cancelEvent-no-btn" data-dismiss="modal">
                Not now
              </button>
              <button
                onClick={() => {
                  setSuccess(false);
                  router.push("/feeds");
                }}
                className="cancelEvent-yes-btn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSharedSuccessModal;
