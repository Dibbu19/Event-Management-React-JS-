// import React, { useState } from "react";
import EventDate from "./EventDate";
import Card from "../UI/Card";
import "./EventItem.css";
const EventItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };

  return (
    <li>
      <Card className="event-item">
        <EventDate date={props.date}></EventDate>
        <div className="event-item_description">
          <h2>{props.eventTitle}</h2>
          <div className="event-item_price">
            <h2>Rs {props.amount}</h2>
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default EventItem;
