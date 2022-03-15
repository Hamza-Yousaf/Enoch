import React, { useState } from 'react'
import classnames from 'classnames'
interface BoardingNewExpProps {
}

interface BoardingNewExpState {
  openINT: boolean
  show: boolean
  show1: boolean
  show2: boolean
}

class BoardingNewExp extends React.Component<
  BoardingNewExpProps,
  BoardingNewExpState
> {
  constructor(props: BoardingNewExpProps) {
    super(props)
    this.state = {
      openINT: false,

      show: true,
      show1: false,
      show2: false

    }
  }

  render() {
    return (
      <div className='dApp-home-profile-collaps-content'>
        <button
          className={classnames('dApp-home-profile-collapsible', {
            active: this.state.openINT
          })}
          onClick={() => this.setState({ openINT: !this.state.openINT })}
        >
          <div className='dApp-home-profile-collaps-btn'>
            <label>Experience </label>
          </div>
        </button>
        <div className="roles_collaps">
          &nbsp;
        </div>
      </div>
    )
  }
}

export default BoardingNewExp
