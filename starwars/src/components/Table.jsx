import React, { useContext } from 'react';
import starContext from '../context/StarContext';


function Table() {
  const { filteredPlanets } = useContext(starContext); // recebe os dados do provider

  return (
    <div className='table'>
      <table
        data-testid="table"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody
          data-testid="tbody"
        >
          {filteredPlanets.map((planet) => ( // renderiza oque foi filtrado
            <tr key={ planet.name } data-testid="row">
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => film)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;