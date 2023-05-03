import { useState } from "react";
import Events from "./components/Expenses/Events";
import NewEvent from "./components/NewExpense/NewEvent";

const DUMMY_EVENTS = [
  {
    id: "e1",
    eventTitle: "Event1",
    amount: "94.12",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    eventTitle: "Event2",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    eventTitle: "Event3",
    amount: "288",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e4",
    eventTitle: "Event4",
    amount: "180",
    date: new Date(2022, 2, 14),
  },
];

function App() {
  const [events, setEvents] = useState(DUMMY_EVENTS);

  const addEventHandler = (event) => {
    setEvents((prevEvents) => {
      return [event, ...prevEvents];
    });
  };

  return (
    <div>
      <NewEvent onAddEvent={addEventHandler}></NewEvent>
      <Events items={events} />
    </div>
  );
}

export default App;
