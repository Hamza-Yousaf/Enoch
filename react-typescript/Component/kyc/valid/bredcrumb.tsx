import React, { useState } from 'react'

const BredCrumbValid: React.FC = () => {
  return (
    <div className='row'>
      <div className='dashboard-header-bredcrumb'>
        <div className='ezl-dashboard-container'>
          <div className='col-12'>
            <ul>
              <li className='mr-2'>
                <img
                  src='/images/bread-crumb-icon-home.png'
                  alt='icon'
                  className='img-fluid'
                />{' '}
              </li>
              <li className='mr-1'>
                <a href='#' className='dsh-active-black'>
                  {' '}
                  Individual KYC /{' '}
                </a>
              </li>
              <li>
                <a href='#' className='dsh-active'>
                  {' '}
                </a>
              </li>
              <li>
                <a href='#'> Status Update</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BredCrumbValid
