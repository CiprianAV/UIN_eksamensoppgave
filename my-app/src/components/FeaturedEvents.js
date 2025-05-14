import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTicketmaster from '../api/useTicketmaster';
import { TM_API_KEY } from '../config';

export default function FeaturedEvents() {

    const festivalIds = [
        'Z698xZb_Z16v7eGkFy', //findings Festival
        'Z698xZb_Z17q3oP', //NEON Festival
        'Z698xZb_Z17qfa6', //Skeikampenfestivalen
        'Z698xZb_Z17q3qg' //Tons of Rock
    ];

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Promise.all(
            festivalIds.map(id =>
                fetch(
                    `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${TM_API_KEY}`
                )
                .then(res => {
                    if (!res.ok) throw new Error(`Error ${res.status}`);
                    return res.json();
                })
            )
        )
        .then(list => setEvents(list))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    //Bytte til e.id siden vi bruker id isteden for festival navner
    //const featured = events.filter(e => festivalNames.includes(e.id));

    //console logger her for å sjekke hvilken navner kommer tilbake fra Ticketmaster
    //console.log('All music events:', events.map(e => e.name));
    //console.log('Filtered festivals:', featured.map(e => e.name))

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