import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function NameFilter() {
  const { setFilterName } = useContext(PlanetContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => { setFilterName(target.value); } }
    />
  );
}

export default NameFilter;
