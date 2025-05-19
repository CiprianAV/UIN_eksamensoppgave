import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import '../styles/CityEvents.css';

// Lister opp forhåndsvalgte storbyer
const cities = ['Oslo', 'London', 'Paris', 'Berlin', 'Sydney', 'Sao Paulo', 'Rio de Janeiro', 'Istanbul', 'New York', 'Los Angeles'];

const CityEvents = () => {
// State for valgt by og tilhørende events
  const [selectedCity, setSelectedCity] = useState('Oslo');
  const [events, setEvents] = useState([]);

// Henter arrangementer når man endrer valg av by 
  useEffect(() => {
    const fetchCityEvents = async () => {
      const API_KEY = 'zxCli9MGG71C6B9BbjZUNet8iJwcjbh6';
      const city = selectedCity;
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=10&city=${city}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
// Hvis data finnes, oppdaterers events ellers settes det en tom liste
        if (data._embedded && data._embedded.events) {
          setEvents(data._embedded.events);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error('Feil ved henting av arrangementer:', error);
      }
    };

    fetchCityEvents(); // Kaller funksjonen når komponenten rendres eller selectedCity endres
  }, [selectedCity]);

  return (
    <div className="city-events-container">
      <h2>I {selectedCity} kan du oppleve:</h2>

      {/* Knapper for å velge by */}
      <div className="city-buttons">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)} // Oppdaterer valgt by
            className={`city-button ${city === selectedCity ? 'selected' : ''}`} //Legger til klasse for valgt by
          >
            {city}
          </button>
        ))}
      </div>

      {/* Grid med EventCards for valgt by */}
      <div className="city-events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} clickable={false} />
        ))}
      </div>
    </div>
  );
};

export default CityEvents;