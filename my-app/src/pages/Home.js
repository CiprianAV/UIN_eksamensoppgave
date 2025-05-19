import React from 'react';
import FeaturedEvents from '../components/FeaturedEvents';
import '../styles/Home.css';
import CityEvents from '../components/CityEvents';

export default function Home() {
  return (
    <main>
      {/* overskrift og byer section */}
      {/* Dette skal render de 4 featured eventcards */}
      <FeaturedEvents />
      
      <section className="main-heading">
        <h2 className="main-heading__title">Hva skjer i verdens storbyer</h2>
        <CityEvents /> 
        </section> 
    </main>
  );
}
