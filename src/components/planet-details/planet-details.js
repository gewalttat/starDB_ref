import React, { Component } from 'react';

import './planet-details.css';

export default class PlanetDetails extends Component {

  render() {
    return (
      <div className="planet-details card">
        <img className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/8.jpg"
          alt='planet'/>

        <div className="card-body">
          <h4>Плонета с плонеты Жопа</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>gyro</span>
            </li>
            <li className="list-group-item">
              <span className="term">Name</span>
              <span>oryg</span>
            </li>
            <li className="list-group-item">
              <span className="term">Max speed</span>
              <span>88 km/h</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}