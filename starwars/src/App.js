import React from 'react';
import Table from './components/Table';
import StarProvider from './context/StarProvider';
import './styles/App.css';
import FilterSearchByName from './components/FilterSearchByName';
import FilterByNumericValues from './components/FilterByNumericValues';

function App() {
  return (
    <div className='app'>
    <StarProvider>
      <FilterSearchByName />
      <FilterByNumericValues />
      <Table />
    </StarProvider>
    </div>
  );
}

export default App