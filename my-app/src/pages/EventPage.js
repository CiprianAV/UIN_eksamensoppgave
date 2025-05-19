import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TM_API_KEY } from '../config';
import '../styles/EventPage.css';
import ArtistCard from '../components/ArtistCard';


export default function EventPage() {
  const { id } = useParams(); // Henter id fra URL
  const [event, setEvent] = useState(null); // Setter initial verdi til null - (holder også på data.)
  const [loading, setLoading] = useState(true); // Setter initial verdi til true
  const [error, setError] = useState(null); // Setter initial verdi til null - (her lagrer vi evt feil som oppstår under henting av data)

  useEffect(() => { // Henter data fra Ticketmaster API
    async function fetchEvent() {
      setLoading(true); 
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${TM_API_KEY}`
        );
        if (!res.ok) throw new Error(`Error ${res.status}`); // Sjekker om responsen er ok
        const json = await res.json(); // Konverterer responsen til JSON 
        console.log("FULL EVENT DATA:", json);
        setEvent(json); // her har vi all infiormasjonen om eventet, slik at vi kan hente ut det vi trenger. 
      } catch (err) { 
        setError(err); 
      } finally { 
        setLoading(false); // Setter loading til false når data er hentet.
      }
    }

    fetchEvent();
  }, [id]);


  if (loading) return <p>Laster inn...</p>; // Viser loading melding
  if (error) return <p>Feil: {error.message}</p>; // Viser (evt) feilmelding
  if (!event) return <p>Ingen data funnet</p>; 

  const image = event.images?.[0]?.url; // Henter første bilde fra event.images --- Her bruker vi "?" for å sjekke om event.images finnes, og hvis det gjør det, henter vi første bilde.
  // Hvis event.images ikke finnes, vil image være undefined. Pluss at vi unngår at ting krasjer hvis det ikke finnes bilder/ eller annen informasjon.
  const genre = event.classifications?.[0]?.genre?.name; // Henter sjanger fra event.classifications
  const date = event.dates?.start?.localDate; // Henter dato fra event.dates
  const time = event.dates?.start?.localTime; // Henter tid fra event.dates
  const venue = event._embedded?.venues?.[0]?.name; // Henter sted fra event._embedded.venues

  return (
    <main className="event-detail"> 
      <h1>{event.name}</h1>

      {image && <img src={image} alt={event.name} className="event-detail__image" />}

      <ul className="event-detail__info">
        {genre && <li><strong>Genre:</strong> {genre}</li>} 
        {date && <li><strong>Dato:</strong> {date}</li>}
        {time && <li><strong>Tid:</strong> {time}</li>}
        {venue && <li><strong>Sted:</strong> {venue}</li>}
      </ul>

    {event._embedded?.attractions && (
      <>
        <h2>Artister</h2>
        <div className="artist-grid"> 
          {event._embedded.attractions.map(artist => ( // Her bruker vi event._embedded.attractions for å hente ut artistene fra eventet
            <ArtistCard // Her bruker vi ArtistCard komponenten for å vise artistene
              key={artist.id} // Her bruker vi artist.id som key for å unngå warning i konsollen
              artist={{ //
                name: artist.name, // Henter artist navn (evetuelt annen informasjon)
                image: artist.images?.[0]?.url //Her henter vi bilde. 
              }}
            />
          ))}
        </div>
      </>
    )}
    </main>
  );
}
