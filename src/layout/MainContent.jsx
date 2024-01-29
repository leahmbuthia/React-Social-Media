import "./MainContent.scss"
import ShortCuts from "../components/ShortCuts";
import Groups from "../components/Groups";
import Contacts from "../components/Contacts";
import Top from "../components/Top";

import Left from "../components/Left";
import BigCard from "../components/BigCard";

function MainContent() {
  return (
    <div className="leftContent">
      <div className="rightSide">
        <div className="top">
          <Top/>
        </div>
        <div className="left">
          <Left/>
        </div>
        <div className="bottom">
          <BigCard/>
        </div>
       
      </div>
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <ShortCuts />
        </div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default MainContent