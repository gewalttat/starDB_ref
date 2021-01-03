import React, { Component } from 'react';

import './vehicle-details.css';

export default class VehicleDetails extends Component {

  render() {
    return (
      <div className="vehicle-details card">
        <img className="vehicle-image"
          src="https://starwars-visualguide.com/assets/img/vehicles/26.jpg"
          alt='vehicle'/>

        <div className="card-body">
          <h4>Мотоцыкол с планеты Жопа</h4>
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
