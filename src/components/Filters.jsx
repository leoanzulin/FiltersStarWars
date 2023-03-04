import React, { useContext, useState } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Filters() {
  const { selectedFilters, setSelectedFilters } = useContext(PlanetContext);
  const [stateFilter, setStateFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  return (
    <form>
      <label htmlFor="column-filte">Column: </label>
      <select
        value={ stateFilter.column }
        data-testid="column-filter"
        name="column-filte"
        id="column-filte"
        onChange={
          (e) => setStateFilter({ ...stateFilter, column: e.target.value })
        }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="comparison-filter">Comparison: </label>
      <select
        value={ stateFilter.comparison }
        data-testid="comparison-filter"
        name="comparison-filter"
        id="comparison-filter"
        onChange={
          (e) => setStateFilter({ ...stateFilter, comparison: e.target.value })
        }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">Value: </label>
      <input
        type="number"
        data-testid="value-filter"
        name="value-filter"
        id="value-filter"
        value={ stateFilter.value }
        onChange={
          (e) => setStateFilter({ ...stateFilter, value: e.target.value })
        }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setSelectedFilters([...selectedFilters, stateFilter]) }
      >
        Filtrar

      </button>
    </form>
  );
}

export default Filters;
