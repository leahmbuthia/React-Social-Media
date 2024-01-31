import React from 'react'
import './Content.scss'
import Loading from '../assets/parameter.png'

const Content = () => {
  return (
    <div className="complete-profile">
    <label htmlFor="profile">Complete Your Profile</label>
    <div className="progress-input">
      <progress value={80} max={100} style={{ backgroundColor: 'yellow' }}></progress>
      <span>80%</span>
    </div>
  </div>
  )
}

export default Content