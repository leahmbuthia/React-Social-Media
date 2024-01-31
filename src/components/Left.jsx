import React from 'react'
import './left.scss'


const Left = () => {
  return (
    <div className='below-image'>
      <div className="pro">
        Angela Lee <br />
        @angela
      </div>
      <div className="navs">
        <div className="posts">
          <h3 className='dim-header'>POSTS</h3>
          <h4>683</h4>
        </div>
        <div className="posts">
          <h3 className='dim-header'>FRIENDS</h3>
          <h4>5.7K</h4>
        </div>
        <div className="posts">
          <h3 className='dim-header'>PHOTOS</h3>
          <h4>296</h4>
        </div>
        <div className="posts">
          <h3 className='dim-header'>LIKES</h3>
          <h4>10.7K</h4>
        </div>
      </div>

    </div>
  )
}


export default Left