import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from '../Pages/Timeline/Timeline';
import MainContent from './MainContent';
import RightBar from './RightBar';
import SideBar from './SideBar';
import './Main.scss'
import Friends from '../Pages/Friends/Friends';
import Groups from '../Pages/Group/Groups';
import Videos from '../Pages/Videos/Videos';
import Photos from '../Pages/Photos/Photos';
import Events from '../Pages/Events/Events';

const Main = () => {
    return (
        <div className="main">
            <div className="sideba">
                <SideBar />
            </div>
            <div className="main-contents">
                
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/friends" element={<Friends/>} />
                        <Route path="/groups" element={<Groups/>} />
                       <Route path="/videos" element={<Videos/>}/>
                       <Route path="/Photos" element={<Photos/>}/>
                       <Route path="/events" element={<Events/>}/>
                        {/* Add more routes as needed */}
                    </Routes>
                
            </div>
            <div className="rightSid">
                <RightBar />
            </div>
        </div>
    );
};

export default Main;
