import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';
import './NameFilter.css';

function NameFilter() {
  const { setFilterName } = useContext(PlanetContext);
  return (
    <input
      className="nameInput"
      type="text"
      placeholder="Search by name"
      data-testid="name-filter"
      onChange={ ({ target }) => { setFilterName(target.value); } }
    />
  );
}

export default NameFilter;
