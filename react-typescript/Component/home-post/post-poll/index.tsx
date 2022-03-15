import React, { useState } from 'react'

const PostPoll: React.FC = () => {
  return (
    <>
      <div className='posting-steps-tab-sect'>
        <div id='Poll' className='posttabcontent post-d-block'>
          <div className='posting-steps-poll'>
            <form>
              <div className='steps-poll-input-grp'>
                <div className='poll-input-label'>Your question</div>
                <div className='poll-input-field'>
                  <input type='text' placeholder='Placeholder' />
                </div>
              </div>
              <div className='steps-poll-input-grp'>
                <div className='poll-input-label'>Option 1</div>
                <div className='poll-input-field'>
                  <input type='text' placeholder='Placeholder' />
                </div>
              </div>
              <div className='steps-poll-input-grp'>
                <div className='poll-input-label'>Option 2</div>
                <div className='poll-input-field'>
                  <input type='text' placeholder='Placeholder' />
                </div>
              </div>
              <div className='step-poll-addOption'>
                <a href='#' className='btn poll-addOption-btn'>
                  + Add Options
                </a>
              </div>
              <div className='steps-poll-input-grp'>
                <div className='poll-input-label'>Poll duration</div>
                <div className='poll-input-field'>
                  <input type='text' placeholder='Type something' />
                </div>
              </div>
              <p className='poll-bottm-txt'>
                We don’t allow requests for political opinions, medical
                information or other sensitive data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default PostPoll
