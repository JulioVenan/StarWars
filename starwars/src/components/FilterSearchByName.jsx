import React, { useContext } from 'react';
import starContext from '../context/StarContext';

function FilterSearchByName() {
  const { filterByName, setFilterByName } = useContext(starContext);

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="search"
        onChange={ handleChange }
        value={ filterByName }
      />
    </div>
  );
}
export default FilterSearchByName;