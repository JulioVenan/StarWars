import React from 'react';
import Table from './components/Table';
import StarProvider from './context/StarProvider';
import './App.css';
import FilterSearchByName from './components/FilterSearchByName';
import FilterByNumericValues from './components/FilterByNumericValues';

function App() {
  return (
    <StarProvider>
      <FilterSearchByName />
      <FilterByNumericValues />
      <Table />
    </StarProvider>
  );
}

export default App