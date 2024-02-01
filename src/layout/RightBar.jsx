import React from 'react'
import './RightBar.scss'
import ShortCuts from '../components/ShortCuts'
import Contacts from '../components/Contacts'
import Groups from '../components/Groups'
const RightBar = () => {
  return (
    <div className='rightSides'> 
       <div className="leftSides">
        <div className="sidebar-shortCuts">
          <ShortCuts/>
        </div>
        <div className="SideProfile">
          <Contacts/>
        </div>
        <div className="sidenav-menu">
          <Groups/>
        </div>
      </div>  
    </div>
  )
}

export default RightBar