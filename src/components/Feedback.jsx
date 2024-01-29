import React from 'react'
import './Feedback.scss'
import avatar from '../assets/profile-image.png'
import pink from '../assets/flower.png'
import blue from '../assets/wheel.png'
import like from '../assets/heart.png'
import comment from '../assets/message-circle.png'
import share from '../assets/share.png'
import smiley from '../assets/mood-smile.png'
import link from '../assets/ink.png'

const Last = () => {
  return (
    <div className="container">
      <div className="posts">
        <img src={avatar} alt="angie" />
        <h1>Angela Lee</h1>
        <p>56 mins ago</p>
        <div className="posting">
          <p>
            Here are some photography works that I made on the weekend with some
            of my friends, happy for that!
          </p>
          <div className="photos">
            <img src={pink} alt="pink" />
            <img src={blue} alt="blue" />
          </div>
          <hr />
          <div className="likes">
            <img src={like} alt="like" />
            <span>2.6K Likes</span>
            <img src={comment} alt="comment" />
            <span>297 Comments</span>
            <img src={share} alt="share" />
            <span>201 Share</span>
          </div>
          <hr />
              </div>
              <div className="message">
                  <input type="text" placeholder='Write your message...' /> <span><img src={smiley} alt="smiley" /></span><span><img src={link} alt="link" /></span>
              </div>
      </div>
    </div>
  );
}

export default Last