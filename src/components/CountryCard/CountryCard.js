import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name }) {
  return (
    <div className='country-card'>
      <div className='country-name'>{name}</div>
    </div>
  );
}