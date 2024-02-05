import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from '../Pages/Timeline/Timeline';
import MainContent from './MainContent';
import RightBar from './RightBar';
import SideBar from './SideBar';
import './Home.scss'
import Friends from '../Pages/Friends/Friends';
import Groups from '../Pages/Group/Groups';
import Videos from '../Pages/Videos/Videos';

import Events from '../Pages/Events/Events';
import Navbar from './Navbar';
import PhotosPages from '../Pages/Photos/PhotoPages';

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
                       <Route path="/Photos" element={<PhotosPages/>}/>
                       <Route path="/events" element={<Events/>}/>
                    
                    </Routes>
            </div>
            <div className="rightSid">
                <RightBar />
            </div>
        </div>
    );
};

export default Home;
