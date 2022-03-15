import React, { useEffect, useState } from "react";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";


const CreateFirstPostModal = () => {
  return (
    <>
      <div className="Create-Post-Modal-sect">
        {/* <!-- Modal --> */}
        <div className="modal fade create-post-modal-body" id="CreatePostModal" role="dialog">
          <div className="modal-dialog">

            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="Create-post-modal-header">
                <h4 className="modal-title">Create your first post</h4>
                <button className="close" data-dismiss="modal"><img src="images/create-post-modal-Cross.png" alt="icon" className="imf-fluid" /></button>
              </div>
              <div className="Create-post-modal-body">
                <p>Welcome to your new community, Enoch/Community name. Set for your community and welcome new members with a post</p>
                <div className="Create-post-modal-btns">
                  <button>Continue</button>
                  <button>Create a Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(CreateFirstPostModal, { getDataFromTree });
