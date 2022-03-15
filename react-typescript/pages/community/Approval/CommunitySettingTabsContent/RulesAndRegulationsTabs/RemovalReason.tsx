import React, { useState } from 'react'

const RemovalReason = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [reasonTitle, setReasonTitle] = useState<string>("")
  const [reasonMsg, setReasonMsg] = useState<string>("")

  const toggleModal = () => {
    setIsModal(!isModal)
  }
  return (
    <div id="RemovalReason" className="tabcontent">
      <div className="usermanage">
        <div className="RemovalReason_sect">
          <div className="RemovalReason_sect_headings">
            <div className="RemovalReason_sect_headings_left">
              <h2>Removal reasons</h2>
              <span><img src="/images/Icon_Artwork.svg" alt="icon" className="img-fluid" /></span>
            </div>
            <div className="RemovalReason_sect_headings_right">
              <button className="Add_removal_reason_btn" onClick={() => toggleModal()} data-toggle="modal" data-target="#RemovalReason_modal">Add Removal reason</button>
            </div>
          </div>
          <div className="RemovalReason_sect_body">
            <h4>No removal reasons yet</h4>
          </div>
        </div>
      </div>

      <div className="RemovalReason_modal_modal_Sect">
        {/*<!-- Modal -->*/}
        <div className="modal fade in" id="RemovalReason_modal" role="dialog" style={{ display: isModal ? "block" : "none" }}>
          <div className="modal-dialog modal-dialog_custom">
            {/*<!-- Modal content -->*/}
            <div className="modal-content modal-content-custom">
              <div className="RemovalReason_modal_header">
                <h2>Add new reason</h2>
                <span className="close" onClick={() => toggleModal()} data-dismiss="modal"><img src="/images/modal1.png" alt="icon" className="img-fluid" /></span>
              </div>
              <div className="RemovalReason_modal-body">
                <div className="RemovalReason_input_sect">
                  <input type="text" value={reasonTitle} onChange={(e) => setReasonTitle(e.target.value)} placeholder="Removal reason title" />
                  <p><span>100</span> Characters remaining</p>
                </div>
                <div className="RemovalReason_textarea_sect">
                  <h3>Reason message:</h3>
                  <h4>Hi <span>@username</span>,</h4>
                  <textarea value={reasonMsg} onChange={e => setReasonMsg(e.target.value)} placeholder="Write a reason that will communicate to the user why their post was reoved."></textarea>
                  <p><span>100</span> Characters remaining</p>
                </div>
              </div>
              <div className="RemovalReason_modal_footer">
                <button className="Cancel_btn" data-dismiss="modal">Cancel</button>
                <button className={reasonMsg && reasonTitle ? "add_reason_btn" : "add_reason_btn disable"} data-dismiss="modal">Add new reason</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RemovalReason