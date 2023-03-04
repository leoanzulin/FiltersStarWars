import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import PlanetContext from './PlanetContext';
import requestFromAPI from '../services/apiRequest';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planetsFilteredName = await requestFromAPI();
      const filterResult = planetsFilteredName.filter(({ name }) => name.toUpperCase()
        .includes(filterName.toUpperCase()));
      const planetsFiltered = filterResult.filter((planet) => {
        const filteredResults = selectedFilters
          .map(({ column, comparison, value }) => {
            switch (comparison) {
            case 'maior que':
              return Number(planet[column]) > Number(value);
            case 'menor que':
              return Number(planet[column]) < Number(value);
            case 'igual a':
              return Number(planet[column]) === Number(value);
            default:
              return true;
            }
          });
        return filteredResults.every((el) => el);
      });
      setPlanets(planetsFiltered);
    };
    fetch();
  }, [filterName, selectedFilters]);

  const value = useMemo(() => ({
    planets,
    setPlanets,
    filterName,
    setFilterName,
    selectedFilters,
    setSelectedFilters,
  }), [planets, filterName, selectedFilters]);

  return (
    <PlanetContext.Provider value={ value }>
      <span>{ children }</span>
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;
