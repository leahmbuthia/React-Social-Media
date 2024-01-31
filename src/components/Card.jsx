import React from 'react'
import Mind from './Mind'
import Feedback from './Feedback';
import "../components/Card.scss"

const Card = () => {
  return (
    <div className='card-container' >
        <Mind/>
        <Feedback/>
    </div>
  )
}

export default Card