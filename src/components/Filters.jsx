import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';

function Filters() {
  const { selectedFilters, setSelectedFilters } = useContext(PlanetContext);
  const { collunsOptions, setCollunsOptions } = useContext(PlanetContext);
  const [stateFilter, setStateFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    setStateFilter({
      column: collunsOptions[0],
      comparison: 'maior que',
      value: 0,
    });
  }, [collunsOptions]);

  const handleClick = () => {
    setSelectedFilters([...selectedFilters, stateFilter]);
    setCollunsOptions([...collunsOptions.filter((column) => column
       !== stateFilter.column)]);
  };
  return (
    <div>
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
          {collunsOptions.map((collun) => (
            <option key={ collun } value={ collun }>
              {collun}
            </option>
          ))}

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
          onClick={ () => handleClick() }
        >
          Filtrar

        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
        >
          RemoveFilters

        </button>
      </form>
      {selectedFilters.map((filter) => (
        <div key={ filter }>
          <p>
            {
              `${filter.column} ${filter.comparison} ${filter.value}`
            }
          </p>
          <button
            data-testid="filter"
            type="button"
          >
            excluir

          </button>
        </div>
      ))}
    </div>
  );
}

export default Filters;
