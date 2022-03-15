import React, { useState } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";

import withApollo from "../../../lib/withApollo";

const AcceptIgonreModal = () => {
  return (
    <div className="modal mynet_acceptModal" id="my_network_Modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">

          </div>
          <div className="modal-body">
            <span className="txt_bld">Leave @Ruangsunyi, @Helloowl,
              @Yoko</span> <b>added to your friend’s list.</b>
          </div>
          <div className="modal-footer_avex_ntwork">
            <button className="modal_acpt_ok" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(AcceptIgonreModal, { getDataFromTree });
