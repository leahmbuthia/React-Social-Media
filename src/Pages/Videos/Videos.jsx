import "./Videos.scss";
import Search from "../..//assets/search-icon.png";
import DifferentVideos from "./DifferentVideos";
import RecentVideo from "./RecentVideos";

const Videos = () => {
  return (
    <div className="VideosPage">
      <div className="header">
        <div className="video-style">
          <h2>Video</h2>
          <div className="rightSide">
            <img src={Search} alt="nopic" />
          </div>
        </div>
      </div>
      <div className="Categories">
        <div>
          <h4>Categories to explore.</h4>
        </div>
        <button className="seeAll">See All</button>
      </div>
      <div className="VideosItems">
        <DifferentVideos />
      </div>
      <div className="Activity">
        <RecentVideo />
      </div>
    </div>
  );
};

export default Videos;
