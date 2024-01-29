import React from 'react'
import Avator from '../assets/profile-image.png'
import './components/header.scss'

const Header = () => {
  return (
    <div className='main'>
        <button type='text' placeholder='Edit Profile'></button>
      <div className="profile-image">
        <img src= {Avator} alt="" />
      </div>

    </div>
  )
}

export default Header