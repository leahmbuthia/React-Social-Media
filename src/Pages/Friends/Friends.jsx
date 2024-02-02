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
    <div className='friends'>
     <div className="friendsMenu">
      
      {friends &&
        friends.map((item, index) => (
          <div className='friendscontainer'>
            <div className="friendsItem" key={index}>
              <div className="profile">
                <div className="name">
              <img src={item.icon} alt={item.name} />
              <div className="menu">
              <p>{item.name}</p>
              <p>{item.mail}</p>
              </div>
              <img src={Menu} alt="menu"  />
              </div>
              <div className="message">
           <input type="text" placeholder="Message" />
           </div>
          
            </div>
          </div> 
          </div> 
        ))}
        </div>
        </div>
  )
}


export default Friends