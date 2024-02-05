import './Photospages.scss'
import one from '../..//assets/unsplash1.png'
import two from '../..//assets/unsplash2.png'
import three from '../..//assets/unsplash3.png'
import four from '../..//assets/unsplash4.png'
import five from '../..//assets/unsplash5.png'
import six from '../..//assets/unsplash6.png'
import seven from '../..//assets/unsplash7.png'
import eight from '../..//assets/unsplash8.png'
import nine from '../..//assets/unsplash9.png'
import ten from '../..//assets/unsplash10.png'
import ten1 from '../..//assets/unsplash11.png'
import ten12 from '../..//assets/unsplash1.png'

const PhotosPages = () => {

  // list=[{fruit}]

  return (
    <div className='PhotosPage' >
      <div className="heads">
        <h2>Your Photos</h2>
        <div className="headers">
          <span>Photo About You</span>
          <span>Your Photos</span>
          <span>Albums</span>
        </div>
        <div className="total">
          <h4>Total Photos</h4>
          <span>42 Total Photos About You</span>
         
        </div>
      </div>      
      <div className="list">
        <img src={one} alt="nopic" />
        <img src={two} alt="nopic" />
        <img src={three} alt="nopic" />
        <img src={four} alt="nopic" />

        <img src={five} alt="nopic" />
        <img src={six} alt="nopic" />
        <img src={seven} alt="nopic" />
        <img src={eight} alt="nopic" />

        <img src={nine} alt="nopic" />
        <img src={ten} alt="nopic" />
        <img src={ten1} alt="nopic" />
        <img src={ten12} alt="nopic" />

      </div>

    </div>
  )
}

export default PhotosPages