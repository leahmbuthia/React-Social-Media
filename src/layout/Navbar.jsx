import './Navbar.scss';
import { useState } from 'react';
import LogoIcon from '../assets/logo.png';
import Responsive from '../assets/responsive.png';
import NavIcon from '../components/NavIcon';
import ActiveNotification from '../assets/active-notification.png';
import Profile from '../assets/profile-image.png';
import Chevron from '../assets/chevron-down.png';
import Message from '../assets/message-circle.png';
import SearchForm from '../components/SearchForm';
import Notification from '../Pages/Notification';

const Navbar = () => {
    const [showNotification, setNotification] = useState(false);

    
    const toggleNotification = () => {
      setNotification(!showNotification);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                
                <img src={Responsive} alt={Responsive} />
                <img src={LogoIcon} alt={LogoIcon} />
            </div>
            <div className="right-nav">
                <div className="nav-input">
                    <SearchForm />
                </div>
                <div>
                    <div className="nav-icons">
                        <NavIcon url={Message} />
                        <img src={ActiveNotification} alt="notification" onClick={toggleNotification} />
                        <img className="profile" width={50} src={Profile} alt="profile" />
                        <NavIcon url={Chevron} />
                    </div>
                </div>
            </div>
            {showNotification && (
                <div className="notifications-main">
                    <Notification />
                </div>
            )}
        </div>
    );
};

export default Navbar;
