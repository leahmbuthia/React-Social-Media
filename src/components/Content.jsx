import React from 'react'
import './Content.scss'
import Loading from '../assets/parameter.png'

const Content = () => {
  return (
      <div>
          <div className="complete-profile">
              <h2>Complete Your Profile</h2>
              <img src={ Loading } alt="load" /> 
              
          </div>
    </div>
  )
}

export default Content