import React from 'react'
import BackGround from "../assets/profile-background.png"
import Avatar from '../assets/profile-image.png'
import './top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          <button type="onSubmit">Edit Profile</button>
          {/* <img src={BackGround} alt="noimage" class="background-image" /> */}
        </div>
        <div className="avatar">

          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
    </div>
  );
}

export default Top