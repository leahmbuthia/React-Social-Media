import React from 'react'
import './Group.scss'
import Search from '../..//assets/search-icon.png'
import Center from './Center'
import Bottom from './Bottom'

const Groups = () => {
  return (
    <div className='Group'>
        <div className="head">
        <h2>Groups</h2>
        <div className="search">
        <img src={Search} alt="Search" />
        <span>
        <input type="text" placeholder=" + Create New Group" />
      </span>
      </div>
        </div>
        <Center/>
        <Bottom/>
        </div>
  )
}

export default Groups