import avatar from '../assets/profile-image.png'
import live from '../assets/video.png'
import image from '../assets/image.png'
import star from '../assets/star.png'
import './mind.scss'

const Mind = () => {
  return (
    <div className='mind'>
      <img src={avatar} alt="angie" />
      <span>
        <input type="text" placeholder="what's on your mind?" />
      </span>
      <hr />
      <div className="icons">
        <div className="mycons">
          <img src={live} alt="live-video" /> <span>Live Video</span>
        </div>
        <div className="mycons">
          <img src={image} alt="image/video" /> <span>Image/Video</span>
        </div>
        <div className="mycons">
          <img src={star} alt="activity" /> <span>Activity</span>
        </div>
      </div>
    </div>
  );
}

export default Mind
