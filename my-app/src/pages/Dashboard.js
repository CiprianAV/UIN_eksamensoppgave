import React, { useState } from 'react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) { // om ikke innlogget, = 
    // vis innloggingsskjema. 
    // Når innlogging er vellykket, sett loggedIn til true
    // og vis dashboardet.
    // Hvis innlogging feiler, vis feilmelding.
    // Hvis innlogging er vellykket, sett loggedIn til true
    // og vis dashboardet.
    // Css for innloggingsskjemaet er i Dashboard.css 
    return ( 
      <main className="dashboard">
        <form
          className="login-form"
          onSubmit={e => {
            e.preventDefault(); // Forhindre at siden oppdateres 
            setLoggedIn(true); // Sett loggedIn til true 
            // (her kan vi også legge til logikk for å sjekke brukernavn og passord)
          }}
        >
          <h1 className="login-form__title">Logg inn</h1>
          <input
            type="text"
            required
            placeholder="Brukernavn"
            className="login-form__input"
          />
          <button type="submit" className="login-form__button">
            Logg inn
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <h1>Min side</h1>
    </main>
  );
}
