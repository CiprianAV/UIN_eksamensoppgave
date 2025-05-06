// src/pages/EventPage.js
import React from 'react';
import { useParams } from 'react-router-dom';


export default function EventPage() {
  const { id } = useParams();
  return <h1>Event {id}</h1>;
}
