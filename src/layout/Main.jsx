import './Main.scss';
import MainContent from './MainContent';
import SideBar from './SideBar';


const Main=()=>{
    return (
       <div className="main">
         <div className="sidebar">
          <SideBar/>
         </div>
         <div className="main-content">
          <MainContent/>
         </div>
       </div>
    )
};

export default Main;