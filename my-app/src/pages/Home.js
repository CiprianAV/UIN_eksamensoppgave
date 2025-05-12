import React from 'react';
import FeaturedEvents from '../components/FeaturedEvents';


export default function Home() {
  return (
    <main>
      <h1>Home</h1>
        {/*Dette skal render de 4 featured eventcards */}
      <FeaturedEvents />
    </main>
  );
}
