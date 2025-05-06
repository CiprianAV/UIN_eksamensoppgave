// src/pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';


export default function CategoryPage() {
  const { slug } = useParams();
  return <h1>Category: {slug}</h1>;
}
