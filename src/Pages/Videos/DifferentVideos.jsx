import './DifferentVideos.scss'
import music from '../..//assets/vedio1.png'
import users from '../..//assets/groupusers.png'
import Dad from '../..//assets/vedio2.png'
import Kid from '../..//assets/kid.png'
const DifferentVideos = () => {

  return (
    <div className="VideosItems">
    <div className="Videos">
        <div className="Video1">           
        <img src={music} alt="" />
        <div className="Music">
            <h4>Music</h4>
            <img src={users} alt="nopic" />
        </div>
        </div>
        <button> See All</button>
    </div>

    <div className="Videos">
        <div className="Video1">           
        <img src={Dad} alt="" />
        <div className="Music">
            <h4>Family</h4>
            <img src={users} alt="nopic" />
            {/* <button>See all</button> */}
        </div>
        </div>
        <button> See All</button>
    </div>
    <div className="Video">
        <div className="Video2">           
        <img src={Kid} alt="" />
        <div className="Music">
            <h4>Kids  </h4>
            <button>See all</button>
        </div>
        </div>
       
    </div>
   
</div>
  )
}

export default DifferentVideos
