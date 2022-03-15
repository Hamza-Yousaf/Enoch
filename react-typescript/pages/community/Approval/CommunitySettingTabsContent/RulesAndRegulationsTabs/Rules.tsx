import React, { useState } from 'react'

const Rules = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [ruleDisplayed, setRuleDisplayed] = useState<string>("")
  const [reportReason, setReportReason] = useState<string>("")
  const [fullDes, setFullDes] = useState<string>("")
  const [appliesTo, setAppliesTo] = useState<boolean>(false)

  const toggleModal = () => {
    setIsModal(!isModal)
  }
  return (
    <div id="Rules" className="tabcontent">
      <div className="usermanage">
        <div className="Rules_sect">
          <div className="Rules_sect_headings">
            <div className="Rules_sect_headings_left">
              <h2>Rules</h2>
              <span><img src="/images/Icon_Artwork.svg" alt="icon" className="img-fluid" /></span>
            </div>
            <div className="Rules_sect_headings_right">
              <button className="Reorder_rules_btn">Reorder rules</button>
              <button className="Add_rule_btn" data-toggle="modal" data-target="#Add_Rules_modal" onClick={() => toggleModal()}>Add rule</button>
            </div>
          </div>
          <div className="Rules_sect_body">
            <h4>No rules yet</h4>
          </div>
        </div>
      </div>
      
        <div className='Add_Rules_modal_Sect'>
          <div className="modal fade in" id="Add_Rules_modal" role="dialog" style={{ display: isModal ? "block" : "none" }}>
            <div className="modal-dialog modal-dialog_custom">
              {/*<!-- Modal content-->*/}
              <div className="modal-content modal-content-custom">
                <div className="Add_Rules_modal_header">
                  <h2>Add rule</h2>
                  <span className="close" data-dismiss="modal" onClick={() => toggleModal()}><img src="/images/modal1.png" alt="icon" className="img-fluid" /></span>
                </div>
                <div className="Add_Rules_modal-body">
                  <div className="Add_Rules_textarea_sect">
                    <h3>Rule</h3>
                    <textarea onChange={(e) => setRuleDisplayed(e.target.value)} placeholder="Rule displayed"></textarea>
                    <p><span>100</span> Characters remaining</p>
                  </div>

                  <div className="Add_Rules_radio_sect">
                    <h3>Applies to</h3>
                    <label className="container">Posts &amp; comments
                      <input type="radio" name="radio" onChange={(e) => setAppliesTo(e.target.checked)}/>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Posts only
                      <input type="radio" name="radio" onChange={(e) => setAppliesTo(e.target.checked)} />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Comments only
                      <input type="radio" name="radio"  onChange={(e) => setAppliesTo(e.target.checked)}/>
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="Add_Rules_textarea_sect">
                    <h3>Report reason</h3>
                    <h4>Defaults to rule name if left blank</h4>
                    <textarea onChange={e => setReportReason(e.target.value)} placeholder="Reason rule is broken (e.g. “This is a photo.”)"></textarea>
                    <p><span>100</span> Characters remaining</p>
                  </div>

                  <div className="Add_Rules_textarea_sect">
                    <h3>Full description</h3>
                    <h4>Defaults to rule name if left blank</h4>
                    <textarea onChange={e => setFullDes(e.target.value)} placeholder="Enter the full description of the rule."></textarea>
                    <p className="mb-0"><span>500</span> Characters remaining</p>
                  </div>
                </div>
                <div className="Add_Rules_modal_footer">
                  <button className="Cancel_btn" data-dismiss="modal">Cancel</button>
                  <button className={ruleDisplayed && appliesTo && reportReason && fullDes ? "add_rule_btn" : "add_rule_btn disable"} data-dismiss="modal">Add new rule</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      )
}

      export default Rules