import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner.js'
import ErrorIndicator from '../error-indicator/error-indicator'
import './random-planet.css'

export default class RandomPlanet extends Component {
  //завожу сервис
  swapiService = new SwapiService();

  //стейт подходящий к сервису с которого я забираю данные
  state = {
    //планета объект
    planet: {},
    //лоад нужен для спиннера
    loading: true,
    error: false
  }

  //конструктор для инициализации функции
  componentDidMount() {
    const {updateInterval} = this.props;
    //инициализация новой планеты
    this.updatePlanet();
    //интервал вызова для функции выше
    this.interval = setInterval(this.updatePlanet, updateInterval);
    //clearInterval(this.interval)
  }


  //после рефакторинга свапи получает целиком объект
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      //выводит загрузку (спиннер в фолс)
      loading: false
    })
  }

  updatePlanet = () => {
    //задает рандом ид
    const id = Math.floor(Math.random() * 11);
    this.swapiService
      //вызывает планету из сервиса
      .getPlanet(id)
      //на респонсе меняет стейт
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  render() {
    //запуливаю стейт
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    //поведение спиннера при загрузке
    const spinner = loading ? <Spinner /> : null;
    //контент если загрузка ок
    const content = hasData ? <PlanetView planet={planet} /> : null
    const errorMsg = error ? <ErrorIndicator /> : null;


    return (
      <div className="random-planet">
        {errorMsg}
        {spinner}
        {content}
      </div>
    )
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 7000
}

//сам контент в отдельной консте
//получает данные с onPlanetLoaded
const PlanetView = ({ planet }) => {
  //дергаю нужные куски из стейта переданной планеты
  const { name, id, rotationPeriod, diameter, population } = planet
  //дальше оно само
  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}