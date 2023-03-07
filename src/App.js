import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import Filters from './components/Filters';
import PlanetsProvider from './Context/PlanetProvider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <NameFilter />
        <Filters />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App; // iniciando
