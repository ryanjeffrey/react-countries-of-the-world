import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import CountryCard from '../../CountryCard/CountryCard';

import './Main.css';

export default function Main() {
  const countries = useCountries();
  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
