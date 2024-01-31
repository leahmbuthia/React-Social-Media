import location from '../assets/map.png'
import dots from '../assets/dots.png'
import './intro.scss'
import briefcase from '../assets/briefcase.png'
import calender from '../assets/calendar.png'
import link from '../assets/ink.png'

const Intro = () => {
  return (
    <div className="intro">
      <div className="para-intro">
      <div className="intro-img">
      <h2>Intro</h2>
      <img src={dots} alt="dots" />
      </div>
      
        <p>
          I am an experienced joiner with <br /> well developed skills.
        </p>
        </div>
        <div className="about">
        <hr />
        <div className="address">
          <div className="address-details">
            <img src={location} alt="gps" /> <p>2972 Westheimer Rd.</p>
          </div>
          <div className="address-details">
            <img src={briefcase} alt="brief" /> <p>2972 Westheimer Rd.</p>
          </div>
          <div className="address-details">
            <img src={calender} alt="calender" /> <p>2972 Westheimer Rd.</p>
          </div>
          <div className="address-details">
            <img src={link} alt="link" /> <p>2972 Westheimer Rd.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro