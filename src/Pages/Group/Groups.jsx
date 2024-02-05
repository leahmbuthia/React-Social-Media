import React from 'react'
import './Group.scss'
import Search from '../..//assets/search-icon.png'
import CenterItems from './CenterItems'
import BottomItems from './BottomItems'

const Groups = () => {
  return (
    <div className='Group'>
      <div className="groupSearchItems">
        <div className="header">
        <h2>Groups</h2>
        <div className="search">
        <img src={Search} alt="Search" />
        <span>
        <input type="text" placeholder=" + Create New Group" />
      </span>
      </div>
        </div>
        <CenterItems/>
        <BottomItems/>
        </div>
        </div>
  )
}

export default Groups