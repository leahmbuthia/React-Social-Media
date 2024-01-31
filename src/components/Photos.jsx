import React from 'react'
import pink from '../assets/flower.png'
import blue from '../assets/wheel.png'
import './photos.scss'

const Photos = () => {
  return (
      <div className='posts-photos'>
        <div className='photos'>
          <h2>Photos</h2>
          <p>See All</p>
          </div>
          <div className='post-photos'>
              <img src={ pink } alt="pink pic" />
              <img src={blue} alt="blue pic" />
          </div>
    </div>
  )
}

export default Photos