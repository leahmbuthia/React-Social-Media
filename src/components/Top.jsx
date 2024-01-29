import React from 'react'
import BackGround from "../assets/profile-background.png"
import Avatar from "../assets/avatar.png"
import './top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <input type="text"placeholder='Edit Profile' />
          <img src={BackGround} alt="noimage" />
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
    </div>
  );
}

export default Top