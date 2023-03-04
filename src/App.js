import React from 'react';
import Table from './components/Table';
import './App.css';
import NameFilter from './components/NameFilter';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <NameFilter />
      <Filters />
      <Table />
    </div>
  );
}

export default App; // iniciando
