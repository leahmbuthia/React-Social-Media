import React from 'react';
import './Notification.scss';
import { useState } from 'react';
import Cancel from '../assets/cancel.png.png';
import Pro from '../assets/profile-image.png';
import wade from '../assets/Avatar (1).png';
import jane from '../assets/Avatar (2).png';
import esther from '../assets/Avatar (3).png';
import cameron from '../assets/Avatar (4).png';
import brooklyn from '../assets/Avatar (5).png';
import Bro from '../assets/Avatar (6).png';
import Sizzy from '../assets/Avatar (7).png';
import Cuzo from '../assets/Avatar (8).png';


const Notification = () => {
    const [showNotification, setShowNotification] = useState(true);
    const hideNotification = () => {
        setShowNotification(false);
    };
    const today = [
        {
            icon: Pro,
            name: 'Besee Copper',
            message: 'started following you'
        },
        {
            icon: wade,
            name: 'Wade Warren',
            message: 'started following you'
        },
        {
            icon: jane,
            name: 'Jane Cooper',
            message: 'started following you'
        },
        {
            icon: esther,
            name: 'Esther Howard',
            message: 'started following you'
        },
        {
            icon: cameron,
            name: 'Warren W',
            message: 'started following you'
        },
        {
            icon: brooklyn,
            name: 'BWarren',
            message: 'started following you'
        },
        {
            icon: Bro,
            name: 'Warren',
            message: 'started following you'
        }
    ];

    const yesterday = [
        {
            icon: Sizzy,
            name: 'Warren',
            message: 'started following you'
        },
        {
            icon: Cuzo,
            name: 'Warren',
            message: 'started following you'
        }
    ];

    return (
        <>
        {showNotification && (
        <div className='notification'>
            <div className="header">
                <h2>Notifications</h2>
                <img src={Cancel} alt="cancel"
                 className="cancel-button" onClick={hideNotification} />
            </div>
            <div className="name">
                <button style={{color: 'rgba(37,99,235,1)'}}>Notification</button>
                <button>Unread</button>
            </div>
            <h2>TODAY</h2>
            <div className="notificationItems">
                {today.map((item, index) => (
                    <div className="today" key={index}>
                        <div className="items-items">
                            <img src={item.icon} alt={item.name} />
                            <div className="itemName">
                                <p>{item.name}</p>
                                <p>{item.message}</p>
                            </div>
                            <span>08:15</span>
                        </div>
                    </div>
                ))}
            </div>
            <h2>YESTERDAY</h2>
            <div className="notificationItems">
                {yesterday.map((item, index) => (
                    <div className="today" key={index}>
                        <div className="items-items">
                            <img src={item.icon} alt={item.name} />
                            <div className="itemName">
                                <p>{item.name}</p>
                                <p>{item.message}</p>
                            </div>
                            <span>08:15</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
         )}
         </>
    );
};

export default Notification;
