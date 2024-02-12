import React from "react";
import Avatar from "../assets/avatar.png";
import "./SideProfile.scss";
import { useNavigate } from "react-router-dom";

function SideProfile() {
  const navigate =useNavigate();
  const HandleMain =()=>{
    navigate('/main')
  }

  return (
    <div className="sideProfile">
      <div className="SideImage">
        <img src={Avatar} alt="avatar" onClick={HandleMain}/>
      </div>
      <div className="leftprofile">
        <p className="Profilename">Angela Lee</p>
        <p className="username">@angelalee</p>
      </div>
    </div>
  );
}

export default SideProfile;