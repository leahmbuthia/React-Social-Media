import React from 'react'
import './Friends.scss'
import Pro from "../..//assets/prolie.png"
import wade from "../..//assets/Avatar (1).png"
import jane from "../..//assets/Avatar (2).png"
import esther from "../..//assets/Avatar (3).png"
import cameron from "../..//assets/Avatar (5).png"
import brooklyn from "../..//assets/Avatar (6).png"
import Bro from "../..//assets/Avatar (7).png"
import Siz from "../..//assets/Avatar (3).png"
import Sizzy from "../..//assets/Avatar (1).png"
import Cuzo from "../..//assets/Avatar (5).png"
import Menu from "../..//assets/dots.png"

const Friends = () => {
    const  friends = [
        {
          icon: Pro,
          name: 'You',
          mail:'@angelee'
       },
        
        {
            icon:wade,
            name:'Wade Warren',
            mail:'@angelee'
        },
        {
            icon:jane,
            name:'Jane Cooper',
            mail:'@angelee'
        },
        {
            icon:esther,
            name:'Esther Howard',
            mail:'@angelee'
        },
        {
            icon:cameron,
            name:'Warren W',
            mail:'@angelee'
        },
        {
            icon:brooklyn,
            name:'BWarren',
            mail:'@angelee'
        },
        {
          icon:Bro,
          name:'Warren',
          mail:'@angelee'
      },
      {
        icon:Siz,
        name:'Warren',
        mail:'@angelee'
    },
    {
        icon:Sizzy,
        name:'Warren',
        mail:'@angelee'
    },
    {
        icon:Cuzo,
        name:'Warren',
        mail:'@angelee'
    },

    ]
  return (
    <div className='friends'>Friends
     <div className="header">
      <h3>Your Timeline</h3>
      
      </div>
      <hr/>
      {friends &&
        friends.map((item, index) => (
          <div className='profilecontainer'>
            <div className="friends-item" key={index}>
                <div className="profie">
              <img src={item.icon} alt={item.name} />
              <img src={Menu} alt="menu" />
              </div>
         
              <p>{item.name}</p>
              <p>{item.mail}</p>
              <span>
        <input type="text" placeholder="Message" />
      </span>
              
            </div>
          </div>  
        ))}</div>
  );
}

export default Friends