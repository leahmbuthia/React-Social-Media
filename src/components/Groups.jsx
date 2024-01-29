import React from 'react';
import "./groups.scss"
import Group1 from "../assets/Avatar5.png";
import Group2 from "../assets/Avatar6.png";
import Group3 from "../assets/Avatar7.png";

function Groups() {
    const groupData = [
      {
        icon: Group1,
        name: "Design Enthusiast",
      },
      {
        icon: Group2,
        name: "UI Official",
      },
      {
        icon: Group3,
        name: "Web Designer",
      },
    ];
  return (
    <div className="GroupItems">
      <div className="heading">
              <p style={{textTransform: "uppercase"}}>Your Page</p>
              <p style={{color: "#2563EB"}}>See all</p>
      </div>
      {groupData &&
        groupData.map((item, index) => (
          <div className="group-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Groups