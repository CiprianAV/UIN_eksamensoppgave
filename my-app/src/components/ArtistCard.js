import React from 'react';
import '../styles/ArtistCard.css';

export default function ArtistCard({ artist }) {
  const { name, image } = artist;

  return (
    <div className="artist-card">
      {image && <img src={image} alt={name} className="artist-card__image" />}
      <div className="artist-card__info">
        <h3>{name}</h3>
      </div>
    </div>
  );
}
