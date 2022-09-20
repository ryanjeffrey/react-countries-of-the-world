import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';

import './Main.css';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries();
  return (
    <>
      <select
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}
      >
        <option value="all">All Countries</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      <main>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </main>
    </>
  );
}
