import React, { useState } from "react";

import "./NewEvent.css";
import EventForm from "./EventForm";
const NewEvent = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveEventData = (enteredEventData) => {
    const eventData = {
      ...enteredEventData,
      id: Math.random().toString(),
    };
    props.onAddEvent(eventData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-event">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Event</button>
      )}
      {isEditing && (
        <EventForm
          onSaveEventData={onSaveEventData}
          onCancel={stopEditingHandler}
        ></EventForm>
      )}
    </div>
  );
};

export default NewEvent;
