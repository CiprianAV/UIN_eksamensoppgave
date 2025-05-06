import React, { useState } from 'react';


export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) {
    return (
      <form onSubmit={e => { e.preventDefault(); setLoggedIn(true); }}>
        <h1>Logg inn </h1>
        <input type="email" required placeholder="E-post" />
        <button type="submit">Logg inn</button>
      </form>
    );
  }
  return <h1>Min side</h1>;
}
