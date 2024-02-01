import "./MainContent.scss";
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
     
    </div>
  );
}
export default MainContent