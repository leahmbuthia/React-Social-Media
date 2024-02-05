import React from 'react'
import Pro from "../..//assets/prolie.png"
import wade from "../..//assets/Avatar (1).png"
import jane from "../..//assets/Avatar (2).png"
import esther from "../..//assets/Avatar (3).png"
import cameron from "../..//assets/Avatar (5).png"
import brooklyn from "../..//assets/Avatar (6).png"
import Bro from "../..//assets/Avatar (7).png"
import Siz from "../..//assets/Avatar (8).png"
import './Timeline.scss'
import Mind from '../../components/Mind'
import Feedback from '../../components/Feedback'

function Timeline () {
  const  profile = [
    {
      icon: Pro,
      name: 'You'
   },
    
    {
        icon:wade,
        name:'Wade'
    },
    {
        icon:jane,
        name:'Jane'
    },
    {
        icon:esther,
        name:'Esther'
    },
    {
        icon:cameron,
        name:'Warren W'
    },
    {
        icon:brooklyn,
        name:'BWarren'
    },
    {
      icon:Siz,
      name:'Anglee'
  },
    {
      icon:Bro,
      name:'Anglee'
  },

]
  return (
      <div className="timeline">
      <div className="timelineMenu">
      <div className="header">
      <h3>Your Timeline</h3>
      </div>
      <div className="profile">
      {profile &&
        profile.map((item, index) => (
          <div className='profilecontainer'key={index}>
            <div className="profile-item"> 
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>  
        ))}
        </div>
        <Mind />
        <Feedback/>
        </div>
    </div>
  );

        }

export default Timeline
