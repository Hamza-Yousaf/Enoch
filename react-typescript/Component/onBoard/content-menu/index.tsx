import React, { useState } from 'react'
import classnames from 'classnames'
import dynamic from "next/dynamic";
const BoardingPost = dynamic(() => import("../post"));
const BoardingReplies = dynamic(() => import("../replies"));
const BoardingMedia = dynamic(() => import("../media"));
const BoardingLink = dynamic(() => import("../link"));

const BoardingContentMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('post')

  return (
    <>
      <div className='dApp-Posts-tab-sect'>
        <div className='dApp-Posts-tabs'>
          <div className='dApp-Posts-tab-heading tab'>
            <button
              className={classnames('tablinks dApp-Posts-tablinks', {
                active: activeMenu == 'post'
              })}
              id='defaultOpen'
              onClick={() => setActiveMenu('post')}
            >
              Posts<div className='dApp-Posts-tab-underline'></div>
            </button>

            <button
              className={classnames('tablinks dApp-Posts-tablinks', {
                active: activeMenu == 'post_replies'
              })}
              onClick={() => setActiveMenu('post_replies')}
            >
              Post and replies <div className='dApp-Posts-tab-underline'></div>
            </button>

            <button
              className={classnames('tablinks dApp-Posts-tablinks', {
                active: activeMenu == 'media'
              })}
              onClick={() => setActiveMenu('media')}
            >
              Media<div className='dApp-Posts-tab-underline'></div>
            </button>

            <button
              className={classnames('tablinks dApp-Posts-tablinks', {
                active: activeMenu == 'link'
              })}
              onClick={() => setActiveMenu('link')}
            >
              Links<div className='dApp-Posts-tab-underline'></div>
            </button>
          </div>
          {activeMenu == 'post' ? (
            <BoardingPost />
          ) : activeMenu == 'post_replies' ? (
            <BoardingReplies />
          ) : activeMenu == 'media' ? (
            <BoardingMedia />
          ) : activeMenu == 'link' ? (
            <BoardingLink />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default BoardingContentMenu
