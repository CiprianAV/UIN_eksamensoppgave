import React from 'react';
import FeaturedEvents from '../components/FeaturedEvents';
import '../styles/Home.css';

export default function Home() {
  return (
    <main>
      {/* overskrift and byer section */}
      {/* Dette skal render de 4 featured eventcards */}
      <FeaturedEvents />
      <section className="main-heading">
        <h2 className="main-heading__title">Hva skjer i verdens storbyer</h2>
        <div className="main-heading__cities">
          <span className="city">Oslo</span>
          <span className="city">Stockholm</span>
          <span className="city">Berlin</span>
          <span className="city">London</span>
          <span className="city">Paris</span>
        </div>
      </section>
    </main>
  );
}
