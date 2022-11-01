import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starContext from './StarContext';
import fetchPlanets from '../services/API';

function StarProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const planetData = await fetchPlanets();
      const planetWithoutResidents = planetData.results.map((planet) => {
        const { residents, ...rest } = planet; // deleta a chave residents
        return rest;
      });
      setPlanets(planetWithoutResidents); // adiciona os dados no estado
    };
    getPlanets();
  }, []);

  function filterByOperator(value, planetValue, comparison) {
    // console.log('filterByOperator', { value, planetValue, comparison });
    if (comparison === 'maior que') {
      return Number(planetValue) > Number(value);
    }
    if (comparison === 'menor que') {
      return Number(planetValue) < Number(value);
    }
    /* istanbul ignore else */
    if (comparison === 'igual a') {
      return Number(planetValue) === Number(value);
    }
  }

  const handleFilter = (param) => {
    const filteredPlanetsByName = param
      .filter((planet) => planet.name.toLowerCase() // filtro por nome
        .includes(filterByName.toLowerCase()));

    const filteredPlanetsByRest = filteredPlanetsByName
      .filter((planet) => filters.every((filter) => filterByOperator(
        filter.value,
        planet[filter.column],
        filter.comparison,
      )));

    return filteredPlanetsByRest;
  };

  const filteredPlanets = handleFilter(planets);

  const contextValue = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filteredPlanets,
    filterByName,
    setFilterByName,
  };

  return (
    <starContext.Provider value={ contextValue }>
      {children}
    </starContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarProvider;