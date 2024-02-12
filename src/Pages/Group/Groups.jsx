import './Group.scss'
import UD from '../..//assets/Avatargroup1.png'
import phone from '../..//assets/group2.png'
import search  from '../..//assets/search-icon.png'
import users from '../..//assets/groupusers.png'
import UI from '../..//assets/Avatargroup2.png'
import DE from '../..//assets/AvatarDE.png'
import design from '../..//assets/group3.png'
import note from '../..//assets/group4.png'
import laptop from '../..//assets/mask group (9).png'
import dots from '../..//assets/dots-vertical.png'

const Groups = () => {
  return (
    <div className="group-container">
    <div className="group-header">
      <div className="group-header-text">
        <h3>Groups</h3>
      </div>
      <div className="group-header-buttons">
        <img src={search} alt="" />
        <button> + Create New Group</button>
      </div>
    </div>
    <div className="group">
      <div className="left-text">
        <h4>Suggested for you</h4>
        <p>Groups you might be interested in</p>
      </div>
      <div className="right-text">
        <p>see all</p>
      </div>
    </div>
    <div className="image-holder">
      <div className="left-image">
        <div className="upper-cont">
          <div className="icons-text">
            <img src={UD} alt="" />
            <div className='txt'>
              <p>UI / UX Designer</p>
            <div className='txt1' >
              <p>Bandung . 7 posts a day</p>
            </div>
            </div>
          </div>
          <div className="dots">
           <img src={dots} alt="dots" />
          </div>
        </div>
        <div className="middle-cont">
          <img src={phone} alt="" />
        </div>
        <div className="lower-cont">
          <button>Join Group</button>
          <div className="lower-img">
            <img src={users} alt="" />

          </div>
        </div>
      </div>
      <div className="right-image">
        <div className="upper-cont">
        <div className="icons-text">
            <img src={UI} alt="" />
            <div className='txt'>
              <p>UI / UX Designer</p>
            <div className='txt1' >
              <p>Bandung . 7 posts a day</p>
            </div>
            </div>
          </div>
          <div className="dots">
          <img src={dots} alt="dots" />
          </div>
        </div>
        <div className="middle-cont">
          <img src={laptop} alt="" />
        </div>
        <div className="lower-cont">
          <button>Join Group</button>
          <div className="lower-imgs">
            <img src={users} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="recent-activity">
      <h4>Recent Activity</h4>
      <div className="activity-card">
        <div className="DE">
          <img src={DE} alt="" />
          {/* <img src={profile} alt="profile" /> */}
          <div className="DE-text">
            <h5>Design Enthusiast</h5>
            <p>Angela lee . 56 min ago</p>
            
          </div>
        </div>
        <div className="DE-details-text">
          <p>
            Conduct design process best practices across projects such as
            gathering insights, validating problems & solutions, delivering
            multiple fidelity levels of design, and ensure the final design is
            implemented properly on.
          </p>
        </div>
        <div className="DE-images">
          <img src={design} alt="" />
          <img src={note} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Groups
