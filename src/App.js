import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import Filters from './components/Filters';
import PlanetsProvider from './Context/PlanetProvider';
import starWarsLogo from './logo-star wars.png';
import grafismo from './grafismo-topo.png';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <div className="fullPage">
        <div className="logo">
          <img src={ starWarsLogo } alt="StarWars" className="starWarsLogo" />
          <img src={ grafismo } alt="grafismo" />
        </div>
        <div className="name-filter">
          <NameFilter />
        </div>
        <Filters />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
