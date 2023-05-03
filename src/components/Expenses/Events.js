import React, { useState } from "react";
import Card from "../UI/Card";
import "./Events.css";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";
import EventsChart from "./EventsChart";

function Events(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEvents = props.items.filter((event) => {
    return event.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="events">
        <EventsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></EventsFilter>
        <EventsChart events={filteredEvents}></EventsChart>
        <EventsList items={filteredEvents}></EventsList>
      </Card>
    </div>
  );
}
export default Events;
