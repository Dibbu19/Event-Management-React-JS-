import "./EventDate.css";

function EventDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="event-date">
      <div className="event-date_month">{month}</div>
      <div className="event-date_year">{year}</div>
      <div className="event-date_day">{day}</div>
    </div>
  );
}
export default EventDate;
