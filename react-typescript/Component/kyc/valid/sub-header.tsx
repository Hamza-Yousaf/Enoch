import React, { useState } from 'react'

const SubHeaderValid: React.FC = () => {
  return (
    <div className='Linking-wallet-four-icons-sect'>
      <div className='four-icons-list'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='Linking-wallet-icon Linking-wallet-icon-1'>
              <div className='Linking-wallet-icon-img Linking-wallet-icon-1-img'>
                <img
                  src='/images/step-2-imgs/icon-1.png'
                  alt='step-1'
                  className='img-fluid'
                />
              </div>
              <div className='Linking-wallet-icon-text Linking-wallet-icon-1-text'>
                <h1>Step 1</h1>
                <h2>Individual Profile</h2>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='Linking-wallet-icon Linking-wallet-icon-2'>
              <div className='Linking-wallet-icon-img Linking-wallet-icon-2-img Linking-wallet-icon-img-act'>
                <img
                  src='/images/step-2-imgs/icon-2-act.png'
                  alt='step-2'
                  className='img-fluid'
                />
              </div>
              <div className='Linking-wallet-icon-text Linking-wallet-icon-2-text'>
                <h1>Step 2</h1>
                <h2>Linking Wallet</h2>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='Linking-wallet-icon Linking-wallet-icon-3'>
              <div className='Linking-wallet-icon-img Linking-wallet-icon-3-img Linking-wallet-icon-img-act'>
                <img
                  src='/images/step-4-imgs/icon-3-act.png'
                  alt='step-3'
                  className='img-fluid'
                />
              </div>
              <div className='Linking-wallet-icon-text Linking-wallet-icon-3-text'>
                <h1>Step 3</h1>
                <h2>User ID Documentation</h2>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='Linking-wallet-icon Linking-wallet-icon-4'>
              <div className='Linking-wallet-icon-img Linking-wallet-icon-4-img'>
                <img
                  src='/images/step-4-imgs/icon-4.png'
                  alt='step-4'
                  className='img-fluid'
                />
              </div>
              <div className='Linking-wallet-icon-text Linking-wallet-icon-4-text Linking-wallet-active'>
                <h1>Step 4</h1>
                <h2>KYC Validation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubHeaderValid
