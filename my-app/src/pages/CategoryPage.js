import React from 'react';
import { useParams } from 'react-router-dom';
import useTicketmaster from '../api/useTicketmaster';
import '../styles/CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();

  // Må oversette slug til engelsk, siden Ticketmaster API bruker engelsk - dermed vil den ikke kunne finne eventer hvis vi bruker norsk slug.
  const categoryMap = {
    musikk: 'music',
    teater: 'theatre',
    sport: 'sports',
  };

  const translatedCategory = categoryMap[slug.toLowerCase()] || slug;

  const { data: events, loading, error } = useTicketmaster('events', {
    classificationName: translatedCategory,
    size: 12, // Antall eventer som skal hentes
  });

  return (
    <main className="category-page"> 
      <h1>{slug.charAt(0).toUpperCase() + slug.slice(1)}</h1>

      {loading && <p>Laster inn...</p>}
      {error && <p>Feil: {error.message}</p>}
      {!loading && events?.length === 0 && <p>Ingen eventer funnet.</p>}

      <div className="event-grid">
        {events?.map(event => (
          <article key={event.id} className="event-card"> 
            <img src={event.images?.[0]?.url} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.dates?.start?.localDate}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
