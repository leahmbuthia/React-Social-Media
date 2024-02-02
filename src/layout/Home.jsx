import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from '../Pages/Timeline/Timeline';
import MainContent from './MainContent';
import RightBar from './RightBar';
import SideBar from './SideBar';
import './Home.scss'
import Friends from '../Pages/Friends/Friends';
import Groups from '../Pages/Group/Groups';
import Videos from '../Pages/Videos/Videos';
import Photos from '../Pages/Photos/Photos';
import Events from '../Pages/Events/Events';
import Navbar from './Navbar';
import Notification from '../Pages/Notification';

const Home = () => {
    return (
        <div className="main">
            <div className='navbar'>
            <Navbar/> 
            </div>
            
            <div className="sideba">
                <SideBar />
            </div>
            <div className="main-contents">
                
                    <Routes>
                        <Route path="/main" element={<MainContent/>}/>
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/friends" element={<Friends/>} />
                        <Route path="/groups" element={<Groups/>} />
                       <Route path="/videos" element={<Videos/>}/>
                       <Route path="/Photos" element={<Photos/>}/>
                       <Route path="/events" element={<Events/>}/>
                       <Route path="/notifications" element={<Notification/>}/>
                        {/* Add more routes as needed */}
                    </Routes>
            </div>
            <div className="rightSid">
                <RightBar />
            </div>
        </div>
    );
};

export default Home;
