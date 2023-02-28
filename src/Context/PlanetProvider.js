import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import PlanetContext from './PlanetContext';
import requestFromAPI from '../services/apiRequest';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planetsFiltered = await requestFromAPI();
      setPlanets(planetsFiltered);
    };
    fetch();
  }, []);

  const value = useMemo(() => ({
    planets,
    setPlanets,
  }), [planets]);

  return (
    <PlanetContext.Provider value={ value }>
      <span>{ children }</span>
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
