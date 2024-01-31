import avatar from '../assets/profile-image.png'
import live from '../assets/video.png'
import image from '../assets/image.png'
import star from '../assets/star.png'
import './mind.scss'

const Mind = () => {
  return (
    <div className='mind'>
      <div className="profile-mind">
      <img src={avatar} alt="angie" />
      <span>
        <input type="text" placeholder="what's on your mind?" />
      </span>
      </div>
      <hr />
      <div className="icons">
        <div className="mycons">
          <img src={live} alt="live-video" />
           <p>Live Video</p>
        </div>
        <div className="mycons">
          <img src={image} alt="image/video" /> 
          <p>Image/Video</p>
        </div>
        <div className="mycons">
          <img src={star} alt="activity" /> 
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
}

export default Mind
