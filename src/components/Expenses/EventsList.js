import "./EventsList.css";
import EventItem from "./EventItem";

const EventsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="events-list__fallback">Found no events</h2>;
  }
  return (
    <ul className="events-list">
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          eventTitle={event.eventTitle}
          amount={event.amount}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventsList;
