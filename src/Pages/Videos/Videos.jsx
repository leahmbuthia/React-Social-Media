import React from 'react'
import './Videos.scss'
import Search from '../..//assets/search-icon.png'
import vedio1 from '../..//assets/vedio1.png'

const Videos = () => {
  return (
         <div className='vedios'>
        <div className="head">
        <h2>Videos</h2>
        <div className="search">
        <img src={Search} alt="Search" />
       
      </div>
        </div>
        <img src={vedio1} alt="" />
        </div>
  )
}

export default Videos