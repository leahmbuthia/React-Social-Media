import React from 'react'
import Intro from '../components/Intro'
import Photos from './Photos';
import Content from './Content';
import './bottom.scss'



const Bottom = () => {
  return (
    <>
    <div className='bottom'>
      <Content />
      <Intro />
      <Photos />
      
    </div>
    </>
  );
}

export default Bottom