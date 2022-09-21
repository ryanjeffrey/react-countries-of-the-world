import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="country-name">{name}</div>
      <img src={`https://flagcdn.com/144x108/${iso2.toLowerCase()}.png`} height="64" alt={name} />
    </div>
  );
}