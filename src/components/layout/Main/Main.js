import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';
import Loader from '../../Loader/Loader';

import './Main.css';

export default function Main() {
  const { filterCountries, continent, setContinent, error, query, setQuery, loading } = useCountries();
  return (
    <>
      <input
        type="text"
        placeholder="Search Countries..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
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
      <p className="error">{error}</p>
      <main>
        {loading && <Loader />}
        {!loading && filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </main>
    </>
  );
}
