import React from 'react'
import phone from '../..//assets/Group2.png'
import users from '../..//assets/groupusers.png'
import UD from '../..//assets/Avatargroup1.png'
import UI from '../..//assets/Avatargroup2.png'
import laptop from '../..//assets/Group3.png'

const CenterItems = () => {

  return (
    <div className="GroupItems">
        <div className="Groups">
            <div className="Group1">
                <div className="header">
                    <img src={UD} alt="NOPIC" />
                    <div className="details">
                        <h2>UI/U Designer</h2>
                        <p>Bandung . 7 posts a day</p>
                    </div>
                    {/* icon */}
                </div>
                <img src={phone} alt="" />
                <div className="join">
                    <h4>join Group</h4>
                    <img src={users} alt="nopic" />
                </div>
            </div>
        </div>

        <div className="Groups">
            <div className="Group2">
                <div className="header">
                    <img src={UI} alt="NOPIC" />
                    <div className="details">
                        <h2>User Interface</h2>
                        <p>Jakarta . 7 posts a day</p>
                    </div>
                    {/* icon */}
                </div>
                <img src={laptop} alt="" />
                <div className="join">
                    <h4>join Group</h4>
                    <img src={users} alt="nopic" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default CenterItems