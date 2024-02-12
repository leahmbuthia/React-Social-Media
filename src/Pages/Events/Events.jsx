import calendar from "../..//assets/calendar.png";
import EventDisplay from "./EventDisplay";
import "./Events.scss";

const Event = () => {
  return (
    <div className="event-container">
      <div className="event">
        <div className="event-header">
          <h3>Find Event</h3>
          <p>. . . </p>
        </div>
        <div className="event-selection">
          <div className="selection-list">
            <ul>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">For You</a>
              </li>
              <li>
                <a href="#">Nearest</a>
              </li>
              <li>
                <a href="#">Favorite</a>
              </li>
              <li>
                <a href="#">Registered</a>
              </li>
            </ul>
            <div className="event-date">
              <img src={calendar} alt="" />
              <p>November</p>
            </div>
          </div>
        </div>

        <div className="event-grid">
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          {/* <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay />
          <EventDisplay /> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
