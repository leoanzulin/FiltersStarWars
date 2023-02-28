import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import PlanetContext from './PlanetContext';
import requestFromAPI from '../services/apiRequest';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const planetsFiltered = await requestFromAPI();
      const filterResult = planetsFiltered.filter(({ name }) => name.toUpperCase()
        .includes(filterName.toUpperCase()));
      setPlanets(filterResult);
    };
    fetch();
  }, [filterName]);

  const value = useMemo(() => ({
    planets,
    setPlanets,
    filterName,
    setFilterName,
  }), [planets, filterName]);

  return (
    <PlanetContext.Provider value={ value }>
      <span>{ children }</span>
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
