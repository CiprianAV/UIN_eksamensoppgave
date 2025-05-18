import React from 'react';

const EventCard = ({ event, clickable = true }) => {
  const name = event.name;
  const image = event.images?.[0]?.url;
  const city = event._embedded?.venues?.[0]?.city?.name;
  const country = event._embedded?.venues?.[0]?.country?.name;
  const date = event.dates?.start?.localDate;

  const content = (
    <div className="event-card">
      {image && <img src={image} alt={name} />}
      <h3>{name}</h3>
      <p>{city}, {country}</p>
      <p>{date}</p>
    </div>
  );

  if (clickable) {
    return (
      <a href={`/event/${event.id}`}>
        {content}
      </a>
    );
  }

  return content;
};

export default EventCard;