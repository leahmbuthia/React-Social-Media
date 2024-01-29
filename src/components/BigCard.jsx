import React from 'react'
import Bottom from './Bottom'
import './bigcard.scss'
import Card from './Card'

const BigCard = () => {
  return (
    <div className='items' style={{flexDirection: 'column'}}>
        <Bottom/>
        <Card/>
    </div>
  )
}

export default BigCard