import React, { useContext, useState } from 'react';
import starContext from '../context/StarContext';

function FilterByNumericValues() {
  const { setFilters, filters } = useContext(starContext); // recebendo as informações do provider
  const [localFilters, setLocalFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const filteredOptions = options
    .filter((option) => {
      if (filters.length === 0) return true;
      return !filters.find((filter) => filter.column === option);
    });

  return (
    <div>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => setFilters([]) }
      >
        Remover todas filtragens
      </button>
      <form>
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            name="column"
            value={ localFilters.column }
            onChange={ (e) => setLocalFilters({
              ...localFilters, column: e.target.value,
            }) }
          >
            {filteredOptions
              .map((option) => (
                <option
                  key={ option }
                  value={ option }
                >
                  {option}
                </option>))}
          </select>
        </label>
        <label htmlFor="comparsion">
          <select
            data-testid="comparison-filter"
            name="comparsion"
            value={ localFilters.comparison }
            onChange={ (e) => setLocalFilters({
              ...localFilters, comparison: e.target.value,
            }) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="valueFilter">
          <input
            name="valueFilter"
            type="number"
            data-testid="value-filter"
            value={ localFilters.value }
            onChange={ (e) => setLocalFilters({
              ...localFilters, value: e.target.value,
            }) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            /* istanbul ignore else */
            if (Object.values(localFilters).every((filter) => filter.trim() !== '')) {
              setFilters([...filters, localFilters]);
              const teste = options.filter((option) => option !== localFilters.column);
              setLocalFilters({ ...localFilters, value: '', column: teste[0] });
            }
          } }
        >
          Filtrar
        </button>
      </form>
      {filters.map((item, i) => (
        <>
          <div
            data-testid="filter"
          >
            {item.column}
            <div>{item.comparison}</div>
            <div>{item.value}</div>
            <button
              type="button"
              data-testid="bnt-rmv-item"
              onClick={ () => {
                const removed = filters.filter((filter, index) => index !== i);
                setFilters(removed);
              } }
            >
              Excluir
            </button>
          </div>
          {/* <br /> */}
        </>
      ))}
    </div>

  );
}
export default FilterByNumericValues;