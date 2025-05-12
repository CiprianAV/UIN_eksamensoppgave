import React from 'react';
import { Link } from 'react-router-dom';
import useTicketmaster from '../api/useTicketmaster';

export default function FeaturedEvents() {

    const festivalNames = [
        'Findings',
        'Neon',
        'Skeikampenfestivalen',
        'Tons of Rock'
    ];

    const { data: events, loading, error } =
    useTicketmaster('events', { size: 4, classificationName: 'music', countryCode: 'NO'});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const featured = events.filter(e => festivalNames.includes(e.name));

    //console logger her for å sjekke hvilken navner kommer tilbake fra Ticketmaster
    console.log('All music events:', events.map(e => e.name));
    console.log('Filtered festivals:', featured.map(e => e.name))

    return (
        <section>
            <h2>Featured Festivals</h2>
            <div className="event-list">
                {events.map(e => (
                    <article key={e.id} className="event-card">
                        <figure>
                            <img src={e.images[0].url} alt={`${e.name} poster`} style={{width: '100%'}}/>
                            <figcaption>{e.name}</figcaption>
                        </figure>
                        <Link to={`/event/${e.id}`}>
                            <button>Learn more</button>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}