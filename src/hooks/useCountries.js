import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setTimeout(() => setLoading(false), 2000);
      } catch (e) {
        setError(e.message.toUpperCase());
      }
    }
    fetchData();
  }, []);

  const filterCountries = () => {
    const filteredCountries = countries.filter(
      (country) =>
        (continent === 'all' ? true : country.continent === continent) &&
        country.name.toLowerCase().includes(query)
    );
    return filteredCountries;
  };

  return { filterCountries, continent, setContinent, error, query, setQuery, loading };
}
