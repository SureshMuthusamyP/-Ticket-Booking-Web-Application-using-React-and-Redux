import React from 'react';


const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventCard;